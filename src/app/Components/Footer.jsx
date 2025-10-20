"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="footer-container text-light">
      <div className="container py-5">
        <div className="row gy-4 text-lg-start text-center">
          {/* 🟡 Left Section */}
          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column align-items-lg-start align-items-center">
            <img
              src="/Images/Nitika-Logo1.webp"
              alt="Nitika Logo"
              className="footer-logo mb-3"
              style={{ height: "45px" }}
            />
            <p className="footer-desc text-lg-start text-center">
              NITIKA PHARMACEUTICAL SPECIALITIES PVT. LTD. (NITIKA CHEMICALS)
              was founded in 1991 as a small manufacturing unit and has grown
              into a dynamic production center with products serving multiple
              industry verticals.
            </p>

            <div className="social-icons mt-4 d-flex gap-3 justify-content-lg-start justify-content-center">
              <a href="#"><i className="fa-brands fa-facebook fa-lg"></i></a>
              <a href="#"><i className="fa-brands fa-twitter fa-lg"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin fa-lg"></i></a>
              <a href="#"><i className="fa-brands fa-instagram fa-lg"></i></a>
            </div>
          </div>

          {/* 🟡 Quick Links */}
          <div className="col-lg-2 col-md-6 col-12">
            <h6 className="fw-bold mb-3 text-uppercase">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Awards</a></li>
              <li><a href="#">Quality</a></li>
              <li><a href="#">Manufacturing</a></li>
              <li><a href="#">Download Brochure</a></li>
            </ul>
          </div>

          {/* 🟡 Product Section */}
          <div className="col-lg-2 col-md-6 col-12">
            <h6 className="fw-bold mb-3 text-uppercase">Products</h6>
            <ul className="list-unstyled footer-links">
              <li>Super Disintegrant</li>
              <li>Magnesium Stearate</li>
              <li>Antacid Actives</li>
              <li>Coating Material</li>
            </ul>
          </div>

          {/* 🟡 Contact Section */}
          <div className="col-lg-4 col-md-6 col-12">
            <h6 className="fw-bold mb-3 text-uppercase">Contact</h6>

            <p className="footer-contact d-flex align-items-start justify-content-lg-start justify-content-center">
              <i className="fa-solid fa-envelope text-warning me-2 mt-1"></i>
              <span>enquiry@nitikapharma.com</span>
            </p>

            <p className="footer-contact d-flex align-items-start justify-content-lg-start justify-content-center">
              <i className="fa-solid fa-phone text-warning me-2 mt-1"></i>
              <span>+91 712-2554812</span>
            </p>

            {[
              "Waddhamna Manufacturing Plant, Block No. 03, Mouza-Waddhamna, Nagpur, Maharashtra-440023",
              "Uppalwadi Plant, 85 Wanjra Layout, Kamptee Rd, Nagpur, MH 440026",
              "Butibori Plant, Plot No. J-21, Butibori Industrial Area, Nagpur, MH 441122",
              "Corporate Office: 101, Fortune Ritz, Opp. HDFC House, Civil Lines, Nagpur-440001",
            ].map((address, index) => (
              <p
                key={index}
                className="footer-contact d-flex align-items-start justify-content-lg-start justify-content-center pt-3"
              >
                <i className="fa-solid fa-location-dot text-warning me-2 mt-1"></i>
                <span>{address}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* 🟢 Footer Bottom */}
      <div className="footer-bottom border-top pt-3 pb-2 text-center text-md-start">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center small text-light gap-2">
          <div>
            © 2025 NITIKA PHARMACEUTICAL SPECIALITIES PVT. LTD. All rights reserved.
          </div>
          <div>
            Designed & Developed by{" "}
            <b className="text-warning">iDiligence Solutions Pvt. Ltd.</b>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
