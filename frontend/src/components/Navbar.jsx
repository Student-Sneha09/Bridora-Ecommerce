import React, { useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ["Home", "Collections", "About", "Contact"];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "white",
          color: "black",
          boxShadow: "none",
          padding: "0.3rem 3rem",
          maxHeight: "70px",
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          {/* Left: Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Bindora Logo"
              style={{
                height: "80px",
                width: "100px",
                objectFit: "contain",
                filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.4))",
              }}
            />
          </Box>

          {/* Spacer to push nav links + button to right */}
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
                  transition: "color 0.3s",
                  "&:hover": { color: "#C38822" },
                  fontWeight: 500,
                }}
              >
                {item}
              </Typography>
            ))}

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#C38822",
                color: "white",
                fontWeight: 600,
                borderRadius: "8px",
                padding: "0.5rem 1.2rem",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#a26b18",
                },
              }}
            >
              Shop Now
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#133925" }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: "240px",
            backgroundImage: "linear-gradient(135deg, #f4f9f7ff, #bdfedaff)",
          },
        }}
      >
        <List sx={{ mt: 2 }}>
          {menuItems.map((item) => (
            <ListItem button key={item} onClick={handleDrawerToggle}>
              <ListItemText
                primary={item}
                sx={{
                  textAlign: "center",
                  color: "#133925", // 🌿 your green color here
                  fontWeight: 600,
                  "&:hover": { color: "#C38822" },
                }}
              />
            </ListItem>
          ))}
          <Box textAlign="center" mt={2}>
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
                "&:hover": { backgroundColor: "#a26b18" },
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
