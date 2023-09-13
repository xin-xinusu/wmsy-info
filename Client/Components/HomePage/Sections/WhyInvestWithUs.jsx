import React from 'react';
import { COLORS } from '../../../utils/constants';
import { HOME_PAGE_TEXT } from '../../../utils/texts';
import { Button } from '../../Button';
import { TVariant, TWeight, Typography } from '../../Typography';
import {
  AdvantagesSection,
  AlignmentBox,
  EconomicRightsBox,
  FractionalOwnershipBox,
  FullyPassiveBox,
  LiabilityBox,
  ReliableYieldBox,
  MidButtonWrapper,
  WhyInvestSection,
} from '../HomePageStyles.js';
// SVGs imports
import ReliableYield from '../../../../assets/svg/HomePage/WhyInvestWithUs/reliableYield.svg';
import EconomicRights from '../../../../assets/svg/HomePage/WhyInvestWithUs/economicRights.svg';
import FullyPassive from '../../../../assets/svg/HomePage/WhyInvestWithUs/fullyPassive.svg';
import Alignment from '../../../../assets/svg/HomePage/WhyInvestWithUs/alignment.svg';
import FractionalOwnership from '../../../../assets/svg/HomePage/WhyInvestWithUs/fractionalOwnership.svg';
import Liability from '../../../../assets/svg/HomePage/WhyInvestWithUs/liability.svg';

export const WhyInvestWithUs = () => {
  return (
    <WhyInvestSection>
      <Typography
        variant={TVariant.XL}
        color={COLORS.WHITE}
        weight={TWeight.BOLD}
      >
        {HOME_PAGE_TEXT.whyInvest.title}
      </Typography>

      <AdvantagesSection>
        <ReliableYieldBox>
          <ReliableYield />

          <Typography
            variant={TVariant.XM}
            color={COLORS.WHITE}
            weight={TWeight.BOLD}
          >
            Reliable Yield
          </Typography>
          <Typography
            variant={TVariant.M}
            color={COLORS.WHITE}
            weight={TWeight.LIGHT}
          >
            {HOME_PAGE_TEXT.whyInvest.reliableYield}
          </Typography>
        </ReliableYieldBox>
        <EconomicRightsBox>
          <EconomicRights height="95" width="95" />
          <Typography
            variant={TVariant.XM}
            color={COLORS.WHITE}
            weight={TWeight.BOLD}
          >
            Economic Rights
          </Typography>
          <Typography
            variant={TVariant.M}
            color={COLORS.WHITE}
            weight={TWeight.LIGHT}
          >
            {HOME_PAGE_TEXT.whyInvest.economicRights}
          </Typography>
        </EconomicRightsBox>

        <FullyPassiveBox>
          <FullyPassive viewBox="0 14 149 96" />
          <Typography
            variant={TVariant.XM}
            color={COLORS.WHITE}
            weight={TWeight.BOLD}
          >
            Fully Passive
          </Typography>
          <Typography
            variant={TVariant.M}
            color={COLORS.WHITE}
            weight={TWeight.LIGHT}
          >
            {HOME_PAGE_TEXT.whyInvest.fullyPassive}
          </Typography>
        </FullyPassiveBox>
        <AlignmentBox>
          <Alignment height="99" width="99" />
          <Typography
            variant={TVariant.XM}
            color={COLORS.WHITE}
            weight={TWeight.BOLD}
          >
            Alignment
          </Typography>
          <Typography
            variant={TVariant.M}
            color={COLORS.WHITE}
            weight={TWeight.LIGHT}
          >
            {HOME_PAGE_TEXT.whyInvest.alignment}
          </Typography>
        </AlignmentBox>

        <FractionalOwnershipBox>
          <FractionalOwnership height="98" width="113" />
          <Typography
            variant={TVariant.XM}
            color={COLORS.WHITE}
            weight={TWeight.BOLD}
          >
            Fractional Ownership
          </Typography>
          <Typography
            variant={TVariant.M}
            color={COLORS.WHITE}
            weight={TWeight.LIGHT}
          >
            {HOME_PAGE_TEXT.whyInvest.fractionalOwnership}
          </Typography>
        </FractionalOwnershipBox>
        <LiabilityBox>
          <Liability height="99" width="99" />
          <Typography
            variant={TVariant.XM}
            color={COLORS.WHITE}
            weight={TWeight.BOLD}
          >
            Liability
          </Typography>
          <Typography
            variant={TVariant.M}
            color={COLORS.WHITE}
            weight={TWeight.LIGHT}
          >
            {HOME_PAGE_TEXT.whyInvest.liability}
          </Typography>
        </LiabilityBox>
      </AdvantagesSection>

      <MidButtonWrapper>
        <Button color={COLORS.WHITE} fullWidth disabled>
          <Typography weight={TWeight.BOLD} variant={TVariant.L}>
            Start Earning
          </Typography>
        </Button>
      </MidButtonWrapper>
    </WhyInvestSection>
  );
};
