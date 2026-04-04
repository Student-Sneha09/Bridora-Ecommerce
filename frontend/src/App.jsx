import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Collections from "./components/Collection";
import AboutPage from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CategoryPage from "./components/CategoryPage"; // new
import ProductDetails from "./components/ProductDetails";
import CartPage from "./components/CartPage";
import WishlistPage from "./components/WishlistPage";
import CheckoutPage from "./components/CheckoutPage";
import SuccessPage from "./components/SuccessPage";
import Login from "./components/Login";
import Signup from "./components/Signup";

// 👇 Homepage layout (your existing UI)
const HomePage = () => {
  return (
    <>
      <Navbar />

      <div id="home" style={{ scrollMarginTop: "70px" }}>
        <HeroSection />
      </div>

      <div id="collection" style={{ scrollMarginTop: "70px" }}>
        <Collections />
      </div>

      <div id="about" style={{ scrollMarginTop: "70px" }}>
        <AboutPage />
      </div>

      <div id="contact" style={{ scrollMarginTop: "70px" }}>
        <Contact />
      </div>

      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* 👇 your current page */}
        <Route path="/" element={<HomePage />} />

        {/* 👇 new page */}
        <Route path="/collections/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;