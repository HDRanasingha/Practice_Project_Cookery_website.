import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/restaurants/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setRestaurant(data))
      .catch(error => {
        console.error('Error fetching restaurant:', error);
        setError('Failed to fetch restaurant.');
      });
  }, [id]);

  return (
    <Box p="2rem">
      {error && <Typography color="error">{error}</Typography>}
      {restaurant ? (
        <>
          <Typography variant="h3">{restaurant.title}</Typography>
          <img src={restaurant.image} alt={restaurant.title} width="100%" />
          <Typography variant="body1" mt="2rem">
            {restaurant.description}
          </Typography>
          <Typography variant="body1" mt="2rem">
            <strong>Opening Hours:</strong> {restaurant.time}
          </Typography>
        </>
      ) : (
        <Typography variant="h5">Restaurant not found</Typography>
      )}
    </Box>
  );
};

export default RestaurantDetailsPage;



