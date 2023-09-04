export const getSoldPercentage = (property) => {
  return ((property.tokens - property.sharesLeft) / property.tokens) * 100;
};
