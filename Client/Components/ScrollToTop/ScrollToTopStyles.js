import styled from "@emotion/styled";
import { COLORS, DeviceDimensions } from "../../utils";

export const ScrollToTopButton = styled.div`
  width: 195px;
  color: ${COLORS.DARK_PURPLE};
  padding-bottom: 5px;
  border-bottom: 2px solid ${COLORS.DARK_PURPLE};
  cursor: 'pointer',
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) {
  }
`;