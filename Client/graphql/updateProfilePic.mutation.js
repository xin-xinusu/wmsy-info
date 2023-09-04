import { gql } from "@apollo/client";

export const UPDATE_PROFILE_PICTURE = gql`
  mutation updateProfilePicture($url: String!) {
    updateProfilePicture(url: $url) {
      id
      email
      media {
        id
        url
      }
    }
  }
`;
