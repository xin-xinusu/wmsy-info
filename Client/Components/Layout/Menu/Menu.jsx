import { useEffect } from "react";
import CloseButton from "../../../../assets/svg/CloseButton.svg";
import {
  COLORS,
  Pages
} from "../../../utils";
import { TFont, TVariant, TWeight, Typography } from "../../Typography";
import { MenuNavbar } from "./MenuNavbar";
import {
  CenterContainer,
  LogoMenuContainer,
  MenuContainer
} from "./MenuStyles";

export const Menu = ({ setIsMenuOpen }) => {

  const handleCloseMenu = (event) => {
    event.target.checked = false;
    setIsMenuOpen(false);
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
        <MenuNavbar />
      </CenterContainer>
    </MenuContainer>
  );
};
