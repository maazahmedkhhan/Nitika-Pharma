

import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    name: "MAHENDRA I. GAJJAR",
    role: "Frontend Developer",
    img: "/Images/user1.png",
    text: "This testimonial design made my portfolio look modern and professional. Loved the gradients and animations!",
  },
  {
    name: "Gyan Gupta",
    role: "Doctor",
    img: "/Images/user2.png",
    text: "Clean, elegant and responsive design. Perfect for client testimonials on websites.",
  },
  {
    name: "DR. RALPH",
    role: "Doctor",
    img: "/Images/user3.png",
    text: "I was impressed with how modern and stylish these cards look. Great for any business website!",
  },
  {
    name: "ERIC B. OSHI",
    role: "Doctor",
    img: "/Images/user4.png",
    text: "Beautiful testimonial slider! Works perfectly on mobile and desktop.",
  },
  {
    name: "LINDSAY SWANSON",
    role: "Doctor",
    img: "/Images/user4.png",
    text: "Beautiful testimonial slider! Works perfectly on mobile and desktop.",
  },
];

const Testamonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 992, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // phones
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="testimonial-section">
      <div className="container">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-img">
                <img src={t.img} alt={t.name} />
              </div>
              <h5 className="testimonial-name">{t.name}</h5>
              <p className="testimonial-role">{t.role}</p>
              <p className="testimonial-text">"{t.text}"</p>
   
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testamonials;
