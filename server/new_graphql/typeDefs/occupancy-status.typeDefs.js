import { gql } from 'apollo-server';

const occupancyStatusTypeDefs = gql`
  type OccupancyStatus {
    id: ID!
    name: String!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    occupancyStatus(id: ID!): OccupancyStatus
    occupancyStatuses: [OccupancyStatus!]!
  }

  extend type Mutation {
    createOccupancyStatus(input: OccupancyStatusInput!): OccupancyStatus!
    updateOccupancyStatus(id: ID!, input: OccupancyStatusUpdateInput!): OccupancyStatus!
    deleteOccupancyStatus(id: ID!): Boolean!
  }

  input OccupancyStatusInput {
    name: String!
  }

  input OccupancyStatusUpdateInput {
    name: String
  }
`;

export default occupancyStatusTypeDefs;