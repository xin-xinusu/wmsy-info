import { gql } from 'apollo-server';

const propertyTypeTypeDefs = gql`
  type PropertyType {
    id: ID!
    name: String!
    price: Float!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    propertyType(id: ID!): PropertyType
    propertyTypes: [PropertyType!]!
  }

  extend type Mutation {
    createPropertyType(input: PropertyTypeInput!): PropertyType!
    updatePropertyType(id: ID!, input: PropertyTypeUpdateInput!): PropertyType!
    deletePropertyType(id: ID!): Boolean!
  }

  input PropertyTypeInput {
    name: String!
    price: Float!
  }

  input PropertyTypeUpdateInput {
    name: String
    price: Float
  }  
`;

export default propertyTypeTypeDefs;