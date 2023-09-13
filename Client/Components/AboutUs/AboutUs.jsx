import { useRouter } from "next/router";
import Cardano from "../../../assets/banner-elements/cardano-whimsy.svg";
import Ellipse from "../../../assets/svg/Ellipse.svg";
import Tick from "../../../assets/svg/Tick.svg";
import House from "../../../assets/svg/House.svg";
import { COLORS, Pages } from "../../utils";
import { Button, ButtonSizes } from "../Button";
import { TVariant, TWeight, Typography } from "../Typography";

// Make sure to import the styled components if you are using them
import {
  BulletLine,
  UnorderedBulletlist,
  Description,
  EllipsesContainer,
  Introduction,
  Row,
  SvgContainer,
  TextContainer,
  TextDescription,
  Title,
} from "./AboutUsStyles";

const TickBullet = () => <div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: COLORS.WHITE,
  marginRight: '20px'
}}>
  <SvgContainer 
    width={25} 
    style={{display: "flex", justifyContent: "center", fontWeight: "600" }}
  >
    <Tick fill={COLORS.DARK_PURPLE} />
  </SvgContainer>
</div>

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
          <Typography 
            variant={TVariant.L} 
            color={COLORS.WHITE}
            weight={TWeight.BOLD}
          >
            <div style={{
              width: "100%",
              fontSize: "2.35rem",
              textAlign: 'center',
            }}>
              There is a better way to invest in real estate with WMSY
            </div>
            
            <UnorderedBulletlist>
              <BulletLine>
                <TickBullet />
                Easy for first time investors
              </BulletLine>
              <BulletLine>
                <TickBullet />
                Earn passive income without the work
              </BulletLine>
              <BulletLine>
                <TickBullet />
                Become a co-owner of multiple properties
              </BulletLine>
            </UnorderedBulletlist>
          </Typography>
          <Button 
            size={ButtonSizes.L} 
            color={COLORS.MID_PURPLE} 
            fullWidth
          >
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
            To make it as easy easy as possible for anyone in the world to diversity into real estate investing.
          </Typography>
        </Title>
        <Row>
          <SvgContainer width={25}>
            <Cardano />
          </SvgContainer>
          <TextDescription width={50}>
            <Typography variant={TVariant.XL} weight={TWeight.BOLD}>
              We use the Cardano blockchain
            </Typography>
            <Typography variant={TVariant.XM}>
              Cardano offers faster transaction speeds and lower fees than Ethereum, Solana, and other popular blockchains. Between Cardano and our very own VNM token, investors have the choice to invest however they choose.
            </Typography>
          </TextDescription>
        </Row>
      </Description>
    </>
  );
};
