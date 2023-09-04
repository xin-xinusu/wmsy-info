import mongoose from 'mongoose'

// Define Schema
const AdminSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String }
}, {
  timestamps: true
});

// Set Model
// Set Model (only if it hasn't been compiled yet)
const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

// Export
export default Admin;
