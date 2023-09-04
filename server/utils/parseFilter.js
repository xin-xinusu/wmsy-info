export const isEmptyString = (s) => {
  return s === "";
};

const stringToRealBoolean = (text) => {
  if (text === "true") {
    return true;
  } else if (text === "false") {
    return false;
  }
  return text;
};

const filterToRealValue = (filter) => {
  return isNaN(filter)
    ? filter === "null"
      ? null
      : stringToRealBoolean(filter)
    : Number(filter);
};

export const parseFilter = (filter, TEXT_SEARCH_FIELDS) => {
  let appliedFilters = {};
  let filterQuery = [];
  if (filter.q) {
    const q = filter.q;
    delete filter.q;
    for (const field of TEXT_SEARCH_FIELDS) {
      const textSearchQuery = {};
      if (field.includes(".")) {
        let deepFilterQ = {};
        field
          .split(".")
          .reverse()
          .forEach((key) => {
            if (!Object.keys(deepFilterQ).length) {
              deepFilterQ[key] = { contains: q, mode: "insensitive" };
            } else {
              const auxFilter = {};
              auxFilter[key] = deepFilterQ;
              deepFilterQ = auxFilter;
            }
          });
        filterQuery = filterQuery.concat([deepFilterQ]);
      } else {
        textSearchQuery[field] = { contains: q, mode: "insensitive" };
        filterQuery = filterQuery.concat([textSearchQuery]);
      }
    }
  }
  for (const filt of Object.keys(filter)) {
    if (filt.includes(".")) {
      let deepFilter = {};
      filt
        .split(".")
        .reverse()
        .forEach((key) => {
          if (!Object.keys(deepFilter).length) {
            if (Array.isArray(filter[filt])) {
              const noEmptyStrings = filter[filt]
                .filter((elem) => !isEmptyString(elem))
                .map((elem) =>
                  // parse to number if possible
                  isNaN(elem) ? elem : Number(elem)
                );
              deepFilter[key] = { in: noEmptyStrings };
            } else {
              deepFilter[key] = isNaN(filter[filt])
                ? filter[filt]
                : Number(filter[filt]);
            }
          } else {
            const auxFilter = {};
            auxFilter[key] = deepFilter;
            deepFilter = auxFilter;
          }
        });

      appliedFilters = { ...appliedFilters, ...deepFilter };
    } else {
      const simpleFilter = {};
      simpleFilter[filt] = filterToRealValue(filter[filt]);
      appliedFilters = {
        ...appliedFilters,
        ...simpleFilter,
      };
    }
  }
  const filterArr = filterQuery.length
    ? filterQuery.map((query) => ({
        ...query,
        ...appliedFilters,
      }))
    : appliedFilters;
  return { OR: filterArr };
};
