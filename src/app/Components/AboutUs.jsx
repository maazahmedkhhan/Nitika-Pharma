import React from 'react'

const AboutUs = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="d-flex align-items-center justify-content-center">
          <div className=" w-100 h-100">
            <div className="row align-items-center justify-content-center mx-0 py-5">

              {/* Left Section (Text Card) */}
              <div className="col-lg-6 col-md-10 col-12 d-flex justify-content-center mb-4">
                <div className=" p-4 w-100 mx-3">
                  <h1 className="fw-bold text-secondary mb-3 text-center text-md-start">About Us</h1>
                  <p className="text-secondary fs-5 mb-3 text-center text-md-start">
                    30+ Years of Excellence in Pharmaceutical Excipients
                  </p>
                  <p className="text-secondary text-center text-md-start">
                    NITIKA PHARMACEUTICAL SPECIALITIES PVT. LTD. (NITIKA CHEMICALS) was founded in 1991 as a small manufacturing unit and has grown today into a dynamic production center for a range of products finding applications in various Industry Verticals.
                  </p>
                  <p className="text-secondary text-center text-md-start">
                    15 years after its foundation, the company has adapted to fast-growing technological changes to maintain an edge in the global marketplace.
                  </p>
                  <div className="text-center text-md-start">
                    <button className="btn btn-secondary mt-3">
                      Read More <i className="fa-solid fa-arrow-right ms-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Section (Image) */}
              <div className=" col-lg-6 col-md-10 col-12 d-flex justify-content-center">
                <img
                  src="/Images/AboutUsBg-1.jpg"
                  alt="About Us"
                  className="rounded-4 about-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
