import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from 'scenes/navbar';
import Footer from 'scenes/footer';

const RestaurantPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRestaurantClick = (id) => {
    navigate(`/restaurants/${id}`);
  };

  return (
    <Box>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Box display="flex" justifyContent="space-around" flexWrap="wrap" gap="2rem" p="2rem">
        {error && <Typography color="error">{error}</Typography>}
        {filteredRestaurants.map((restaurant) => (
          <Card
            key={restaurant._id}
            sx={{ maxWidth: 300, cursor: 'pointer' }}
            onClick={() => handleRestaurantClick(restaurant._id)}
          >
            <CardMedia component="img" height="140" image={restaurant.image} alt={restaurant.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {restaurant.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {restaurant.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Footer />
    </Box>
  );
};

export default RestaurantPage;





