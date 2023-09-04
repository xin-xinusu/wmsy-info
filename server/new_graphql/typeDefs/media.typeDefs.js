import { gql } from 'apollo-server';

const mediaTypeDefs = gql`
  type Media {
    id: ID!
    width: Int!
    height: Int!
    url: String!
    order: Int!
    fileType: String!
    description: String!
    property: Property
    customer: Customer
    amenity: Amenity
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    media(id: ID!): Media
    medias: [Media!]!
  }

  extend type Mutation {
    createMedia(input: MediaInput!): Media!
    updateMedia(id: ID!, input: MediaUpdateInput!): Media!
    deleteMedia(id: ID!): Boolean!
  }

  input MediaInput {
    width: Int!
    height: Int!
    url: String!
    order: Int!
    fileType: String!
    description: String
    propertyId: ID
    customerId: ID
    amenityId: ID
  }

  input MediaUpdateInput {
    width: Int
    height: Int
    url: String
    order: Int
    fileType: String
    description: String
    propertyId: ID
    customerId: ID
    amenityId: ID
  }
`;

export default mediaTypeDefs;