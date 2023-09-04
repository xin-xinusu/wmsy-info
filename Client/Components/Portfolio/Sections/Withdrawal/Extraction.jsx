import React, { useState } from "react";
import { useRouter } from "next/router";
import { ChangeEventHandler } from "react";
import { ADAToDollars, centsToDollars } from "../../../../../Admin/utils/moneyFormatter";
import { CURRENCIES } from "../../../utils";
import { CREATE_EXTRACTION } from "../../../../graphql/createExtraction.mutation";
import {
  COLORS,
  CreateExtractionMutationVariables,
  Currencies,
} from "../../../../utils";
import { Button, ButtonSizes } from "../../../Button";
import { InputField } from "../../../InputField";
import { TVariant, TWeight, Typography } from "../../../Typography";
import {
  AddressSection,
  ExtractInputSection,
  WithdrawalButtonsSection,
} from "../../PortfolioStyles";

const Extraction = ({
  ADAValue,
  balance,
  dollars,
  address,
  closeModal,
}) => {
  const [error, setError] = useState(null);
  const [seeMore, setSeeMore] = useState(false);
  const [equivalentAmount, setEquivalentAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const router = useRouter();
  
  const handleWithdrawal = async () => {
    if (!address) {
      setError("Something went wrong with your wallet");
      return;
    }
    setEquivalentAmount(0);
    // Use your extraction logic here
  };

  const handleAmountChange = (e) => {
    const value = e.target.valueAsNumber;
    const inputNumber = isNaN(value) ? 0 : parseFloat(value.toFixed(3));
    if (inputNumber >= 0 && inputNumber <= balance) {
      setAmount(inputNumber);
      // TODO: change if currency is different
      const convertedValue = Number(ADAToDollars(inputNumber, ADAValue || 1));
      setEquivalentAmount(convertedValue);
    } else {
      setAmount(parseFloat(balance.toFixed(3)));
      const convertedValue = Number(
        ADAToDollars(parseFloat(balance.toFixed(3)), ADAValue || 1)
      );
      setEquivalentAmount(convertedValue);
    }
    setError(null);
  };

  const handleSeeMore = (seeMore) => () => {
    setSeeMore(!seeMore);
  };

  const changeCurrency = (currency) => () => {
    // Implement your currency change logic here
  };

  return (
    <>
      <Typography variant={TVariant.XM}>Your withdrawal address is:</Typography>
      <Typography
        variant={TVariant.M}
        weight={TWeight.BOLD}
        color={COLORS.DISABLED}
      >
        <AddressSection>
          {seeMore ? address : address?.slice(0, 30) + "..."}
          <Typography
            variant={TVariant.M}
            color={COLORS.MID_PURPLE}
            onClick={handleSeeMore(seeMore)}
          >
            {seeMore ? "See less" : "See more"}
          </Typography>
        </AddressSection>
      </Typography>
      <ExtractInputSection>
        <Typography variant={TVariant.M} weight={TWeight.BOLD}>
          {`Insert how much ADA you want to withdraw \n (Actually owned: ${balance}₳ ≃ $${centsToDollars(
            dollars
          )})`}
        </Typography>
        <InputField
          type="number"
          pattern="[0-9]"
          onChange={handleAmountChange}
          value={equivalentAmount ? Number(amount).toString() : 0}
        />
        <Typography variant={TVariant.M}>
          This should be the equivalent in USD: {equivalentAmount}
        </Typography>
      </ExtractInputSection>
      <Typography variant={TVariant.XM} weight={TWeight.LIGHT}>
        What currency do you want to extract in?
      </Typography>
      <WithdrawalButtonsSection>
        <Button
          size={ButtonSizes.XS2}
          color={COLORS.LIGHT_PURPLE}
          onClick={changeCurrency(CURRENCIES.ADA)}
        >
          <Typography variant={TVariant.M} color={COLORS.WHITE}>
            ADA
          </Typography>
        </Button>
        <Button size={ButtonSizes.XS2} color={COLORS.LIGHT_PURPLE} disabled>
          <Typography variant={TVariant.M} color={COLORS.WHITE}>
            Venom
          </Typography>
        </Button>
        <Button size={ButtonSizes.XS2} color={COLORS.LIGHT_PURPLE} disabled>
          <Typography variant={TVariant.M} color={COLORS.WHITE}>
            USD
          </Typography>
        </Button>
      </WithdrawalButtonsSection>
      <Button
        onClick={handleWithdrawal}
        disabled={loading || error !== null}
        fullWidth
      >
        <Typography variant={TVariant.M} color={COLORS.WHITE}>
          Withdraw
        </Typography>
      </Button>
      {error && (
        <Typography
          variant={TVariant.M}
          color={COLORS.RED}
          weight={TWeight.BOLD}
        >
          {error}
        </Typography>
      )}
    </>
  );
};

export default Extraction;
