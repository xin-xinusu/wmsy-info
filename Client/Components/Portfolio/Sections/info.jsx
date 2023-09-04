import React from "react";
import { COLORS } from "../../../utils";
import { TVariant, TWeight, Typography } from "../../Typography";
import { CashBalanceInfoSection, CashBlock, CashRow } from "../PortfolioStyles";

export const portfolioWarning =
  "The portfolio value in ADA may not be up to date, please check an updated source of exchange for more security. Last update: ";
export const portfolioValueInfo =
  "Total value of your portfolio includes all investments, cash balances and returns. This may include both realized and unrealized gains or losses.";
export const rentalIncomeInfo =
  "Total rental income of all of your investments. Rental income represents the net cash flow distributed to investors.";
export const appreciationInfo =
  "Our investment team uses 3rd party property value estimates to calculate the change in value of the underlying real estate. The value is added to the balance sheet which factors in liabilites, like the loan balance, accrued property taxes, and prorated inital costs. Appreciation will be unrealized until the property is sold.";
export const totalReturnInfo =
  "The total return is the sum of rental income and appreciation returns including both realized and unrealized gains or losses.";
export const nextPayoutInfo =
  "The soonest payout month of any one of your investments. Some properties may payout at different times and you can view each property’s date below.";

export const CashBalanceInfo = () => {
  const cashBalanceSections = [
    {
      title: "Cash Balance",
      value: 0,
      description: "Cash balance in brokerage account",
    },
    {
      title: "Available Cash",
      value: 0,
      description: "Cash available to invest",
    },
    {
      title: "Reserved Cash",
      value: 0,
      description: "Cash reserved for pending transactions",
    },
    {
      title: "Pending Deposits",
      value: 0,
      description: "Cash available for withdrawal",
    },
    {
      title: "Available to Withdraw",
      value: 0,
      description: "Cash available for withdrawal",
    },
  ];
  return (
    <CashBalanceInfoSection>
      <Typography variant={TVariant.M} weight={TWeight.BOLD}>
        Cash Breakdown
      </Typography>
      {cashBalanceSections.map((section, index) => (
        <CashBlock key={index}>
          <CashRow>
            <Typography>{section.title}</Typography>
            <Typography weight={TWeight.BOLD}>${section.value}</Typography>
          </CashRow>
          <Typography color={COLORS.DARK_PURPLE_51}>
            {section.description}
          </Typography>
        </CashBlock>
      ))}
    </CashBalanceInfoSection>
  );
};
