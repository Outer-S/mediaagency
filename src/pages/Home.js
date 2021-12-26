import React from "react";
import { HomeComponents } from "../components";

export default function Home() {
  return (
    <section className="Home">
      <HomeComponents.NavBar />
      <HomeComponents.HeroSection />
      <HomeComponents.Discover />
      <HomeComponents.Services />
    </section>
  );
}
