import NotFoundSvg from "../../../assets/svg/NotFoundSvg.svg";
import { COLORS } from "../../utils";
import { TVariant, Typography } from "../Typography";
import { NotFoundContainer } from "./NotFoundStyles";

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <Typography color={COLORS.WHITE} variant={TVariant.XL}>
        404 Page not found &nbsp;
      </Typography>
      <NotFoundSvg />
    </NotFoundContainer>
  );
};
