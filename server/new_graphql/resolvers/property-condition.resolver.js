import db from '../../utils/db';

const propertyConditionResolvers = {
  Query: {
    propertyCondition: async (_, { id }) => {
      return await db.PropertyCondition.findById(id);
    },
    propertyConditions: async () => {
      return await db.PropertyCondition.find();
    },
  },
  Mutation: {
    createPropertyCondition: async (_, { input }) => {
      const propertyCondition = new db.PropertyCondition(input);
      return await propertyCondition.save();
    },
    updatePropertyCondition: async (_, { id, input }) => {
      return await db.PropertyCondition.findByIdAndUpdate(id, input, { new: true });
    },
    deletePropertyCondition: async (_, { id }) => {
      const propertyCondition = await db.PropertyCondition.findById(id);
      if (!propertyCondition) return false;
      await propertyCondition.remove();
      return true;
    },
  }
};

export default propertyConditionResolvers;
