import React, { useState, useEffect } from "react";
import { Box, Typography, CardMedia, IconButton, Grid, Button } from "@mui/material";
import { Bolt, RemoveShoppingCart } from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import Footer from "scenes/footer";
import Navbar from "scenes/navbar";

const deliveryFee = 2.0;

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

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

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + deliveryFee;
  };

  return (
    <Box>
      <Navbar />
      <Box padding="2rem 6%" paddingBottom="6rem">
        <Typography variant="h4" gutterBottom >
          Your Cart
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Typography variant="h6">Item</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6">Picture</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6">Quantity</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6">Subtotal</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6">Delivery Fee</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6">Total</Typography>
              </Grid>
            </Grid>
          </Grid>
          {cart.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={2}>
                  <Typography variant="body1">{item.name}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <CardMedia
                    component="img"
                    height="100"
                    image={item.image}
                    alt={item.name}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1">{item.quantity}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1">
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1">${deliveryFee.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1">
                    ${(item.price * item.quantity + deliveryFee).toFixed(2)}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    color="secondary"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <RemoveShoppingCart />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Box marginTop="2rem" display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6"  >
            Full Total: ${calculateTotal().toFixed(2)} 
          </Typography>
          <Button variant="contained" style={{ backgroundColor: 'blue', color: 'white' }}>
            Proceed to Payment
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default CartPage;