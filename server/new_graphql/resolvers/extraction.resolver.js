import db from '../../utils/db';

const extractionResolvers = {
  Query: {
    extraction: async (_, { id }) => {
      return await db.Extraction.findById(id).populate(['currencyId', 'customerId']);
    },
    extractions: async () => {
      return await db.Extraction.find().populate(['currencyId', 'customerId']);
    },
  },
  Mutation: {
    createExtraction: async (_, { input }) => {
      const extraction = new db.Extraction(input);
      return await extraction.save();
    },
    updateExtraction: async (_, { id, input }) => {
      return await db.Extraction.findByIdAndUpdate(id, input, { new: true });
    },
    deleteExtraction: async (_, { id }) => {
      const extraction = await db.Extraction.findById(id);
      if (!extraction) return false;
      await extraction.remove();
      return true;
    },
  },
  Extraction: {
    currency: async (parent) => {
      return await db.Currency.findById(parent.currencyId);
    },
    customer: async (parent) => {
      return await db.Customer.findById(parent.customerId);
    },
  },
};

export default extractionResolvers;
