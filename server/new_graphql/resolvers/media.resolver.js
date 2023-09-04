import db from '../../utils/db';

const mediaResolvers = {
  Query: {
    media: async (_, { id }) => {
      return await db.Media.findById(id).populate(['propertyId', 'customerId', 'amenityId']);
    },
    medias: async () => {
      return await db.Media.find().populate(['propertyId', 'customerId', 'amenityId']);
    },
  },
  Mutation: {
    createMedia: async (_, { input }) => {
      const media = new db.Media(input);
      return await media.save();
    },
    updateMedia: async (_, { id, input }) => {
      return await db.Media.findByIdAndUpdate(id, input, { new: true });
    },
    deleteMedia: async (_, { id }) => {
      const media = await db.Media.findById(id);
      if (!media) return false;
      await media.remove();
      return true;
    },
  },
  Media: {
    property: async (parent) => {
      return await db.Property.findById(parent.propertyId);
    },
    customer: async (parent) => {
      return await db.Customer.findById(parent.customerId);
    },
    amenity: async (parent) => {
      return await db.Amenity.findById(parent.amenityId);
    },
  },
};

export default mediaResolvers;
