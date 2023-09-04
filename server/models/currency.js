import mongoose from 'mongoose'

// Define Schema
const CurrencySchema = new mongoose.Schema({
  name: { type: String, unique: true },
  price: { type: Number }
}, {
  timestamps: true
});

// Set Model
const Currency = mongoose.models.Currency || mongoose.model('Currency', CurrencySchema);

// Export
export default Currency;
