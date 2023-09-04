import mongoose from 'mongoose'

// Define Schema
const AmenityPropertyTypeSchema = new mongoose.Schema({
  propertyTypeId: { type: mongoose.Schema.Types.ObjectId, ref: 'PropertyType' },
  amenityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Amenity' },
  amenityOrder: { type: Number }
}, {
  timestamps: true
});

// Set Model
const AmenityPropertyType = mongoose.models.AmenityPropertyType || mongoose.model('AmenityPropertyType', AmenityPropertyTypeSchema);

// Export
export default AmenityPropertyType;