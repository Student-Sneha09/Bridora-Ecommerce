import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const products = location.state?.products || [];

  const total = products.reduce((sum, item) => sum + item.price, 0);

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", mt: 5 }}>
      <Typography variant="h4">Checkout</Typography>

      {/* Products */}
      {products.map((item) => (
        <Box key={item.id} sx={{ display: "flex", gap: 2, mt: 2 }}>
          <img src={item.image} width="80" />
          <Box>
            <Typography>{item.name}</Typography>
            <Typography>₹{item.price}</Typography>
          </Box>
        </Box>
      ))}

      {/* Total */}
      <Typography sx={{ mt: 3, fontWeight: "bold" }}>
        Total: ₹{total}
      </Typography>

      {/* Form */}
      <TextField label="Name" fullWidth sx={{ mt: 2 }} />
      <TextField label="Address" fullWidth sx={{ mt: 2 }} />
      <TextField label="Phone" fullWidth sx={{ mt: 2 }} />

      {/* Button */}
      <Button
        variant="contained"
        sx={{ mt: 3, backgroundColor: "#C38822" }}
        onClick={() => navigate("/success")}
      >
        Place Order
      </Button>
    </Box>
  );
};

export default CheckoutPage;