import styled from "@emotion/styled";
import { DeviceDimensions } from "../../utils";

export const NotLoggedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-align: center;
  margin: 7rem auto 0rem auto;
  height: calc(100vh - 21.4rem);
  @media all and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
    margin: 6rem auto 0rem auto;
    height: calc(100vh - 32.6rem);
  }
`;

export const LogInContainer = styled.div`
  display: flex;
  width: 100%;
`;
