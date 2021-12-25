import React from "react";
import Particles from "react-tsparticles";
import particleConfig from '../../assets/json/particles.json'

function Discover() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <section id="discover-section">
     <Particles  id="particles" init={particlesInit} loaded={particlesLoaded} params={particleConfig}/>
      <article className="article-about">
        <article className="article-container">
          <h6>ABOUT US</h6>
          <h1>GET TO KNOW US</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            harum similique? Eaque eveniet porro, architecto sed expedita labore
            illum ex eligendi itaque dolor alias consequatur.
          </p>
          <button>VIEW MORE</button>
        </article>
      </article>
      <article className="article-history">
        <article className="article-container">
          <h6>OUR HISTORY</h6>
          <h1>CREATIVE AGENCY</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A itaque
            aut obcaecati animi quisquam. Sunt vitae repellendus excepturi ipsa
            nulla beatae consectetur fuga dolore hic.
          </p>
          <button>VIEW MORE</button>
        </article>
      </article>
      <article className="article-mission">
        <article className="article-container">
          <h6>OUR MISSION</h6>
          <h1>GROWING BUSINESSES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla amet
            aperiam dolores enim fugiat ratione, modi deserunt rem voluptatibus
            odit, beatae suscipit. Quasi, nisi aspernatur.
          </p>
          <button>VIEW MORE</button>
        </article>
      </article>
    </section>
  );
}

export default Discover;
