import mongoose from 'mongoose'

// Define Schema
const AmenitySchema = new mongoose.Schema({
  name: { type: String, unique: true },
  mediaId: { type: mongoose.Schema.Types.ObjectId, unique: true, ref: 'Media' }
}, {
  timestamps: true
});

// Set Model
const Amenity = mongoose.models.Amenity || mongoose.model('Amenity', AmenitySchema);

// Export
export default Amenity;
