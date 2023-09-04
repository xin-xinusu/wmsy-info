import { gql } from "@apollo/client";

export const GET_CUSTOMER = gql`
  query customer {
    customer {
      id
      email
      firstName
      lastName
      createdAt
      country
      state
      city
      address
      media {
        url
      }
    }
  }
`;
