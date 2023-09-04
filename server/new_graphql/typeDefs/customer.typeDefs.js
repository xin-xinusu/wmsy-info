import { gql } from 'apollo-server';

const currencyTypeDefs = gql`
  type Customer {
    id: ID!
    email: String!
    firstName: String
    lastName: String
    city: String
    state: String
    country: String
    currencySymbol: String!
    currencySymbolConfirmed: Boolean!
    address: String!
    profilePicture: Media
    orders: [Order!]
    wallet: [Wallet!]
    extractions: [Extraction!]
    balance: Float!
    lastUpdatedBalance: String
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    customer(id: ID!): Customer
    customers: [Customer!]
  }

  input CustomerInput {
    email: String!
    password: String!
    firstName: String
    lastName: String
    city: String
    state: String
    country: String
    currencySymbol: String!
    address: String!
  }

  input CustomerUpdateInput {
    email: String
    password: String
    firstName: String
    lastName: String
    city: String
    state: String
    country: String
    currencySymbol: String
    address: String
  }

  extend type Mutation {
    createCustomer(input: CustomerInput!): Customer!
    updateCustomer(id: ID!, input: CustomerUpdateInput!): Customer!
    deleteCustomer(id: ID!): Customer!
  }
`;

export default currencyTypeDefs;