import styled from "@emotion/styled";
import Table from "../../../assets/svg/table.svg";
import Tile from "../../../assets/svg/tile.svg";
import { COLORS } from "../../utils/constants";
import { DeviceDimensions } from "../../utils/window";

export const TileLogo = styled(Tile)`
  cursor: pointer;
`;

export const TableLogo = styled(Table)`
  cursor: pointer;
`;

export const FiltersBarWrapper = styled.div`
  display: none;
  width: 100%;
  justify-content: flex-end;
  gap: 22px;
  padding: 1rem 4rem;
  background-color: ${COLORS.LIGHT_GRAY};
  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    display: flex;
  }
`;
