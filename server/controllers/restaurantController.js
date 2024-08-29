import Restaurant from '../models/Restaurant.js'; // Assuming you have a Restaurant model defined similarly

export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.getAll();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get restaurants' });
  }
};

export const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.getById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get restaurant' });
  }
};

export const createRestaurant = async (req, res) => {
  try {
    const newRestaurant = await Restaurant.create(req.body);
    res.status(201).json(newRestaurant);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create restaurant' });
  }
};

export const updateRestaurant = async (req, res) => {
  try {
    const updatedRestaurant = await Restaurant.update(req.params.id, req.body);
    if (!updatedRestaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    res.json(updatedRestaurant);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update restaurant' });
  }
};

export const deleteRestaurant = async (req, res) => {
  try {
    await Restaurant.delete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete restaurant' });
  }
};

