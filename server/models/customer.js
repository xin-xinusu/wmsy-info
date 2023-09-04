import mongoose from 'mongoose'
import bcrypt  from 'bcrypt';

const CustomerSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  currencySymbol: { type: String, unique: true },
  currencySymbolConfirmed: { type: Boolean, default: false },
  address: { type: String, unique: true },

  // Schema references
  profilePictureId: { type: mongoose.Schema.Types.ObjectId, unique: true, ref: 'Media' },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  wallet: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Wallet' }],
  extractions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Extraction' }],
  
  balance: { type: Number, default: 0 },
  lastUpdatedBalance: { type: Date }
}, {
  timestamps: true
});
// Hash the password before saving it to the database
CustomerSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

// Method to compare password with the hashed password in the database
CustomerSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (err) {
    throw err;
  }
};

// Set Model
const Customer = mongoose.models.Customer || mongoose.model('Customer', CustomerSchema);

// Export
export default Customer;
