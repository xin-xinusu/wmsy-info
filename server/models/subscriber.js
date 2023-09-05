import mongoose from 'mongoose';

const SubscriberSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  history: [{
    content: String,
  }]
}, {
  timestamps: true
});

// Set Model
const Subscriber = mongoose.models.Subscriber || mongoose.model('Subscriber', SubscriberSchema);

// Export
export default Subscriber;
