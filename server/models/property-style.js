import mongoose from 'mongoose'

// Define Schema
const PropertyStyleSchema = new mongoose.Schema({
  name: { type: String, unique: true }
}, {
  timestamps: true
});

// Set Model
const PropertyStyle = mongoose.models.PropertyStyle || mongoose.model('PropertyStyle', PropertyStyleSchema);

// Export
export default PropertyStyle;
