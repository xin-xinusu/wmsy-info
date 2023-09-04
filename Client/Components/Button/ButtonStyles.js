import styled from "@emotion/styled";
import { COLORS } from "../../utils/constants";
import { extractField } from "../../utils/generics";

const getColor = ({ backgroundColor }) =>
  backgroundColor === COLORS.WHITE ? COLORS.BLACK : COLORS.WHITE;

const getBorderColor = ({ backgroundColor }) =>
  backgroundColor === COLORS.WHITE ? COLORS.MID_PURPLE : "none";

const getCursor = ({ disabled }) =>
  disabled ? "not-allowed" : "pointer";

export const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  box-sizing: border-box;
  justify-content: center;
  text-align: center;
  border: 1px solid ${getBorderColor};
  background: ${extractField("backgroundColor")};
  color: ${getColor};
  padding: ${extractField("padding")};
  width: ${extractField("width")};
  border-radius: 2px;
  white-space: nowrap;
  :disabled {
    background-color: ${COLORS.LILAC_GREY};
    cursor: not-allowed;
    color: ${COLORS.DISABLED};
  }
  div {
    cursor: ${getCursor};
  }
`;
