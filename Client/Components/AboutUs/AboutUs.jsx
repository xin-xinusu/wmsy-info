import { useRouter } from "next/router";
import CardanoIcon from "../../../assets/svg/Cardano.svg";
import Ellipse from "../../../assets/svg/Ellipse.svg";
import House from "../../../assets/svg/House.svg";
import { COLORS, Pages } from "../../utils";
import { Button, ButtonSizes } from "../Button";
import { TVariant, TWeight, Typography } from "../Typography";

// Make sure to import the styled components if you are using them
import {
  Description,
  EllipsesContainer,
  Introduction,
  Row,
  SvgContainer,
  TextContainer,
  TextDescription,
  Title,
} from "./AboutUsStyles";

export const AboutUs = () => {
  const ellipses = [1, 2, 3, 4, 5];
  const router = useRouter();

  const goToMarketPlace = () => {
    router.push(Pages.MARKETPLACE);
  };

  return (
    <>
      <Introduction>
        <TextContainer>
          <Typography variant={TVariant.L} weight={TWeight.BOLD}>
            Our mission is to make it as easy as possible for anyone in the
            world to diversify into real estate investing.
          </Typography>
          <Button size={ButtonSizes.L} color={COLORS.MID_PURPLE} fullWidth>
            <Typography
              variant={TVariant.M}
              color={COLORS.WHITE}
              weight={TWeight.BOLD}
              onClick={goToMarketPlace}
            >
              View Properties
            </Typography>
          </Button>
        </TextContainer>
      </Introduction>
      <Description>
        <Title>
          <Typography variant={TVariant.L} weight={TWeight.BOLD}>
            There is a better way to invest in real estate with WMSY
          </Typography>
        </Title>
        <Row>
          <SvgContainer width={30}>
            <House />
          </SvgContainer>
          <TextDescription width={40}>
            <Typography variant={TVariant.L}>
              Whether you are a beginner or a seasoned pro you can partake in
              memberships at any size. From single families to a 100+ unit
              properties. All with a click of the finger and a touch of whimsy.
              It's that easy.
            </Typography>
          </TextDescription>
        </Row>
        <Title>
          <Typography variant={TVariant.L} weight={TWeight.BOLD}>
            Our team brings experience in real estate, data, technology,
            operations, and finance
          </Typography>
        </Title>
        <EllipsesContainer>
          {ellipses.map((id) => (
            // TODO: Replace Ellipse with corresponding svg
            <SvgContainer width={15} key={id}>
              <Ellipse />
            </SvgContainer>
          ))}
        </EllipsesContainer>
        <Row>
          <SvgContainer width={25}>
            <CardanoIcon />
          </SvgContainer>
          <TextDescription width={50}>
            <Typography variant={TVariant.XL} weight={TWeight.BOLD}>
              We use the Cardano blockchain
            </Typography>
            <Typography variant={TVariant.L}>
              Cardano offers faster transaction speeds and lower fees than
              Ethereum, Solana, and other popular blockchains.
            </Typography>
          </TextDescription>
        </Row>
      </Description>
    </>
  );
};
