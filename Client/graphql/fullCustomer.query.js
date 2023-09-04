import { gql } from "@apollo/client";

export const FULL_CUSTOMER = gql`
  query fullCustomer {
    customer {
      id
      email
      cashBalance
      propertiesOwned
      rentalIncome
      appreciation
      totalReturn
      nextPayout
      properties {
        id
        propertyAddress
        state
        city
        zipCode
        sharesOwned
        pricePerShare
        media {
          id
          url
          order
        }
      }
    }
  }
`;
