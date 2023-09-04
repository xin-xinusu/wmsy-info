// import { GraphQLError } from 'graphql';
// import { Resolver, Mutation, Query, FieldResolver, Arg, Ctx, Int } from 'type-graphql';
// import { Context } from '../../../pages/api/graphql';
// import { initializeLucid } from '../../../handlers/transferTokens/utils';
// import { ResolversErrors } from '../../errors';
// import { CreateOrderInput } from '../../inputTypes';
// import { Order } from '../../objectTypes';
// import { getCustomer } from '../../utils';
// import { createOrder } from './dbTransactions';
// import mongoose from 'mongoose';

// import db from '../../../utils'

// // TODO: complete
// const updateCurrencyIfNeeded = async (mongooseClient) => {};

// class OrderResolver {
//   async buyTokens({ mongoose, session }, { txId, transaction, propertyId, tokens }) {
//     const customer = await getCustomer(mongoose, session);
//     await updateCurrencyIfNeeded(mongoose);
//     const order = await mongoose.transaction(
//       createOrder(customer, propertyId, tokens, txId)
//     );

//     const lucid = await initializeLucid();
//     try {
//       await lucid.wallet.submitTx(transaction);
//     } catch (error) {
//       console.log(error);
//       throw new GraphQLError(ResolversErrors.SUBMIT_PURCHASE_TX);
//     }

//     return { ...order, id: order.id.toString() };
//   }

//   async orders({ mongoose, session }, { skip, take }) {
//     const customer = await getCustomer(mongoose, session);
//     return db.Order.find({ customerId: customer.id })
//       .populate('property')
//       .skip(skip)
//       .limit(take)
//       .sort({ createdAt: 'desc' });
//   }

//   async adminAddress() {
//     const lucid = await initializeLucid();
//     const adminAddress = await lucid.wallet.address();
//     return { adminAddress };
//   }

//   async totalOrders({ session, mongoose }) {
//     const customer = await getCustomer(mongoose, session);
//     return db.Order.countDocuments({
//       customerId: customer.id,
//     });
//   }
// }

// export default OrderResolver;
