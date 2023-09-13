import styled from "@emotion/styled";
import { COLORS } from "../../../utils/constants";
import { DeviceDimensions } from "../../../utils/window";

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  gap: 0px 0em;
  grid-auto-flow: row;
  grid-template-areas:
    "WMSY WMSY"
    "Social Social"
    "Links Links";

  margin-top: auto;

  background-color: ${COLORS.DARK_PURPLE};

  padding: 30px 20px 15px 20px;

  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "WMSY Links"
      "Social Links";

    padding: 50px 95px 20px 95px;
  }
`;

export const WhimsyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: WMSY;

  a {
    font-family: var(--LOGO-FONT);
    color: inherit;
    text-decoration: inherit;
  }

  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    justify-content: flex-start;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  grid-area: Social;

  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    align-items: flex-start;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 70px;
  grid-area: Links;

  a {
    color: inherit;
    text-decoration: inherit;
  }

  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    justify-content: flex-end;
  }
`;

export const LinksBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;

  svg {
    cursor: pointer;
  }
`;

export const FooterDisclaimer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.DARK_PURPLE};
  padding: 30px 40px;
  text-align: center;

  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    text-align: left;
    padding: 30px 95px;
  }
`
