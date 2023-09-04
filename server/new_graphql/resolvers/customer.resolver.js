import db from '../../utils/db';

const customerResolvers = {
  Query: {
    customers: async () => {
      try {
        return await db.Customer.find();
      } catch (err) {
        console.error("Failed to fetch customers:", err);
      }
    },
    customer: async (_, { id }) => {
      try {
        return await db.Customer.findById(id);
      } catch (err) {
        console.error(`Failed to fetch customer with id ${id}:`, err);
      }
    }
  },

  Customer: {
    profilePicture: async (customer) => {
      try {
        return await db.Media.findById(customer.profilePictureId);
      } catch (err) {
        console.error("Failed to fetch media:", err);
      }
    },
    orders: async (customer) => {
      try {
        return await db.Order.find({ '_id': { $in: customer.orders } });
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      }
    },
    wallet: async (customer) => {
      try {
        return await db.Wallet.find({ '_id': { $in: customer.wallet } });
      } catch (err) {
        console.error("Failed to fetch wallets:", err);
      }
    },
    extractions: async (customer) => {
      try {
        return await db.Extraction.find({ '_id': { $in: customer.extractions } });
      } catch (err) {
        console.error("Failed to fetch extractions:", err);
      }
    }
  }
};

export default customerResolvers;
