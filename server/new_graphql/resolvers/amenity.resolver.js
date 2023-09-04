import db from '../../utils/db';

const amenityResolvers = {
  Query: {
    amenity: async (_, { id }) => {
      return await db.Amenity.findById(id).populate('mediaId');
    },
    amenities: async () => {
      return await db.Amenity.find().populate('mediaId');
    },
  },

  Mutation: {
    createAmenity: async (_, { input }) => {
      const newAmenity = new db.Amenity(input);
      return await newAmenity.save();
    },
    updateAmenity: async (_, { id, input }) => {
      return await db.Amenity.findByIdAndUpdate(id, input, { new: true });
    },
    deleteAmenity: async (_, { id }) => {
      return await db.Amenity.findByIdAndRemove(id);
    }
  },

  Amenity: {
    mediaId: async (amenity) => {
      return await db.Media.findById(amenity.mediaId);
    }
  }
};

export default amenityResolvers;
