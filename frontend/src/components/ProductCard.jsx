import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);

  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);

  const handleShare = () => {
    alert("Link copied / shared (feature later)");
  };

  const handleCart = (e) => {
    e.stopPropagation(); // 🔥 VERY IMPORTANT
    addToCart(product);
    setOpen(true);
  };

  const handleOrder = (e) => {
    e.stopPropagation();
    alert("Proceeding to order...");
  };

  return (
    <>
      <Card
        onClick={() => navigate(`/product/${product.id}`)}
        sx={{
          borderRadius: "14px",
          overflow: "hidden",
          position: "relative",
          cursor: "pointer",
          "&:hover .overlay": {
            opacity: 1,
          },
          "&:hover img": {
            transform: "scale(1.05)",
          },
        }}
      >
        {/* Image */}
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            height: 260,
            transition: "0.4s ease",
          }}
        />

        {/* Overlay */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            opacity: 0,
            transition: "0.3s ease",
          }}
        >
          {/* Wishlist */}
          <Tooltip title="Wishlist">
  <IconButton
    onClick={(e) => {
      e.stopPropagation();
      toggleWishlist(product);
    }}
    sx={{ color: "white", "&:hover": { color: "#C38822" } }}
  >
    {isInWishlist(product.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
  </IconButton>
</Tooltip>

          {/* Share */}
          <Tooltip title="Share">
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handleShare();
              }}
              sx={{ color: "white", "&:hover": { color: "#C38822" } }}
            >
              <ShareIcon />
            </IconButton>
          </Tooltip>

          {/* Cart */}
          <Tooltip title="Add to Cart">
            <IconButton
              onClick={handleCart}
              sx={{ color: "white", "&:hover": { color: "#C38822" } }}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Tooltip>

          {/* Order */}
          <Tooltip title="Order Now">
  <IconButton
    onClick={(e) => {
      e.stopPropagation();

      if (!user) {
        navigate("/login");
        return;
      }

      navigate("/checkout", {
        state: { products: [product], fromCart: false },
      });
    }}
    sx={{ color: "white", "&:hover": { color: "#C38822" } }}
  >
    <FlashOnIcon />
  </IconButton>
</Tooltip>
        </Box>

        {/* Content */}
        <CardContent sx={{ textAlign: "center" }}>
          <Typography sx={{ fontWeight: 600 }}>{product.name}</Typography>
          <Typography sx={{ color: "#C38822", fontWeight: 700 }}>
            ₹{product.price}
          </Typography>
        </CardContent>
      </Card>

      {/* ✅ Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Added to cart!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductCard;