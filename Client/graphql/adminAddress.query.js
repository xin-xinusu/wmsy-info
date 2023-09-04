import { gql } from "@apollo/client";

export const GET_ADMIN_ADDRESS = gql`
  query adminAddress {
    adminAddress {
      adminAddress
    }
  }
`;