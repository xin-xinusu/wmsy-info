import House from "../../../assets/svg/Home.svg";
import { PropertyNoImageContainer } from "./PropertyNoImageStyles";

export const PropertyNoImage = ({ size }) => {
  return (
    <PropertyNoImageContainer>
      <House width={size} height={size} />
    </PropertyNoImageContainer>
  );
};
