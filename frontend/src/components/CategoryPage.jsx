import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";
import Navbar2 from "./Navbar2";
import ProductCard from "./ProductCard";
import api from "../api";

const CategoryPage = () => {
  const { category } = useParams();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/products/?category=${category}`);
        setProductList(response.data);
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <>
      <Navbar2 />

      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Typography>
      </Box>

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
        {loading ? (
          <Box sx={{ gridColumn: "1 / -1", textAlign: "center", py: 5 }}>
            <CircularProgress sx={{ color: "#C38822" }} />
          </Box>
        ) : productList.length > 0 ? (
          productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <Typography sx={{ gridColumn: "1 / -1", textAlign: "center" }}>
            No products available
          </Typography>
        )}
      </Box>
    </>
  );
};

export default CategoryPage;