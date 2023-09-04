import db from '../../utils/db';

const propertyResolvers = {
  Query: {
    property: async (_, { id }, { db }) => {
      return await db.Property.findById(id)
        .populate('propertyStyleId')
        .populate('propertyTypeId')
        .populate('propertyConditionId')
        .populate('occupancyStatusId')
        .populate('rentalPropertyStatusId')
        .populate('media')
        .populate('amenities')
        .populate('orders')
        .populate('propertyMint');
    },

    properties: async (_, __, { db }) => {
      return await db.Property.find()
        .populate('propertyStyleId')
        .populate('propertyTypeId')
        .populate('propertyConditionId')
        .populate('occupancyStatusId')
        .populate('rentalPropertyStatusId')
        .populate('media')
        .populate('amenities')
        .populate('orders')
        .populate('propertyMint');
    }
  },
  Mutation: {
    createProperty: async (_, { input }) => {
      const property = new db.Property(input);
      return await property.save();
    },
    updateProperty: async (_, { id, input }) => {
      return await db.Property.findByIdAndUpdate(id, input, { new: true });
    },
    deleteProperty: async (_, { id }) => {
      const property = await db.Property.findById(id);
      if (!property) return false;
      await property.remove();
      return true;
    }
  }
};

export default propertyResolvers;
