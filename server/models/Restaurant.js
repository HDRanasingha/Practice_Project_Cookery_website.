import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  openTime: { type: String },
  location: { type: String },
  contactDetails: { type: String },
  images: [String], // Array of image URLs or paths
  approved: { type: Boolean, default: false } // For approval status
}, { timestamps: true });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;

