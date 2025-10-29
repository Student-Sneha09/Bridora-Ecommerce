import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import heroImg from "../assets/image.png"; // your hero image path

const HeroSection = () => {
  // Smooth scroll function
  const scrollToCollection = () => {
    const element = document.getElementById("collection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "90vh", md: "100vh" },
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={heroImg}
        alt="Hero"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.45)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "800px",
          px: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 2,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
          }}
        >
          Discover the Beauty of Handcrafted Jewelry
        </Typography>

        <Typography
          sx={{
            mb: 4,
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
            color: "#f2f2f2",
          }}
        >
          Elegant, timeless, and designed to make every moment special.
        </Typography>

        {/* Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#C38822",
              color: "white",
              fontWeight: 600,
              px: 4,
              py: 1.2,
              borderRadius: "10px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#a26b18" },
              width: { xs: "80%", sm: "auto" },
            }}
            onClick={scrollToCollection} // 🌿 Scrolls to collection
          >
            Explore Collection
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#C38822",
              color: "#C38822",
              fontWeight: 600,
              px: 4,
              py: 1.2,
              borderRadius: "10px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#C38822",
                color: "white",
              },
              width: { xs: "80%", sm: "auto" },
            }}
          >
            Custom Design
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroSection;
