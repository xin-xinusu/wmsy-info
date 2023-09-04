import { TVariant, Typography } from "../Typography";
import { NewListingSignStyle } from "./PropertyCardTileStyles";

export const NewListingSign = () => {
  return (
    <NewListingSignStyle>
      <Typography variant={TVariant.XS}>New Listing</Typography>
    </NewListingSignStyle>
  );
};
