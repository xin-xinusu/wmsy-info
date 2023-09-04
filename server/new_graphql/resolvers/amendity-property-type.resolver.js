import db from '../../utils/db';

const amenityPropertyTypeResolvers = {
  Query: {
    amenityPropertyType: async (_, { id }) => {
      return await db.AmenityPropertyType.findById(id)
        .populate('propertyTypeId')
        .populate('amenityId');
    },
    amenityPropertyTypes: async () => {
      return await db.AmenityPropertyType.find()
        .populate('propertyTypeId')
        .populate('amenityId');
    },
  },

  Mutation: {
    createAmenityPropertyType: async (_, { input }) => {
      const newAmenityPropertyType = new db.AmenityPropertyType(input);
      return await newAmenityPropertyType.save();
    },
    updateAmenityPropertyType: async (_, { id, input }) => {
      return await db.AmenityPropertyType.findByIdAndUpdate(id, input, { new: true });
    },
    deleteAmenityPropertyType: async (_, { id }) => {
      return await db.AmenityPropertyType.findByIdAndRemove(id);
    }
  },

  AmenityPropertyType: {
    propertyTypeId: async (apt) => {
      return await db.PropertyType.findById(apt.propertyTypeId);
    },
    amenityId: async (apt) => {
      return await db.Amenity.findById(apt.amenityId);
    }
  }
};

export default amenityPropertyTypeResolvers;
