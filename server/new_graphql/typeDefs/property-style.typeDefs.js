import { gql } from 'apollo-server';

const propertyStyleTypeDefs = gql`
  type PropertyStyle {
    id: ID!
    name: String!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    propertyStyle(id: ID!): PropertyStyle
    propertyStyles: [PropertyStyle!]!
  }

  extend type Mutation {
    createPropertyStyle(input: PropertyStyleInput!): PropertyStyle!
    updatePropertyStyle(id: ID!, input: PropertyStyleUpdateInput!): PropertyStyle!
    deletePropertyStyle(id: ID!): Boolean!
  }

  input PropertyStyleInput {
    name: String!
  }

  input PropertyStyleUpdateInput {
    name: String
  }
`;

export default propertyStyleTypeDefs;