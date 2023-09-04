import mongoose from 'mongoose'

// Define Schema
const PropertyTypeSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  price: { type: Number }
}, {
  timestamps: true
});

// Set Model
const PropertyType = mongoose.models.PropertyType || mongoose.model('PropertyType', PropertyTypeSchema);

// Export
export default PropertyType;
