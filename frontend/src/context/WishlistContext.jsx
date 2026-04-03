import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
  const saved = localStorage.getItem("wishlist");
  return saved ? JSON.parse(saved) : [];
});

  // ❤️ Add / Remove toggle
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        // remove
        return prev.filter((item) => item.id !== product.id);
      }

      // add
      return [...prev, product];
    });
  };

  // check if already liked
  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  useEffect(() => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}, [wishlist]);

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;