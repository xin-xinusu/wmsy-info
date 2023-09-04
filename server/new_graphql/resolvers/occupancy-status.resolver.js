import db from '../../utils/db';

const occupancyStatusResolvers = {
  Query: {
    occupancyStatus: async (_, { id }) => {
      return await db.OccupancyStatus.findById(id);
    },
    occupancyStatuses: async () => {
      return await db.OccupancyStatus.find();
    },
  },
  Mutation: {
    createOccupancyStatus: async (_, { input }) => {
      const occupancyStatus = new db.OccupancyStatus(input);
      return await occupancyStatus.save();
    },
    updateOccupancyStatus: async (_, { id, input }) => {
      return await db.OccupancyStatus.findByIdAndUpdate(id, input, { new: true });
    },
    deleteOccupancyStatus: async (_, { id }) => {
      const occupancyStatus = await db.OccupancyStatus.findById(id);
      if (!occupancyStatus) return false;
      await occupancyStatus.remove();
      return true;
    },
  }
};

export default occupancyStatusResolvers;
