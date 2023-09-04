import { gql } from "@apollo/client";

export const GET_WALLETS = gql`
  query wallets {
    wallets {
      walletAddress
      walletName
    }
  }
`;
