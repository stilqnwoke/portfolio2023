import React from "react";
import "./Certificates.css";
import { Data } from "./Data";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Certificates = () => {
  return (
    <section className="certificate container section">
      <h2 className="section__title">Certificates Acquired</h2>
      <span className="section__subtitle">Swipe by dragging</span>

      <Swiper
        className="certificate container"
        loop={true}
        effect="fade"
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image }) => {
          return (
            <SwiperSlide className="certificate__card" key={id}>
              <img src={image} alt="" className="certificate__img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Certificates;
