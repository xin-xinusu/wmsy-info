import Link from "next/link";
import { useRouter } from "next/router";
import FAQ from "../../../../assets/svg/FAQ.svg";
import Home from "../../../../assets/svg/Home.svg";
import Portfolio from "../../../../assets/svg/Investment.svg";
import About from "../../../../assets/svg/MobileMenuInfo.svg";
import Properties from "../../../../assets/svg/Property.svg";
import { COLORS, Pages } from "../../../utils";
import { TVariant, TWeight, Typography } from "../../Typography";
import {
  HorizontalLine,
  MenuNavbarContainer,
  MenuNavbarItem,
} from "./MenuStyles";

const MenuNavbar = () => {
  const router = useRouter();
  const typographyProps = {
    variant: TVariant.M,
    weight: TWeight.BOLD,
  };

  const handleRouter = (page) => () => {
    router.push(page);
  };

  const homeSvgSize = 21;

  return (
    <MenuNavbarContainer>
      <MenuNavbarItem onClick={handleRouter(Pages.HOME)}>
        <Home height={homeSvgSize} width={homeSvgSize} />
        <Typography {...typographyProps}>
          <Link href={Pages.HOME}>Home</Link>
        </Typography>
      </MenuNavbarItem>
      <HorizontalLine />
      <MenuNavbarItem onClick={handleRouter(Pages.MARKETPLACE)}>
        <Properties />
        <Typography {...typographyProps}>
          <Link href={Pages.MARKETPLACE}>Marketplace</Link>
        </Typography>
      </MenuNavbarItem>
      <HorizontalLine />
      <MenuNavbarItem onClick={handleRouter(Pages.PORTFOLIO)}>
        <Portfolio />
        <Typography {...typographyProps}>
          <Link href={Pages.PORTFOLIO}>Portfolio</Link>
        </Typography>
      </MenuNavbarItem>
      <HorizontalLine />
      <MenuNavbarItem>
        <FAQ fill={COLORS.DISABLED} />
        <Typography {...typographyProps} color={COLORS.DISABLED}>
          FAQ
        </Typography>
      </MenuNavbarItem>
      <HorizontalLine />
      <MenuNavbarItem onClick={handleRouter(Pages.ABOUT_US)}>
        <About />
        <Typography {...typographyProps}>About</Typography>
      </MenuNavbarItem>
    </MenuNavbarContainer>
  );
};

export default MenuNavbar
