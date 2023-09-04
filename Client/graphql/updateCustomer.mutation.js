import { gql } from "@apollo/client";

export const UPDATE_CUSTOMER = gql`
  mutation updateCustomer($data: UpdateCustomerInput!) {
    updateCustomer(data: $data) {
      firstName
      lastName
      country
      state
      city
    }
  }
`;
