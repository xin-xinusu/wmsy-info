import { gql } from "@apollo/client";

export const BUY_TOKENS = gql`
  mutation buyTokens($data: CreateOrderInput!) {
    buyTokens(data: $data) {
      propertyId
    }
  }
`;
