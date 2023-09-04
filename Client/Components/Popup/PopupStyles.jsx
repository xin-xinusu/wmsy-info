import styled from "@emotion/styled";
import { COLORS } from "../../utils";

export const ModalWrapper = styled.div`
  background-color: ${COLORS.DARK_PURPLE_51};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ModalStyle = styled.div`
  background-color: ${COLORS.WHITE};
  box-shadow: 0px 0px 4px ${COLORS.BOX_SHADOW};
  width: fit-content;
  height: fit-content;
  padding: 50px 40px;
  cursor: default;
  max-width: 80%;
  max-height: 80%;
  min-width: 500px;
  overflow-y: auto;
`;

export const ModalBar = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 20px;

  svg {
    cursor: pointer;
  }
`;
