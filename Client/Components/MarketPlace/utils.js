import { DeviceDimensions } from "../../utils/window";

export const ColumnsPerSize = {
  [DeviceDimensions.MaxMobileWidth]: ["Property"],
  [DeviceDimensions.MinTabletWidth]: ["Property", "Token Price", "Tokens Sold"],
  [DeviceDimensions.MaxTabletWidth]: ["Property", "Token Price", "Cap Rate"],
  [DeviceDimensions.MinLaptopWidth]: [
    "Property",
    "Token Price",
    "Cap Rate",
    "Tokens Sold",
  ],
  [DeviceDimensions.MaxLaptopWidth]: [
    "Property",
    "Token Price",
    "Cap Rate",
    "Tokens Sold",
  ],
  [DeviceDimensions.MinDesktopWidth]: [
    "Property",
    "Token Price",
    "Cap Rate",
    "Proj. Appreciation",
    "Proj. IRR",
    "Tokens Sold",
    "",
  ],
  [DeviceDimensions.MaxDesktopWidth]: [
    "Property",
    "Token Price",
    "Cap Rate",
    "Proj. Appreciation",
    "Proj. IRR",
    "Tokens Sold",
    "",
  ],
  [DeviceDimensions.MinLargeScreen]: [
    "Property",
    "Token Price",
    "Cap Rate",
    "Proj. Appreciation",
    "Proj. IRR",
    "Tokens Sold",
    "",
  ],
};

export const WidthsPerSize = {
  [DeviceDimensions.MaxMobileWidth]: [100],
  [DeviceDimensions.MinTabletWidth]: [40],
  [DeviceDimensions.MaxTabletWidth]: [40],
  [DeviceDimensions.MinLaptopWidth]: [40],
  [DeviceDimensions.MaxLaptopWidth]: [40],
  [DeviceDimensions.MinDesktopWidth]: [30],
  [DeviceDimensions.MaxDesktopWidth]: [28],
  [DeviceDimensions.MinLargeScreen]: [28],
};
