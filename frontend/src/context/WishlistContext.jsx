import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const getWishlistKey = () => {
    return user ? `wishlist_${user.username}` : "wishlist_guest";
  };

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem(getWishlistKey());
    setWishlist(storedWishlist ? JSON.parse(storedWishlist) : []);
  }, [user]);

  useEffect(() => {
    localStorage.setItem(getWishlistKey(), JSON.stringify(wishlist));
  }, [wishlist, user]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }

      return [...prev, product];
    });
  };

  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isInWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
