import { gql } from 'apollo-server';

const propertyTypeDefs = gql`
  type Property {
    id: ID!
    name: String!
    overview: String
    description: String
    order: Int
    lotSize: Float
    livingSpace: Float
    yearBuilt: Int
    propertyAddress: String
    state: String
    city: String
    zipCode: String
    bedrooms: Int
    bathrooms: Int
    halfBaths: Int
    rental: Float
    rentalDuration: Int
    initialPrice: Float
    currentPrice: Float
    offeringAmount: Float
    pricePerShare: Float
    tokens: Int
    publicationDate: Date
    status: PropertyStatus
    currencySymbol: String
    tokenName: String
    txId: String
    address: String
    transaction: String
    mintingDate: Date
    irr: Float
    coc: Float
    appreciation: Float
    propertyStyleId: PropertyStyle
    propertyTypeId: PropertyType
    propertyConditionId: PropertyCondition
    occupancyStatusId: OccupancyStatus
    rentalPropertyStatusId: RentalPropertyStatus
    media: [Media]
    amenities: [AmenityProperty]
    orders: [Order]
    propertyMint: [PropertyMint]
    createdAt: Date!
    updatedAt: Date!
  }

  enum PropertyStatus {
    CREATED
    PENDING
    READY
    PUBLISHED
  }

  extend type Query {
    property(id: ID!): Property
    properties: [Property!]!
  }

  extend type Mutation {
    createProperty(input: PropertyInput!): Property!
    updateProperty(id: ID!, input: PropertyUpdateInput!): Property!
    deleteProperty(id: ID!): Boolean!
  }

  input PropertyInput {
    name: String!
    overview: String
    description: String
    order: Int
    lotSize: Float
    livingSpace: Float
    yearBuilt: Int
    propertyAddress: String
    state: String
    city: String
    zipCode: String
    bedrooms: Int
    bathrooms: Int
    halfBaths: Int
    rental: Float
    rentalDuration: Int
    initialPrice: Float
    currentPrice: Float
    offeringAmount: Float
    pricePerShare: Float
    tokens: Int
    publicationDate: Date
    status: PropertyStatus
    currencySymbol: String
    tokenName: String
    txId: String
    address: String
    transaction: String
    mintingDate: Date
    irr: Float
    coc: Float
    appreciation: Float
    propertyStyleId: ID
    propertyTypeId: ID
    propertyConditionId: ID
    occupancyStatusId: ID
    rentalPropertyStatusId: ID
    media: [ID]
    amenities: [ID]
    orders: [ID]
    propertyMint: [ID]
  }

  input PropertyUpdateInput {
    name: String
    overview: String
    description: String
    order: Int
    lotSize: Float
    livingSpace: Float
    yearBuilt: Int
    propertyAddress: String
    state: String
    city: String
    zipCode: String
    bedrooms: Int
    bathrooms: Int
    halfBaths: Int
    rental: Float
    rentalDuration: Int
    initialPrice: Float
    currentPrice: Float
    offeringAmount: Float
    pricePerShare: Float
    tokens: Int
    publicationDate: Date
    status: PropertyStatus
    currencySymbol: String
    tokenName: String
    txId: String
    address: String
    transaction: String
    mintingDate: Date
    irr: Float
    coc: Float
    appreciation: Float
    propertyStyleId: ID
    propertyTypeId: ID
    propertyConditionId: ID
    occupancyStatusId: ID
    rentalPropertyStatusId: ID
    media: [ID]
    amenities: [ID]
    orders: [ID]
    propertyMint: [ID]
  }
`;

export default propertyTypeDefs;