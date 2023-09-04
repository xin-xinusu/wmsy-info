export const extractField = (key) => (props) => props[key];

export const groupBy = (list, getKey) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {});
