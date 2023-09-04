// const mongoose = require("mongoose");
// const { GraphQLError } = require("graphql");
// const {
//   Arg,
//   Ctx,
//   FieldResolver,
//   Int,
//   Query,
//   Resolver,
//   Root,
// } = require("type-graphql");
// const { Context } = require("../../../../pages/api/graphql");
// const { ResolversErrors } = require("../errors");
// const { AmenityProperty, Media, Property } = require("../objectTypes");
// const { getCustomer } = require("../utils");

// const db = require("../../../utils");
// const { PropertyDB, MediaDB, AmenityPropertyDB, PropertyStyleDB, PropertyTypeDB } = db.models;

// const ORDER_RESERVED_STATES = [
//   "PRE_PAY",
//   "TX_OK",
//   "TX_IN_PROGRESS",
//   "PAY_OK",
// ];

// const PropertiesResolver = Resolver((type) => Property, {
//   async properties(
//     { limit, offset, orderBy, where }
//   ) {
//     return PropertyDB.find({ ...where, status: "PUBLISHED" })
//       .limit(limit)
//       .skip(offset)
//       .sort(orderBy)
//       .exec();
//   },

//   async property(
//     { id }
//   ) {
//     try {
//       return PropertyDB.findOne({ id, status: "PUBLISHED" });
//     } catch {
//       throw new GraphQLError(ResolversErrors.NOT_FOUND);
//     }
//   },

//   media(
//     property
//   ) {
//     return MediaDB.find({ propertyId: property.id }).sort({ order: "asc" });
//   },

//   amenities(
//     property
//   ) {
//     return AmenityPropertyDB.find({ propertyId: property.id }).sort({ order: "asc" });
//   },

//   propertyStyle(
//     property
//   ) {
//     return PropertyStyleDB.findById(property.propertyStyleId);
//   },

//   propertyType(
//     property
//   ) {
//     return PropertyTypeDB.findById(property.propertyTypeId);
//   },

//   async sharesLeft(
//     property
//   ) {
//     const reservedTokens = await Order.aggregate([
//       { $match: { propertyId: mongoose.Types.ObjectId(property.id), status: { $in: ORDER_RESERVED_STATES } } },
//       { $group: { _id: null, totalTokens: { $sum: "$tokens" } } },
//     ]);

//     if (!reservedTokens[0]) return Number(property.tokens);
//     return Number(property.tokens - reservedTokens[0].totalTokens);
//   },

//   investors(
//     property
//   ) {
//     return Order.aggregate([
//       { $match: { propertyId: mongoose.Types.ObjectId(property.id) } },
//       { $group: { _id: "$customerId" } },
//       { $count: "numInvestors" }
//     ]).then(res => res[0].numInvestors);
//   },

//   async sharesOwned(
//     property,
//     { session }
//   ) {
//     const customer = await getCustomer(session);
//     const tokens = await Order.aggregate([
//       { $match: { status: { $in: ORDER_RESERVED_STATES }, customerId: customer.id } },
//       { $group: { _id: null, totalTokens: { $sum: "$tokens" } } },
//     ]);

//     return tokens[0] ? Number(tokens[0].totalTokens) : 0;
//   }
// });

// module.exports = {
//   PropertiesResolver,
// };
