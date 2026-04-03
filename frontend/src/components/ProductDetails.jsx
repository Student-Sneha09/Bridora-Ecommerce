import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import products from "../data/product";
import Navbar2 from "./Navbar2";

const ProductDetails = () => {
  const { id } = useParams();

  // find product
  const allProducts = Object.values(products).flat();
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return <Typography sx={{ mt: 5, textAlign: "center" }}>Product not found</Typography>;
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
          alignItems: "center", // ✅ better alignment
        }}
      >
        {/* Image */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              maxWidth: "400px", // ✅ FIXED SIZE
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)", // ✨ premium
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

          {/* Buttons */}
          <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
            <Button
              variant="outlined"
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
              variant="contained"
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
    </>
  );
};

export default ProductDetails;