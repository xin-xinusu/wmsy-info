export const DeviceDimensions = {
  MinLargeScreen: "1720px",
  MaxDesktopWidth: "1719px",
  MinDesktopWidth: "1280px",
  MaxLaptopWidth: "1279px",
  MinLaptopWidth: "1024px",
  MaxTabletWidth: "1023px",
  MinTabletWidth: "640px",
  MaxMobileWidth: "639px",
};

export const getWindowSizeQuery = (
  index,
  array
) => {
  return index === 0
    ? `(min-width: ${array[index + 1][1]})`
    : index === array.length - 1
    ? `(max-width: ${array[index][1]})`
    : `(max-width: ${array[index][1]}) and (min-width : ${
        array[index + 1][1]
      })`;
};

export const isWindowSizeSmaller = (windowSize, toCompare) => {
  const leftNumber = parseInt(windowSize.replace("px", ""));
  const rightNumber = parseInt(toCompare.replace("px", ""));

  return leftNumber <= rightNumber;
};
