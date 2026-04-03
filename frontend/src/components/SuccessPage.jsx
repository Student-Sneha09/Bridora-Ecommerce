import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" sx={{ color: "#4CAF50", fontWeight: 700 }}>
        🎉 Order Placed Successfully!
      </Typography>

      <Typography sx={{ mt: 2, color: "#555" }}>
        Thank you for shopping with us ❤️
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 4, backgroundColor: "#C38822" }}
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </Button>
    </Box>
  );
};

export default SuccessPage;