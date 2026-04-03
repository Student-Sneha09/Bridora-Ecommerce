import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Navbar2 from "./Navbar2";

const CartPage = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } =
  useContext(CartContext);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);

  return (
    <>
      <Navbar2 />

      <Box sx={{ maxWidth: "1000px", mx: "auto", mt: 5, px: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          Your Cart
        </Typography>

        {cart.length === 0 ? (
          <Typography>Your cart is empty</Typography>
        ) : (
          <>
            {/* Cart Items */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {cart.map((item) => (
                <Card
  key={item.id}
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 2,
    p: 2,
  }}
>
  <CardMedia
    component="img"
    image={item.image}
    sx={{ width: 100, borderRadius: "10px" }}
  />

  <CardContent sx={{ flexGrow: 1 }}>
    <Typography sx={{ fontWeight: 600 }}>
      {item.name}
    </Typography>

    <Typography sx={{ color: "#C38822" }}>
      ₹{item.price}
    </Typography>

    {/* 🔥 Quantity Controls */}
    <Box sx={{ display: "flex", alignItems: "center", mt: 1, gap: 1 }}>
      <Button onClick={() => decreaseQty(item.id)}>-</Button>
      <Typography>{item.quantity}</Typography>
      <Button onClick={() => increaseQty(item.id)}>+</Button>
    </Box>
  </CardContent>

  <Button
    onClick={() => removeFromCart(item.id)}
    sx={{ color: "red" }}
  >
    Remove
  </Button>
</Card>
              ))}
            </Box>

            {/* Total */}
            <Box sx={{ mt: 4, textAlign: "right" }}>
              <Typography variant="h6">
                Total: ₹{totalPrice}
              </Typography>

              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#C38822",
                }}
              >
                Checkout
              </Button>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default CartPage;