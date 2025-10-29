import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Logo from "../assets/Logo.png";

const AboutPage = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f2f2f2",
        py: { xs: 6, md: 8 }, // reduced padding top & bottom
      }}
    >
      <Container maxWidth="lg">
        {/* Heading with two colors */}
        <Box sx={{ textAlign: "center", mb: 1 }}> {/* reduced margin-bottom */}
          <Typography variant="h3" fontWeight={700} gutterBottom>
            <Box component="span" sx={{ color: "#133925" }}>
              The Art Of{" "}
            </Box>
            <Box component="span" sx={{ color: "#C38822" }}>
              Bridora
            </Box>
          </Typography>

          {/* Introductory paragraph */}
          <Typography
            variant="body1"
            sx={{ color: "#6f6f6f", maxWidth: "800px", mx: "auto", mt: 0 }}
          >
            At Bridora by Aditi, we believe that jewelry is more than just adornment – 
            it's a celebration of life's precious moments. Founded with a passion 
            for timeless beauty and exceptional craftsmanship, we create pieces 
            that become treasured heirlooms, passed down through generations.
          </Typography>
        </Box>

        {/* Image & Story */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 4 }, // reduced gap for mobile too
            alignItems: "center",
            my: 2, // vertical margin reduced
          }}
        >
          <Box sx={{ flex: 1 }}>
            <img
              src={Logo} // Replace with your image
              alt="About Bridora"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" color="textSecondary" mb={1}>
              Bridora started with a vision to connect quality products with the right
              customers. Over the years, we have expanded our collection and grown
              into a trusted ecommerce brand.
            </Typography>
            <Typography variant="body1" color="textSecondary">
              We strive to bring you the latest trends, premium quality products, and
              a seamless online shopping experience. Customer satisfaction is our top
              priority, and we are constantly innovating to meet your needs.
            </Typography>
            {/* Italic line */}
<Box sx={{ textAlign: "center", mt: 3 }}> {/* increased gap */}
  <Typography
    variant="body1"
    sx={{ fontStyle: "italic", mb: 0.5 }}
  >
    "Every piece of jewelry tells a story. Let us help you tell yours."
  </Typography>
  <Typography
    variant="body1"
    sx={{ fontWeight: 700, color: "#C38822", mt: 0 }}
  >
    - Aditi, Founder
  </Typography>
</Box>

          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default AboutPage;
