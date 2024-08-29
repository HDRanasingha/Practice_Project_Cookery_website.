// AdminPanelPage.js
import React, { useEffect, useState } from "react";
import { Box, Typography,  Card, CardContent, CardMedia, IconButton } from "@mui/material";
import { MdCheckCircle, MdCancel } from "react-icons/md";

import axios from "axios";

const AdminPanelPage = () => {
  const [pendingRestaurants, setPendingRestaurants] = useState([]);

  useEffect(() => {
    // Fetch pending restaurant submissions
    axios.get('/restaurants/pending') // This should point to your endpoint that returns pending restaurants
      .then(response => setPendingRestaurants(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleApproval = (id, approved) => {
    axios.patch(`/restaurants/${id}`, { approved }) // This should point to your endpoint that handles approval
      .then(() => {
        setPendingRestaurants(pendingRestaurants.filter(r => r._id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <Box>
     
      <Box p={3}>
        <Typography variant="h4">Admin Panel - Restaurant Approvals</Typography>
        <Box mt={3}>
          {pendingRestaurants.map((restaurant) => (
            <Card key={restaurant._id} sx={{ maxWidth: 300, mb: 2 }}>
              <CardMedia component="img" height="140" image={`path/to/images/${restaurant.image}`} alt={restaurant.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {restaurant.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {restaurant.description}
                </Typography>
              </CardContent>
              <Box p={1}>
                <IconButton onClick={() => handleApproval(restaurant._id, true)} color="success">
                  <MdCheckCircle />
                </IconButton>
                <IconButton onClick={() => handleApproval(restaurant._id, false)} color="error">
                  <MdCancel />
                </IconButton>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminPanelPage;


