import mongoose from 'mongoose'

// Define Schema
const ExtractionSchema = new mongoose.Schema({
  txId: { type: String, unique: true },
  txDate: { type: Date },
  txEnd: { type: Date },
  currencyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Currency' },
  amount: { type: Number },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  status: { type: String, enum: ['IN_QUEUE', 'TX_PENDING', 'TX_CONFIRMED'] },
  receivingAddress: { type: String }
}, {
  timestamps: true
});

// Set Model
const Extraction = mongoose.models.Extraction || mongoose.model('Extraction', ExtractionSchema);

// Export
export default Extraction;
