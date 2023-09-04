import _ from "lodash";
import { useRouter } from "next/router";
import React from "react";
import { centsToDollars } from "../../../Admin/utils/moneyFormatter";
import { integerToPercentage } from "../../../Admin/utils/percentage";
import { COLORS } from "../../utils/constants";
import { Pages } from "../../utils/pages";
import { PropertyNoImage } from "../PropertyNoImage/PropertyNoImage";
import { TVariant, TWeight, Typography } from "../Typography";
import { FeaturedSign } from "./FeaturedSign";
import { NewListingSign } from "./NewListingSign";
import {
  PCTButton,
  PCTImage,
  PCTImageContainer,
  PCTImageWrapper,
  PCTPropertyName,
  PCTRightText,
  PCTRow,
  PCTText,
  PCTWrapper,
} from "./PropertyCardTileStyles";

// TODO: Define when a house is featured
const featured = false;
// TODO: Define when a house is "new listing"
const newListing = true;

const PropertyCardTile = ({ property }) => {
  const router = useRouter();

  const mediaArr = _.cloneDeep(property.media) || [];
  mediaArr.sort((a, b) => a.order - b.order);
  const media = mediaArr[0];
  const noImageSize = 30;

  const goToPropertyPage = () =>
    router.push(`${Pages.PROPERTY}/${property.id}`);

  return (
    <PCTWrapper>
      <PCTImageWrapper onClick={goToPropertyPage}>
        {featured ? <FeaturedSign /> : null}
        {newListing ? <NewListingSign /> : null}
        <PCTImageContainer>
          {media ? (
            <PCTImage src={media?.url} sizes="100%" alt={property.name} fill />
          ) : (
            <PropertyNoImage size={noImageSize} />
          )}
        </PCTImageContainer>
      </PCTImageWrapper>
      <PCTText>
        <PCTRow>
          <PCTPropertyName onClick={goToPropertyPage}>
            <Typography
              weight={TWeight.BOLD}
              color={COLORS.DARK_PURPLE}
              variant={TVariant.M}
            >
              {property.propertyAddress}
            </Typography>
          </PCTPropertyName>
          <PCTRightText>
            <Typography weight={TWeight.BOLD} variant={TVariant.M}>
              {integerToPercentage(property.irr)}% IRR
            </Typography>
          </PCTRightText>
        </PCTRow>
        <PCTRow>
          <Typography variant={TVariant.S}>
            {property.city}, {property.state} {property.zipCode}
          </Typography>
          <PCTRightText>
            <Typography weight={TWeight.BOLD} color={COLORS.DISABLED}>
              ${centsToDollars(property.coc)} Coc
            </Typography>
          </PCTRightText>
        </PCTRow>
      </PCTText>
      <PCTButton>
        <Typography
          weight={TWeight.BOLD}
          color={COLORS.WHITE}
          variant={TVariant.S}
        >
          Available: {property.sharesLeft} tokens at $
          {centsToDollars(property.pricePerShare)}
        </Typography>
      </PCTButton>
    </PCTWrapper>
  );
};

export default PropertyCardTile;