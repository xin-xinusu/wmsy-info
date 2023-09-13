import React, { useContext } from 'react';
import WindowContext from '../../../contexts/window.context';
import { COLORS } from '../../../utils';
import { deviceDimensionToNumber } from '../../../utils/strings';
import { HOME_PAGE_TEXT } from '../../../utils/texts';
import {
  TVariant,
  TWeight,
  Typography,
} from '../../Typography';
import { StrapLineSection } from '../HomePageStyles.js';

export const StrapLine = () => {
  const { windowSize } = useContext(WindowContext);
  const getFont = (whatIs) => {
    if (whatIs === 'title') {
      return deviceDimensionToNumber(windowSize) > 640
        ? TVariant.XL
        : TVariant.L;
    } else {
      return deviceDimensionToNumber(windowSize) > 640
        ? TVariant.L
        : TVariant.XM;
    }
  };
  return (
    <StrapLineSection>
      <Typography
        variant={getFont('title')}
        color={COLORS.WHITE}
        weight={TWeight.BOLD}
      >
        {HOME_PAGE_TEXT.strapLineTitle}
      </Typography>
      <Typography 
        variant={TVariant.XM}
        color={COLORS.WHITE}
      >
        {HOME_PAGE_TEXT.strapLineText}
      </Typography>
    </StrapLineSection>
  );
};
