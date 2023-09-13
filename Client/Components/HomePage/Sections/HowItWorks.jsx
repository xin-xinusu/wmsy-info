import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WmsyHomeCard from '../../../../assets/banner-elements/wmsy-home-card.png'
import Step2 from '../../../../assets/svg/HomePage/HowItWorks/step2.svg';
import Step3 from '../../../../assets/svg/HomePage/HowItWorks/step3.svg';
import WindowContext from '../../../contexts/window.context';
import { COLORS, STEP1_IMAGE_PATH } from '../../../utils/constants';
import { Pages } from '../../../utils/pages';
import { deviceDimensionToNumber } from '../../../utils/strings';
import { HOME_PAGE_TEXT } from '../../../utils/texts';
import { Button } from '../../Button';
import { TVariant, TWeight, Typography } from '../../Typography';
import {
  HowItWorksSection,
  MidButtonWrapper,
  SecondStep,
  Step,
  Step1ImageContainer,
  StepImageContainer,
  StepNumber,
  StepNumber2,
  TextStep,
} from '../HomePageStyles.js';

export const HowItWorks = () => {
  const { windowSize } = useContext(WindowContext);

  return (
    <HowItWorksSection>
      <Typography variant={TVariant.XL} weight={TWeight.BOLD}>
        How it works
      </Typography>
      <Step>
        <StepNumber>
          <Typography
            variant={TVariant.XL}
            weight={TWeight.BOLD}
            color={COLORS.WHITE}
          >
            1
          </Typography>
        </StepNumber>
        <TextStep>
          <Typography variant={TVariant.L} weight={TWeight.BOLD}>
            Explore
          </Typography>
          <Typography variant={TVariant.XM} weight={TWeight.LIGHT}>
            {HOME_PAGE_TEXT.howItWorks.one}
          </Typography>
        </TextStep>
        <Step1ImageContainer>
          <Image src={WmsyHomeCard} alt="Step 1" fill />
        </Step1ImageContainer>
      </Step>

      <SecondStep>
        <StepImageContainer width="318" height="386">
          <Step2 />
        </StepImageContainer>
        <>
          {deviceDimensionToNumber(windowSize) < 1024 ? (
            <>
              <TextStep>
                <Typography variant={TVariant.L} weight={TWeight.BOLD}>
                  Invest
                </Typography>
                <Typography variant={TVariant.XM} weight={TWeight.LIGHT}>
                  {HOME_PAGE_TEXT.howItWorks.two}
                </Typography>
              </TextStep>
              <StepNumber2>
                <Typography
                  variant={TVariant.XL}
                  weight={TWeight.BOLD}
                  color={COLORS.WHITE}
                >
                  2
                </Typography>
              </StepNumber2>
            </>
          ) : (
            <>
              <StepNumber2>
                <Typography
                  variant={TVariant.XL}
                  weight={TWeight.BOLD}
                  color={COLORS.WHITE}
                >
                  2
                </Typography>
              </StepNumber2>
              <TextStep>
                <Typography variant={TVariant.L} weight={TWeight.BOLD}>
                  Invest
                </Typography>
                <Typography variant={TVariant.XM} weight={TWeight.LIGHT}>
                  {HOME_PAGE_TEXT.howItWorks.two}
                </Typography>
              </TextStep>
            </>
          )}
        </>
      </SecondStep>

      <Step>
        <StepNumber>
          <Typography
            variant={TVariant.XL}
            weight={TWeight.BOLD}
            color={COLORS.WHITE}
          >
            3
          </Typography>
        </StepNumber>
        <TextStep>
          <Typography variant={TVariant.L} weight={TWeight.BOLD}>
            Relax
          </Typography>
          <Typography variant={TVariant.XM} weight={TWeight.LIGHT}>
            {HOME_PAGE_TEXT.howItWorks.three}
          </Typography>
        </TextStep>
        <StepImageContainer width="318" height="386">
          <Step3 viewBox="0 7 315 420" />
        </StepImageContainer>
      </Step>
      <MidButtonWrapper>
        <Button fullWidth>
          <Typography
            color={COLORS.WHITE}
            variant={TVariant.L}
            weight={TWeight.BOLD}
          >
            <Link href={Pages.MARKETPLACE}>Explore Listings</Link>
          </Typography>
        </Button>
      </MidButtonWrapper>
    </HowItWorksSection>
  );
};
