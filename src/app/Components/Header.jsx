"use client";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  useEffect(() => {
    // Import Bootstrap JS only on client
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
      <div className="container-fluid py-2 px-3">
        <a className="navbar-brand" href="#">
          <img src="/Images/Nitika-Logo1.webp" alt="Nitika Pharma Logo" className="brand-logo" />
        </a>

        <div className="d-none d-lg-flex search-wrapper ms-auto ">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            type="search"
            className="form-control search-input"
            placeholder="Search by product or generic name"
          />
        </div>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
          aria-controls="mobileMenu" >
          <i className="fa-solid fa-bars fs-3 text-dark"></i>
        </button>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="mobileMenu"
          aria-labelledby="mobileMenuLabel">
          <div className="offcanvas-header ms-auto bg-white">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close">
            </button>
          </div>

          <div className="offcanvas-body p-3 ms-auto">
            <ul className="navbar-nav w-100">
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>

              {/* About */}
              <li className="nav-item dropdown mx-2">
                <a className="nav-link " href="#" data-bs-toggle="dropdown">
                  About Us
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      About Nitika
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mission Vision
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Milestones
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Awards
                    </a>
                  </li>
                  <li><a className="dropdown-item" href="#">
                    Life at Nitika
                  </a></li>
                </ul>
              </li>

              {/* Products */}
              <li className="nav-item dropdown text-wrap mx-2">
                <a className="nav-link " href="#" data-bs-toggle="dropdown">
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      TABCELL® - Microcrystalline Cellulose
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      TABLUBE® - Magnesium Stearate
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      NOVALUBE® - Sodium Stearyl Fumarate
                    </a>
                  </li>

                  {/* Lubricants Submenu */}
                  <li className="dropdown-submenu">
                    <a className="dropdown-item" href="#">
                      LUBRICANTS
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          ACILUBE® - Stearic Acid
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          TABLUBE A - Aluminium Stearate
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          TABLUBE C - Calcium Stearate
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          TABLUBE® - Magnesium Stearate
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          TABSOL® - Sodium Starch Glycolate
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          NOVALUBE® - Sodium Stearyl Fumarate
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* Super Disintegrants Submenu */}
                  <li className="dropdown-submenu">
                    <a className="dropdown-item " href="#">
                      SUPER DISINTEGRANTS
                    </a>
                    <ul className="dropdown-menu">
                      <li className="">
                        <a className="dropdown-item text-wrap" href="#">
                          PHARMELLOSE® - Croscarmellose Sodium
                        </a>
                        <a className="dropdown-item text-wrap" href="#">
                          PHARMELLOSE® - Croscarmellose Sodium
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Facilities
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Contacts
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

