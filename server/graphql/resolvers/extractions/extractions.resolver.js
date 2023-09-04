import { GraphQLError } from "graphql";
import { CURRENCIES } from "../../../../utils/constants";
import { fetchCoinGeckoAPI, updateAdaPrice } from "../../../utils/currency";
import { ResolversErrors } from "../../errors";
import { Extraction } from "../../objectTypes";
import { getCustomer } from "../../utils";

import db from '../../utils'

const CreateExtraction = {
  currency: CURRENCIES, // Depending on your implementation, you might need to handle the enum differently.
  amount: Number,
  receivingAddress: String
};

const ExtractionResolver = {
  Mutation: {
    createExtraction: async (parent, args, context, info) => {
      const { prisma, session } = context;
      const customer = await getCustomer(db.Customer, session);

      const { extractionAmountInUSDCents } = await assertCustomerCanExtract(
        db.Extraction,
        customer,
        args.data
      );

      const currency = await db.CurrencyModel.findOne({ name: args.data.currency });

      if (!currency) {
        throw new GraphQLError(ResolversErrors.CURRENCY_NOT_FOUND);
      }

      const extraction = new ExtractionModel({
        currencyId: currency.id,
        amount: args.data.amount,
        customerId: customer.id,
        status: 'IN_QUEUE', // Assuming you have an enum or a string that matches this status
        receivingAddress: args.data.receivingAddress
      });

      await extraction.save();

      // Update customer's balance
      customer.balance -= extractionAmountInUSDCents;
      await customer.save();

      return extraction;
    }
  }
};
const assertCustomerCanExtract = async (ExtractionModel, customer, newExtraction) => {
  // the extraction amount is a positive number
  if (newExtraction.amount <= 0) {
    throw new GraphQLError(ResolversErrors.WRONG_EXTRACTION_AMOUNT);
  }

  // customer has no extractions in progress
  const extractionsInProgress = await ExtractionModel.countDocuments({
    status: { $in: ['IN_QUEUE', 'TX_PENDING'] },
    customerId: customer.id
  });

  if (extractionsInProgress > 0) {
    throw new GraphQLError(ResolversErrors.EXTRACTION_IN_PROGRESS);
  }

  // only ADA extractions are supported (for now)
  if (newExtraction.currency !== CURRENCIES.ADA) {
    throw new GraphQLError(ResolversErrors.ONLY_ADA_EXTRACTIONS_ALLOWED);
  }

  // customer has sufficient cash balance
  const currencyPrice = await getCurrencyPrice(CurrencyModel, newExtraction.currency);
  const extractionAmountInUSDCents = BigInt(
    Math.ceil(newExtraction.amount * (1 / currencyPrice) * 100)
  );

  if (customer.balance < extractionAmountInUSDCents) {
    throw new GraphQLError(ResolversErrors.INSUFFICIENT_CASH_BALANCE);
  }

  return { extractionAmountInUSDCents };
};

const getCurrencyPrice = async (CurrencyModel, currencyName) => {
  const currency = await db.Currency.findOne({ name: currencyName });

  if (!currency) {
    throw new GraphQLError(ResolversErrors.CURRENCY_NOT_FOUND);
  }

  const priceIsStale = new Date().getTime() - new Date(currency.updatedAt).getTime() > 10 * 60 * 1000;
  const currencyPrice = priceIsStale ? await currentCurrencyPrice(CurrencyModel, currencyName) : currency.price;

  return currencyPrice;
};

const currentCurrencyPrice = async (CurrencyModel, currencyName) => {
  switch (currencyName) {
    case CURRENCIES.ADA:
      const adaPrice = await fetchCoinGeckoAPI();
      await db.CurrencyModel.updateOne({ name: CURRENCIES.ADA }, { price: adaPrice });
      return adaPrice;

    default:
      throw new GraphQLError(ResolversErrors.CURRENCY_NOT_SUPPORTED);
  }
};

export default ExtractionResolver;