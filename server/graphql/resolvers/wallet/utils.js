import mongoose from 'mongoose';
import { WalletInput } from '../../inputTypes';
import { GraphQLError } from 'graphql';
import { ResolversErrors } from '../../errors';
import { MongooseErrors } from '../../../utils';

import * as db from '../../../utils'

const createWalletDB = async (mongooseClient, data, customer) => {
  try {
    const wallet = await db.Wallet.create({
      walletName: data.walletName,
      walletAddress: data.walletAddress,
      customerId: customer.id,
    });
    return wallet;
  } catch (error) {
    if (error instanceof mongoose.Error && error.code === MongooseErrors.uniqueConstraintFailed) {
      throw new GraphQLError(ResolversErrors.WALLET_ALREADY_EXISTS);
    }
    throw new GraphQLError(ResolversErrors.INTERNAL_SERVER_ERROR);
  }
};

export default createWalletDB;
