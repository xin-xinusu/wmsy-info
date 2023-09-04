import { gql } from "@apollo/client";

export const REGISTER_CUSTOMER = gql`
  mutation register($data: RegisterInput!) {
    register(data: $data) {
      email
      firstName
      lastName
    }
  }
`;
