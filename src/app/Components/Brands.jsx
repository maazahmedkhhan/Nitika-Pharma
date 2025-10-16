"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const Brands = () => {
  const logos1 = [
    "/Images/brand--1.jpg",
    "/Images/brand--2.jpg",
    "/Images/brand--3.jpg",
    "/Images/brand--4.jpg",
    "/Images/brand--5.jpg",
    "/Images/brand--6.jpg",
    "/Images/brand--7.jpg",
    "/Images/brand--8.jpg",
    "/Images/brand--9.jpg",
    "/Images/brand--10.jpg",
    "/Images/brand--11.jpg",
    "/Images/brand--12.jpg",
    "/Images/brand--13.jpg",
  ];

  const logos2 = [
    "/Images/brand--14.jpg",
    "/Images/brand--15.jpg",
    "/Images/brand--16.jpg",
    "/Images/brand--17.jpg",
    "/Images/brand--18.jpg",
    "/Images/brand--19.jpg",
    "/Images/brand--20.jpg",
    "/Images/brand--21.jpg",
    "/Images/brand--22.jpg",
    "/Images/brand--23.jpg",
    "/Images/brand--24.jpg",
    "/Images/brand--25.jpg",
    "/Images/brand--26.jpg",
  ];

  return (
    <>
      {/* 🌍 Globe Background Section */}
      <div className="globeBg d-flex align-items-center justify-content-center mt-5 text-center">
        <div className="container py-4">
          <p className="fw-bold text-muted" style={{ fontSize: "40px" }}>
            Global Principals & Partners
          </p>
          <p
            className="mx-auto text-muted"
            style={{ fontSize: "18px", maxWidth: "700px" }}
          >
            Partnering with leading global principals, we deliver superior
            excipients, ensuring quality and innovation worldwide.
          </p>
        </div>
      </div>

      {/* 🔁 Brand Sliders */}
      <div className="brand-slider-wrapper mt-3">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={40}
          freeMode={true}
          loop={true}
          speed={10000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          grabCursor={false}
        >
          {logos1.concat(logos1).map((logo, i) => (
            <SwiperSlide key={i} className="brand-slide">
              <img src={logo} alt={`brand-${i}`} className="brand-logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="brand-slider-wrapper">
        <Swiper
          dir="rtl"
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={40}
          freeMode={true}
          loop={true}
          speed={10000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          allowTouchMove={false}
          grabCursor={false}
        >
          {logos2.concat(logos2).map((logo, i) => (
            <SwiperSlide key={i} className="brand-slide">
              <img src={logo} alt={`brand-${i}`} className="brand-logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Brands;
