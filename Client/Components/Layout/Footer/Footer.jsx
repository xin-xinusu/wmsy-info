import React from "react";
import Link from "next/link";
import { COLORS } from "../../../utils/constants";
import { Pages } from "../../../utils/pages";
import { TVariant, TWeight, Typography } from "../../Typography";
import FooterLink from "./FooterLink";
import {
  ContactContainer,
  FooterContainer,
  LinksBox,
  LinksContainer,
  WhimsyContainer,
} from "./FooterStyles.js";
import { Social } from "./Social";

export const Footer = () => {
  return (
    <FooterContainer>
      <WhimsyContainer>
        <Typography
          variant={TVariant.XL}
          color={COLORS.WHITE}
          weight={TWeight.BOLD}
        >
          <Link href={Pages.HOME}>WMSY</Link>
        </Typography>
      </WhimsyContainer>

      <ContactContainer>
        <Typography variant={TVariant.M} color={COLORS.WHITE}>
          Contact Us
        </Typography>
        <Social />
      </ContactContainer>

      <LinksContainer>
        <LinksBox>
          <Typography
            variant={TVariant.M}
            color={COLORS.WHITE}
            weight={TWeight.BOLD}
          >
            Platform
          </Typography>
          <FooterLink label="How it works" href={Pages.COMING_SOON} />
          <FooterLink label="Properties" href={Pages.MARKETPLACE} />
          <FooterLink label="About" href={Pages.ABOUT_US} />
          <FooterLink label="FAQ" href={Pages.COMING_SOON} />
        </LinksBox>

        <LinksBox>
          <Typography
            variant={TVariant.M}
            color={COLORS.WHITE}
            weight={TWeight.BOLD}
          >
            Legal
          </Typography>
          <FooterLink label="Terms & Conditions" href={Pages.COMING_SOON} />
          <FooterLink label="Privacy" href={Pages.COMING_SOON} />
          <FooterLink label="Security" href={Pages.COMING_SOON} />
        </LinksBox>
      </LinksContainer>
    </FooterContainer>
  );
};
