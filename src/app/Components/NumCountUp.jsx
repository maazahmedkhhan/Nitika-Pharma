import React from 'react'
import CountUp from "react-countup";
import { Rubik_Mono_One } from "next/font/google";
const rubikMono = Rubik_Mono_One({
  subsets: ["latin"],
  weight: ["400"],
});

const NumCountUp = () => {
  return (
    <>
      <div className="globeBg d-flex align-items-center justify-content-center mt-5">
        <div className="container text-center py-4">
          <div className="row justify-content-center g-3"> {/* ✅ Added gap control */}

            {/* 1️⃣ Happy Customer */}
            <div className="col-6 col-md-3">
              <div className={`${rubikMono.className} count-number`}>
                <CountUp end={1000} duration={3} suffix="+" separator='' />
              </div>
              <h6 className="count-label mt-2">Happy Customers</h6>
            </div>

            {/* 2️⃣ Products */}
            <div className="col-6 col-md-3">
              <div className={`${rubikMono.className} count-number`}>
                <CountUp end={250} duration={3} suffix="+" separator='' />
              </div>
              <h6 className="count-label mt-2">Products</h6>
            </div>

            {/* 3️⃣ Presence */}
            <div className="col-6 col-md-3">
              <div className={`${rubikMono.className} count-number`}>
                <CountUp end={90} duration={3} suffix="+" separator='' />
              </div>
              <h6 className="count-label mt-2">Presence in Countries</h6>
            </div>

            {/* 4️⃣ Export */}
            <div className="col-6 col-md-3">
              <div className={`${rubikMono.className} count-number`}>
                <CountUp end={3000} duration={3} suffix="+" separator='' />
              </div>
              <h6 className="count-label mt-2">Export in Metric Ton</h6>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default NumCountUp;
