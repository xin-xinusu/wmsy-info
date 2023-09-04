import { gql } from "@apollo/client";

export const DELETE_WALLET = gql`
  mutation deleteWallet($data: WalletInput!) {
    deleteWallet(data: $data) {
      id
    }
  }
`;
