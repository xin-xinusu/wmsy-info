import { gql } from "@apollo/client";

export const EDIT_WALLET = gql`
  mutation editWallet($data: WalletInput!) {
    editWallet(data: $data) {
      id
    }
  }
`;
