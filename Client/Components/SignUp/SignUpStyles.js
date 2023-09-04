import styled from "@emotion/styled";
import { DeviceDimensions } from "../../utils";

const isError = ({ error }) => {
  return error ? "flex" : "none";
};

export const StyledRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2rem;
  width: 100%;
  margin: auto;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  text-align: center;
  @media all and (max-width: ${DeviceDimensions.MaxMobileWidth}) {
    padding: 0;
  }
`;

export const ErrorSection = styled.div`
  display: ${isError};
`;
