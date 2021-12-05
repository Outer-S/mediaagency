import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import image1 from "../../assets/images/discoverimage1.jpg";
import image2 from "../../assets/images/discoverimage2.jpg";
import image3 from "../../assets/images/discoverimage3.jpg";

import "swiper/swiper-bundle.css";

function DiscoverSection() {
  return (
    <section id="discover-section">
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        centerInsufficientSlides={true}
        effect="flip"
        direction="horizontal"
        navigation={(true, {})}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        id="Swiper-discover"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="slides-discover">
          <img loading="lazy" src={image1} alt="image1"></img>
          <h3>Hello</h3>
        </SwiperSlide>
        <SwiperSlide className="slides-discover">
          <img loading="lazy" src={image2} alt="image2"></img>
          <h3>Hello</h3>
        </SwiperSlide>
        <SwiperSlide className="slides-discover">
          <img loading="lazy" src={image3} alt="image3"></img>
          <h3>Hello</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default DiscoverSection;
