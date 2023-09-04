import mongoose from 'mongoose'

// Define Schema
const WalletSchema = new mongoose.Schema({
  walletName: { type: String },
  walletAddress: { type: String, unique: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }
}, {
  timestamps: true
});

// Set Model
const Wallet = mongoose.models.Wallet || mongoose.model('Wallet', WalletSchema);

// Export
export default Wallet;
