import db from '../../utils/db';

const currencyResolvers = {
  Query: {
    currency: async (_, { id }) => {
      return await db.Currency.findById(id);
    },
    currencies: async () => {
      return await db.Currency.find();
    },
  },

  Mutation: {
    createCurrency: async (_, { input }) => {
      const newCurrency = new db.Currency(input);
      return await newCurrency.save();
    },
    updateCurrency: async (_, { id, input }) => {
      return await db.Currency.findByIdAndUpdate(id, input, { new: true });
    },
    deleteCurrency: async (_, { id }) => {
      return await db.Currency.findByIdAndRemove(id);
    }
  }
};

export default currencyResolvers;
