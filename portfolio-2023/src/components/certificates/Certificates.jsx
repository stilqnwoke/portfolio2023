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
      <h2 className="section__title">Certificates</h2>
      <span className="section__subtitle">Acquired</span>

      <Swiper
        className="certificate container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={Pagination}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="certificate__card" key={id}>
              <img src={image} alt="" className="certificate__img" />

              <h3 className="certificate__name">{title}</h3>
              <p className="certificate__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Certificates;
