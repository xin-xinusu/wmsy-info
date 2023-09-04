import db from '../../utils/db';

const propertyTypeResolvers = {
  Query: {
    propertyType: async (_, { id }) => {
      return await db.PropertyType.findById(id);
    },
    propertyTypes: async () => {
      return await db.PropertyType.find();
    },
  },
  Mutation: {
    createPropertyType: async (_, { input }) => {
      const propertyType = new db.PropertyType(input);
      return await propertyType.save();
    },
    updatePropertyType: async (_, { id, input }) => {
      return await db.PropertyType.findByIdAndUpdate(id, input, { new: true });
    },
    deletePropertyType: async (_, { id }) => {
      const propertyType = await db.PropertyType.findById(id);
      if (!propertyType) return false;
      await propertyType.remove();
      return true;
    }
  }
};

export default propertyTypeResolvers;
