import { useLazyQuery } from "@apollo/client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Account from "../../../../assets/svg/Account.svg";
import CloseButton from "../../../../assets/svg/CloseButton.svg";
import Logout from "../../../../assets/svg/Logout.svg";
import { GET_CUSTOMER } from "../../../graphql/customer.query";
import {
  AUTH_PROVIDERS,
  COLORS,
  getUserData,
  isUserLoggedIn,
  Pages
} from "../../../utils";
import { TFont, TVariant, TWeight, Typography } from "../../Typography";
import { ProfilePicture } from "../Header/ProfilePicture";
import { MenuNavbar } from "./MenuNavbar";
import {
  AccountContainer,
  CenterContainer,
  LogoMenuContainer,
  LogoutContainer,
  MenuContainer,
} from "./MenuStyles";

export const Menu = ({ setIsMenuOpen }) => {
  const session = useSession();
  const router = useRouter();
  const goToProfile = () => router.push(Pages.ACCOUNT);

  const [lazyCustomerQuery, { loading, data: customerData, error }] =
    useLazyQuery(GET_CUSTOMER);
  const { profilePicture, userName, userLastName } = getUserData(
    session,
    customerData
  );

  useEffect(() => {
    if (isUserLoggedIn(session)) {
      lazyCustomerQuery();
    }
  }, [session.status]);

  const handleCloseMenu = (event) => {
    event.target.checked = false;
    setIsMenuOpen(false);
  };

  const handleAccountStatus = async () => {
    if (isUserLoggedIn(session)) {
      await signOut();
    } else {
      signIn(AUTH_PROVIDERS.GOOGLE, { callbackUrl: Pages.LOGIN });
    }
  };

  const handleRedirectToAccount = () => {
    router.push(Pages.ACCOUNT);
  };

  return (
    <MenuContainer>
      <LogoMenuContainer>
        <Typography
          color={COLORS.MID_PURPLE}
          font={TFont.LOGO}
          variant={TVariant.XL}
          weight={TWeight.BOLD}
        >
          WMSY
        </Typography>

        <CloseButton onClick={handleCloseMenu} />
      </LogoMenuContainer>

      <CenterContainer>
        {isUserLoggedIn(session) ? (
          <AccountContainer onClick={handleRedirectToAccount}>
            <ProfilePicture
              picture={profilePicture}
              user={userName}
              loading={loading}
            />

            
          </AccountContainer>
        ) : (
          <AccountContainer onClick={handleAccountStatus}>
            <Account />
            <Typography variant={TVariant.M} weight={TWeight.BOLD}>
              Login
            </Typography>
          </AccountContainer>
        )}

        <MenuNavbar />
      </CenterContainer>

      {isUserLoggedIn(session) && (
        <LogoutContainer onClick={handleAccountStatus}>
          <Logout fill={COLORS.DARK_PURPLE} />
          <Typography variant={TVariant.M} weight={TWeight.BOLD}>
            Logout
          </Typography>
        </LogoutContainer>
      )}
    </MenuContainer>
  );
};