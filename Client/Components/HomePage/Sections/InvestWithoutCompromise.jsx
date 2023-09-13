import { HOME_PAGE_TEXT } from '../../../utils/texts';
import { TVariant, TWeight, Typography } from '../../Typography';

import { SubscriptionSignup } from '../../SubscriptionSignup/SubscriptionSignup'
import {
  InvestWithoutCompromiseSection
} from '../HomePageStyles.js';

export const InvestWithoutCompromise = () => {
  
  return (
    <InvestWithoutCompromiseSection>
      <Typography variant={TVariant.L} weight={TWeight.BOLD}>
        Invest without compromise.
      </Typography>
      <Typography variant={TVariant.XM} weight={TWeight.LIGHT}>
        {HOME_PAGE_TEXT.investWithoutCompromiseText}
      </Typography>
      <SubscriptionSignup />
      
    </InvestWithoutCompromiseSection>
  );
};
