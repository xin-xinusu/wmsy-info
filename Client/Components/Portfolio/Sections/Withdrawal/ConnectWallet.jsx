import React from "react";
// import { LucidProvider, useLucid } from "whimsy-cardano-lib";
import Wallet from "../../../../../assets/svg/Account/wallet.svg";
import { COLORS } from "../../../../utils";
import { Button } from "../../../Button";
import { Loading } from "../../../Loading";
import { TVariant, Typography } from "../../../Typography";
import { ConnectWalletWrapper } from "./WithdrawalStyles";

const ConnectWalletContent = ({
  setConnectingToWallet,
  setAddress,
  setWalletError,
  connectingToWallet = false,
}) => {
  const { lucid } = useLucid();

  const handleWalletConnection = async () => {
    setConnectingToWallet(true);
    try {
      const address = await lucid?.wallet.address();

      if (!address) {
        throw new Error("Lucid not initialized");
      }
      setAddress(address);
    } catch (err) {
      console.error(err instanceof Error ? err.message : err);
      setWalletError(
        "We couldn't connect to your wallet. Please, check you have Eternl installed"
      );
    }
    setConnectingToWallet(false);
  };
  if (!lucid || connectingToWallet) return <Loading />;

  return (
    <ConnectWalletWrapper>
      <Typography variant={TVariant.XM}>
        We need to connect to your Eternl wallet
      </Typography>
      <Button onClick={handleWalletConnection}>
        <Typography variant={TVariant.M} color={COLORS.WHITE}>
          Click here to connect your wallet &nbsp;
        </Typography>
        <Wallet fill={COLORS.WHITE} />
      </Button>
    </ConnectWalletWrapper>
  );
};

const ConnectWallet = (props) => {
  return (
    <LucidProvider
      blockfrostProjectId={process.env.NEXT_PUBLIC_BLOCKFROST_PROJECT_ID || ""}
      walletName="eternl"
    >
      <ConnectWalletContent {...props} />
    </LucidProvider>
  );
};

export default ConnectWallet;
