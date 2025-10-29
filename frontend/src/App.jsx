import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Collections from "./components/Collection";
import AboutPage from "./components/About"; // or AboutSection
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
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
      {/* ✅ Add Footer at the bottom */}
      <Footer />
    </>
  );
}

export default App;
