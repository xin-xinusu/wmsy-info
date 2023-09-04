import mongoose from 'mongoose'

// Define Schema
const PropertySchema = new mongoose.Schema({
  name: { type: String, unique: true },
  overview: { type: String },
  description: { type: String },
  order: { type: Number },

  lotSize: { type: Number },
  livingSpace: { type: Number },
  yearBuilt: { type: Number },
  propertyAddress: { type: String },
  state: { type: String },
  city: { type: String },
  zipCode: { type: String },

  bedrooms: { type: Number },
  bathrooms: { type: Number },
  halfBaths: { type: Number },

  rental: { type: Number },
  rentalDuration: { type: Number },
  initialPrice: { type: Number },
  currentPrice: { type: Number },
  offeringAmount: { type: Number },
  pricePerShare: { type: Number },
  tokens: { type: Number },

  publicationDate: { type: Date },
  status: { type: String, enum: ['CREATED', 'PENDING', 'READY', 'PUBLISHED'] },

  currencySymbol: { type: String, unique: true },
  tokenName: { type: String, unique: true },
  txId: { type: String, unique: true },
  address: { type: String, unique: true },
  transaction: { type: String },
  mintingDate: { type: Date },

  irr: { type: Number },
  coc: { type: Number },
  appreciation: { type: Number },

  // Schema references
  propertyStyleId: { type: mongoose.Schema.Types.ObjectId, ref: 'PropertyStyle' },
  propertyTypeId: { type: mongoose.Schema.Types.ObjectId, ref: 'PropertyType' },
  propertyConditionId: { type: mongoose.Schema.Types.ObjectId, ref: 'PropertyCondition' },
  occupancyStatusId: { type: mongoose.Schema.Types.ObjectId, ref: 'OccupancyStatus' },
  rentalPropertyStatusId: { type: mongoose.Schema.Types.ObjectId, ref: 'RentalPropertyStatus' },
  media: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],
  amenities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AmenityProperty' }],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  propertyMint: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PropertyMint' }]
}, {
  timestamps: true
});

// Set Model
const Property = mongoose.models.Property || mongoose.model('Property', PropertySchema);

// Export
export default Property;
