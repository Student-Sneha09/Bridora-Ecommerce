import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Navbar2 from "./Navbar2";
import products from "../data/product";
import ProductCard from "./ProductCard";

const CategoryPage = () => {
  const { category } = useParams();

  const productList = products[category] || [];

  return (
    <>
      <Navbar2 />

      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          {category.toUpperCase()}
        </Typography>
      </Box>

      {/* Product Grid */}
      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          maxWidth: "1200px",
          mx: "auto",
          px: 3,
          pb: 5,
        }}
      >
        {productList.length > 0 ? (
          productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <Typography>No products available</Typography>
        )}
      </Box>
    </>
  );
};

export default CategoryPage;