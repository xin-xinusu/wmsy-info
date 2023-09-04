import mongoose from 'mongoose'

// Define Schema
const RentalPropertyStatusSchema = new mongoose.Schema({
  name: { type: String, unique: true }
}, {
  timestamps: true
});

// Set Model
const RentalPropertyStatus = mongoose.models.RentalPropertyStatus || mongoose.model('RentalPropertyStatus', RentalPropertyStatusSchema);

// Export
export default RentalPropertyStatus;
