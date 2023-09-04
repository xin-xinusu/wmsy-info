import styled from "@emotion/styled";
import { DeviceDimensions } from "../../utils/window";

export const HeaderBg = styled.div`
  width: 100%;
  height: 170px;
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
    height: 220px;
  }
  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    height: 381px;
  }
  background-image: url("/header.png");
  opacity: 0.61;
  background-size: cover;
  background-position: center;
  z-index: -1;
  pointer-events: none;
`;

