import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Collections from "./components/Collection";
import AboutPage from "./components/About"; // or AboutSection

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="collection">
        <Collections />
      </div>
      <div id="about">
        <AboutPage />
      </div>
    </>
  );
}

export default App;
