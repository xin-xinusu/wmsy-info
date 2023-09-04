import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { COLORS } from "../../utils/constants";
import {
  TFont,
  TVariant,
  TWeight,
} from "./typography.standard";
import { extractField } from "../../utils";

export const Typography = ({
  children,
  variant = TVariant.B,
  color = COLORS.DARK_PURPLE,
  weight = TWeight.REGULAR,
  font = TFont.PRIMARY,
  underline = false,
  onClick,
}) => {

  return (
    <TypographyStyle
      variant={variant}
      color={color}
      font={font}
      weight={weight}
      onClick={onClick}
      underline={underline}
      style={{color: color}}
    >
      {children}
    </TypographyStyle>
  );
};

const selectFontSize = ({ variant }) => {
  switch (variant) {
    case TVariant.XS:
      return "8";
    case TVariant.S:
      return "12";
    case TVariant.B:
      return "14";
    case TVariant.M:
      return "18";
    case TVariant.XM:
      return "24";
    case TVariant.L:
      return "32";
    case TVariant.XL:
      return "48";
    default:
      return "14";
  }
};

const getWeight = ({ weight }) => {
  switch (weight) {
    case TWeight.BOLD:
      return "700";
    case TWeight.LIGHT:
      return "300";
    case TWeight.XREGULAR:
      return "500";
    default:
      return "400";
  }
};

const getFont = ({ font }) => {
  return font === TFont.PRIMARY ? "var(--PRIMARY-FONT)" : "var(--LOGO-FONT)";
};

const getUnderline = ({ underline }) => {
  return underline ? "2px solid currentColor" : "none";
};

const extractColor = props => props.color;

// ${'' /* /*${extractField(extractColor)}*/; */}


const TypographyStyle = styled.div`
  color: 'white';
  font-size: ${selectFontSize}px;
  font-weight: ${getWeight};
  font-family: ${getFont};
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: ${getUnderline};
`;
