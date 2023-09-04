import styled from "@emotion/styled";
import { COLORS } from "../../utils/constants";

const getBgColor = ({ variant }) =>
  variant === "dark" ? COLORS.DARK_PURPLE : COLORS.MID_PURPLE;
const getPointer = ({ collapsible }) =>
  collapsible ? "pointer" : "default";
const getArrowRotation = ({ open }) =>
  open ? "180deg" : "0";

export const ContentBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
`;

export const BarContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${getBgColor};
  padding: 18px 40px;
  width: 100%;

  /* user-select */
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* ----------- */

  cursor: ${getPointer};
`;

export const ArrowContainer = styled.div`
  display: flex;

  transform: scale(1.5) rotate(${getArrowRotation});
`;
