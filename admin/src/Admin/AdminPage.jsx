import React, { useState } from "react";
import { Box, Typography, TextField, Button, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  const [newRestaurant, setNewRestaurant] = useState({ title: "", description: "", image: "" });
  const [newRecipe, setNewRecipe] = useState({ name: "", description: "", imageUrl: "", category: "" });
  const [newFood, setNewFood] = useState({ name: "", description: "", image: "", price: "" });
  const [newCourse, setNewCourse] = useState({ title: "", description: "", image: "" });

  // Sample data - in a real app, this would come from a backend
  const [restaurants, setRestaurants] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [foods, setFoods] = useState([]);
  const [courses, setCourses] = useState([]);

  const handleAddRestaurant = () => {
    setRestaurants([...restaurants, newRestaurant]);
    setNewRestaurant({ title: "", description: "", image: "" });
  };

  const handleAddRecipe = () => {
    setRecipes([...recipes, newRecipe]);
    setNewRecipe({ name: "", description: "", imageUrl: "", category: "" });
  };

  const handleAddFood = () => {
    setFoods([...foods, newFood]);
    setNewFood({ name: "", description: "", image: "", price: "" });
  };

  const handleAddCourse = () => {
    setCourses([...courses, newCourse]);
    setNewCourse({ title: "", description: "", image: "" });
  };

  return (
    <Box padding="2rem">
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      {/* Restaurants */}
      <Box marginBottom="2rem">
        <Typography variant="h5" gutterBottom>
          Add Restaurant
        </Typography>
        <TextField
          label="Title"
          value={newRestaurant.title}
          onChange={(e) => setNewRestaurant({ ...newRestaurant, title: e.target.value })}
          fullWidth
        />
        <TextField
          label="Description"
          value={newRestaurant.description}
          onChange={(e) => setNewRestaurant({ ...newRestaurant, description: e.target.value })}
          fullWidth
        />
        <TextField
          label="Image URL"
          value={newRestaurant.image}
          onChange={(e) => setNewRestaurant({ ...newRestaurant, image: e.target.value })}
          fullWidth
        />
        <Button onClick={handleAddRestaurant} variant="contained" color="primary" style={{ marginTop: '1rem' }}>
          Add Restaurant
        </Button>
      </Box>

      {/* Recipes */}
      <Box marginBottom="2rem">
        <Typography variant="h5" gutterBottom>
          Add Recipe
        </Typography>
        <TextField
          label="Name"
          value={newRecipe.name}
          onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
          fullWidth
        />
        <TextField
          label="Description"
          value={newRecipe.description}
          onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })}
          fullWidth
        />
        <TextField
          label="Image URL"
          value={newRecipe.imageUrl}
          onChange={(e) => setNewRecipe({ ...newRecipe, imageUrl: e.target.value })}
          fullWidth
        />
        <TextField
          label="Category"
          value={newRecipe.category}
          onChange={(e) => setNewRecipe({ ...newRecipe, category: e.target.value })}
          fullWidth
        />
        <Button onClick={handleAddRecipe} variant="contained" color="primary" style={{ marginTop: '1rem' }}>
          Add Recipe
        </Button>
      </Box>

      {/* Food and Beverages */}
      <Box marginBottom="2rem">
        <Typography variant="h5" gutterBottom>
          Add Food and Beverage
        </Typography>
        <TextField
          label="Name"
          value={newFood.name}
          onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
          fullWidth
        />
        <TextField
          label="Description"
          value={newFood.description}
          onChange={(e) => setNewFood({ ...newFood, description: e.target.value })}
          fullWidth
        />
        <TextField
          label="Image URL"
          value={newFood.image}
          onChange={(e) => setNewFood({ ...newFood, image: e.target.value })}
          fullWidth
        />
        <TextField
          label="Price"
          type="number"
          value={newFood.price}
          onChange={(e) => setNewFood({ ...newFood, price: e.target.value })}
          fullWidth
        />
        <Button onClick={handleAddFood} variant="contained" color="primary" style={{ marginTop: '1rem' }}>
          Add Food and Beverage
        </Button>
      </Box>

      {/* Courses */}
      <Box marginBottom="2rem">
        <Typography variant="h5" gutterBottom>
          Add Course
        </Typography>
        <TextField
          label="Title"
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
          fullWidth
        />
        <TextField
          label="Description"
          value={newCourse.description}
          onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
          fullWidth
        />
        <TextField
          label="Image URL"
          value={newCourse.image}
          onChange={(e) => setNewCourse({ ...newCourse, image: e.target.value })}
          fullWidth
        />
        <Button onClick={handleAddCourse} variant="contained" color="primary" style={{ marginTop: '1rem' }}>
          Add Course
        </Button>
      </Box>

      {/* Display Cards */}
      <Box>
        <Typography variant="h4" gutterBottom>
          Display Cards
        </Typography>

        <Typography variant="h5">Restaurants</Typography>
        <Grid container spacing={2}>
          {restaurants.map((restaurant) => (
            <Grid item xs={12} sm={6} md={4} key={restaurant.title}>
              <Card>
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
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5">Recipes</Typography>
        <Grid container spacing={2}>
          {recipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.name}>
              <Card>
                <CardMedia component="img" height="140" image={recipe.imageUrl} alt={recipe.name} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {recipe.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {recipe.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5">Food and Beverages</Typography>
        <Grid container spacing={2}>
          {foods.map((food) => (
            <Grid item xs={12} sm={6} md={4} key={food.name}>
              <Card>
                <CardMedia component="img" height="140" image={food.image} alt={food.name} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {food.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {food.description}
                  </Typography>
                  <Typography variant="h6">${food.price}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5">Courses</Typography>
        <Grid container spacing={2}>
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.title}>
              <Card>
                <CardMedia component="img" height="140" image={course.image} alt={course.title} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminPage;