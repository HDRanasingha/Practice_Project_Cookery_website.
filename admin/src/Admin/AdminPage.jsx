import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/restaurants')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setRestaurants(data))
      .catch(error => {
        console.error('Error fetching restaurants:', error);
        setError('Failed to fetch restaurants.');
      });
  }, []);

  return (
    <Box p="2rem">
      <Typography variant="h4">Manage Restaurants</Typography>
      <Button component={Link} to="/admin/restaurants/add" variant="contained" color="primary">
        Add New Restaurant
      </Button>
      {error && <Typography color="error">{error}</Typography>}
      <Box mt="2rem">
        {restaurants.map(restaurant => (
          <Box key={restaurant._id} p="1rem" borderBottom="1px solid #ccc">
            <Typography variant="h6">{restaurant.title}</Typography>
            <Typography>{restaurant.description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AdminPage;



