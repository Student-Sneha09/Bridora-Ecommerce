import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button, Snackbar, Alert } from "@mui/material";
import products from "../data/product";
import Navbar2 from "./Navbar2";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const [open, setOpen] = useState(false);

  const allProducts = Object.values(products).flat();
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <Typography sx={{ mt: 5, textAlign: "center" }}>
        Product not found
      </Typography>
    );
  }

  return (
    <>
      <Navbar2 />

      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          mt: 5,
          px: 3,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 5,
          alignItems: "center",
        }}
      >
        {/* Image */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          />
        </Box>

        {/* Details */}
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {product.name}
          </Typography>

          <Typography
            sx={{ color: "#C38822", fontSize: "1.5rem", mt: 1, fontWeight: 600 }}
          >
            ₹{product.price}
          </Typography>

          <Typography sx={{ mt: 2, color: "#555" }}>
            This is a beautifully handcrafted jewelry piece designed to elevate your style.
          </Typography>

          <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
            <Button
              variant="outlined"
              onClick={() => {
                addToCart(product);
                setOpen(true);
              }}
              sx={{
                borderColor: "#C38822",
                color: "#C38822",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#C38822",
                  color: "#fff",
                },
              }}
            >
              Add to Cart
            </Button>

            <Button
  type="button"
  variant="contained"
  onClick={(e) => {
    e.preventDefault();
    navigate("/checkout", {
      state: { products: [product] }, // ✅ FIXED
    });
  }}
  sx={{
    backgroundColor: "#C38822",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#a96f1c",
    },
  }}
>
  Order Now
</Button>
          </Box>
        </Box>
      </Box>

      {/* ✅ Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Added to cart successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductDetails;