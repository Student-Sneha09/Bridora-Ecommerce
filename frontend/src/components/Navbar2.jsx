import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
       backgroundImage: "linear-gradient(135deg, #bdf9e1ff, #41604fff)",
        borderBottom: "1px solid #eee",
      }}
    >
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        
        {/* LEFT: Back Arrow */}
        <IconButton onClick={() => {
  navigate("/");
  setTimeout(() => {
    const section = document.getElementById("collection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
}}>
          <ArrowBackIcon sx={{ color: "#fff" }} />
        </IconButton>

        {/* CENTER: Logo + Name */}
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
        

        {/* RIGHT: empty space for balance */}
        <Box sx={{ width: "40px" }} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar2;