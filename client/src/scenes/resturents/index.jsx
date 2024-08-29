import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "scenes/navbar";
import Footer from "scenes/footer";

const restaurants = [
  {
    id: 1,
    title: "Cook and Life",
    description: "Learn the basics of React including components, hooks, and more.",
    image: "../assets/20190405-PlantaQueen23.webp",
  },
  {
    id: 2,
    title: "Lara with Cake day",
    description: "Deep dive into Node.js concepts, building APIs, and backend services.",
    image: "../assets/resturent02.jpg",
  },
  {
    id: 3,
    title: "Cook and practice",
    description: "Master JavaScript with advanced topics and best practices.",
    image: "../assets/resturent03.jpg",
  },
];

const RestaurantPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter restaurants based on the search query
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRestaurantClick = (id) => {
    navigate(`/restaurants/${id}`);
  };

  const handleAddRestaurantClick = () => {
    navigate("/restaurants/add");
  };

  return (
    <Box>
      {/* Navbar with search functionality */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Button to add a new restaurant */}
      <Box display="flex" justifyContent="flex-start" p="2rem">
        <Button variant="contained" color="primary" onClick={handleAddRestaurantClick}>
          Add Restaurant
        </Button>
      </Box>

      {/* Main content with restaurants */}
      <Box display="flex" justifyContent="space-around" flexWrap="wrap" gap="2rem" p="2rem">
        {filteredRestaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            sx={{ maxWidth: 300, cursor: "pointer" }}
            onClick={() => handleRestaurantClick(restaurant.id)}
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
            <Button
              sx={{ margin: "1rem", backgroundColor: "primary.main" }}
              variant="contained"
              onClick={() => handleRestaurantClick(restaurant.id)}
            >
              View more
            </Button>
          </Card>
        ))}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default RestaurantPage;

