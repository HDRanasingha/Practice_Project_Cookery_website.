import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminAddRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    title: '',
    description: '',
    image: '',
    time: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!restaurant.title || !restaurant.description || !restaurant.image || !restaurant.time) {
      setError('All fields are required.');
      return;
    }

    fetch('/api/restaurants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(restaurant)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Restaurant added:', data);
        navigate('/admin/restaurants');
      })
      .catch(error => {
        console.error('Error adding restaurant:', error);
        setError('Failed to add restaurant. Please try again.');
      });
  };

  return (
    <Box p="2rem">
      <Typography variant="h4">Add a New Restaurant</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={restaurant.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={restaurant.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Image URL"
          name="image"
          value={restaurant.image}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Opening Hours"
          name="time"
          value={restaurant.time}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Add Restaurant
        </Button>
      </form>
    </Box>
  );
};

export default AdminAddRestaurant;

