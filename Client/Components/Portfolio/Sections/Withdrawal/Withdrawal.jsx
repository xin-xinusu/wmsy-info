import React, { useState } from "react";
import { COLORS } from "../../../../utils";
import { Button, ButtonSizes } from "../../../Button";
import { Modal } from "../../../Modal/Modal";
import { TVariant, TWeight, Typography } from "../../../Typography";
import { WithdrawalContainer } from "../../PortfolioStyles";
import { ConnectWallet } from "./ConnectWallet";
import { Extraction } from "./Extraction";
import LoadingWallet from "./LoadingWallet";
import WalletError from "./WalletError";

const Withdrawal = ({ ADAValue, balance, dollars }) => {
  const [showModal, setShowModal] = useState(false);

  const [address, setAddress] = useState(null);
  const [walletError, setWalletError] = useState(null);
  const [connectingToWallet, setConnectingToWallet] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    setAddress(null);
    setWalletError(null);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Button
        size={ButtonSizes.S}
        color={COLORS.DARK_PURPLE}
        onClick={handleShowModal}
        fullWidth
      >
        <Typography
          variant={TVariant.XM}
          weight={TWeight.BOLD}
          color={COLORS.WHITE}
        >
          Withdrawal
        </Typography>
      </Button>
      <Modal open={showModal} onClose={closeModal}>
        <WithdrawalContainer>
          {connectingToWallet ? (
            <LoadingWallet />
          ) : !address && !walletError ? (
            <ConnectWallet
              setAddress={setAddress}
              setConnectingToWallet={setConnectingToWallet}
              setWalletError={setWalletError}
            />
          ) : walletError ? (
            <WalletError error={walletError} />
          ) : (
            <Extraction
              ADAValue={ADAValue}
              balance={balance}
              address={address}
              dollars={dollars}
              closeModal={closeModal}
            />
          )}
        </WithdrawalContainer>
      </Modal>
    </>
  );
};

export default Withdrawal;
