import styled from "@emotion/styled";
import { LoadingVariant } from "./loading.standard";

const getHeight = ({ variant }) => {
  switch (variant) {
    case LoadingVariant.FULL:
      return "100vh";
    case LoadingVariant.FIT:
    default:
      return "auto";
  }
};

export const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${getHeight};
  justify-content: center;
  align-items: center;
`;
