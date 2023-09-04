import { gql } from "@apollo/client";

export const GET_PROPERTY = gql`
  query property($id: Int!) {
    property(id: $id) {
      id
      name
      overview
      description
      lotSize
      livingSpace
      yearBuilt
      rental
      currentPrice
      offeringAmount
      pricePerShare
      order
      propertyAddress
      city
      state
      zipCode
      bedrooms
      bathrooms
      halfBaths
      investors
      sharesLeft
      tokens
      propertyStyle {
        name
      }
      propertyType {
        name
      }
      media {
        id
        url
        order
        width
        height
      }
      amenities {
        amenity {
          id
          name
          media {
            id
            url
          }
        }
      }
    }
  }
`;
