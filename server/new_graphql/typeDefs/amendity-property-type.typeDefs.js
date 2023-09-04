import { gql } from 'apollo-server';

const amendityPropertyTypeTypeDefs = gql`
  type AmenityPropertyType {
    id: ID!
    propertyTypeId: PropertyType!
    amenityId: Amenity!
    amenityOrder: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    amenityPropertyType(id: ID!): AmenityPropertyType
    amenityPropertyTypes: [AmenityPropertyType!]
  }

  input AmenityPropertyTypeInput {
    propertyTypeId: ID!
    amenityId: ID!
    amenityOrder: Int!
  }

  input AmenityPropertyTypeUpdateInput {
    propertyTypeId: ID
    amenityId: ID
    amenityOrder: Int
  }

  extend type Mutation {
    createAmenityPropertyType(input: AmenityPropertyTypeInput!): AmenityPropertyType!
    updateAmenityPropertyType(id: ID!, input: AmenityPropertyTypeUpdateInput!): AmenityPropertyType!
    deleteAmenityPropertyType(id: ID!): AmenityPropertyType!
  }
`;

export default amendityPropertyTypeTypeDefs;

