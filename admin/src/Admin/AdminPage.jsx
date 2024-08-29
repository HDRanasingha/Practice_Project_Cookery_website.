import React from "react";
import { Box, Typography, Menu, MenuItem, IconButton, AppBar, Toolbar } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (path) => {
    setAnchorEl(null);
    if (path) navigate(path);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <IconButton
            color="inherit"
            onClick={handleMenuClick}
            aria-controls="admin-menu"
            aria-haspopup="true"
          >
            <ArrowDropDown />
          </IconButton>
          <Menu
            id="admin-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => handleMenuClose(null)}
          >
            <MenuItem onClick={() => handleMenuClose("/admin/recipes")}>Recipes</MenuItem>
            <MenuItem onClick={() => handleMenuClose("/admin/restaurants")}>Restaurants</MenuItem>
            <MenuItem onClick={() => handleMenuClose("/admin/food-and-beverages")}>Food & Beverages</MenuItem>
            <MenuItem onClick={() => handleMenuClose("/admin/courses")}>Courses</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Box p={3}>
        <Typography variant="h4">Welcome to the Admin Dashboard</Typography>
        <Typography variant="body1" mt={2}>
          Use the dropdown menu above to manage Recipes, Restaurants, Food & Beverages, and Courses.
        </Typography>
      </Box>
    </Box>
  );
};

export default AdminPage;

