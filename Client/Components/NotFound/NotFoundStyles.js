import styled from "@emotion/styled";
import { COLORS, DeviceDimensions } from "../../utils";

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${COLORS.DARK_PURPLE};
  padding: 2rem;
  height: calc(100vh - 14.27rem);
  div {
    @media all and (max-width: ${DeviceDimensions.MinTabletWidth}) {
      font-size: 2rem;
    }
  }
`;
