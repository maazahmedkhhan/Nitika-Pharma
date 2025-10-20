"use client";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MainSlider = () => {
  useEffect(() => {
    // ✅ Import bootstrap JS only in client side
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  const slides = [
    {
      id: 1,
      video: "/Images/SliderVidio-1.mp4",
      content: (
        <>
          <p className="fw-bold sliderText">Welcome to</p>
          <p className="fw-bold sliderText1">NITIKA</p>
          <p className="fw-bold sliderText2">Pharmaceutical</p>
          <p className="fw-bold sliderText4">Specialities Pvt. Ltd</p>
        </>
      ),
    },
    {
      id: 2,
      video: "/Images/SliderVidio-2.mp4",
      content: (
        <>
          <p className="fw-bold sliderText3">Research and Development</p>
          <p className="fw-bold sliderText4">
            The construction of the plant has been made according to GMP
            Guidelines to produce more than 2500 PTA of various products.
          </p>
          <button className="btn glass-btn mt-3">
            Read More <i className="fa-solid fa-arrow-right ms-2" />
          </button>
        </>
      ),
    },
    {
      id: 3,
      video: "/Images/SliderVidio-3.mp4",
      content: (
        <>
          <p className="fw-bold sliderText1">
            Adding{" "}
            <span>
              Smiles <i className="fa-solid fa-face-smile fs-4"></i>
            </span>
          </p>
          <p className="fw-bold sliderText3">to your Formulation.</p>
          <p className="fw-bold sliderText4">
            NITIKA provides a wide range of high-quality Pharmaceutical
            excipients across the industry worldwide.
          </p>
          <button className="btn glass-btn mt-3">
            Read More <i className="fa-solid fa-arrow-right ms-2" />
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="w-100 m-0 p-0 mt-5">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={slide.id}
            >
              <video
                src={slide.video}
                autoPlay
                muted
                loop
                playsInline
                className="slider-video"
              ></video>

              <div className="slider-content text-light">{slide.content}</div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MainSlider;
