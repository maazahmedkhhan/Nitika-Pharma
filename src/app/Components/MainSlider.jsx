import React from "react";

const MainSlider = () => {
  return (
    <>
      {/* Slider Start */}
      <div className="w-100 m-0 p-0">
        <div className="position-relative">
          <div id="carouselExampleFade"
            className="carousel slide carousel-fade  pointer-event"
            data-bs-ride="carousel"
            data-bs-interval="4000" >
            <div className="carousel-inner">

              {/* --- Slide 1 --- */}
              <div className="carousel-item active">
                <video
                  src="/Images/SliderVidio-1.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="slider-video"></video>

                <div className="slider-content text-light">
                  <p className="fw-bold sliderText">Welcome to</p>
                  <p className="fw-bold sliderText1">NITIKA</p>
                  <p className="fw-bold sliderText2">Pharmaceutical</p>
                  <p className="fw-bold sliderText4">
                    Specialities Pvt. Ltd
                  </p>
                </div>
              </div>

              {/* --- Slide 2 --- */}
              <div className="carousel-item">
                <video
                  src="/Images/SliderVidio-2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="slider-video"
                ></video>

                <div className="slider-content text-light">
                  <p className="fw-bold sliderText1">
                    Research and <span>Development</span>
                  </p>
                  <p className="fw-bold sliderText4">
                    The construction of the plant has been made according to GMP
                    Guidelines to produce more than 2500 PTA of various products.
                  </p>
                  <button className="btn glass-btn mt-3">
                    Read More <i className="fa-solid fa-arrow-right ms-2" />
                  </button>
                </div>
              </div>

              {/* --- Slide 3 --- */}
              <div className="carousel-item">
                <video
                  src="/Images/SliderVidio-3.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="slider-video"
                ></video>

                <div className="slider-content text-light">
                  <p className="fw-bold sliderText1">
                    Adding{" "}
                    <span>
                      Smiles <i className="fa-solid fa-face-smile fs-4"></i>
                    </span>
                  </p>
                  <p className="fw-bold sliderText2">to your Formulation.</p>
                  <p className="fw-bold sliderText4">
                    NITIKA provides a wide range of high quality Pharmaceutical
                    excipients across the pharmaceutical industry worldwide.
                  </p>
                  <button className="btn glass-btn mt-3">
                    Read More <i className="fa-solid fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
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
      </div>
      {/* Slider End */}
    </>
  );
};

export default MainSlider;
