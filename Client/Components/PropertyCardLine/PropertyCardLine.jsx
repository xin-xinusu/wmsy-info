import _ from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { centsToDollars } from "../../../Admin/utils/moneyFormatter";
import { integerToPercentage } from "../../../Admin/utils/percentage";
import { COLORS } from "../../utils/constants";
import { Pages } from "../../utils/pages";
import { getSoldPercentage } from "../../utils/tokens";
import { ButtonSizes } from "../Button";
import { Button } from "../Button/Button";
import { PropertyNoImage } from "../PropertyNoImage/PropertyNoImage";
import { TVariant, TWeight, Typography } from "../Typography";
import {
  CapRateSection,
  CardLineContainer,
  DetailsSection,
  IRRSection,
  PartialImageSection,
  ProjAppSection,
  PropertyNameSection,
  PropertySection,
  TokenSection,
  TokenSoldSection,
} from "./PropertyCardLineStyles";

const PropertyCardLine = ({ property }) => {
  const router = useRouter();

  // TODO: Get from property / API
  const capRate = "N/A";
  const tokensSold = property.tokens - property.sharesLeft;
  const soldPercentage = getSoldPercentage(property);

  const goToPropertyPage = () =>
    router.push(`${Pages.PROPERTY}/${property.id}`);

  const mediaArr = _.cloneDeep(property.media) || [];
  mediaArr.sort((a, b) => a.order - b.order);
  const media = mediaArr[0];
  const noImageSize = 30;

  return (
    <CardLineContainer>
      <td>
        <PropertySection>
          <PartialImageSection onClick={goToPropertyPage}>
            {media ? (
              <Image src={media.url} sizes="100%" alt={property.name} fill />
            ) : (
              <PropertyNoImage size={noImageSize} />
            )}
          </PartialImageSection>
          <PropertyNameSection onClick={goToPropertyPage}>
            <Typography variant={TVariant.M} weight={TWeight.BOLD}>
              {property.propertyAddress}
            </Typography>
            <Typography variant={TVariant.S}>
              {property.city}, {property.state} {property.zipCode}
            </Typography>
          </PropertyNameSection>
        </PropertySection>
      </td>
      <TokenSection>
        <Typography>${centsToDollars(property.pricePerShare)}</Typography>
      </TokenSection>
      <CapRateSection>
        <Typography>{capRate}</Typography>
      </CapRateSection>
      <ProjAppSection>
        <Typography>{integerToPercentage(property.appreciation)}%</Typography>
      </ProjAppSection>
      <IRRSection>
        <Typography>{integerToPercentage(property.irr)}% IRR</Typography>
      </IRRSection>
      <TokenSection>
        <TokenSoldSection>
          <Typography>
            {tokensSold}/{property.tokens}
          </Typography>
          <Typography color={COLORS.DISABLED}>
            &nbsp;({soldPercentage.toFixed(2)}%)
          </Typography>
        </TokenSoldSection>
      </TokenSection>

      <DetailsSection>
        <Button
          size={ButtonSizes.M}
          onClick={goToPropertyPage}
          color={COLORS.MID_PURPLE}
        >
          <Typography
            variant={TVariant.S}
            weight={TWeight.BOLD}
            color={COLORS.WHITE}
          >
            See Details
          </Typography>
        </Button>
      </DetailsSection>
    </CardLineContainer>
  );
};

export default PropertyCardLine;
