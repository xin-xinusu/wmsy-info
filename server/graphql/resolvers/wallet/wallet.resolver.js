// const { Query, Mutation, Resolver, Arg, Ctx } = require('type-graphql');
// const { Context } = require('../../../../pages/api/graphql');
// const WalletInput = require('../../inputTypes');
// const Wallet = require('../../objectTypes');
// const getCustomer = require('../../utils');
// const createWalletDB = require('./utils');
// const db = require('../../../utils');

// const WalletResolver = Resolver.ofType(Wallet)
//   .addQuery({
//     name: 'wallets',
//     type: [Wallet],
//     resolve: async ({ context: { mongoose, session } }) => {
//       const customer = await getCustomer(mongoose, session);
//       return db.Wallet.find({
//         customerId: customer.id,
//       });
//     },
//   })
//   .addMutation({
//     name: 'createWallet',
//     type: Wallet,
//     args: {
//       data: Arg.ofType(WalletInput),
//     },
//     resolve: async ({ context: { mongoose, session }, args: { data } }) => {
//       const customer = await getCustomer(mongoose, session);
//       const wallet = await createWalletDB(data, customer);
//       return wallet;
//     },
//   })
//   .addMutation({
//     name: 'deleteWallet',
//     type: Wallet,
//     args: {
//       data: Arg.ofType(WalletInput),
//     },
//     resolve: async ({ context: { mongoose, session }, args: { data } }) => {
//       const customer = await getCustomer(mongoose, session);
//       const wallet = await db.Wallet.findOne({
//         walletAddress: data.walletAddress,
//         customerId: customer.id,
//       });
//       if (!wallet) {
//         throw new Error('Wallet not found');
//       }
//       await db.Wallet.deleteOne({
//         walletAddress: data.walletAddress,
//         customerId: customer.id,
//       });
//       return wallet;
//     },
//   })
//   .addMutation({
//     name: 'editWallet',
//     type: Wallet,
//     args: {
//       data: Arg.ofType(WalletInput),
//     },
//     resolve: async ({ context: { mongoose, session }, args: { data } }) => {
//       const customer = await getCustomer(mongoose, session);
//       await db.Wallet.deleteOne({
//         walletAddress: data.oldWalletAddress,
//         customerId: customer.id,
//       });
//       const wallet = await createWalletDB(data, customer);
//       return wallet;
//     },
//   });

// module.exports = WalletResolver;
