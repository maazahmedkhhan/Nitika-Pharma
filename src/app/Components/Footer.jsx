import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-container mt-5">
        <div className="container py-5">
          <div className="row gy-4 text-lg-start text-center">

            {/* Left Section */}
            <div className="col-lg-4 col-md-6 col-12 d-flex flex-column align-items-lg-start align-items-center">
              <div className="d-flex align-items-center mb-3 justify-content-lg-start justify-content-center">
                <img
                  src="/Images/Nitika-Logo1.webp"
                  alt="Nitika Logo"
                  className="footer-logo me-3"
                  style={{ height: "40px" }}
                />
              </div>

              <p className="text-light footer-desc text-lg-start text-center">
                NITIKA PHARMACEUTICAL SPECIALITIES PVT. LTD. (NITIKA CHEMICALS)
                was founded in 1991 as a small manufacturing unit and has grown
                into a dynamic production center with products serving multiple
                industry verticals.
              </p>

              <div className="social-icons mt-4 d-flex gap-3 justify-content-lg-start justify-content-center">
                <a href="#"><i className="fa-brands fa-facebook fa-lg text-secondary"></i></a>
                <a href="#"><i className="fa-brands fa-twitter fa-lg text-secondary"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin fa-lg text-secondary"></i></a>
                <a href="#"><i className="fa-brands fa-instagram fa-lg text-secondary"></i></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 col-12 d-flex flex-column align-items-lg-start align-items-center">
              <h6 className="fw-bold mb-3 text-uppercase text-lg-start text-center">Quick Links</h6>
              <ul className="list-unstyled footer-links text-lg-start text-center">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Awards</a></li>
                <li><a href="#">Quality</a></li>
                <li><a href="#">Manufacturing</a></li>
                <li><a href="#">Download Brochure</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-lg-2 col-md-6 col-12">
              <h6 className="fw-bold mb-3 text-uppercase text-lg-start text-center">Product</h6>
              <p className="footer-contact text-lg-start text-center">
                Super Disintegrant
              </p>
              <p className="footer-contact text-lg-start text-center">
                Magnesium Stearate
              </p>
              <p className="footer-contact text-lg-start text-center">
                Antacid Actives
              </p>
              <p className="footer-contact text-lg-start text-center">
                Coating Material
              </p>
            </div>

            <div className="col-lg-2 col-md-6 col-12">
              <h6 className="fw-bold mb-3 text-light text-uppercase text-lg-start text-center">Contact</h6>

              <p className="footer-contact d-flex align-items-start justify-content-lg-start justify-content-center text-light">
                <i className="fa-solid fa-envelope text-warning me-2 mt-1"></i>
                <span>enquiry@nitikapharma.com</span>
              </p>

              <p className="footer-contact d-flex align-items-start justify-content-lg-start justify-content-center text-light">
                <i className="fa-solid fa-phone text-warning me-2 mt-1"></i>
                <span>+91 712-2554812</span>
              </p>

              <p className="footer-contact d-flex align-items-start justify-content-lg-start justify-content-center text-light">
                <i className="fa-solid fa-location-dot text-warning me-2 mt-1"></i>
                <span>
                  Waddhamna Manufacturing Plant, Block No. 03, Mouza-Waddhamna,
                  Nagpur, Maharashtra-440023
                </span>
              </p>
            </div>

            {/* Other Locations */}
            <div className="col-lg-2 col-md-6 col-12">
              <h6 className="fw-bold mb-3 text-uppercase text-lg-start text-center">Other Locations</h6>

              <p className="footer-contact d-flex align-items-start justify-content-lg-start justify-content-center text-light">
                <i className="fa-solid fa-location-dot text-warning me-2 mt-1"></i>
                <span>
                  Uppalwadi Plant, 85 Wanjra Layout, Kamptee Rd, Nagpur, MH 440026
                </span>
              </p>

              <p className="footer-contact d-flex align-items-start justify-content-lg-start justify-content-center text-light">
                <i className="fa-solid fa-location-dot text-warning me-2 mt-1"></i>
                <span>
                  Butibori Plant, Plot No. J-21, Butibori Industrial Area, Nagpur,
                  MH 441122
                </span>
              </p>

              <p className="footer-contact d-flex align-items-start justify-content-lg-start justify-content-center text-light">
                <i className="fa-solid fa-location-dot text-warning me-2 mt-1"></i>
                <span>
                  Corporate Office: 101, Fortune Ritz, Opp. HDFC House, Civil
                  Lines, Nagpur-440001.
                </span>
              </p>
            </div>


          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom border-top pt-3 pb-2 text-center text-md-start">
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-light small">
            <div>
              © 2025 NITIKA PHARMACEUTICAL SPECIALITIES PVT. LTD. All rights reserved.
            </div>
            <div>
              Designed and Developed by{" "}
              <b className="text-light">iDiligence Solutions Pvt Ltd.</b>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
