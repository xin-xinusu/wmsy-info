import styled from "@emotion/styled";
import { COLORS, DeviceDimensions } from "../../utils";

export const BreadCrumbsHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 50px;
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) {
    ${'' /* padding: 40px 100px; */}
  }
`;

export const BreadCrumb = styled.div`
  display: flex;
  flex-direction: row;
  color: ${COLORS.DARK_PURPLE};
  cursor: pointer;
`

export const ArrowSeparated = styled.div`
  padding: 0 5px;
`