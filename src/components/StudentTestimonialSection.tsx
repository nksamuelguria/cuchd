"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const testimonials = [
  {
    name: "Shardul J.",
    thumb: "/latest-assets/img/student-test-thumb-5.webp",
    desktopImg: "/latest-assets/img/student-test-5.webp",
    mobileImg: "/latest-assets/img/student-test-5-mob.webp",
    alt: "Shardul Testimonial"
  },
  {
    name: "Anand B.",
    thumb: "/latest-assets/img/student-test-thumb-2.webp",
    desktopImg: "/latest-assets/img/student-test-2.webp",
    mobileImg: "/latest-assets/img/student-test-2-mob.webp",
    alt: "Anand Testimonial"
  },
  {
    name: "Arshdeep S.",
    thumb: "/latest-assets/img/student-test-thumb-3.webp",
    desktopImg: "/latest-assets/img/student-test-3.webp",
    mobileImg: "/latest-assets/img/student-test-3-mob.webp",
    alt: "Arshdeep Testimonial"
  },
  {
    name: "Vandana C.",
    thumb: "/latest-assets/img/student-test-thumb-4.webp",
    desktopImg: "/latest-assets/img/student-test-4.webp",
    mobileImg: "/latest-assets/img/student-test-4-mob.webp",
    alt: "Vandana Testimonial"
  }
];

export default function StudentTestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<any>(null);

  const handleThumbClick = (index: number) => {
    setActiveIndex(index);
    if (swiperRef) {
      swiperRef.slideTo(index);
    }
  };

  return (
    <section className="studentTestimonial-section pt-115 pb-115 position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="mainHeading position-relative mb-4">
              <p className="text-white mb-1">Students Speak</p>
              <h2 className="text-white">
                <span>Discover the inspiring stories</span> and gain valuable insights straight from our accomplished graduates
              </h2>
            </div>
            <div className="px-188 order-sm-set">
              <div className="for-testimony d-flex flex-wrap gap-2">
                {testimonials.map((item, idx) => (
                  <div
                    key={idx}
                    className={`ft-item cursor-pointer ${activeIndex === idx ? 'is-selected' : ''}`}
                    onClick={() => handleThumbClick(idx)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      className="w-100"
                      src={item.thumb}
                      alt={item.name}
                    />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href="https://www.cuchd.in/testimonials.php"
                  className="btn btn-primary bg-white text-dark btn-hoverEffect"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read All Reviews{" "}
                  <img
                    src="/latest-assets/img/right-arrow-btn.webp"
                    alt="Button Arrow"
                    width={22}
                    className="ms-2"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <div className="testimony-slider">
              <Swiper
                onSwiper={setSwiperRef}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                speed={600}
              >
                {testimonials.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="test-item">
                      <img
                        className="ts-desk d-none d-md-block"
                        src={item.desktopImg}
                        alt={item.alt}
                        width={943}
                      />
                      <img
                        className="ts-mob d-block d-md-none"
                        src={item.mobileImg}
                        alt={item.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .studentTestimonial-section {
          background: var(--flash-red, #fa0d0d) !important;
        }
        .ft-item {
          width: 76px;
          height: 105px;
          padding: 10px;
          border-radius: 10px;
          color: var(--bs-white, #fff);
          transition: 0.2s ease-in-out;
          background: rgba(255, 255, 255, 0.15);
        }
        .ft-item.is-selected {
          background: var(--bs-white, #fff) !important;
          color: var(--bs-black, #000) !important;
        }
        .ft-item span {
          display: block;
          font-size: 10px;
          line-height: 10px;
          margin-top: 10px;
          text-align: center;
        }
        .ft-item img,
        .test-item img {
          border-radius: 6px;
          width: 100%;
        }
        .test-item {
          width: 100%;
          height: auto !important;
        }
      `}</style>
    </section>
  );
}
