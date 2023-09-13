import styled from "@emotion/styled";
import { COLORS, HOME_PAGE_IMAGE_PATH } from "../../utils/constants";
import { DeviceDimensions } from "../../utils/window";

export const SubscriptionSignupHolder = styled.div`
  
`;

export const EmailAddressInput = styled.div`
  display: flex;
  text-align: initial;
  align-items: center;
  flex-direction: column;
  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    flex-direction: row;
  }
`;

export const AlreadySubscribedHolder = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`