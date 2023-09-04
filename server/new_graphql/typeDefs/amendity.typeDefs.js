import { gql } from 'apollo-server';

const amendityTypeDefs = gql`
  type Amenity {
    id: ID!
    name: String!
    mediaId: Media!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    amenity(id: ID!): Amenity
    amenities: [Amenity!]
  }

  input AmenityInput {
    name: String!
    mediaId: ID!
  }

  input AmenityUpdateInput {
    name: String
    mediaId: ID
  }

  extend type Mutation {
    createAmenity(input: AmenityInput!): Amenity!
    updateAmenity(id: ID!, input: AmenityUpdateInput!): Amenity!
    deleteAmenity(id: ID!): Amenity!
  }
`;

export default amendityTypeDefs;