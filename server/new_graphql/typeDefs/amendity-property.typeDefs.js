import { gql } from 'apollo-server';

const amendityPropertyTypeDefs = gql`
  type AmenityProperty {
    id: ID!
    order: Int!
    amount: Int!
    amenityId: Amenity!
    propertyId: Property!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    amenityProperty(id: ID!): AmenityProperty
    amenityProperties: [AmenityProperty!]
  }

  input AmenityPropertyInput {
    order: Int!
    amount: Int!
    amenityId: ID!
    propertyId: ID!
  }

  input AmenityPropertyUpdateInput {
    order: Int
    amount: Int
    amenityId: ID
    propertyId: ID
  }

  extend type Mutation {
    createAmenityProperty(input: AmenityPropertyInput!): AmenityProperty!
    updateAmenityProperty(id: ID!, input: AmenityPropertyUpdateInput!): AmenityProperty!
    deleteAmenityProperty(id: ID!): AmenityProperty!
  }
`;

export default amendityPropertyTypeDefs;

