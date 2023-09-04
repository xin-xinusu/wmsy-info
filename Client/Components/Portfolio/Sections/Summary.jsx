import React from "react";
import { centsToDollars } from "../../../../Admin/utils/moneyFormatter";
import Info from "../../../../assets/svg/Info.svg";
import { Bar } from "../../Bar/Bar";
import { TVariant, TWeight, Typography } from "../../Typography";
import {
  InfoHeader,
  InfoSection,
  SummarySection,
  TextInfo,
  ToolTip,
} from "../PortfolioStyles";
import { appreciationInfo, nextPayoutInfo, rentalIncomeInfo, totalReturnInfo } from "./info";

const Summary = ({ customer }) => {
  const getValue = (rawValue, isPrice) => {
    if (typeof rawValue === "number") {
      if (isPrice) {
        return `$${centsToDollars(rawValue)}`;
      }
      return rawValue.toString();
    } else if (typeof rawValue === "string") {
      const nextMonth = new Date().getMonth() + 1;
      const year = new Date().getFullYear() + (nextMonth === 12 ? 1 : 0);
      const firstDayOfNextMonth = new Date(
        year,
        nextMonth % 12,
        1
      ).toLocaleDateString("en-US");

      return firstDayOfNextMonth;
    }
    return "N/A";
  };

  const sumSections = [
    {
      title: "Properties Owned",
      value: getValue(customer?.propertiesOwned, false),
      info: false,
      description: "",
    },
    {
      title: "Rental Income",
      value: getValue(customer?.rentalIncome, true),
      info: true,
      description: rentalIncomeInfo,
    },
    {
      title: "Appreciation",
      value: getValue(customer?.appreciation, true),
      info: true,
      description: appreciationInfo,
    },
    {
      title: "Total Return",
      value: getValue(customer?.totalReturn, true),
      info: true,
      description: totalReturnInfo,
    },
    {
      title: "Next Payout",
      value:
        customer?.propertiesOwned > 0
          ? getValue(customer?.nextPayout, false)
          : "MM/DD/YYYY",
      info: true,
      description: nextPayoutInfo,
    },
  ];

  return (
    <Bar label="Summary" fullWidth collapsible={false}>
      <SummarySection>
        {sumSections.map((section) => {
          return (
            <InfoSection key={section.title} gap="L">
              <InfoHeader>
                <Typography variant={TVariant.M} weight={TWeight.BOLD}>
                  {section.title}
                </Typography>
                {section.info && (
                  <ToolTip>
                    <Info />
                    <TextInfo direction="left">
                      <Typography>{section.description}</Typography>
                    </TextInfo>
                  </ToolTip>
                )}
              </InfoHeader>
              <Typography variant={TVariant.XM} weight={TWeight.XREGULAR}>
                {section.value}
              </Typography>
              &nbsp;
            </InfoSection>
          );
        })}
      </SummarySection>
    </Bar>
  );
};

export default Summary;
