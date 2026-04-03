import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Navbar2 from "./Navbar2";

const WishlistPage = () => {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  return (
    <>
      <Navbar2 />

      <Box sx={{ maxWidth: "1000px", mx: "auto", mt: 5 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Your Wishlist ❤️
        </Typography>

        {wishlist.length === 0 ? (
          <Typography>No items in wishlist</Typography>
        ) : (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            {wishlist.map((item) => (
              <Card
  key={item.id}
  sx={{
    width: 250,
    position: "relative",
    cursor: "pointer",
    "&:hover": { transform: "scale(1.03)" },
    transition: "0.3s",
  }}
  onClick={() => navigate(`/product/${item.id}`)}
>
  
  {/* ❌ Remove Button */}
  <IconButton
  onClick={(e) => {
    e.stopPropagation(); // 🔥 VERY IMPORTANT
    toggleWishlist(item);
  }}
  sx={{
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "white",
  }}
>
  <DeleteIcon />
</IconButton>

  <CardMedia
    component="img"
    image={item.image}
    sx={{ height: 200 }}
  />

  <CardContent>
    <Typography>{item.name}</Typography>
    <Typography sx={{ color: "#C38822" }}>
      ₹{item.price}
    </Typography>
  </CardContent>

</Card>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default WishlistPage;