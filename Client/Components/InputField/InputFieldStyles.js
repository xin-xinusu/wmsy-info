import styled from "@emotion/styled";
import { extractField } from "../../utils";
import { COLORS } from "../../utils/constants";

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${extractField("width")};
  text-align: left;
`;

export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  cursor: ${extractField("cursor")};

  width: 100%;
  border: 1px solid ${extractField("border")};
  padding: 9.5px 20px;
  margin-top: ${extractField("margin")};

  font-family: var(--PRIMARY-FONT);
  font-size: 18px;
  color: ${COLORS.DARK_PURPLE};

  ::placeholder {
    color: ${COLORS.PRIMARY_GRAY};
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
  appearance: textfield;
`;

export const Label = styled.label`
  font-family: var(--PRIMARY-FONT);
  font-weight: 300;
  font-size: 18px;
  color: ${extractField("color")};
`;
