import React from 'react';
import { COLORS } from '../../utils/constants';
import { HOME_PAGE_TEXT } from '../../utils/texts';
import { TVariant, TWeight, Typography } from '../Typography';
import {
  Cover,
  CoverText,
  HomePageImageWrapper
} from './HomePageStyles.js';
import {
  HowItWorks,
  InvestLike1,
  InvestWithoutCompromise,
  StillABitCurious,
  StrapLine,
  WhyInvestWithUs
} from './Sections';

export const HomePage = () => {
  return (
    <div>
      <Cover>
        <CoverText>
          <Typography
            variant={TVariant.XL}
            weight={TWeight.BOLD}
            color={COLORS.WHITE}
          >
            {HOME_PAGE_TEXT.imageCoverTitle1}
          </Typography>
          <Typography
            variant={TVariant.XL}
            weight={TWeight.BOLD}
            color={COLORS.WHITE}
          >
            {HOME_PAGE_TEXT.imageCoverTitle2}
          </Typography>
          <Typography variant={TVariant.XM} color={COLORS.WHITE}>
            {HOME_PAGE_TEXT.imageCoverText}
          </Typography>
        </CoverText>
        <HomePageImageWrapper />
      </Cover>
      <StrapLine />
      <InvestLike1 />
      <WhyInvestWithUs />
      <HowItWorks />
      <StillABitCurious />
      <InvestWithoutCompromise />
    </div>
  );
};

