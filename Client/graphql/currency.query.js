import { gql } from "@apollo/client";

export const GET_CURRENCY_VALUE = gql`
  query currency {
    currency {
      id
      name
      price
      updatedAt
    }
  }
`;
