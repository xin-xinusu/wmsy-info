import React from 'react';
import { useRouter } from 'next/router';
import { COLORS } from '../../../utils/constants';
import { HOME_PAGE_TEXT } from '../../../utils/texts';
import { Button } from '../../Button';
import { TVariant, TWeight, Typography } from '../../Typography';
import { LearnWithUs, QandA, StillCuriousSection } from '../HomePageStyles.js';
import { Pages } from '../../../utils';

export const StillABitCurious = () => {
  const router = useRouter();
  const goToLearn = () => router.push(Pages.LEARN);

  return (
    <StillCuriousSection>
      <Typography
        variant={TVariant.L}
        color={COLORS.WHITE}
        weight={TWeight.BOLD}
      >
        Still a bit curious?
      </Typography>
      <QandA>
        <Typography variant={TVariant.M} color={COLORS.WHITE}>
          {HOME_PAGE_TEXT.stillCurious.firstQuestion}
        </Typography>
        <Typography color={COLORS.WHITE} weight={TWeight.LIGHT}>
          {HOME_PAGE_TEXT.stillCurious.firstAnswer}
        </Typography>
      </QandA>
      <QandA>
        <Typography variant={TVariant.M} color={COLORS.WHITE}>
          {HOME_PAGE_TEXT.stillCurious.secondQuestion}
        </Typography>
        <Typography color={COLORS.WHITE} weight={TWeight.LIGHT}>
          {HOME_PAGE_TEXT.stillCurious.secondAnswer}
        </Typography>
      </QandA>
      <QandA>
        <Typography variant={TVariant.M} color={COLORS.WHITE}>
          {HOME_PAGE_TEXT.stillCurious.thirdQuestion}
        </Typography>
        <Typography color={COLORS.WHITE} weight={TWeight.LIGHT}>
          {HOME_PAGE_TEXT.stillCurious.thirdAnswer}
        </Typography>
      </QandA>
      <LearnWithUs>
        <Typography variant={TVariant.M} color={COLORS.WHITE}>
          Have Additional Questions?
        </Typography>
        <Button color={COLORS.WHITE} onClick={goToLearn}>
          <Typography variant={TVariant.XM} weight={TWeight.BOLD}>
            Learn with us
          </Typography>
        </Button>
      </LearnWithUs>
    </StillCuriousSection>
  );
};
