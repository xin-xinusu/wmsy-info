import db from '../../utils/db';

const walletResolvers = {
  Query: {
    wallet: async (_, { id }) => {
      return await db.Wallet.findById(id).populate('customerId');
    },
    wallets: async () => {
      return await db.Wallet.find().populate('customerId');
    },
  },

  Mutation: {
    createWallet: async (_, { input }) => {
      const newWallet = new db.Wallet(input);
      return await newWallet.save();
    },
    updateWallet: async (_, { id, input }) => {
      return await db.Wallet.findByIdAndUpdate(id, input, { new: true });
    },
    deleteWallet: async (_, { id }) => {
      return await db.Wallet.findByIdAndRemove(id);
    }
  }
};

export default walletResolvers;
