"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

interface Slide {
  id: number;
  text: string;
  linkText: string;
  linkUrl: string;
}

const slides: Slide[] = [
  {
    id: 1,
    text: "Register Now for CU Joint Campus Placement Programme",
    linkText: "Register Now",
    linkUrl: "https://www.cuchd.in/placements/frmRegistration.aspx?Type=jpp2019"
  },
  {
    id: 2,
    text: "Learn Beyond Classrooms, Get Certified, and Discover Your Path Early",
    linkText: "Register Now",
    linkUrl: "https://www.cuchd.in/acp/"
  },
  {
    id: 3,
    text: "International Moot Court Competition on Artificial Intelligence & Intellectual Property Rights",
    linkText: "Register Now",
    linkUrl: "https://www.cuchd.in/conference/imccai-26/"
  },
  {
    id: 4,
    text: "IC-AMDFA-2026 (Advanced Materials & Devices for Futuristic Applications- 2026)",
    linkText: "Register Now",
    linkUrl: "https://www.cuchd.in/conference/icamdfa-26/"
  }
];

export default function HeaderSlider() {
  return (
    <div className="headerTopSlider position-relative" style={{ width: '100%', maxWidth: '650px', margin: '0' }}>
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        loop={true}
        speed={600}
        style={{ width: '100%' }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="text-center" style={{ fontSize: '12px', padding: '0 25px', color: '#b3b3b3', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {slide.text}{" "}
              <a
                href={slide.linkUrl}
                target="_blank"
                rel="noreferrer"
                className="xs-btn text-white btn-hoverEffect"
              >
                {slide.linkText}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="swiper-button-prev-custom"
        aria-label="Previous Slide"
        style={{
          position: 'absolute',
          left: '-5px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.6)',
          cursor: 'pointer',
          padding: '0 4px',
          fontSize: '12px',
          zIndex: 10,
          outline: 'none'
        }}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <button
        className="swiper-button-next-custom"
        aria-label="Next Slide"
        style={{
          position: 'absolute',
          right: '-5px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.6)',
          cursor: 'pointer',
          padding: '0 4px',
          fontSize: '12px',
          zIndex: 10,
          outline: 'none'
        }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}
