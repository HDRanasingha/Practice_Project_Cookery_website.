import mongoose from "mongoose";

const RestaurantSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
export default Restaurant;

