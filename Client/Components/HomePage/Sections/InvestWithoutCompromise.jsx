import React, { useContext } from 'react';
import WindowContext from '../../../contexts/window.context';
import { COLORS } from '../../../utils/constants';
import { deviceDimensionToNumber } from '../../../utils/strings';
import { HOME_PAGE_TEXT } from '../../../utils/texts';
import { Button, ButtonSizes } from '../../Button';
import { InputField } from '../../InputField/InputField';
import { TVariant, TWeight, Typography } from '../../Typography';
import {
  EmailAddressInput,
  InvestWithoutCompromiseSection,
} from '../HomePageStyles.js';
import { DeviceDimensions } from '../../../utils';

export const InvestWithoutCompromise = () => {
  const { windowSize } = useContext(WindowContext);
  const fullWidth =
    deviceDimensionToNumber(windowSize) <
    deviceDimensionToNumber(DeviceDimensions.MinLaptopWidth); // 1024

  return (
    <InvestWithoutCompromiseSection>
      <Typography variant={TVariant.L} weight={TWeight.BOLD}>
        Invest without compromise.
      </Typography>
      <Typography variant={TVariant.XM} weight={TWeight.LIGHT}>
        {HOME_PAGE_TEXT.investWithoutCompromiseText}
      </Typography>
      <EmailAddressInput>
        <InputField placeholder="Your e-mail address"></InputField>
        {/* TODO: Complete button functionality */}
        <Button size={ButtonSizes.XS2} fullWidth={fullWidth} disabled>
          <Typography
            variant={TVariant.M}
            color={COLORS.WHITE}
            weight={TWeight.BOLD}
          >
            Join Here
          </Typography>
        </Button>
      </EmailAddressInput>
    </InvestWithoutCompromiseSection>
  );
};
