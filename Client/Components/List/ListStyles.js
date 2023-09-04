import styled from "@emotion/styled";
import { COLORS } from "../../utils";
import { DeviceDimensions } from "../../utils/window";


// Styling for the table
export const TableStyle = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 2em;
`;

// Utility functions to compute dynamic styles based on header properties
const getWidth = ({ width }) => {
  return width !== undefined ? `${width}%` : "auto";
};

const getDarkHeader = ({ darkHeader }) => {
  return darkHeader ? COLORS.LILAC : "none";
};

const getHeight = ({ darkHeader }) => {
  return darkHeader ? "2.7rem" : "auto";
};

const getJustifyContent = ({ darkHeader }) => {
  return darkHeader ? "flex-start" : "initial";
};

const getAlignment = ({ darkHeader }) => {
  return darkHeader ? "center" : "auto";
};

// Styling for the table header cells
export const TableHeaderStyle = styled.th`
  width: ${getWidth};
  height: ${getHeight};
  background-color: ${getDarkHeader};
  :first-of-type {
    display: flex;
    justify-content: ${getJustifyContent};
    align-items: ${getAlignment};
    padding-left: 2rem;
  }
`;

// Styling for the list container
export const ListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  // Responsive styling for different screen sizes
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) and (max-width: ${DeviceDimensions.MaxLaptopWidth}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media all and (min-width: ${DeviceDimensions.MinDesktopWidth}) and (max-width: ${DeviceDimensions.MaxDesktopWidth}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media all and (min-width: ${DeviceDimensions.MinLargeScreen}) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  row-gap: 2rem;
  column-gap: 2rem;
  flex-direction: row;
  padding: 1rem 0;
`;
