import _ from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { centsToDollars } from "../../../../Admin/utils/moneyFormatter";
import { COLORS, Pages } from "../../../utils";
import { Bar } from "../../Bar/Bar";
import { Button, ButtonSizes } from "../../Button";
import { TVariant, TWeight, Typography } from "../../Typography";
import {
  CardLineContainer,
  Column,
  ImageSection,
  NoVestedProperties,
  PropInfoSection,
  PropertyNameSection,
  PropertySection,
  Row,
  Separator,
  VestedList,
  ViewTransaction,
} from "../PortfolioStyles";

const VestedProperties = ({ customer }) => {
  const properties = customer.properties || [];

  const router = useRouter();
  const goToPropertyPage = (property) => () => {
    router.push(`${Pages.PROPERTY}/${property.id}`);
  };

  const goToMarketplace = () => {
    router.push({
      pathname: `${Pages.MARKETPLACE}`,
    });
  };

  const viewTransaction = async () => {
    await router.push({
      pathname: `${Pages.ACCOUNT}`,
      query: { orderHistory: true },
    });
  };

  return (
    <Bar label="Vested Properties" fullWidth collapsible={false}>
      <VestedList>
        {properties.length === 0 ? (
          <NoVestedProperties>
            <Typography variant={TVariant.L}>
              You don't have any vested properties
            </Typography>
            <Button size={ButtonSizes.L} onClick={goToMarketplace}>
              <Typography
                variant={TVariant.M}
                weight={TWeight.BOLD}
                color={COLORS.WHITE}
              >
                Go to marketplace
              </Typography>
            </Button>
          </NoVestedProperties>
        ) : (
          properties.map((property) => {
            const numOfTokens = property.sharesOwned;
            const tokensValue = numOfTokens * property.pricePerShare;
            const mediaArr = _.cloneDeep(property.media) || [];
            mediaArr.sort((a, b) => a.order - b.order);
            const media = mediaArr[0];
            return (
              <CardLineContainer key={property.id}>
                <ImageSection>
                  <Image src={media.url} alt={property.propertyAddress} fill />
                </ImageSection>
                <PropertySection>
                  <PropInfoSection>
                    <PropertyNameSection>
                      <Typography variant={TVariant.XM} weight={TWeight.BOLD}>
                        {property.propertyAddress}
                      </Typography>
                      <Typography weight={TWeight.LIGHT}>
                        {property.city}, {property.state} {property.zipCode}
                      </Typography>
                    </PropertyNameSection>
                    <Button
                      onClick={goToPropertyPage(property)}
                      size={ButtonSizes.L}
                    >
                      <Typography
                        variant={TVariant.S}
                        weight={TWeight.BOLD}
                        color={COLORS.WHITE}
                      >
                        See Details
                      </Typography>
                    </Button>
                  </PropInfoSection>
                  <Separator />
                  <PropInfoSection>
                    <Row>
                      <Column>
                        <Typography weight={TWeight.LIGHT}>Tokens</Typography>
                        <Typography variant={TVariant.M} weight={TWeight.LIGHT}>
                          {numOfTokens}
                        </Typography>
                      </Column>
                      <Column>
                        <Typography weight={TWeight.LIGHT}>
                          Value of Tokens
                        </Typography>
                        <Typography variant={TVariant.M} weight={TWeight.LIGHT}>
                          ${centsToDollars(tokensValue)}
                        </Typography>
                      </Column>
                    </Row>
                    <ViewTransaction>
                      <Typography
                        variant={TVariant.M}
                        weight={TWeight.BOLD}
                        onClick={viewTransaction}
                      >
                        View Transaction
                      </Typography>
                    </ViewTransaction>
                  </PropInfoSection>
                </PropertySection>
              </CardLineContainer>
            );
          })
        )}
      </VestedList>
    </Bar>
  );
};

export default VestedProperties;
