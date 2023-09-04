import { gql } from "@apollo/client";

export const GET_PROPERTIES = gql`
  query properties(
    $limit: Int
    $offset: Int
    $orderBy: PropertyOrderByWithRelationInput
    $where: PropertyWhereInput
  ) {
    properties(
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      where: $where
    ) {
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
      sharesLeft
      tokens
      order
      propertyAddress
      city
      state
      zipCode
      coc
      irr
      appreciation
      media {
        id
        url
        order
      }
    }
  }
`;
