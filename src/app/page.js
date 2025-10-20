"use client";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from './Components/Header';
import MainSlider from './Components/MainSlider';
import NumCountUp from './Components/NumCountUp';
import RangeOfProducts from './Components/RangeOfProducts';
import AddingSmile from './Components/AddingSmile';
import WhyNikita from './Components/WhyNikita';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
// import GlobalPresence from './Components/GlobalPresence';
import MarqueesBrands from './Components/MarqueesBrands';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import Testimonials from './Components/Testimonials';
import GlobalPrecence1 from './Components/GlobalPrecence1';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true, // animation only once
      easing: "ease-in-out", // smoothness
    });
  }, []);

  return (
    <>
      <Header />
      {/* <Header1/> */}
      <MainSlider />
      <NumCountUp />
      <RangeOfProducts />
      <AddingSmile />
      {/* <GlobalPresence /> */}
      <GlobalPrecence1/>
      <WhyNikita />
      <AboutUs />
      {/* <Testimonials /> */}
      <MarqueesBrands />
      <Footer />
    </>
  )
}

export default Home

