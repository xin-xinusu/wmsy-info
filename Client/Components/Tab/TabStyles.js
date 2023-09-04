import styled from "@emotion/styled";
import { COLORS } from "../../utils/constants";

const getSelectedStyle = ({ selected }) => {
  if (selected) {
    return `3px solid ${COLORS.DARK_PURPLE}`;
  } else {
    return "0px";
  }
};

export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const TabOption = styled.div`
  padding-bottom: 10px;
  border-bottom: ${getSelectedStyle};
`;
