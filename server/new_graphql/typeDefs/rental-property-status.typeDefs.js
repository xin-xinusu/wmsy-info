import { gql } from 'apollo-server';

const rentalPropertyStatusTypeDefs = gql`
  type RentalPropertyStatus {
    id: ID!
    name: String!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    rentalPropertyStatus(id: ID!): RentalPropertyStatus
    rentalPropertyStatuses: [RentalPropertyStatus!]
  }

  input RentalPropertyStatusInput {
    name: String!
  }

  input RentalPropertyStatusUpdateInput {
    name: String
  }

  extend type Mutation {
    createRentalPropertyStatus(input: RentalPropertyStatusInput!): RentalPropertyStatus!
    updateRentalPropertyStatus(id: ID!, input: RentalPropertyStatusUpdateInput!): RentalPropertyStatus!
    deleteRentalPropertyStatus(id: ID!): RentalPropertyStatus!
  }
`;

export default rentalPropertyStatusTypeDefs;