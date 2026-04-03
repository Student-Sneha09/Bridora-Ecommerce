import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Navbar2 from "./Navbar2";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <>
    <Navbar2 />
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h3" sx={{ fontWeight: 700 }}>
        {category.toUpperCase()}
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Products will be shown here soon ✨
      </Typography>
    </Box>
    </>
  );
};

export default CategoryPage;