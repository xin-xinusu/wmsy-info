import db from '../../utils/db';

const orderResolvers = {
  Query: {
    order: async (_, { id }) => {
      return await db.Order.findById(id).populate('property customer');
    },
    orders: async () => {
      return await db.Order.find().populate('property customer');
    },
  },
  Mutation: {
    createOrder: async (_, { input }) => {
      const order = new db.Order(input);
      return await order.save();
    },
    updateOrder: async (_, { id, input }) => {
      return await db.Order.findByIdAndUpdate(id, input, { new: true });
    },
    deleteOrder: async (_, { id }) => {
      const order = await db.Order.findById(id);
      if (!order) return false;
      await order.remove();
      return true;
    },
  },
  Order: {
    property: async (parent) => {
      return await db.Property.findById(parent.propertyId);
    },
    customer: async (parent) => {
      return await db.Customer.findById(parent.customerId);
    }
  }
};

export default orderResolvers;
