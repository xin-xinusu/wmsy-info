import { GraphQLScalarType, Kind } from 'graphql';

export const BigIntResolver = new GraphQLScalarType({
  name: 'CustomBigInt',
  description: 'BigInt custom scalar type',
  serialize(value) {
    // check the type of received value
    if (typeof value !== 'bigint' && typeof value !== 'number') {
      throw new Error('BigIntScalar can only serialize bigint values');
    }
    return value.toString(); // value sent to the client
  },
  parseValue(value) {
    // check the type of received value
    if (typeof value !== 'string' && typeof value !== 'number') {
      throw new Error('BigIntScalar can only parse string or number values');
    }
    return BigInt(value); // value from the client input variables
  },
  parseLiteral(ast) {
    // check the type of received value
    if (ast.kind !== Kind.STRING) {
      throw new Error('BigIntScalar can only parse string values');
    }
    return BigInt(ast.value); // value from the client query
  }
});
