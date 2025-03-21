import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewArrivals from "./components/NewArrivals";
import GroomClothes from "./components/GroomClothes";
import VibeCheck from "./components/VibeCheck";
import Footer from "./components/Footer";
import Customize from "./components/Customize";
import NeedAnything from "./components/NeedAnything";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 90;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="min-h-screen bg-[#c7b5a2]">
      <Navbar scrolled={scrolled} />
      <Hero scrolled={scrolled} />

      {/* Other sections will go here */}
      <div className="h-screen bg-[#e4ad5e]">
        <NewArrivals />
        <GroomClothes />
        <VibeCheck />
        <Customize />
        <NeedAnything />
        <Footer />
        {/* Placeholder for additional content to enable scrolling */}
      </div>
    </div>
  );
}

export default App;
