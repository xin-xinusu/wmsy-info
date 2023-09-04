import db from '../../utils/db';

const adminResolvers = {
  Query: {
    admin: async (_, { id }) => {
      return await db.Admin.findById(id);
    },
    admins: async () => {
      return await db.Admin.find();
    },
  },

  Mutation: {
    createAdmin: async (_, { input }) => {
      // Here you might want to hash the password before saving.
      const newAdmin = new db.Admin(input);
      return await newAdmin.save();
    },
    updateAdmin: async (_, { id, input }) => {
      // If updating the password, make sure to hash it first.
      return await db.Admin.findByIdAndUpdate(id, input, { new: true });
    },
    deleteAdmin: async (_, { id }) => {
      return await db.Admin.findByIdAndRemove(id);
    }
  }
};

export default adminResolvers;
