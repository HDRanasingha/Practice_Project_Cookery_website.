import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "scenes/navbar";
import Footer from "scenes/footer";

const RecipesPage = ({ cartItemCount }) => {
  const [exploreCategory, setExploreCategory] = useState("All");
  const navigate = useNavigate();

  // Sample data for recipes
  const recipes = [
    {
      id: 1,
      name: "Cheese Cakes",
      category: "Cakes",
      description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      imageUrl: "../assets/Recipes01.jpeg", // Replace with actual image path
    },
    {
      id: 2,
      name: "Fresh salad",
      category: "Salads",
      description: "A flavorful Indian dish with grilled chicken in a creamy, spiced tomato sauce.",
      imageUrl: "../assets/Recipies02.jpeg", // Replace with actual image path
    },
    {
      id: 3,
      name: "Mixed Berry Smoothie",
      category: "Smoothies",
      description: "A healthy and colorful bowl with quinoa, avocado, chickpeas, and veggies.",
      imageUrl: "../assets/Recipes03.jpeg", // Replace with actual image path
    },
    
  ];

  // Categories with images for the top menu
  const categories = [
    { label: "All", imageUrl: "../assets/All.jpeg" },
    { label: "Salads", imageUrl: "../assets/salad.jpeg" },
    { label: "Cakes", imageUrl: "../assets/cake01.jpeg" },
    { label: "Smoothies", imageUrl: "../assets/Smoothies.jpeg" },
  ];

  // Filtered recipes based on explore category
  const filteredRecipes = recipes.filter((recipe) => {
    return exploreCategory === "All" || recipe.category === exploreCategory;
  });

  const handleExploreCategoryChange = (category) => {
    setExploreCategory(category);
  };

  const handleRecipeClick = (id) => {
    navigate(`/recipes/${id}`);
  };

  return (
    <Box>
      {/* Navbar */}
      <Navbar cartItemCount={cartItemCount} />

      {/* Explore and Filter Options */}
      <Box padding="2rem 6%">
        <Typography variant="h4" fontWeight="bold" marginBottom="2rem">
          Explore Recipes
        </Typography>

        {/* Menu Items with Round Images */}
        <Box display="flex" justifyContent="center" marginBottom="2rem">
          {categories.map((category) => (
            <Box
              key={category.label}
              textAlign="center"
              marginRight="1rem"
              onClick={() => handleExploreCategoryChange(category.label)}
              sx={{
                cursor: "pointer",
                "&:hover": { transform: "scale(1.05)" },
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <Avatar
                src={category.imageUrl}
                alt={category.label}
                sx={{
                  width: 70,
                  height: 70,
                  margin: "auto",
                  marginBottom: "0.5rem",
                  border: exploreCategory === category.label ? "2px solid blue" : "none",
                }}
              />
              <Typography variant="subtitle1">{category.label}</Typography>
            </Box>
          ))}
        </Box>

        {/* Recipe Cards */}
        <Box display="flex" justifyContent="space-around" flexWrap="wrap" gap="2rem">
          {filteredRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              sx={{ maxWidth: 300, cursor: "pointer" }}
              onClick={() => handleRecipeClick(recipe.id)}
            >
              <CardMedia
                component="img"
                height="140"
                image={recipe.imageUrl}
                alt={recipe.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {recipe.description}
                </Typography><Button
                sx={{ margin: "1rem", backgroundColor: "primary.main" }}
                variant="contained"
                onClick={() => handleRecipeClick(recipe.id)}
              >
                View Recipe
              </Button>
              </CardContent>
              
            </Card>
          ))}
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default RecipesPage;

