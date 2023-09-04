import { COLORS } from "../../utils";
import { NotFoundContainer } from "../NotFound/NotFoundStyles";
import { TVariant, Typography } from "../Typography";

export const ComingSoon = () => {
  return (
    <NotFoundContainer>
      <Typography color={COLORS.WHITE} variant={TVariant.XL}>
        Coming Soon...
      </Typography>
    </NotFoundContainer>
  );
};
