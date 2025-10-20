"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const logos1 = [
  "/Images/brand--1.jpg",
  "/Images/brand--2.jpg",
  "/Images/brand--3.jpg",
  "/Images/brand--4.jpg",
  "/Images/brand--5.jpg",
  "/Images/brand--6.jpg",
  "/Images/brand--7.jpg",
  "/Images/brand--8.jpg",
  "/Images/brand--9.jpg",
  "/Images/brand--10.jpg",
  "/Images/brand--11.jpg",
  "/Images/brand--12.jpg",
  "/Images/brand--13.jpg",
];

const logos2 = [
  "/Images/brand--14.jpg",
  "/Images/brand--15.jpg",
  "/Images/brand--16.jpg",
  "/Images/brand--17.jpg",
  "/Images/brand--18.jpg",
  "/Images/brand--19.jpg",
  "/Images/brand--20.jpg",
  "/Images/brand--21.jpg",
  "/Images/brand--22.jpg",
  "/Images/brand--23.jpg",
  "/Images/brand--24.jpg",
  "/Images/brand--25.jpg",
  "/Images/brand--26.jpg",
];

const MarqueesBrands = () => {
  const marquee1Ref = useRef(null);
  const marquee2Ref = useRef(null);

  useEffect(() => {
    if (marquee1Ref.current && marquee2Ref.current) {
      marquee1Ref.current.style.animationPlayState = "running";
      marquee2Ref.current.style.animationPlayState = "running";
    }
  }, []);

  return (
    <section className="w-full bg-transparent overflow-hidden py-12 flex flex-col items-center gap-12">
      <div className="globeBg d-flex align-items-center justify-content-center mt-5 text-center">
        <div className="container py-4">
          <p className="fw-bold text-muted" style={{ fontSize: "40px" }}>
            Global Principals & Partners
          </p>
          <p
            className="mx-auto text-muted"
            style={{ fontSize: "18px", maxWidth: "700px" }}
          >
            Partnering with leading global principals, we deliver superior
            excipients, ensuring quality and innovation worldwide.
          </p>
        </div>
      </div>

      {/* First Row → scrolls RIGHT */}
      <div
        id="marquee1"
        className="flex gap-8 animate-marquee-right"
        ref={marquee1Ref}
      >
        {[...logos1, ...logos1].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Brand Logo ${index + 1}`}
              width={180}
              height={80}
              className="object-contain w-[120px] md:w-[160px] lg:w-[180px] h-auto"
            />
          </div>
        ))}
      </div>

      {/* Second Row → scrolls LEFT */}
      <div
        id="marquee2"
        className="flex gap-8 animate-marquee-left"
        ref={marquee2Ref}
      >
        {[...logos2, ...logos2].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Brand Logo ${index + 1}`}
              width={180}
              height={80}
              className="object-contain w-[120px] md:w-[160px] lg:w-[180px] h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueesBrands;
