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
import GlobalPresence from './Components/GlobalPresence';
import Header1 from './Components/Header1';
import Brands from './Components/Brands';
import FloatingSpeedDial from './Components/SpeedDial';
import Testamonials from './Components/Testamonials';

const Home = () => {

  return (
    <>
      <Header />
      {/* <Header1/> */}
      <MainSlider />
      <NumCountUp />
      <RangeOfProducts />
      <AddingSmile />
      <GlobalPresence />
      <WhyNikita />
      <AboutUs />
      <Testamonials />
      <Brands />
      <Footer />
    </>
  )
}

export default Home

