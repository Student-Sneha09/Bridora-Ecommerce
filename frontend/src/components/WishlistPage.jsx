import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Navbar2 from "./Navbar2";

const WishlistPage = () => {
  const { wishlist } = useContext(WishlistContext);

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
              <Card key={item.id} sx={{ width: 250 }}>
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