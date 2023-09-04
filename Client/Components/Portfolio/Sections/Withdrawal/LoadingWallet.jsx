import React from "react";
import { TVariant, Typography } from "../../../Typography";
import { Loading, LoadingVariant } from "../../../Loading";

const LoadingWallet = () => {
  return (
    <>
      <Typography variant={TVariant.XM}>Connecting to wallet...</Typography>
      <Typography variant={TVariant.M}>Please wait</Typography>
      <Loading variant={LoadingVariant.FIT} />
    </>
  );
};

export default LoadingWallet;
