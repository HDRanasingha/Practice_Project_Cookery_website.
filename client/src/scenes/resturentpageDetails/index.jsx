import React from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const restaurants = [
  {
    id: 1,
    title: "Cook and Life",
    description: "Learn the basics of React including components, hooks, and more.",
    image: "../assets/20190405-PlantaQueen23.webp",
    time: "10:00 AM - 10:00 PM",
  },
  // ...other restaurants
];

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((restaurant) => restaurant.id === Number(id));

  return restaurant ? (
    <Box p="2rem">
      <Typography variant="h3">{restaurant.title}</Typography>
      <img src={restaurant.image} alt={restaurant.title} width="100%" />
      <Typography variant="body1" mt="2rem">
        {restaurant.description}
      </Typography>
        <Typography variant="body1" mt="2rem">
            <strong>Opening Hours:</strong> {restaurant.time}
        </Typography>
    </Box>
  ) : (
    <Typography variant="h5">Restaurant not found</Typography>
  );
};

export default RestaurantDetailsPage;
