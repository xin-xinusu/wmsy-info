import { signIn } from "next-auth/react";
import { useContext } from "react";
import WindowContext from "../../contexts/window.context";
import { AUTH_PROVIDERS, COLORS, DeviceDimensions, Pages } from "../../utils";
import { deviceDimensionToNumber } from "../../utils/strings";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { LogInContainer, NotLoggedContainer } from "./SignInRequiredStyles";

export const SignInRequired = ({ page }) => {
  const { windowSize } = useContext(WindowContext);

  const typographyVariant =
    deviceDimensionToNumber(windowSize) <
    deviceDimensionToNumber(DeviceDimensions.MinLaptopWidth)
      ? "M"
      : "L";

  const buttonTypographyVariant =
    deviceDimensionToNumber(windowSize) <
    deviceDimensionToNumber(DeviceDimensions.MinLaptopWidth)
      ? "S"
      : "M";

  const handleSignIn = () =>
    signIn(AUTH_PROVIDERS.GOOGLE, { callbackUrl: Pages.LOGIN });

  return (
    <NotLoggedContainer>
      <Typography variant={typographyVariant} weight="BOLD">
        You must be logged in to view the {page}
      </Typography>
      <Typography variant={typographyVariant} weight="LIGHT">
        Please login or register to continue
      </Typography>
      <LogInContainer>
        <Button fullWidth color={COLORS.WHITE} onClick={handleSignIn}>
          <Typography variant={buttonTypographyVariant} weight="BOLD">
            Register / Login
          </Typography>
        </Button>
      </LogInContainer>
    </NotLoggedContainer>
  );
};

