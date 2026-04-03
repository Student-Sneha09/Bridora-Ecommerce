import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Badge,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

import logo from "../assets/Logo.png";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ["Home", "Collections", "About", "Contact"];

  const menuIdMap = {
    Home: "home",
    Collections: "collection",
    About: "about",
    Contact: "contact",
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const navbarHeight = 70;

    if (element) {
      const yOffset = -navbarHeight;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleDrawerClick = (id) => {
    handleDrawerToggle();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToSection(id));
    });
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundImage: "linear-gradient(135deg, #bdf9e1ff, #41604fff)",
          color: "black",
          boxShadow: "none",
          px: { xs: 2, md: 5 },
          height: "70px",
          justifyContent: "center",
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Bindora Logo"
              style={{
                height: "60px",
                width: "90px",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item}
                sx={{
                  cursor: "pointer",
                  fontWeight: 500,
                  "&:hover": { color: "#C38822" },
                }}
                onClick={() => scrollToSection(menuIdMap[item])}
              >
                {item}
              </Typography>
            ))}

            {/* ❤️ Wishlist */}
            <IconButton onClick={() => navigate("/wishlist")}>
              <Badge badgeContent={wishlist.length} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>

            {/* 🛒 Cart */}
            <IconButton onClick={() => navigate("/cart")}>
              <Badge badgeContent={cart.length} color="warning">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {/* Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#C38822",
                color: "white",
                fontWeight: 600,
                borderRadius: "8px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#a26b18" },
              }}
              onClick={() => scrollToSection("collection")}
            >
              Shop Now
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 260,
            backgroundImage: "linear-gradient(135deg, #f4f9f7, #bdfeda)",
          },
        }}
      >
        <List sx={{ mt: 3 }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item}
              onClick={() => handleDrawerClick(menuIdMap[item])}
            >
              <ListItemText
                primary={item}
                sx={{ textAlign: "center", fontWeight: 600 }}
              />
            </ListItem>
          ))}

          {/* ❤️ Wishlist */}
          <ListItem button onClick={() => navigate("/wishlist")}>
            <ListItemText
              primary={`Wishlist (${wishlist.length})`}
              sx={{ textAlign: "center", fontWeight: 600 }}
            />
          </ListItem>

          {/* 🛒 Cart */}
          <ListItem button onClick={() => navigate("/cart")}>
            <ListItemText
              primary={`Cart (${cart.length})`}
              sx={{ textAlign: "center", fontWeight: 600 }}
            />
          </ListItem>

          <Box textAlign="center" mt={3}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#C38822",
                color: "white",
                fontWeight: 600,
                borderRadius: "8px",
                px: 3,
                py: 1,
                textTransform: "none",
              }}
              onClick={() => handleDrawerClick("collection")}
            >
              Shop Now
            </Button>
          </Box>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;