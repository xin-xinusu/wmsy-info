import db from '../../utils/db';

const propertyMintResolvers = {
  Query: {
    propertyMint: async (_, { id }) => {
      return await db.PropertyMint.findById(id).populate('propertyId');
    },
    propertyMints: async () => {
      return await db.PropertyMint.find().populate('propertyId');
    },
  },
  Mutation: {
    createPropertyMint: async (_, { input }) => {
      const propertyMint = new db.PropertyMint(input);
      return await propertyMint.save();
    },
    updatePropertyMint: async (_, { id, input }) => {
      return await db.PropertyMint.findByIdAndUpdate(id, input, { new: true });
    },
    deletePropertyMint: async (_, { id }) => {
      const propertyMint = await db.PropertyMint.findById(id);
      if (!propertyMint) return false;
      await propertyMint.remove();
      return true;
    },
  },
  PropertyMint: {
    propertyId: async (parent) => {
      return await db.Property.findById(parent.propertyId);
    },
  }
};

export default propertyMintResolvers;
