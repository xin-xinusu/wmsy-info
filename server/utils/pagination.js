
export const getPagination = ({ page }) => {
  const { number, size } = page; // Assuming page contains number and size properties
  if (number === 0 && size === 0) {
    return { skip: undefined, take: undefined };
  } else {
    return { skip: (number - 1) * size, take: size };
  }
};
