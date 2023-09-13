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
  FooterDisclaimer
} from "./FooterStyles.js";
import { Social } from "./Social";

export const Footer = () => {
  return (
    <>
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
      <FooterDisclaimer>
        <Typography
            variant={TVariant.S}
            color={COLORS.WHITE}
            weight={TWeight.BOLD}
          >
            IMPORTANT DISCLAIMER
          </Typography>
          <br />
          <Typography
            variant={TVariant.S}
            color={COLORS.WHITE}
          >
            This site is operated by Whimsy Inc, which is not a registered broker-dealer or investment advisor. Whimsy, Inc does not provide investment advice, endorsement or recommendations with respect to any properties listed on this site. Nothing on this website should be construed as an offer to sell, solicitation of an offer to buy or a recommendation in respect of a security. You are solely responsible for determining whether any investment, investment strategy or related transaction is appropriate for you based on your personal investment objectives, financial circumstances and risk tolerance. You should consult with licensed legal professionals and investment advisors for any legal, tax, insurance or investment advice. Whimsy, Inc. does not guarantee any investment performance, outcome or return of capital for any investment opportunity posted on this site. 
            By accessing this site and any pages thereof, you agree to be bound by the Terms of Service and Privacy Policy. All investments involve risk and may result in partial or total loss.
            <br/>
            <br/>
            By accessing this site, investors understand and acknowledge 1) that investing in real estate, like investing in other fields, is risky and unpredictable; 2) that the real estate industry has its ups and downs; 3) that the real property you invest in might not result in a positive cash flow or perform as you expected; and 4) that the value of any real property you invest in may decline at any time and the future property value is unpredictable. Before making an investment decision, prospective investors are advised to review all available information and consult with their tax and legal advisors. Whimsy does not provide investment advice or recommendations regarding any offering posted on this website. Any investment-related information contained herein has been secured from sources that Whimsy believes to be reliable, but we make no representations or warranties as to the accuracy or completeness of such information and accept no liability therefore.
            <br/>
            <br/>
            Hyperlinks to third-party sites, or reproduction of third-party articles, do not constitute an approval or endorsement by Whimsy of the linked or reproduced content.
          </Typography>
        </FooterDisclaimer>
    </>
  );
};
