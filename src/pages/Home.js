import React from "react";
import { HomeComponents } from "../components";

export default function Home() {
  return (
    <div className="Home">
      <HomeComponents.NavBar />
      <HomeComponents.HeroSection />
      <HomeComponents.Discover />
      <HomeComponents.Services />
    </div>
  );
}
