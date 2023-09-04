import mongoose from 'mongoose'

// Define Schema
const OrderSchema = new mongoose.Schema({
  txId: { type: String },
  txDate: { type: Date },
  txEnd: { type: Date },
  tokens: { type: Number },
  price: { type: Number },
  fee: { type: Number },
  purchaseTxId: { type: String },
  purchasedStart: { type: Date },
  purchasedEnd: { type: Date },
  status: { type: String, enum: ['PRE_PAY', 'PAY_FAIL', 'PAY_OK', 'TX_IN_PROGRESS', 'TX_OK'] },

  // Schema references
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }
}, {
  timestamps: true
});

// Set Model
const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

// Export
export default Order;
