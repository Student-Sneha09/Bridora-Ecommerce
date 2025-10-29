import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(135deg, #ad853fff, #41604fff)",
        color: "#fff",
        pt: 6,
        pb: 2,
        px: { xs: 3, sm: 6, md: 10 },
      }}
    >
      <Grid container spacing={5}>
        {/* Logo & Description */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 2, fontFamily: "Poppins" }}
          >
            Bindora By Aditi
          </Typography>
          <Typography sx={{ lineHeight: 1.8 }}>
            Bindora brings you elegant, handcrafted collections designed to

            reflect beauty, culture, and craftsmanship.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: "Poppins" }}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#home" underline="hover" color="#fff">
              Home
            </Link>
            <Link href="#collection" underline="hover" color="#fff">
              Collections
            </Link>
            <Link href="#about" underline="hover" color="#fff">
              About
            </Link>
            <Link href="#contact" underline="hover" color="#fff">
              Contact
            </Link>
          </Box>
        </Grid>

        {/* Contact Info */}
        {/* <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: "Poppins" }}>
            Contact Info
          </Typography>
          <Typography>Email: info@bindora.com</Typography>
          <Typography>Phone: +91 98765 43210</Typography>
          <Typography>Address: Delhi, India</Typography>
        </Grid> */}

        {/* Social Media */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: "Poppins" }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {/* <IconButton
              component="a"
              href="https://www.facebook.com"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <Facebook />
            </IconButton> */}
            <IconButton
              component="a"
              href="https://www.instagram.com/bridora.official?igsh=ODJzbm9haXdiZTh0"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              component="a"
              href="https://whatsapp.com/channel/0029Vb6GQ7ALo4hbgYLaDX1H"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <WhatsApp />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          mt: 5,
          pt: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          © 2025 Bindora. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
