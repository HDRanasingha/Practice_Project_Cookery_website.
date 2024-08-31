import React, { useState } from "react";
import { Box, Button, TextField, Typography, IconButton, MenuItem } from "@mui/material";
import { IoIosImages } from "react-icons/io";
import { MdDelete } from "react-icons/md"; // Import delete icon

import axios from "axios";
import { toast } from "react-toastify";
 // Adjust to your CSS file

const AdminResturent = ({ url }) => {
  const [restaurantData, setRestaurantData] = useState({
    title: "",
    description: "",
    openTime: "",
    location: "",
    contactDetails: "",
    category: "Salad",
    price: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", restaurantData.title);
    formData.append("description", restaurantData.description);
    formData.append("openTime", restaurantData.openTime);
    formData.append("location", restaurantData.location);
    formData.append("contactDetails", restaurantData.contactDetails);
    formData.append("price", Number(restaurantData.price));
    formData.append("category", restaurantData.category);

    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await axios.post(`${url}/api/restaurants/add`, formData);
      if (response.data.success) {
        setRestaurantData({
          title: "",
          description: "",
          openTime: "",
          location: "",
          contactDetails: "",
          category: "Salad",
          price: "",
        });
        setImages([]);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
 

      <Box p={3} flex="1">
        <form className='flex-col' onSubmit={handleSubmit}>
          <Typography variant="h4" mb={3}>Add a New Restaurant</Typography>

          <div className='add-img-upload flex-col'>
            <p>Upload Images</p>
            <label htmlFor="images">
              <IoIosImages size={48} color="#ccc" />
              <input
                onChange={handleImageChange}
                type='file'
                id='images'
                hidden
                multiple
              />
            </label>
          </div>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              mt: 2,
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

          <TextField
            fullWidth
            label="Restaurant Title"
            name="title"
            value={restaurantData.title}
            onChange={handleChange}
            required
            sx={{ mt: 2 }}
          />

          <TextField
            fullWidth
            label="Description"
            name="description"
            value={restaurantData.description}
            onChange={handleChange}
            multiline
            rows={4}
            required
            sx={{ mt: 2 }}
          />

          <TextField
            fullWidth
            label="Opening Time"
            name="openTime"
            value={restaurantData.openTime}
            onChange={handleChange}
            required
            sx={{ mt: 2 }}
          />

          <TextField
            fullWidth
            label="Location"
            name="location"
            value={restaurantData.location}
            onChange={handleChange}
            required
            sx={{ mt: 2 }}
          />

          <TextField
            fullWidth
            label="Contact Details"
            name="contactDetails"
            value={restaurantData.contactDetails}
            onChange={handleChange}
            required
            sx={{ mt: 2 }}
          />

          <TextField
            fullWidth
            label="Product Price"
            name="price"
            value={restaurantData.price}
            onChange={handleChange}
            type='number'
            required
            sx={{ mt: 2 }}
          />

          

          <Button variant="contained" color="primary" type="submit" sx={{ mt: 3 }}>
            Add Restaurant
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AdminResturent;