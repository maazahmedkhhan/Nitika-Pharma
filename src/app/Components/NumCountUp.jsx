"use client";

import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { Rubik_Mono_One } from "next/font/google";

const rubikMono = Rubik_Mono_One({
  subsets: ["latin"],
  weight: ["400"],
});

const NumCountUp = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  // Initialize AOS only on client
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // IntersectionObserver to trigger CountUp
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
            obs.disconnect(); // stop observing after first trigger
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="globeBg d-flex align-items-center justify-content-center mt-5 py-5"
    >
      <div className="container text-center">
        <div className="row justify-content-center g-4">
          {/* 1️⃣ Happy Customers */}
          <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="100">
            <div className={`${rubikMono.className} count-number`}>
              {startCount && <CountUp start={0} end={1000} duration={3} suffix="+" separator="" />}
            </div>
            <h6 className="count-label mt-2">Happy Customers</h6>
          </div>

          {/* 2️⃣ Products */}
          <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="200">
            <div className={`${rubikMono.className} count-number`}>
              {startCount && <CountUp start={0} end={250} duration={3} suffix="+" separator="" />}
            </div>
            <h6 className="count-label mt-2">Products</h6>
          </div>

          {/* 3️⃣ Presence in Countries */}
          <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="300">
            <div className={`${rubikMono.className} count-number`}>
              {startCount && <CountUp start={0} end={90} duration={3} suffix="+" separator="" />}
            </div>
            <h6 className="count-label mt-2">Presence in Countries</h6>
          </div>

          {/* 4️⃣ Export */}
          <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="400">
            <div className={`${rubikMono.className} count-number`}>
              {startCount && <CountUp start={0} end={3000} duration={3} suffix="+" separator="" />}
            </div>
            <h6 className="count-label mt-2">Export in Metric Ton</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumCountUp;
