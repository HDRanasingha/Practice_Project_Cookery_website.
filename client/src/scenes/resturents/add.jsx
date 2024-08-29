import React, { useState } from "react";
import { Box, Button, TextField, Typography, IconButton } from "@mui/material";
import { IoIosImages } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md"; // Import delete icon
import Navbar from "scenes/navbar"; // Import Navbar component

const AddRestaurantPage = () => {
  const navigate = useNavigate();
  const [restaurantData, setRestaurantData] = useState({
    title: "",
    description: "",
    openTime: "",
    location: "",
    contactDetails: "",
  });
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setRestaurantData({
      ...restaurantData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...selectedImages]);
  };

  const handleDeleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", restaurantData.title);
    formData.append("description", restaurantData.description);
    formData.append("openTime", restaurantData.openTime);
    formData.append("location", restaurantData.location);
    formData.append("contactDetails", restaurantData.contactDetails);

    images.forEach((image) => {
      formData.append("images", image);
    });

    // Simulate form submission
    // In a real application, you would send formData to the server here

    navigate("/restaurants"); // Redirect back to the restaurant page
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar /> {/* Add Navbar */}
      
      <Box p={3} flex="1">
        <form onSubmit={handleSubmit}>
          <Typography variant="h4">Add a New Restaurant</Typography>
          <TextField
            fullWidth
            label="Restaurant Title"
            name="title"
            value={restaurantData.title}
            onChange={handleChange}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={restaurantData.description}
            onChange={handleChange}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            label="Opening Time"
            name="openTime"
            value={restaurantData.openTime}
            onChange={handleChange}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            label="Location"
            name="location"
            value={restaurantData.location}
            onChange={handleChange}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            label="Contact Details"
            name="contactDetails"
            value={restaurantData.contactDetails}
            onChange={handleChange}
            sx={{ mt: 2 }}
          />

          <Box
            sx={{
              border: "2px dashed #ccc",
              borderRadius: "4px",
              textAlign: "center",
              p: 2,
              mt: 2,
              cursor: "pointer",
              position: "relative",
            }}
          >
            <input
              accept="image/*"
              type="file"
              multiple
              onChange={handleImageChange}
              style={{
                opacity: 0,
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                cursor: "pointer",
              }}
            />
            <IoIosImages size={48} color="#ccc" />
            <Typography variant="body1" sx={{ mt: 1 }}>
              Upload Images
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              mt: 2,
              gap: "8px",
            }}
          >
            {images.map((image, index) => (
              <Box
                key={index}
                sx={{
                  width: "100px",
                  height: "100px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Selected ${index + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <IconButton
                  onClick={() => handleDeleteImage(index)}
                  sx={{
                    position: "absolute",
                    top: "4px",
                    right: "4px",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                    },
                  }}
                >
                  <MdDelete />
                </IconButton>
              </Box>
            ))}
          </Box>

          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Add Restaurant
          </Button>
        </form>
      </Box>
    </Box>
  ); 
};

export default AddRestaurantPage;
