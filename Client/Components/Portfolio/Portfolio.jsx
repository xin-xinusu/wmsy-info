// import { useQuery } from "@apollo/client";
import React from "react";
import Info from "../../../assets/svg/Info.svg";
// import { GET_CURRENCY_VALUE } from "../../graphql/currency.query";
// import { FULL_CUSTOMER } from "../../graphql/fullCustomer.query";
import { CurrencyQuery, FullCustomerQuery } from "../../utils";
import { getLastUpdatedText } from "../../utils/texts";
import { TVariant, TWeight, Typography } from "../Typography";
import {
  InfoHeader,
  PortfolioContainer,
  TextInfo,
  ToolTip,
} from "./PortfolioStyles";
import { Introduction } from "./Sections/Introduction";
import { Summary } from "./Sections/Summary";
import { VestedProperties } from "./Sections/VestedProperties";
import { portfolioWarning } from "./Sections/info";
import { Loading, LoadingVariant } from "../Loading";

const Portfolio = () => {
  const { data, error, loading } = null
    // useQuery(FULL_CUSTOMER);
  // const { data: currency, loading: currencyLoading } = useQuery(
  //   GET_CURRENCY_VALUE
  // );
  const ADAValue = currency?.currency.price;
  const updatedAt = new Date(currency?.currency.updatedAt);

  if (loading || error || !data?.customer) {
    console.log(error);
    return <Loading variant={LoadingVariant.FULL} />;
  }

  return (
    <PortfolioContainer>
      <InfoHeader>
        <Typography variant={TVariant.L} weight={TWeight.BOLD}>
          My Portfolio
        </Typography>
        <ToolTip>
          <Info />
          <TextInfo direction="right">
            <Typography>
              {portfolioWarning}
              {getLastUpdatedText(updatedAt)}
            </Typography>
          </TextInfo>
        </ToolTip>
      </InfoHeader>
      <Introduction
        customer={data.customer}
        ADAValue={ADAValue}
        loading={currencyLoading}
      />
      <Summary customer={data.customer} />
      <VestedProperties customer={data.customer} />
    </PortfolioContainer>
  );
};

export default Portfolio;
