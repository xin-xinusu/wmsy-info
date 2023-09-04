import React from "react";
import {
  centsToADA,
  centsToDollars,
} from "../../../../Admin/utils/moneyFormatter";
import Info from "../../../../assets/svg/Info.svg";
import { COLORS } from "../../../utils";
import { Button, ButtonSizes } from "../../Button";
import { TVariant, TWeight, Typography } from "../../Typography";
import {
  ButtonsSection,
  InfoHeader,
  InfoSection,
  PortfolioCashSection,
  TextInfo,
  ToolTip,
  ValueCashSection,
} from "../PortfolioStyles";
import { Withdrawal } from "./Withdrawal/Withdrawal";
import { CashBalanceInfo, portfolioValueInfo } from "./info";

const Introduction = ({ customer, ADAValue, loading }) => {
  const pValueDollars = (customer.properties || []).reduce((curr, acc) => {
    return curr + acc.pricePerShare * acc.sharesOwned;
  }, 0);
  const cBallanceDollars = customer?.cashBalance ?? 0;
  const pValue = centsToADA(pValueDollars, ADAValue || 1);
  const cBalance = centsToADA(cBallanceDollars, ADAValue || 1);

  return (
    <PortfolioCashSection>
      <InfoSection gap="S">
        <InfoHeader>
          <Typography variant={TVariant.XM}>Portfolio Value</Typography>
          <ToolTip>
            <Info />
            <TextInfo direction="right">
              <Typography>{portfolioValueInfo}</Typography>
            </TextInfo>
          </ToolTip>
        </InfoHeader>
        <ValueCashSection>
          <Typography variant={TVariant.L}>
            {loading ? "..." : pValue}₳
          </Typography>
          &nbsp;&nbsp;
          <Typography variant={TVariant.M} color={COLORS.LILAC_GREY}>
            ({centsToDollars(pValueDollars)} USD)
          </Typography>
        </ValueCashSection>
      </InfoSection>
      <InfoSection gap="S">
        <InfoHeader>
          <Typography variant={TVariant.XM}>Cash Balance</Typography>
          <ToolTip>
            <Info />
            <TextInfo direction="right">
              <CashBalanceInfo />
            </TextInfo>
          </ToolTip>
        </InfoHeader>
        <ValueCashSection>
          <Typography variant={TVariant.L}>
            {loading ? "..." : cBalance}₳
          </Typography>
          &nbsp;&nbsp;
          <Typography variant={TVariant.M} color={COLORS.LILAC_GREY}>
            ({centsToDollars(cBallanceDollars)} USD)
          </Typography>
        </ValueCashSection>
      </InfoSection>
      <ButtonsSection>
        <Withdrawal
          ADAValue={ADAValue}
          balance={Number(cBalance)}
          dollars={cBallanceDollars}
        />
        <Button size={ButtonSizes.S} disabled fullWidth>
          <Typography
            variant={TVariant.XM}
            weight={TWeight.BOLD}
            color={COLORS.WHITE}
          >
            Deposit
          </Typography>
        </Button>
      </ButtonsSection>
    </PortfolioCashSection>
  );
};

export default Introduction;
