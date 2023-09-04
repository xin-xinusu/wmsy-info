import { gql } from 'apollo-server';

const orderTypeDefs = gql`
  type Order {
    id: ID!
    txId: String
    txDate: Date
    txEnd: Date
    tokens: Float
    price: Float
    fee: Float
    purchaseTxId: String
    purchasedStart: Date
    purchasedEnd: Date
    status: OrderStatus
    property: Property
    customer: Customer
    createdAt: Date!
    updatedAt: Date!
  }

  enum OrderStatus {
    PRE_PAY
    PAY_FAIL
    PAY_OK
    TX_IN_PROGRESS
    TX_OK
  }

  extend type Query {
    order(id: ID!): Order
    orders: [Order!]!
  }

  extend type Mutation {
    createOrder(input: OrderInput!): Order!
    updateOrder(id: ID!, input: OrderUpdateInput!): Order!
    deleteOrder(id: ID!): Boolean!
  }

  input OrderInput {
    txId: String
    txDate: Date
    txEnd: Date
    tokens: Float
    price: Float
    fee: Float
    purchaseTxId: String
    purchasedStart: Date
    purchasedEnd: Date
    status: OrderStatus
    propertyId: ID!
    customerId: ID!
  }

  input OrderUpdateInput {
    txId: String
    txDate: Date
    txEnd: Date
    tokens: Float
    price: Float
    fee: Float
    purchaseTxId: String
    purchasedStart: Date
    purchasedEnd: Date
    status: OrderStatus
    propertyId: ID
    customerId: ID
  }
`;

export default orderTypeDefs;