import Link from "next/link";
import { useState } from "react";
import HamburgerMenu from "../../../../assets/svg/BurgerMenu.svg";
import { Pages } from "../../../utils";
import { COLORS } from "../../../utils/constants";
import { TFont, TVariant, TWeight, Typography } from "../../Typography";
import { Menu } from "../Menu/Menu";
import { HeaderVariant } from "../layout.standard.js";
import { HeaderContainer, LogoContainer } from "./HeaderStyles";
import { Navbar } from "./Navbar";
import { UserSection } from "./UserSection";

export const Header = ({ variant }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };

  const textColor =
    variant === HeaderVariant.LIGHT ? COLORS.WHITE : COLORS.DARK_PURPLE;
  const menuSize = "40px";

  return (
    <>
      {/* {isOpenMenu && <Menu setIsMenuOpen={setIsOpenMenu} />} */}
      <HeaderContainer>
        <HamburgerMenu
          height={menuSize}
          width={menuSize}
          fill={textColor}
          onClick={handleOpenMenu}
        />

        <LogoContainer>
          <Typography
            variant={TVariant.XL}
            color={textColor}
            font={TFont.LOGO}
            weight={TWeight.BOLD}
          >
            <Link href={Pages.HOME}>WMSY</Link>
          </Typography>
        </LogoContainer>

        <Navbar variant={variant} />
      </HeaderContainer>
    </>
  );
};