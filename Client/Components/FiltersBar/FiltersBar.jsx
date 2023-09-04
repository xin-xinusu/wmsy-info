import { Dispatch, FC, SetStateAction } from "react";
import { COLORS } from "../../utils/constants";
import { Variant } from "../List";
import { FiltersBarWrapper, TableLogo, TileLogo } from "./FiltersBarStyles";


const FiltersBar = ({ setVariant, variant }) => {
  const updateVariant = (variant) => () => setVariant(variant);

  const nextVariant = variant === Variant.TILE ? Variant.TABLE : Variant.TILE;

  const tileFill =
    variant === Variant.TILE ? COLORS.DARK_PURPLE : COLORS.DISABLED;
  const tableFill =
    variant === Variant.TABLE ? COLORS.DARK_PURPLE : COLORS.DISABLED;

  return (
    <FiltersBarWrapper>
      <TileLogo fill={tileFill} onClick={updateVariant(nextVariant)} />
      <TableLogo fill={tableFill} onClick={updateVariant(nextVariant)} />
    </FiltersBarWrapper>
  );
};

export default FiltersBar;
