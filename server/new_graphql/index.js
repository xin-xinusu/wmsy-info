// import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
// import { makeExecutableSchema } from '@graphql-tools/schema';

// import {
//   adminResolvers,
//   amenityPropertyTypeResolvers,
//   amenityPropertyResolvers,
//   amenityResolvers,
//   currencyResolvers,
//   customerResolvers,
//   extractionResolvers,
//   mediaResolvers,
//   occupancyStatusResolvers,
//   orderResolvers,
//   propertyConditionResolvers,
//   propertyMintResolvers,
//   propertyStyleResolvers,
//   propertyTypeResolvers,
//   propertyResolvers,
//   rentalPropertyStatusResolvers,
//   walletResolvers
// } from './resolvers'

// import {
//   adminTypeDefs,
//   amenityPropertyTypeTypeDefs,
//   amenityPropertyTypeDefs,
//   amenityTypeDefs,
//   currencyTypeDefs,
//   customerTypeDefs,
//   extractionTypeDefs,
//   mediaTypeDefs,
//   occupancyStatusTypeDefs,
//   orderTypeDefs,
//   propertyConditionTypeDefs,
//   propertyMintTypeDefs,
//   propertyStyleTypeDefs,
//   propertyTypeTypeDefs,
//   propertyTypeDefs,
//   rentalPropertyStatusTypeDefs,
//   walletTypeDefs
// } from './resolvers'

// const typeDefs = mergeTypeDefs([
//   adminTypeDefs,
//   amenityPropertyTypeTypeDefs,
//   amenityPropertyTypeDefs,
//   amenityTypeDefs,
//   currencyTypeDefs,
//   customerTypeDefs,
//   extractionTypeDefs,
//   mediaTypeDefs,
//   occupancyStatusTypeDefs,
//   orderTypeDefs,
//   propertyConditionTypeDefs,
//   propertyMintTypeDefs,
//   propertyStyleTypeDefs,
//   propertyTypeTypeDefs,
//   propertyTypeDefs,
//   rentalPropertyStatusTypeDefs,
//   walletTypeDefs
// ]);

// const resolvers = mergeResolvers([
//   adminResolvers,
//   amenityPropertyTypeResolvers,
//   amenityPropertyResolvers,
//   amenityResolvers,
//   currencyResolvers,
//   customerResolvers,
//   extractionResolvers,
//   mediaResolvers,
//   occupancyStatusResolvers,
//   orderResolvers,
//   propertyConditionResolvers,
//   propertyMintResolvers,
//   propertyStyleResolvers,
//   propertyTypeResolvers,
//   propertyResolvers,
//   rentalPropertyStatusResolvers,
//   walletResolvers
// ]);


// export default makeExecutableSchema({ typeDefs, resolvers });