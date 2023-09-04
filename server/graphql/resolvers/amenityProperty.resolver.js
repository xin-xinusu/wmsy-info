const { Resolver, FieldResolver, Ctx, Root } = require('type-graphql');
const { Amenity, AmenityProperty, Property } = require('../objectTypes');
const db = require('../../utils');

const AmenityPropertyResolver = Resolver.ofType(AmenityProperty)
  .addFieldResolver({
    name: 'property',
    type: Property,
    nullable: true,
    defaultValue: null,
    resolve: ({ root: amenityProperty, context: { mongoose } }) => {
      return db.Property.findOne({
        _id: amenityProperty.propertyId,
        status: 'PUBLISHED',
      });
    },
  })
  .addFieldResolver({
    name: 'amenity',
    type: Amenity,
    nullable: true,
    defaultValue: null,
    resolve: ({ root: amenityProperty, context: { mongoose } }) => {
      return db.Amenity.findOne({
        _id: amenityProperty.amenityId,
      });
    },
  });

module.exports = AmenityPropertyResolver;
