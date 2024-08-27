import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Avatar,
} from "@mui/material";
import Navbar from "scenes/navbar";
import Footer from "scenes/footer";

const RecipesPage = ({ cartItemCount }) => {
  const [filter, setFilter] = useState("All");
  const [exploreCategory, setExploreCategory] = useState("All");

  // Sample data for recipes
  const recipes = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      category: "Italian",
      difficulty: "Medium",
      description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      imageUrl: "path-to-image1", // Replace with actual image path
    },
    {
      id: 2,
      name: "Chicken Tikka Masala",
      category: "Indian",
      difficulty: "Medium",
      description: "A flavorful Indian dish with grilled chicken in a creamy, spiced tomato sauce.",
      imageUrl: "path-to-image2", // Replace with actual image path
    },
    {
      id: 3,
      name: "Vegan Buddha Bowl",
      category: "Vegan",
      difficulty: "Easy",
      description: "A healthy and colorful bowl with quinoa, avocado, chickpeas, and veggies.",
      imageUrl: "path-to-image3", // Replace with actual image path
    },
    // Add more recipes as needed
  ];

  // Categories with images for the top menu
  const categories = [
    { label: "All", imageUrl: "path-to-all-image" },
    { label: "Salads", imageUrl: "path-to-salad-image" },
    { label: "Cakes", imageUrl: "path-to-cake-image" },
    { label: "Vegan", imageUrl: "path-to-vegan-image" },
    // Add more categories as needed
  ];

  // Filtered recipes based on explore category and filter option
  const filteredRecipes = recipes.filter((recipe) => {
    return (
      (exploreCategory === "All" || recipe.category === exploreCategory) &&
      (filter === "All" || recipe.difficulty === filter)
    );
  });

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleExploreCategoryChange = (category) => {
    setExploreCategory(category);
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
                sx={{ width: 70, height: 70, margin: "auto", marginBottom: "0.5rem" }}
              />
              <Typography variant="subtitle1">{category.label}</Typography>
            </Box>
          ))}
        </Box>

        {/* Filter by Difficulty */}
        <Box display="flex" justifyContent="center" marginBottom="2rem">
          <FormControl variant="outlined" sx={{ width: "45%" }}>
            <InputLabel>Filter by Difficulty</InputLabel>
            <Select value={filter} onChange={handleFilterChange} label="Filter by Difficulty">
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Easy">Easy</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Hard">Hard</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Recipe Cards */}
        <Grid container spacing={3}>
          {filteredRecipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" marginBottom="1rem">
                    {recipe.name}
                  </Typography>
                  <Typography variant="body1" marginBottom="1rem">
                    {recipe.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => alert(`Viewing ${recipe.name}`)}
                  >
                    View Recipe
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default RecipesPage;
