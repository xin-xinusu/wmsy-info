import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import WindowContext from "../../../contexts/window.context";
import { COLORS } from "../../../utils/constants";
import { Pages } from "../../../utils/pages";
import { isBold } from "../../../utils/strings";
import { DeviceDimensions, isWindowSizeSmaller } from "../../../utils/window";
import { TFont, TVariant, Typography } from "../../Typography";
import { NavMenuContainer } from "./HeaderStyles";
import { HeaderVariant } from '../layout.standard.js'

import { GlobalContext } from '../../../contexts/global.provider'
import { togglePopupState } from '../../../contexts/actions/app.action'

export const Navbar = ({ variant }) => {

  const { 
    appDispatch, 
  } = useContext(GlobalContext)

  const { windowSize } = useContext(WindowContext);
  const router = useRouter();

  const textColor =
    variant === HeaderVariant.LIGHT ? COLORS.WHITE : COLORS.DARK_PURPLE;

  const textSize = isWindowSizeSmaller(
    windowSize,
    DeviceDimensions.MaxLaptopWidth
  )
    ? TVariant.M
    : TVariant.XM;

  return (
    <NavMenuContainer>
      <Typography
        variant={textSize}
        color={textColor}
        weight={isBold(router.pathname === Pages.LEARN)}
      >
        <Link href={Pages.LEARN}>Learn</Link>
      </Typography>
      <Typography
        variant={textSize}
        color={textColor}
        weight={isBold(router.pathname === Pages.ABOUT_US)}
      >
        <Link href={Pages.ABOUT_US}>About</Link>
      </Typography>
      
    </NavMenuContainer>
  );
};
