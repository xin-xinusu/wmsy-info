import mongoose from 'mongoose'

// Define Schema
const MediaSchema = new mongoose.Schema({
  width: { type: Number },
  height: { type: Number },
  url: { type: String },
  order: { type: Number },
  fileType: { type: String },
  description: { type: String, default: '' },
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  amenityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Amenity' }
}, {
  timestamps: true
});

// Set Model
const Media = mongoose.models.Media || mongoose.model('Media', MediaSchema);

// Export
export default Media;
