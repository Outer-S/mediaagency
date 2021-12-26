import React from "react";
import image1 from "../../assets/images/discoverimage1.jpg";
import image2 from "../../assets/images/discoverimage2.jpg";
import image3 from "../../assets/images/discoverimage3.jpg";

import "swiper/swiper-bundle.css";

function Services() {
  return (
    <section id="service-section">
      <article id="first-service">
        <div className="service-img-holder">
          <img src={image1} />
        </div>
        <div className="service-content-holder">
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae provident eum praesentium recusandae quod repellendus quos molestiae mollitia ea dolores!
          </p>
        </div>
      </article>
      <article id="second-service">
        <div className="service-img-holder">
          <img src={image2} />
        </div>
        <div className="service-content-holder">
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae provident eum praesentium recusandae quod repellendus quos molestiae mollitia ea dolores!
          </p>
        </div>
      </article>
      <article id="third-service">
        <div className="service-img-holder">
          <img src={image3} />
        </div>
        <div className="service-content-holder">
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Repudiandae provident eum praesentium recusandae quod repellendus quos molestiae mollitia ea dolores!
          </p>
        </div>
      </article>
    </section>
  );
}

export default Services;
