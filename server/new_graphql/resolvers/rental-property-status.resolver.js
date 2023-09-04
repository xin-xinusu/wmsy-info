import db from '../../utils/db';

const resolvers = {
  Query: {
    rentalPropertyStatus: async (_, { id }) => {
      return await db.RentalPropertyStatus.findById(id);
    },
    rentalPropertyStatuses: async () => {
      return await db.RentalPropertyStatus.find();
    },
  },

  Mutation: {
    createRentalPropertyStatus: async (_, { input }) => {
      const newStatus = new db.RentalPropertyStatus(input);
      return await newStatus.save();
    },
    updateRentalPropertyStatus: async (_, { id, input }) => {
      return await db.RentalPropertyStatus.findByIdAndUpdate(id, input, { new: true });
    },
    deleteRentalPropertyStatus: async (_, { id }) => {
      return await db.RentalPropertyStatus.findByIdAndRemove(id);
    }
  }
};

export default rentalPropertyStatusResolvers;
