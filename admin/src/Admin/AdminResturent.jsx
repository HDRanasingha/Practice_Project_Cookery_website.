import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminRestaurantPage = ({ addRestaurant }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRestaurant = {
      id: Date.now(), // Use a unique id for the new restaurant
      title,
      description,
      image,
    };
    addRestaurant(newRestaurant);
    navigate('/restaurants');
  };

  return (
    <Box p="2rem">
      <Typography variant="h4" mb="1rem">Add New Restaurant</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          label="Image URL"
          variant="outlined"
          fullWidth
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: '1rem' }}
        >
          Add Restaurant
        </Button>
      </form>
    </Box>
  );
};

export default AdminRestaurantPage;

