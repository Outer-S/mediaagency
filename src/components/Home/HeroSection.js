import React from "react";
import heroBg from "../../assets/videos/hero-bg.mp4";

export default function HeroSection() {
  return (
    <>
      <section className="hero-section">
        <video id="hero-bg" autoPlay loop muted>
          <source src={heroBg} type="video/mp4" />
        </video>

        <div className="hero-content">
          <h1>HIGH END DIGITAL EXPERIENCE</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
            deserunt.
          </p>
          <button>JOIN US NOW</button>
        </div>
      </section>
    </>
  );
}
