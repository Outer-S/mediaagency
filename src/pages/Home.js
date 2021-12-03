import React from "react";
import HeroSection from "../components/Home/HeroSection";
import NavBar from "../components/Home/NavBar";

export default function Home() {
  return (
    <div className="Home">
      <NavBar />
      <HeroSection />
    </div>
  );
}
