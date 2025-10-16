import React from 'react'

const Header1 = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg glass-header shadow border-bottom sticky-top p-0 rounded-4">



        <div className="container-fluid p-2" >

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <a className="navbar-brand fs-2 ms-4" href="#">
            <div style={{ width: '210px' }}>
              <img src="/Images/Nitika-Logo1.webp" alt="logo" className="img-fluid" crossOrigin="anonymous" />
            </div>
          </a>

          <div className="ms-3 collapse navbar-collapse" id="navbarSupportedContent">
            <div className="position-relative mt-2 searchBar" style={{ width: "300px" }}>
              <button
                className="fa-solid fa-magnifying-glass position-absolute btn"
                style={{
                  left: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "red",
                  fontSize: "14px",
                }}></button>

              <input
                type="search"
                className="form-control  ps-5"
                placeholder="Search by product name, generic name"
                style={{
                  borderRadius: "10px",
                  fontSize: "15px",
                  color: "#6c757d",
                  boxShadow: "none",
                  border: "1px solid #ced4da",
                  padding: "9px 15px",
                }} />
            </div>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " style={{ fontSize: "17px", padding: "0px 7px" }}>


              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="fa-solid fa-house" />
                </a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link navLinkBorder px-4" style={{ fontSize: "15px" }} href="#" role="button">
                  About Us
                </a>
                <ul className="dropdown-menu  dropdown-animate">
                  <li><a className="dropdown-item" href="#">About Nitika</a></li>
                  <li><a className="dropdown-item" href="#">Mission Vision</a></li>
                  <li><a className="dropdown-item" href="#">Milestones</a></li>
                  <li><a className="dropdown-item" href="#">Awards</a></li>
                  <li><a className="dropdown-item" href="#">Life at Nitika</a></li>
                </ul>
              </li>


              <li className="nav-item dropdown">
                <a className="nav-link navLinkBorder px-4 " style={{ fontSize: "15px" }} href="#" role="button">
                  Products
                </a>
                <ul className="dropdown-menu  dropdown-animate">
                  <li><a className="dropdown-item" href="#">TABCELL®- Microcrystalline Cellulose</a></li>
                  <li><a className="dropdown-item" href="#">TABLUBE ® - Magnesium Stearate</a></li>
                  <li><a className="dropdown-item" href="#">NOVALUBE ® - SODIUM STEARYL FUMARATE</a></li>

                  <li className="dropdown-submenu">
                    <a className="dropdown-item " href="#">LUBRICANTS</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">ACILUBE® - STEARIC ACID</a></li>
                      <li><a className="dropdown-item" href="#">TABLUBE A - ALUMINIUM STEARATE</a></li>
                      <li><a className="dropdown-item" href="#">TABLUBE C - CALCIUM STEARATE</a></li>
                      <li><a className="dropdown-item" href="#">TABLUBE® - MAGNESIUM STEARATE</a></li>
                      <li><a className="dropdown-item" href="#">TABSOL ® - SODIUM STARCH GLYCOLATE</a></li>
                      <li><a className="dropdown-item" href="#">NOVALUBE® - SODIUM STEARYL FUMARATE</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item " href="#">SUPER DISINTEGRANTS</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">PHARMELLOSE ® - CROSCARMELLOSE SODIUM</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item " href="#">BINDERS & SURFACTANTS
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">PHARMAPEG ®-PEG</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item " href="#">ANTACID ACTIVES</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">NEUTRA ®- MAGALDRATE</a></li>
                      <li><a className="dropdown-item" href="#">NEUTRA ®- ALUMINUM HYDROXIDE</a></li>
                      <li><a className="dropdown-item" href="#">NEUTRA ®- MAGNESIUM CARBONATE</a></li>
                      <li><a className="dropdown-item" href="#">NEUTRA ® - SIMETHICONE</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item " href="#">MINERAL SALTS</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">STANPURE ® - FERROUS FUMARATE</a></li>
                      <li><a className="dropdown-item" href="#">STANPURE ® - FERROUS SULPHATE</a></li>
                      <li><a className="dropdown-item" href="#">STANPURE ® - MAGNESIUM SULPHATE</a></li>
                      <li><a className="dropdown-item" href="#">STANPURE ® - SODIUM BICARBONATE</a></li>
                      <li><a className="dropdown-item" href="#">TABELL ®- MICROCRYSTALLINE CELLULOSE (MCC)</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item " href="#">GLIDANTS</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">TABGLIDE ®-PURIFIED TALC</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item " href="#">DILUENTS</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">TABIL® - DIBASIC CALCIUM PHOSPHATE ANHYDROUS</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item " href="#">CITRATES</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">CITRATE - CALCIUM CITRATE MALATE</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item " href="#">COATING MATERIALS</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">COLNAT®- FERRIC OXIDE</a></li>
                      <li><a className="dropdown-item" href="#">HYPROMALATE ® - HYPROMELLOSE PHYTHALATE</a></li>
                      <li><a className="dropdown-item" href="#">TABELLOSE ® - HPMC</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link navLinkBorder px-4" style={{ fontSize: "15px" }} href="#" role="button">
                  Facilities
                </a>
                <ul className="dropdown-menu  dropdown-animate">
                  <li><a className="dropdown-item" href="#">Manufacturing</a></li>
                  <li><a className="dropdown-item" href="#">Research and Development</a></li>
                  <li><a className="dropdown-item" href="#">Quality</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link navLinkBorder px-4 " style={{ fontSize: "15px" }} href="#" role="button">
                  Gallery
                </a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link navLinkBorder px-4 " style={{ fontSize: "15px" }} href="#" role="button">
                  Contacts
                </a>
                <ul className="dropdown-menu  dropdown-animate">
                  <li><a className="dropdown-item" href="#">Contact</a></li>
                  <li><a className="dropdown-item" href="#">Career</a></li>
                </ul>
              </li>


              <li className="nav-item dropdown pe-2 px-4 pe-5 " style={{ fontSize: "15px" }}>
                <a className="nav-link navLinkBorder" href="#" role="button">
                  Blog
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header1
