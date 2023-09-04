import mongoose from 'mongoose'

// Define Schema
const PropertyMintSchema = new mongoose.Schema({
  uuid: { type: String },
  premintDate: { type: Date },
  visited: { type: Boolean },

  // Schema references
  propertyId: { type: mongoose.Schema.Types.ObjectId, unique: true, ref: 'Property' }
}, {
  timestamps: true
});

// Set Model
const PropertyMint = mongoose.models.PropertyMint || mongoose.model('PropertyMint', PropertyMintSchema);

// Export
export default PropertyMint;
