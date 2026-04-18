import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Badge,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { AuthContext } from "../context/AuthContext";

import logo from "../assets/Logo.png";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const { user, logoutUser } = useContext(AuthContext);

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
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleProtectedNavigation = (path) => {
    if (!user) {
      navigate("/login");
      return;
    }
    navigate(path);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundImage: "linear-gradient(135deg, #bdf9e1, #41604f)",
          color: "black",
          boxShadow: "none",
          px: { xs: 2, md: 5 },
          height: "70px",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          {/* Logo */}
          <Box>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "60px", width: "90px" }}
            />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            {/* MENU ITEMS */}
            {menuItems.map((item) => (
              <Typography
                key={item}
                sx={{
                  cursor: "pointer",
                  fontWeight: 500,
                  fontSize: "16px",
                  "&:hover": { color: "#C38822" },
                }}
                onClick={() => scrollToSection(menuIdMap[item])}
              >
                {item}
              </Typography>
            ))}

            {/* Wishlist */}
            <IconButton onClick={() => handleProtectedNavigation("/wishlist")}>
              <Badge badgeContent={wishlist.length} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>

            {/* Cart */}
            <IconButton onClick={() => handleProtectedNavigation("/cart")}>
              <Badge badgeContent={cart.length} color="warning">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {/* AUTH (SAME STYLE AS MENU) */}
            {!user ? (
              <>
                <Typography
                  sx={{
                    cursor: "pointer",
                    fontWeight: 500,
                    fontSize: "16px",
                    "&:hover": { color: "#C38822" },
                  }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Typography>

                <Typography
                  sx={{
                    cursor: "pointer",
                    fontWeight: 500,
                    fontSize: "16px",
                    "&:hover": { color: "#C38822" },
                  }}
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                >
                  Hi, {user.username}
                </Typography>

                <Typography
                  sx={{
                    cursor: "pointer",
                    fontWeight: 500,
                    fontSize: "16px",
                    "&:hover": { color: "#C38822" },
                  }}
                  onClick={logoutUser}
                >
                  Logout
                </Typography>
              </>
            )}
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

      {/* Drawer (Mobile) */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List sx={{ mt: 3, width: 250 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item}
              onClick={() => scrollToSection(menuIdMap[item])}
            >
              <ListItemText primary={item} sx={{ textAlign: "center" }} />
            </ListItem>
          ))}

          <ListItem onClick={() => handleProtectedNavigation("/wishlist")}>
            <ListItemText
              primary={`Wishlist (${wishlist.length})`}
              sx={{ textAlign: "center" }}
            />
          </ListItem>

          <ListItem onClick={() => handleProtectedNavigation("/cart")}>
            <ListItemText
              primary={`Cart (${cart.length})`}
              sx={{ textAlign: "center" }}
            />
          </ListItem>

          {!user ? (
            <>
              <ListItem onClick={() => navigate("/login")}>
                <ListItemText primary="Login" sx={{ textAlign: "center" }} />
              </ListItem>

              <ListItem onClick={() => navigate("/signup")}>
                <ListItemText primary="Signup" sx={{ textAlign: "center" }} />
              </ListItem>
            </>
          ) : (
            <>
              <ListItem>
                <ListItemText
                  primary={`Hi, ${user.username}`}
                  sx={{ textAlign: "center" }}
                />
              </ListItem>

              <ListItem onClick={logoutUser}>
                <ListItemText primary="Logout" sx={{ textAlign: "center" }} />
              </ListItem>
            </>
          )}
          <Box textAlign="center" mt={2} px={2}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#C38822",
                color: "white",
                fontWeight: 600,
                borderRadius: "8px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#a26b18" },
              }}
              onClick={() => {
                handleDrawerToggle();
                scrollToSection("collection");
              }}
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
