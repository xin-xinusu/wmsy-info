import db from '../../utils/db';

const propertyStyleResolvers = {
  Query: {
    propertyStyle: async (_, { id }) => {
      return await db.PropertyStyle.findById(id);
    },
    propertyStyles: async () => {
      return await db.PropertyStyle.find();
    },
  },
  Mutation: {
    createPropertyStyle: async (_, { input }) => {
      const propertyStyle = new db.PropertyStyle(input);
      return await propertyStyle.save();
    },
    updatePropertyStyle: async (_, { id, input }) => {
      return await db.PropertyStyle.findByIdAndUpdate(id, input, { new: true });
    },
    deletePropertyStyle: async (_, { id }) => {
      const propertyStyle = await db.PropertyStyle.findById(id);
      if (!propertyStyle) return false;
      await propertyStyle.remove();
      return true;
    },
  }
};

export default propertyStyleResolvers;
