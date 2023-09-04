import { gql } from 'apollo-server';

const propertyConditionTypeDefs = gql`
  type PropertyCondition {
    id: ID!
    name: String!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    propertyCondition(id: ID!): PropertyCondition
    propertyConditions: [PropertyCondition!]!
  }

  extend type Mutation {
    createPropertyCondition(input: PropertyConditionInput!): PropertyCondition!
    updatePropertyCondition(id: ID!, input: PropertyConditionUpdateInput!): PropertyCondition!
    deletePropertyCondition(id: ID!): Boolean!
  }

  input PropertyConditionInput {
    name: String!
  }

  input PropertyConditionUpdateInput {
    name: String
  }
`;

export default propertyConditionTypeDefs;