"use client";
import React from "react";
import Slider from "react-slick";

const RangeOfProducts = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false, // We'll use custom buttons
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const products = [
    {
      id: 1,
      img: "/Images/RangeImg_1.webp",
      name: "Super Disintegrant",
    },
    {
      id: 2,
      img: "/Images/RangeImg_2.jpg",
      name: "Magnesium Stearate",
    },
    {
      id: 3,
      img: "/Images/RangeImg_3.webp",
      name: "Antacid Actives",
    },
    {
      id: 4,
      img: "/Images/RangeImg_4.webp",
      name: "Coating Material",
    },
    {
      id: 5,
      img: "/Images/RangeImg_5.webp",
      name: "Binder & Surfactants",
    },
  ];

  return (
    <div className="container-fluid my-5">
      <div className="row align-items-center">
        {/* Left Banner */}
        <div className="col-md-3 mb-4 mb-md-0">
          <video
            src="/Images/productBgVidio-1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-4 w-100 object-cover"
            style={{ height: "475px", objectFit: "cover" }}
          />
        </div>

        {/* Product Slider */}
        <div className="col-md-9 position-relative">
          <button
            className="slider-btn left"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <i className="fa-solid fa-arrow-left" />
          </button>
          <button
            className="slider-btn right"
            onClick={() => sliderRef.current.slickNext()}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>

          <p className="fw-bold text-muted mb-4" style={{ fontSize: "40px" }}>
            Range of Products
          </p>

          <Slider ref={sliderRef} {...settings}>
            {products.map((item) => (
              <div key={item.id} className="px-2">
                <div
                  className="card border-0 shadow-sm rounded-4 overflow-hidden product-card"
                  style={{ height: "400px" }}
                >
                  <div
                    className="card-img-top product-img position-relative"
                    style={{
                      backgroundImage: `url(${item.img})`,
                    }}
                  >
                    <div className="overlay d-flex justify-content-center align-items-center">
                      <span className="overlay-text fw-semibold">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default RangeOfProducts;
