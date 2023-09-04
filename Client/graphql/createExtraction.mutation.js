import { gql } from "@apollo/client";

export const CREATE_EXTRACTION = gql`
  mutation createExtraction($data: CreateExtraction!) {
    createExtraction(data: $data) {
      id
    }
  }
`;
