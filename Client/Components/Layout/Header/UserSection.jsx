// import { useLazyQuery } from "@apollo/client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useLazyQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { WindowContext } from "../../../contexts/window.context";
import { GET_CUSTOMER } from "../../../graphql/customer.query";
import {
  AUTH_PROVIDERS,
  COLORS,
  CustomerQuery,
  DeviceDimensions,
  Pages,
  getUserData,
  isUserLoggedIn,
  isWindowSizeSmaller,
} from "../../../utils";
import { Button, ButtonSizes } from "../../Button";
import { Loading } from "../../Loading";
import { TVariant, TWeight, Typography } from "../../Typography";
import { HeaderVariant } from "../layout.standard.js";
import {
  ClickableSection,
  MobileVisibleContainer,
  PCVisibleContainer,
  UserContainer,
} from "./HeaderStyles";
import { ProfilePicture } from "./ProfilePicture";

export const UserSection = ({ variant }) => {
  // const { windowSize } = useContext(WindowContext);
  const session = useSession();
  
  const [lazyCustomerQuery, { loading, data: customerData, error }] = useLazyQuery(GET_CUSTOMER);

  useEffect(() => {
    if (isUserLoggedIn(session)) {
      lazyCustomerQuery();
    }
  }, [session.status]);

  // const textSize = isWindowSizeSmaller(
  //   windowSize,
  //   DeviceDimensions.MaxLaptopWidth
  // )
    // ? TVariant.M
    // : TVariant.XM;
  const textColor =
    variant === HeaderVariant.LIGHT ? COLORS.WHITE : COLORS.DARK_PURPLE;

  const { profilePicture, userName } = getUserData(session, customerData);

  const handleAccountState = () => {
    if (customerData) {
      signOut();
    } else {
      signIn(AUTH_PROVIDERS.GOOGLE, { callbackUrl: Pages.LOGIN });
    }
  };

  if (error) {
    signOut();
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {customerData ? (
        <UserContainer>
          <PCVisibleContainer>
            <ClickableSection onClick={handleAccountState}>
              <Typography  color={textColor}>
                Logout
              </Typography>
            </ClickableSection>
          </PCVisibleContainer>
          <ProfilePicture picture={profilePicture} user={userName} />
        </UserContainer>
      ) : (
        <UserContainer>
          <MobileVisibleContainer>
            <Button
              color={COLORS.MID_PURPLE}
              size={ButtonSizes.S}
              onClick={handleAccountState}
            >
              <Typography color={COLORS.WHITE} weight={TWeight.BOLD}>
                Login
              </Typography>
            </Button>
          </MobileVisibleContainer>

          <PCVisibleContainer>
            <ClickableSection onClick={handleAccountState}>
              <Typography color={textColor}>
                Login
              </Typography>
            </ClickableSection>
            <Button size={ButtonSizes.S} color={COLORS.MID_PURPLE}>
              <Typography
                color={COLORS.WHITE}
                variant={TVariant.M}
                weight={TWeight.BOLD}
              >
                Start Exploring
              </Typography>
            </Button>
          </PCVisibleContainer>
        </UserContainer>
      )}
    </>
  );
};
