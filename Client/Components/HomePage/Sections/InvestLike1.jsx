import React from 'react';
import { COLORS } from '../../../utils';
import { HOME_PAGE_TEXT } from '../../../utils/texts';
import { Button } from '../../Button';
import { TVariant, TWeight, Typography } from '../../Typography';
import { InvestButtonsWrapper, InvestSection } from '../HomePageStyles.js';

export const InvestLike1 = () => {
  return (
    <InvestSection>
      <Typography variant={TVariant.L} weight={TWeight.BOLD}>
        {HOME_PAGE_TEXT.investTitle}
      </Typography>
      <Typography variant={TVariant.L} weight={TWeight.LIGHT}>
        {HOME_PAGE_TEXT.investText}
      </Typography>
      <InvestButtonsWrapper>
        <Button fullWidth color={COLORS.WHITE} disabled>
          <Typography weight={TWeight.BOLD} variant={TVariant.M}>
            Get Access
          </Typography>
        </Button>
        <Button fullWidth disabled>
          <Typography
            weight={TWeight.BOLD}
            variant={TVariant.M}
            color={COLORS.WHITE}
          >
            How it works
          </Typography>
        </Button>
      </InvestButtonsWrapper>
    </InvestSection>
  );
};
