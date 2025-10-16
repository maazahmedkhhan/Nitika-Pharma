import React from 'react'

const WhyNikita = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center justify-content-center text-center text-md-start">

          {/* Left Image */}
          <div className="col-lg-5 col-md-6 col-12 mb-4 mb-md-0 d-flex justify-content-center">
            <img
              src="/Images/WhyNikita-1.jpg"
              alt="Why Nitika"
              className="rounded-circle img-fluid why-img"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-7 col-md-6 col-12">
            <div className="p-3">
              <h1 className="fw-bold text-muted mb-3">WHY NITIKA</h1>

              <p className="whyNitika-2 text-muted">
                All the major global players producing Magnesium Stearate are chemical companies having a small Pharma division,
                whereas NITIKA PHARMA is a purely Pharma-focused company — and a step further, we focus exclusively on
                Pharmaceutical Specialized Excipients.
              </p>

              <ul className="why-list mt-3 mx-auto mx-md-0">
                <li className="my-2">
                  1st company in Asia and 2nd in the World to have DMF No. for Magnesium Stearate (DMF No. 033414)
                </li>
                <li className="my-2">
                  India’s first International Multi-modal Cargo Hub ‘MIHAN’ is about 15 miles from our Nitika plant.
                </li>
                <li className="my-2">
                  NITIKA is a pioneer in providing a wide range of excipients, with worldwide acceptance for its highest quality standards.
                </li>
              </ul>

              <button className="btn btn-secondary mt-3">
                Read More <i className="fa-solid fa-arrow-right ms-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyNikita
