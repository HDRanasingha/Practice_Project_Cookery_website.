// models/restaurantModel.js
import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  time: { type: String, required: true },
});

export default mongoose.model('Restaurant', restaurantSchema);


