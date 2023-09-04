import db from '../../utils/db';

const amenityPropertyResolvers = {
  Query: {
    amenityProperty: async (_, { id }) => {
      return await db.AmenityProperty.findById(id)
        .populate('amenityId')
        .populate('propertyId');
    },
    amenityProperties: async () => {
      return await db.AmenityProperty.find()
        .populate('amenityId')
        .populate('propertyId');
    },
  },

  Mutation: {
    createAmenityProperty: async (_, { input }) => {
      const newAmenityProperty = new db.AmenityProperty(input);
      return await newAmenityProperty.save();
    },
    updateAmenityProperty: async (_, { id, input }) => {
      return await db.AmenityProperty.findByIdAndUpdate(id, input, { new: true });
    },
    deleteAmenityProperty: async (_, { id }) => {
      return await db.AmenityProperty.findByIdAndRemove(id);
    }
  },

  AmenityProperty: {
    amenityId: async (ap) => {
      return await db.Amenity.findById(ap.amenityId);
    },
    propertyId: async (ap) => {
      return await db.Property.findById(ap.propertyId);
    }
  }
};

export default amenityPropertyResolvers;
