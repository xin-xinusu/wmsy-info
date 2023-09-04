import mongoose from "mongoose";
import { GraphQLError } from "graphql";

import {
  isEmptyString
} from "../../../Admin/utils/strings";
import {
  ResolversErrors
} from "../errors";
import {
  RegisterInput,
  UpdateCustomerInput
} from "../inputTypes";
import {
  getCustomer
} from "../utils";
import db from '../../utils';

class CustomerResolver {
  async customer({
    mongoose,
    session
  }) {
    const email = session?.user?.email;
    if (!email) {
      throw new GraphQLError(ResolversErrors.UNAUTHORIZED);
    }
    return await db.Customer.findOne({
      email
    }).populate('profilePicture');
  }

  async register(data, {
    session,
    mongoose
  }) {
    const email = session?.user?.email;
    if (!email) {
      throw new GraphQLError(ResolversErrors.UNAUTHORIZED);
    } else {
      try {
        return await db.Customer.create({
          email,
          ...data
        });
      } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
          throw new GraphQLError(ResolversErrors.USER_ALREADY_EXISTS);
        }
        throw new GraphQLError(ResolversErrors.INTERNAL_SERVER_ERROR);
      }
    }
  }

  async updateCustomer(data, {
    session,
    mongoose
  }) {
    const {
      email
    } = await getCustomer(mongoose, session);

    const {
      firstName,
      lastName,
      city
    } = data;
    const parsedFirstName = firstName.trim();
    const parsedLastName = lastName.trim();
    const parsedCity = city.trim();

    const isEmptySomeData = isEmptyString(parsedFirstName) || isEmptyString(parsedLastName) || isEmptyString(parsedCity);
    if (isEmptySomeData) {
      throw new GraphQLError(ResolversErrors.INVALID_DATA);
    }

    return await db.Customer.findOneAndUpdate({
      email
    }, {
      ...data,
      firstName: parsedFirstName,
      lastName: parsedLastName,
      city: parsedCity
    });
  }

  async updateProfilePicture(url, {
    session,
    mongoose
  }) {
    const {
      email
    } = await getCustomer(mongoose, session);
    const profPicture = await db.Media.create({
      url,
      width: 100,
      height: 100,
      order: 0,
      fileType: "TBD",
    });

    return await db.Customer.findOneAndUpdate({
      email
    }, {
      profilePicture: profPicture.id
    });
  }

  async media(customer, mongoose) {
    return await db.Media.findOne({
      customer: customer.id
    });
  }

  async cashBalance(customer) {
    return Number(customer.balance);
  }

  async propertiesOwned({
    session,
    mongoose
  }, customer) {
    return await db.Property.countDocuments({
      'orders.customerId': customer.id,
      'orders.status': {
        $in: ORDER_RESERVED_STATES
      }
    });
  }
  async rentalIncome({
    session,
    mongoose
  }, customer) {
    const customerProperties = await db.Property.find({
      'orders.customerId': customer.id,
      'orders.status': {
        $in: ORDER_RESERVED_STATES
      }
    }).populate('orders');

    const sum = customerProperties.reduce((acc, property) => {
      const ownedTokens = ownedTokenCount(property);
      const offeredRental = (property.rental * property.offeringAmount) / property.initialPrice;
      const rentalIncome = (ownedTokens * offeredRental) / property.offeringAmount;
      return acc + rentalIncome;
    }, BigInt(0));

    return Number(sum);
  }

  async appreciation() {
    // TODO: TBD
    return 0;
  }

  async totalReturn() {
    // TODO: TBD
    return 0;
  }

  async nextPayout() {
    // TODO: TBD
    return new Date().toISOString();
  }

  async properties({
    session,
    mongoose
  }, customer) {
    return await db.Property.find({
      'orders.customerId': customer.id,
      'orders.status': {
        $in: ORDER_RESERVED_STATES
      }
    }).populate('media');
  }

  async address(customer, {
    mongoose
  }) {
    if (!customer.currencySymbolConfirmed || !customer.currencySymbol) {
      return null;
    }
    if (customer.address) {
      return customer.address;
    }
    const lucid = await initializeLucid();

    console.log('You need an address for the Customer resolver :>> ');
    // const address = userAddress(lucid, customer.currencySymbol);
    // await db.Customer.findByIdAndUpdate(customer.id, {
    //   address
    // });
    // return address;
    return ''
  }

  // This function remains unchanged from your original code
  ownedTokenCount = (property) => {
    return property.orders.reduce((acc, order) => {
      return ORDER_RESERVED_STATES.includes(order.status) ? acc + order.tokens : acc;
    }, BigInt(0));
  };
  
}

export default CustomerResolver;
const Customer = require('./path_to_customer_model');  // Import the Mongoose Customer model
const Media = require('./path_to_media_model');        // Import other necessary models
const Order = require('./path_to_order_model');
const Wallet = require('./path_to_wallet_model');
const Extraction = require('./path_to_extraction_model');

const resolvers = {
  Query: {
    customers: async () => {
      try {
        return await Customer.find();
      } catch (err) {
        console.error("Failed to fetch customers:", err);
      }
    },
    customer: async (_, { id }) => {
      try {
        return await Customer.findById(id);
      } catch (err) {
        console.error(`Failed to fetch customer with id ${id}:`, err);
      }
    }
  },

  Customer: {
    profilePicture: async (customer) => {
      try {
        return await Media.findById(customer.profilePictureId);
      } catch (err) {
        console.error("Failed to fetch media:", err);
      }
    },
    orders: async (customer) => {
      try {
        return await Order.find({ '_id': { $in: customer.orders } });
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      }
    },
    wallet: async (customer) => {
      try {
        return await Wallet.find({ '_id': { $in: customer.wallet } });
      } catch (err) {
        console.error("Failed to fetch wallets:", err);
      }
    },
    extractions: async (customer) => {
      try {
        return await Extraction.find({ '_id': { $in: customer.extractions } });
      } catch (err) {
        console.error("Failed to fetch extractions:", err);
      }
    }
  }
};
