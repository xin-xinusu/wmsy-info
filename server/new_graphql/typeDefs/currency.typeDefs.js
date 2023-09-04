import { gql } from 'apollo-server';

const currencyTypeDefs = gql`
  type Currency {
    id: ID!
    name: String!
    price: Float!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    currency(id: ID!): Currency
    currencies: [Currency!]
  }

  input CurrencyInput {
    name: String!
    price: Float!
  }

  input CurrencyUpdateInput {
    name: String
    price: Float
  }

  extend type Mutation {
    createCurrency(input: CurrencyInput!): Currency!
    updateCurrency(id: ID!, input: CurrencyUpdateInput!): Currency!
    deleteCurrency(id: ID!): Currency!
  }
`;

export default currencyTypeDefs;