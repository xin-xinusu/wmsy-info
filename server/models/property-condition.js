import mongoose from 'mongoose'

// Define Schema
const PropertyConditionSchema  = new mongoose.Schema({
  name: { type: String, unique: true }
}, {
  timestamps: true
});

// Set Model
const PropertyCondition = mongoose.models.PropertyCondition || mongoose.model('PropertyCondition', PropertyConditionSchema);

// Export
export default PropertyCondition;
