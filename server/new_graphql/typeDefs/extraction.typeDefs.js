import { gql } from 'apollo-server';

const extractionTypeDefs = gql`
  type Extraction {
    id: ID!
    txId: String!
    txDate: Date!
    txEnd: Date!
    currency: Currency!
    amount: Float!
    customer: Customer!
    status: ExtractionStatus!
    receivingAddress: String!
    createdAt: Date!
    updatedAt: Date!
  }

  enum ExtractionStatus {
    IN_QUEUE
    TX_PENDING
    TX_CONFIRMED
  }

  extend type Query {
    extraction(id: ID!): Extraction
    extractions: [Extraction!]!
  }

  extend type Mutation {
    createExtraction(input: ExtractionInput!): Extraction!
    updateExtraction(id: ID!, input: ExtractionUpdateInput!): Extraction!
    deleteExtraction(id: ID!): Boolean!
  }

  input ExtractionInput {
    txId: String!
    txDate: Date!
    txEnd: Date!
    currencyId: ID!
    amount: Float!
    customerId: ID!
    status: ExtractionStatus!
    receivingAddress: String!
  }

  input ExtractionUpdateInput {
    txId: String
    txDate: Date
    txEnd: Date
    currencyId: ID
    amount: Float
    status: ExtractionStatus
    receivingAddress: String
  }
`;

export default extractionTypeDefs;