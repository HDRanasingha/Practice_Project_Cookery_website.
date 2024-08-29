import express from 'express';
import Restaurant from '../models/Restaurant.js';

const router = express.Router();

// Get all approved restaurants
router.get('/approved', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ approved: true });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get pending restaurants for admin
router.get('/pending', async (req, res) => {
  try {
    const pendingRestaurants = await Restaurant.find({ approved: false });
    res.json(pendingRestaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new restaurant
router.post('/', async (req, res) => {
  const { title, description, openTime, location, contactDetails, images } = req.body;
  try {
    const newRestaurant = new Restaurant({
      title,
      description,
      openTime,
      location,
      contactDetails,
      images
    });
    const savedRestaurant = await newRestaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Edit restaurant
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedRestaurant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete restaurant
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Restaurant.findByIdAndDelete(id);
    res.json({ message: 'Restaurant deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Approve or reject restaurant
router.patch('/approve/:id', async (req, res) => {
  const { id } = req.params;
  const { approved } = req.body;
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, { approved }, { new: true });
    res.json(updatedRestaurant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;

