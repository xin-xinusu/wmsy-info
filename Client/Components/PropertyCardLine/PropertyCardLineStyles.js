import styled from "@emotion/styled";
import { COLORS } from "../../utils/constants";
import { DeviceDimensions } from "../../utils/window";

export const CardLineContainer = styled.tr`
  box-shadow: 0px 4px 4px ${COLORS.BOX_SHADOW};
  font-family: var(--PRIMARY-FONT);
  box-sizing: border-box;
  width: 100%;
  vertical-align: middle;
  background-color: ${COLORS.WHITE};
  td {
    text-align: center;
  }
  td:first-of-type {
    padding: 1.5rem 0 1.5rem 2rem;
  }
  td:last-child {
    padding: 1.5rem 2.5rem 1.5rem 0;
  }
`;

export const TokenSection = styled.td`
  @media all and (max-width: ${DeviceDimensions.MaxMobileWidth}) {
    display: none;
  }
`;

export const CapRateSection = styled.td`
  @media all and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
    display: none;
  }
`;

export const ProjAppSection = styled.td`
  @media all and (max-width: ${DeviceDimensions.MaxLaptopWidth}) {
    display: none;
  }
`;

export const IRRSection = styled.td`
  @media all and (max-width: ${DeviceDimensions.MaxLaptopWidth}) {
    display: none;
  }
`;

export const PropertySection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const PartialImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 8.8rem;
  height: 5.9rem;
  position: relative;
  background-color: ${COLORS.DISABLED};
  cursor: pointer;
`;

export const PropertyNameSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  text-align: left;
  cursor: pointer;
`;

export const TokenSoldSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media all and (max-width: ${DeviceDimensions.MaxDesktopWidth}) {
    flex-direction: column;
  }
`;

export const DetailsSection = styled.td`
  display: none;
  @media all and (min-width: ${DeviceDimensions.MaxLaptopWidth}) {
    display: table-cell;
  }
`;
