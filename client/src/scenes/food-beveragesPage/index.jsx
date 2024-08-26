import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import { AddShoppingCart, RemoveShoppingCart } from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import Footer from "scenes/footer";
import Navbar from "scenes/navbar";

// Sample food and beverage items
const items = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    image: "../assets/food1.jpeg", // Adjust the path according to your folder structure
    price: 12.99,
  },
  {
    id: 2,
    name: "Caesar Salad",
    description: "Fresh romaine lettuce, Caesar dressing, croutons, and parmesan cheese.",
    image: "../assets/food2.jpeg",
    price: 8.99,
  },
  {
    id: 3,
    name: "Mango Smoothie",
    description: "Refreshing smoothie made with ripe mangoes and yogurt.",
    image: "../assets/food3.jpg",
    price: 5.99,
  },
];

const FoodAndBeveragePage = () => {
  const [cart, setCart] = useState([]);

  // Retrieve cart data from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Retrieved cart from localStorage:", savedCart); // Debugging log
    setCart(savedCart); // Set the cart with items retrieved from localStorage
  }, []);

  // Update localStorage whenever the cart changes
  useEffect(() => {
    console.log("Updating localStorage with cart:", cart); // Debugging log
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const existingItem = cart.find((cartItem) => cartItem.id === id);
    if (existingItem.quantity === 1) {
      setCart(cart.filter((cartItem) => cartItem.id !== id));
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const getQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <Box>
      <Navbar cartItemCount={cartItemCount} />
      <Box padding="2rem 6%">
        <Typography variant="h4" gutterBottom>
          Food and Beverages
        </Typography>
        <FlexBetween flexWrap="wrap" gap="2rem">
          {items.map((item) => (
            <Card key={item.id} sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {item.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${item.price.toFixed(2)}
                </Typography>
              </CardContent>
              <FlexBetween padding="1rem">
                <IconButton
                  color="primary"
                  onClick={() => addToCart(item)}
                >
                  <AddShoppingCart />
                </IconButton>
                <Typography>{getQuantity(item.id)}</Typography> {/* Display the quantity */}
                <IconButton
                  color="secondary"
                  onClick={() => removeFromCart(item.id)}
                  disabled={!isInCart(item.id)} // Disable button if the item isn't in the cart
                >
                  <RemoveShoppingCart />
                </IconButton>
              </FlexBetween>
            </Card>
          ))}
        </FlexBetween>

        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
};

export default FoodAndBeveragePage;