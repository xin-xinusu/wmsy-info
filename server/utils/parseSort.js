export const SORT_DESC_PREFIX = "-";
export const DESC = "desc";
export const ASC = "asc";
export const FIELD_DIVISOR = ".";

export const parseSort = (sort) => {
  const rawSortField =
    sort && sort[0].startsWith(SORT_DESC_PREFIX) ? sort.slice(1) : sort;
  const order =
    sort && sort[0].startsWith(SORT_DESC_PREFIX) ? DESC : ASC;

  const orderFields = rawSortField.split(FIELD_DIVISOR);
  let sortData = {};
  if (orderFields.length) {
    for (const key of orderFields.reverse()) {
      if (!Object.keys(sortData).length) {
        sortData[key] = order;
      } else {
        const auxSortData = {};
        auxSortData[key] = sortData;
        sortData = auxSortData;
      }
    }
  }
  return [sortData];
};
