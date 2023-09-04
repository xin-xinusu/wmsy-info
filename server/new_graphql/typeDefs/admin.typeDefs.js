import { gql } from 'apollo-server';

const adminTypeDefs = gql`
  type Admin {
    id: ID!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    admin(id: ID!): Admin
    admins: [Admin!]
  }

  input AdminInput {
    email: String!
    password: String!
  }

  input AdminUpdateInput {
    email: String
    password: String
  }

  extend type Mutation {
    createAdmin(input: AdminInput!): Admin!
    updateAdmin(id: ID!, input: AdminUpdateInput!): Admin!
    deleteAdmin(id: ID!): Admin!
  }
`;

export default adminTypeDefs;