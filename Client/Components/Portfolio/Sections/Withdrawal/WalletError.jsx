import React from "react";
import { TVariant, TWeight, Typography } from "../../../Typography";
import { COLORS } from "../../../../utils";

export const WalletError = ({ error }) => (
  <Typography variant={TVariant.XM} color={COLORS.RED} weight={TWeight.BOLD}>
    {"An error ocurred:\n"}
    {error}
  </Typography>
);
