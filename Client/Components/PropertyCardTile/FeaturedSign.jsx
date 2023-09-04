import { COLORS } from "../../utils/constants";
import { TVariant, Typography } from "../Typography";
import { FeaturedSignStyle } from "./PropertyCardTileStyles";

export const FeaturedSign = () => {
  return (
    <FeaturedSignStyle>
      <Typography color={COLORS.WHITE} variant={TVariant.XS}>
        FEATURED
      </Typography>
    </FeaturedSignStyle>
  );
};
