import styled from "@emotion/styled";
import { COLORS, HOME_PAGE_IMAGE_PATH, CURIOUS_IMAGE_PATH } from "../../utils/constants";
import { DeviceDimensions } from "../../utils/window";

export const HomePageImageWrapper = styled.div`
  width: 100%;
  height: 75vh;
  position: absolute;
  z-index: -1;
  background-image: url(${HOME_PAGE_IMAGE_PATH});
  background-size: cover;
  pointer-events: none;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Cover = styled.div`
  display: flex;
  width: 100%;
  background-color: ${COLORS.BLACK_40};
  justify-content: center;
  height: 75vh;
`;

export const CoverText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-top: 50px;
  padding-left: 40px;
  padding-right: 50px;

  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    padding-left: 110px;
    padding-right: 650px;
  }
`;

export const MidButtonWrapper = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    padding: 0px 25%;
  }
  @media all and (min-width: ${DeviceDimensions.MinLargeScreen}) {
    padding: 0px 35%;
  }
`;

// Strapline
export const StrapLineSection = styled.div`
  background-color: ${COLORS.DARK_PURPLE};
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 80px 75px;

  @media all and (min-width: ${DeviceDimensions.MaxMobileWidth}) {
    padding: 118px 110px 100px 110px;
  }
  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media all and (min-width: ${DeviceDimensions.MinDesktopWidth}) {
    padding: 150px 110px 150px 110px;
  }
`;

// Invest like the 1%
export const InvestSection = styled.div`
  background-color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  gap: 100px;
  text-align: center;
  padding: 100px 75px;
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
    padding: 110px 110px 128px 110px;
  }
  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    padding: 110px 300px;
  }
`;

export const InvestButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) {
    flex-direction: row;
  }
`;

// Why invest with us
export const WhyInvestSection = styled.div`
  background-color: ${COLORS.DARK_PURPLE};
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 100px 50px 60px 50px;
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) {
    padding: 100px 100px 60px 100px;
  }
`;

export const AdvantagesSection = styled.div`
  display: grid;
  grid-template-areas:
    "ReliableYield" "FullyPassive"
    "FractionalOwnership" "EconomicRights"
    "Alignment" "Liability";
  text-align: center;
  padding: 0px 60px;
  gap: 20px 50px;
  margin-bottom: 70px;
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
    grid-template-areas:
      "ReliableYield FullyPassive"
      "FractionalOwnership EconomicRights"
      "Alignment Liability";
    gap: 20px 100px;
    text-align: left;
  }
  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    gap: 20px 190px;
    grid-template-areas: "ReliableYield FullyPassive FractionalOwnership" "EconomicRights Alignment Liability";
    text-align: left;
  }
`;

const AdvantageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) {
    align-items: baseline;
  }
`;
export const ReliableYieldBox = styled(AdvantageBox)`
  grid-area: ReliableYield;
  margin-top: 20px;
`;
export const FullyPassiveBox = styled(AdvantageBox)`
  grid-area: FullyPassive;
`;
export const FractionalOwnershipBox = styled(AdvantageBox)`
  grid-area: FractionalOwnership;
`;
export const EconomicRightsBox = styled(AdvantageBox)`
  grid-area: EconomicRights;
`;
export const AlignmentBox = styled(AdvantageBox)`
  grid-area: Alignment;
`;
export const LiabilityBox = styled(AdvantageBox)`
  grid-area: Liability;
`;

// How it works

export const HowItWorksSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.WHITE};
  margin: 220px 50px;
  text-align: center;


  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) {
    margin: 250px 100px;
  }
  @media all and (min-width: ${DeviceDimensions.MinDesktopWidth}) {
    margin: 250px 150px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Step = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 100px;
  margin-bottom: 100px;
  align-items: center;

  flex-direction: column;
  text-align: center;

  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    flex-direction: row;
    text-align: initial;
  }
`;

export const SecondStep = styled(Step)`
  margin-right: 0;
  flex-direction: column-reverse;
`;

export const StepNumber = styled.div`
  background-color: ${COLORS.DARK_PURPLE};
  width: 75px;
  height: 75px;
  border-radius: 50%;
  padding: 10px 25px;
`;

export const StepNumber2 = styled(StepNumber)`
  margin-left: 0px;
  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    margin-left: 10%;
  }
`;

export const TextStep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 40%;

  @media all and (min-width: 340px) {
    width: 80%;
  }
`;

export const StepImageContainer = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

// This won't be necessary when we have the svg
export const Step1ImageContainer = styled.div`
  width: 40%;

  img {
    object-fit: fill;
    position: unset !important;
  }

  @media all and (min-width: 340px) {
    width: 320px;
  }
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) {
    width: 519px;
  }
`;

// Still a bit curious
export const StillCuriousSection = styled.div`
  background-color: ${COLORS.DARK_PURPLE};
  display: flex;
  flex-direction: column;
  
  background-image: url(${CURIOUS_IMAGE_PATH});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  gap: 30px;
  text-align: center;
  padding: 108px 60px 82px 60px;
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) {
    padding: 108px 120px 82px 120px;
  }
  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    padding: 108px 360px 82px 360px;
  }
  @media all and (min-width: ${DeviceDimensions.MinDesktopWidth}) {
    padding: 108px 460px 82px 460px;
  }
`;

export const QandA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  text-align: center;
`;

export const LearnWithUs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;
  align-items: center;
  margin-top: 50px;
`;

// Invest without compromise
export const InvestWithoutCompromiseSection = styled.div`
  background-color: ${COLORS.WHITE};
  border: 3px solid ${COLORS.DARK_PURPLE};
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 96px 30px;
  padding: 30px 25px;
  text-align: center;

  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) {
    margin: 96px 90px;
    padding: 56px 116px;
  }
  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    padding: 76px 216px;
  }
  @media all and (min-width: ${DeviceDimensions.MinLargeScreen}) {
    margin: 96px 128px;
  }
`;

export const EmailAddressInput = styled.div`
  display: flex;
  text-align: initial;
  align-items: center;
  flex-direction: column;
  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    flex-direction: row;
  }
`;
