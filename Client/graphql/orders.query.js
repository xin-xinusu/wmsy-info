import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query getOrders($offset: Int, $limit: Int) {
    orders(offset: $offset, limit: $limit) {
      property {
        propertyAddress
        state
        city
        zipCode
      }
      tokens
      price
      status
      createdAt
      totalOrders
      txId
      id
    }
  }
`;
