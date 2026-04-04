import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import api from "../api";
import Navbar2 from "./Navbar2";
import { CartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const { clearCart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();
  
  const products = location.state?.products || [];
  const fromCart = location.state?.fromCart || false;

  const [formData, setFormData] = useState({
    customer_name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const total = products.reduce(
    (sum, item) => sum + Number(item.price) * (item.quantity || 1),
    0
  );

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlaceOrder = async () => {
    if (
      !formData.customer_name.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim()
    ) {
      setOpen(true);
      return;
    }

    try {
      setLoading(true);

      const payload = {
        customer_name: formData.customer_name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        total_amount: total.toFixed(2),
        items: products.map((item) => ({
          product_id: item.id,
          quantity: item.quantity || 1,
          price: Number(item.price).toFixed(2),
        })),
      };

      await api.post("/orders/", payload);

      if (fromCart) {
      clearCart();
     }

     navigate("/success");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!products.length) {
    return (
      <>
        <Navbar2 />
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="h5">No products selected for checkout.</Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      <Navbar2 />

      <Box sx={{ maxWidth: "800px", mx: "auto", mt: 5, px: 3, pb: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          Checkout
        </Typography>

        {/* Ordered products */}
        {products.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              mb: 2,
              p: 2,
              border: "1px solid #eee",
              borderRadius: "10px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <Box>
              <Typography sx={{ fontWeight: 600 }}>{item.name}</Typography>
              <Typography sx={{ color: "#C38822" }}>
                ₹{item.price} × {item.quantity || 1}
              </Typography>
            </Box>
          </Box>
        ))}

        <Typography sx={{ mt: 3, fontWeight: "bold", fontSize: "1.1rem" }}>
          Total: ₹{total.toFixed(2)}
        </Typography>

        {/* Form */}
        <TextField
          label="Full Name"
          name="customer_name"
          fullWidth
          sx={{ mt: 3 }}
          value={formData.customer_name}
          onChange={handleChange}
        />

        <TextField
          label="Email"
          name="email"
          fullWidth
          sx={{ mt: 2 }}
          value={formData.email}
          onChange={handleChange}
        />

        <TextField
          label="Phone Number"
          name="phone"
          fullWidth
          sx={{ mt: 2 }}
          value={formData.phone}
          onChange={handleChange}
        />

        <TextField
          label="Address"
          name="address"
          fullWidth
          multiline
          rows={4}
          sx={{ mt: 2 }}
          value={formData.address}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#C38822",
            "&:hover": { backgroundColor: "#a96f1c" },
          }}
          onClick={handlePlaceOrder}
          disabled={loading}
        >
          {loading ? "Placing Order..." : "Place Order"}
        </Button>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={() => setOpen(false)}
      >
        <Alert severity="warning" sx={{ width: "100%" }}>
          Please fill all required fields.
        </Alert>
      </Snackbar>
    </>
  );
};

export default CheckoutPage;