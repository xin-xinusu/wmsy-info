import { gql } from 'apollo-server';

const propertyMintTypeDefs = gql`
  type PropertyMint {
    id: ID!
    uuid: String
    premintDate: Date
    visited: Boolean
    propertyId: Property
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    propertyMint(id: ID!): PropertyMint
    propertyMints: [PropertyMint!]!
  }

  extend type Mutation {
    createPropertyMint(input: PropertyMintInput!): PropertyMint!
    updatePropertyMint(id: ID!, input: PropertyMintUpdateInput!): PropertyMint!
    deletePropertyMint(id: ID!): Boolean!
  }

  input PropertyMintInput {
    uuid: String
    premintDate: Date
    visited: Boolean
    propertyId: ID!
  }

  input PropertyMintUpdateInput {
    uuid: String
    premintDate: Date
    visited: Boolean
    propertyId: ID
  }
`;

export default propertyMintTypeDefs;