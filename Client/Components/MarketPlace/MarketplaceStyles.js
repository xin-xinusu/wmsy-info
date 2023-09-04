import styled from "@emotion/styled";
import { COLORS } from "../../utils/constants";
import { DeviceDimensions } from "../../utils/window";

export const PropertyListWrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.TRANSPARENT_GRAY};
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) {
    padding: 0rem 4rem;
  }
`;

export const MarketplaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

