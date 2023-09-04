import { gql } from 'apollo-server';

const walletTypeDefs = gql`
  type Wallet {
    id: ID!
    walletName: String
    walletAddress: String!
    customerId: ID!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    wallet(id: ID!): Wallet
    wallets: [Wallet!]
  }

  input WalletInput {
    walletName: String
    walletAddress: String!
    customerId: ID!
  }

  input WalletUpdateInput {
    walletName: String
    walletAddress: String
  }

  extend type Mutation {
    createWallet(input: WalletInput!): Wallet!
    updateWallet(id: ID!, input: WalletUpdateInput!): Wallet!
    deleteWallet(id: ID!): Wallet!
  }
`;

export default walletTypeDefs;