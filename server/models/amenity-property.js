import mongoose from 'mongoose'

// Define Schema
const AmenityPropertySchema = new mongoose.Schema({
  order: { type: Number },
  amount: { type: Number },
  amenityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Amenity' },
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' }
}, {
  timestamps: true
});

// Set Model
const AmenityProperty = mongoose.models.AmenityProperty || mongoose.model('AmenityProperty', AmenityPropertySchema);

// Export
export default AmenityProperty;
