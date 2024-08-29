import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


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

const AdminRestaurantPage = () => {
  const navigate = useNavigate();
  const [restaurantList, setRestaurantList] = useState(restaurants);

  const handleEditClick = (id) => {
    navigate(`/admin/restaurants/edit/${id}`);
  };

  const handleDeleteClick = (id) => {
    setRestaurantList(restaurantList.filter((restaurant) => restaurant.id !== id));
  };

  const handleAddNewRestaurant = () => {
    navigate("/admin/restaurants/add");
  };

  return (
    <Box>
      

      <Box p={3}>
        <Typography variant="h4">Manage Restaurants</Typography>
        <Button
          sx={{ mt: 2, mb: 4 }}
          variant="contained"
          color="primary"
          onClick={handleAddNewRestaurant}
        >
          Add New Restaurant
        </Button>

        <Box display="flex" justifyContent="space-around" flexWrap="wrap" gap="2rem">
          {restaurantList.map((restaurant) => (
            <Card key={restaurant.id} sx={{ maxWidth: 300 }}>
              <CardMedia component="img" height="140" image={restaurant.image} alt={restaurant.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {restaurant.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {restaurant.description}
                </Typography>
              </CardContent>
              <Box display="flex" justifyContent="space-between" p={2}>
                <IconButton color="primary" onClick={() => handleEditClick(restaurant.id)}>
                  <Edit />
                </IconButton>
                <IconButton color="secondary" onClick={() => handleDeleteClick(restaurant.id)}>
                  <Delete />
                </IconButton>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

    
    </Box>
  );
};

export default AdminRestaurantPage;
