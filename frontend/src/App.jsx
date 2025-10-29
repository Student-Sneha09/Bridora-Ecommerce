import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Collections from "./components/Collection";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ height: "100vh", width: "100%", backgroundColor: "#f2f2f2" }} id="home">
        <HeroSection />
      </div>
      <div style={{ height: "100vh",  width: "100%", backgroundColor: "#fafafaff" }} id="collection">
        <Collections />
      </div>
    </>
  );
}

export default App;
