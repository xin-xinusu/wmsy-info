import dotenv from 'dotenv';
dotenv.config();

// import { ApolloServer } from 'apollo-server';
// import schema from '../new_graphql'; // Apollo Schema

import mongoose from 'mongoose';
// import { isLive } from '../config';

// const server = new ApolloServer({ schema });

async function startDatabase(status) {
  if (mongoose.connection.readyState >= 1) {
    // Use the existing connection
    return;
  }

  const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  try {
    // if (status === "production" && isLive) {
    //   mongoose.set('debug', true);
    //   mongoose.Promise = global.Promise;
    //   await mongoose.connect(process.env.MONGODB_URI || '', connectionOptions);
    // } else {
      mongoose.set('debug', false);
      mongoose.Promise = global.Promise;
      await mongoose.connect(process.env.DB_URI, connectionOptions);
    // }
    console.log('MongoDB connected successfully.');

    return 
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

startDatabase();

// EXPORT DB schemas
// import Admin from "../models/admin";
import Currency from "../models/currency";
import Property from "../models/property";
import PropertyMint from "../models/property-mint";
import Customer from "../models/customer";
import Extraction from "../models/extraction";
import PropertyType from "../models/property-type";
import PropertyStyle from "../models/property-style";
import PropertyCondition from "../models/property-condition";
import OccupancyStatus from "../models/occupancy-status";
import RentalPropertyStatus from "../models/rental-property-status";
import Amenity from "../models/amenity";
import AmenityPropertyType from "../models/amenity-property-type";
import AmenityProperty from "../models/amenity-property";
import Media from "../models/media";
import Order from "../models/order";
import Subscriber from "../models/subscriber";
import Wallet from "../models/wallet";

const db = {
  // Admin,
  Currency,
  Property,
  PropertyMint,
  Customer,
  Extraction,
  PropertyType,
  PropertyStyle,
  PropertyCondition,
  OccupancyStatus,
  RentalPropertyStatus,
  Amenity,
  AmenityPropertyType,
  AmenityProperty,
  Media,
  Order,
  Subscriber,
  Wallet
};

export default db;