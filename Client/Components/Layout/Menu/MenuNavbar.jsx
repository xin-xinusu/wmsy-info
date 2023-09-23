import Link from "next/link";
import { useRouter } from "next/router";
import FAQ from "../../../../assets/svg/FAQ.svg";
import Home from "../../../../assets/svg/Home.svg";
import About from "../../../../assets/svg/MobileMenuInfo.svg";
import { COLORS, linkToPage, Pages } from "../../../utils";
import { TVariant, TWeight, Typography } from "../../Typography";
import {
  HorizontalLine,
  MenuNavbarContainer,
  MenuNavbarItem,
} from "./MenuStyles";

export const MenuNavbar = () => {
  const router = useRouter();
  const typographyProps = {
    variant: TVariant.M,
    weight: TWeight.BOLD,
  };

  const homeSvgSize = 21;

  return (
    <MenuNavbarContainer>
      <MenuNavbarItem onClick={()=>linkToPage(router, Pages.HOME)}>
        <Home height={homeSvgSize} width={homeSvgSize} fill={COLORS.DARK_PURPLE} />
        <Typography {...typographyProps}>
          <Link href={Pages.HOME}>Home</Link>
        </Typography>
      </MenuNavbarItem>
      <HorizontalLine />
    </MenuNavbarContainer>
  );
};

{/* <MenuNavbarItem onClick={()=>linkToPage(router, Pages.ABOUT_US)}>
        <About fill={COLORS.MID_PURPLE} />
        <Typography {...typographyProps}>About</Typography>
      </MenuNavbarItem>
      <HorizontalLine />
      <MenuNavbarItem onClick={()=>linkToPage(router, Pages.LEARN)}>
        <FAQ fill={COLORS.MID_PURPLE} />
        <Typography {...typographyProps}>
          Learn
        </Typography>
      </MenuNavbarItem>
      <HorizontalLine /> */}