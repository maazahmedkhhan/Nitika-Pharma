"use client";
import React from "react";

const GlobalPrecence1 = () => {
  // 🌍 Define your country data
  const countries = [
    { id: 1, name: "Canada", top: "15%", left: "19%" },
    { id: 2, name: "US", top: "25%", left: "15%" },
    { id: 3, name: "Mexico", top: "39%", left: "12%" },
    { id: 4, name: "Guatemala", top: "41%", left: "15%" },
    { id: 5, name: "Cuba", top: "40%", left: "19%" },
    { id: 6, name: "Costa Rica", top: "47%", left: "18%" },
    { id: 7, name: "Colombia", top: "53%", left: "19%" },
    { id: 8, name: "Ecuador", top: "56%", left: "18%" },
    { id: 9, name: "Brazil", top: "55%", left: "25%" },
    { id: 10, name: "Peru", top: "60%", left: "18%" },
    { id: 11, name: "Chile", top: "66%", left: "21%" },
    { id: 12, name: "Paraguay", top: "64%", left: "26%" },
    { id: 13, name: "Uruguay", top: "67%", left: "29%" },
    { id: 14, name: "Argentina", top: "80%", left: "23%" },
    { id: 15, name: "Russia", top: "15%", left: "58%" },
    { id: 16, name: "France", top: "22%", left: "42%" },
    { id: 17, name: "Germany", top: "20%", left: "46%" },
    { id: 18, name: "Italy", top: "26%", left: "48%" },
    { id: 19, name: "Morocco", top: "36%", left: "40%" },
    { id: 20, name: "Egypy", top: "36%", left: "49%" },
    { id: 21, name: "Sudan", top: "43%", left: "50%" },
    { id: 22, name: "Africa", top: "53%", left: "48%" },
    { id: 23, name: "South Africa", top: "78%", left: "48%" },
    { id: 24, name: "Jordon", top: "36%", left: "54%" },
    { id: 25, name: "KSA", top: "40%", left: "57%" },
    { id: 26, name: "Korea", top: "27%", left: "75%" },
    { id: 27, name: "China", top: "35%", left: "73%" },
    { id: 28, name: "Iraq", top: "27%", left: "60%" },
    { id: 29, name: "Iran", top: "32%", left: "62%" },
    { id: 30, name: "UAE", top: "31%", left: "58%" },
    { id: 31, name: "Bangladesh", top: "41%", left: "71%" },
    { id: 32, name: "Thailand", top: "46%", left: "73%" },
    { id: 33, name: "Vietnam", top: "47%", left: "75%" },
    { id: 34, name: "Japan", top: "47%", left: "84%" },
    { id: 35, name: "Australia", top: "79%", left: "82%" },
  ];

  return (
    <>
      <h2 className="global-presence-heading fw-bold text-muted mb-4">
        OUR GLOBAL PRESENCE
      </h2>

      <div className="global-presence-container">
        {/* Map Background */}
        <img
          src="/Images/Nitika-Map.webp"
          className="global-presence-img"
          alt="World Map"
        />

        {/* Smiley Markers via map() */}
        {countries.map((country) => (
          <div key={country.id}  className="smileFace"
            style={{ top: country.top, left: country.left }}
          >
            <span className="country-name">{country.name}</span>
          </div>
        ))}

        <div className="smileFace1" style={{ top:"41%", left: "65%" }}>
            <span className="country-name">(Nagpur)India</span>
          </div>
      </div>
    </>
  );
};

export default GlobalPrecence1;
