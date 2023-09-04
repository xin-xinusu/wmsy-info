import { gql } from "@apollo/client";

export const CREATE_WALLET = gql`
  mutation createWallet($data: WalletInput!) {
    createWallet(data: $data) {
      id
    }
  }
`;
