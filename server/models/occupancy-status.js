import mongoose from 'mongoose'

// Define Schema
const OccupancyStatusSchema = new mongoose.Schema({
  name: { type: String, unique: true }
}, {
  timestamps: true
});

// Set Model
const OccupancyStatus = mongoose.models.OccupancyStatus || mongoose.model('OccupancyStatus', OccupancyStatusSchema);

// Export
export default OccupancyStatus;
