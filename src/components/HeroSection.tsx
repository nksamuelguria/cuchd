"use client";

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Controller } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

const heroSlides = [
  {
    bgImage: "/latest-assets/img/banner-jaheen.webp",
    insetImage: "/latest-assets/img/jaheen-inset.webp",
    insetImageSmall: "/latest-assets/img/jaheen-inset.webp",
    insetCustomClass: "jahrang",
    name: "Ms. Jaheen",
    nameSpan: "Rangi",
    text: "Account Executive & Global Sales Development Manager",
    packageType: "International <br/>Package",
    amount: "1.19",
    unit: "CR",
    subUnit: "(EUR 140,000)",
    companyLogo: "/latest-assets/img/colect-logo.webp",
    companyAlt: "Colect Logo",
    logoWidth: 155,
    customClass: "jahrang",
  },
  {
    bgImage: "/latest-assets/img/banner-atlassian.webp",
    insetImage: "/latest-assets/img/jaspreet-inset-bg.webp",
    insetImageSmall: "/latest-assets/img/jaspreet-inset-bg-400w.webp",
    insetCustomClass: "",
    name: "Jaspreet",
    nameSpan: "Singh",
    text: "CU Alumni",
    packageType: "National <br/>Package",
    amount: "59.9",
    unit: "LPA",
    companyLogo: "/latest-assets/img/Atlassian-Logo.webp",
    companyAlt: "Atlassian Logo",
    logoWidth: 75,
    customClass: "",
  },
  {
    bgImage: "/latest-assets/img/army-bg.webp",
    insetImage: "/latest-assets/img/major-gill-inset.webp",
    insetImageSmall: "/latest-assets/img/major-gill-inset-400w.webp",
    insetCustomClass: "major-arsh",
    name: "Major Arshdeep",
    nameSpan: "Singh Gill",
    text: "Awarded to CU Alumnus",
    packageType: "National Highest <br/>Package",
    amount: "51.00",
    unit: "LPA",
    multiLogos: [
      { src: "/latest-assets/img/kirti-chakra-logo.webp", alt: "Kirti Chakra Logo", width: 71 },
      { src: "/latest-assets/img/indian-army-logo.webp", alt: "Indian Army Logo", width: 90 },
    ],
    customClass: "army",
  },
  {
    bgImage: "/latest-assets/img/banner-2025-2.webp",
    insetImage: "/latest-assets/img/arshdeep-inset-bg.webp",
    insetImageSmall: "/latest-assets/img/arshdeep-inset-bg.webp",
    insetCustomClass: "",
    name: "Arshdeep",
    nameSpan: "Singh",
    text: "International Cricketer",
    packageType: "National Highest <br/>Package",
    amount: "51.00",
    unit: "LPA",
    companyLogo: "/latest-assets/img/bcci-logo.webp",
    companyAlt: "BCCI Logo",
    logoWidth: 63,
    customClass: "",
  },
  {
    bgImage: "/latest-assets/img/banner-2025-sid-bg.webp",
    insetImage: "/latest-assets/img/sid-inset-bg.webp",
    insetImageSmall: "/latest-assets/img/sid-inset-bg.webp",
    insetCustomClass: "",
    name: "Siddhant",
    nameSpan: "Bhardwaj",
    text: "CSE-IBM Information Security",
    packageType: "International Highest <br/>Package",
    amount: "1.7",
    unit: "CRORE",
    companyLogo: "/latest-assets/img/dame-munni-cap.webp",
    companyAlt: "Dame Irone logo",
    logoWidth: 183,
    customClass: "",
  },
  {
    bgImage: "/latest-assets/img/bbuzz-honey-bg.webp",
    insetImage: "/latest-assets/img/parbhat-inset-bg.webp",
    insetImageSmall: "/latest-assets/img/parbhat-inset-bg.webp",
    insetCustomClass: "",
    name: "Parbhat",
    nameSpan: "Phogat",
    text: "CU Alumni & Founder - BBuzzHoney",
    packageType: "Turnover <br/>(2024-2025)",
    amount: "2.5",
    unit: "CRORE",
    companyLogo: "/latest-assets/img/bbuzz-honey-logo.webp",
    companyAlt: "bbuzzhoney logo",
    logoWidth: 70,
    customClass: "",
  },
];

export default function HeroSection() {
  const [bgSwiper, setBgSwiper] = useState<SwiperClass | null>(null);
  const [infoSwiper, setInfoSwiper] = useState<SwiperClass | null>(null);
  const [photoSwiper, setPhotoSwiper] = useState<SwiperClass | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    state: '',
  });

  // Synchronize bgSwiper with infoSwiper and photoSwiper via Swiper Controller module
  useEffect(() => {
    if (bgSwiper && !bgSwiper.destroyed) {
      const controls: SwiperClass[] = [];
      if (infoSwiper && !infoSwiper.destroyed) controls.push(infoSwiper);
      if (photoSwiper && !photoSwiper.destroyed) controls.push(photoSwiper);
      if (controls.length > 0) {
        bgSwiper.controller.control = controls;
      }
    }
  }, [bgSwiper, infoSwiper, photoSwiper]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const idx = swiper.realIndex;
    if (infoSwiper && !infoSwiper.destroyed) {
      infoSwiper.slideToLoop(idx);
    }
    if (photoSwiper && !photoSwiper.destroyed) {
      photoSwiper.slideToLoop(idx);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for applying! Admissions team will contact you soon.');
  };

  return (
    <section className="heroContainer position-relative" style={{ minHeight: '668px', overflow: 'hidden' }}>
      {/* Background Banner Swiper Slider */}
      <div className="heroSlider h-100" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        <Swiper
          modules={[Autoplay, EffectFade, Controller]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSwiper={setBgSwiper}
          onSlideChange={handleSlideChange}
          loop={true}
          style={{ width: '100%', height: '100%' }}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="heroSlider__item"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                  width: '100%',
                  height: '100%',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Student Inset Cutout Photo Swiper Slider (Full Height Desktop Cutout Images) */}
      <div
        className="another-one"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          pointerEvents: 'none',
          zIndex: 1,
          height: '100%',
        }}
      >
        <Swiper
          modules={[EffectFade, Controller]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          onSwiper={setPhotoSwiper}
          loop={true}
          allowTouchMove={false}
          style={{ width: '100%', height: '100%' }}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%' }}>
              <div
                className={`hp-photo ${slide.insetCustomClass}`}
                style={{
                  position: 'relative',
                  left: 'auto',
                  bottom: 0,
                  transform: 'none',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}
              >
                <picture style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%' }}>
                  <source srcSet={slide.insetImageSmall} media="(max-width: 575px)" />
                  <img
                    src={slide.insetImage}
                    alt={`${slide.name} Cutout Photo`}
                    style={{
                      height: '100%',
                      maxHeight: '760px',
                      width: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </picture>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero Content, Placement Card Slider & Registration Form Overlay */}
      <div className="heroBannerForm" style={{ position: 'relative', zIndex: 2, height: '100%' }}>
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-md-6 order-last order-sm-first">
              <div className="heroSlider__content">
                <h1 className="position-relative">
                  <span>Best Private</span> University <br />in Punjab (India)
                </h1>
                <div className="ps-67">
                  <p>
                    Chandigarh University Mohali (Punjab) integrates groundbreaking research and
                    inclusive education to shape professionals driving innovation, sustainability, and
                    social impact.
                  </p>
                  <div className="btn-grp">
                    <a
                      href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd"
                      className="btn btn-primary btn-hoverEffect"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Apply Today{" "}
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

              {/* Placement Info Card Swiper Slider */}
              <div className="ps-67 pos-abs-mob">
                <div className="hero-place-slider position-relative">
                  <Swiper
                    modules={[Controller]}
                    speed={1000}
                    onSwiper={setInfoSwiper}
                    loop={true}
                    allowTouchMove={false}
                    style={{ width: '100%' }}
                  >
                    {heroSlides.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <div className={`item ${slide.customClass}`}>
                          <div className="hp-info text-white">
                            <div className="hpName">
                              {slide.name}<span> {slide.nameSpan}</span>
                            </div>
                            <div className="hpText">{slide.text}</div>
                          </div>
                          <div className="hp-package text-white">
                            <div className="hpTextbig" dangerouslySetInnerHTML={{ __html: slide.packageType }} />
                            <div className="hpAmount d-block">
                              {slide.amount} <span>{slide.unit}</span>
                              {slide.subUnit && <span className="d-block mt-1">{slide.subUnit}</span>}
                            </div>
                          </div>
                          <div className="hpCompany">
                            {slide.multiLogos ? (
                              slide.multiLogos.map((logo, lIdx) => (
                                <img
                                  key={lIdx}
                                  src={logo.src}
                                  alt={logo.alt}
                                  width={logo.width}
                                  style={{ width: `${logo.width}px` }}
                                />
                              ))
                            ) : (
                              <img src={slide.companyLogo} alt={slide.companyAlt} width={slide.logoWidth} />
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Red Circle Arrow Navigation Buttons */}
                  <div
                    className="hero-slider-nav d-flex align-items-center gap-2 mt-3"
                    style={{ position: 'relative', zIndex: 10 }}
                  >
                    <button
                      type="button"
                      className="hero-swiper-prev btn p-0 d-flex align-items-center justify-content-center"
                      aria-label="Previous Slide"
                      onClick={() => {
                        if (bgSwiper && !bgSwiper.destroyed) {
                          bgSwiper.slidePrev();
                        }
                      }}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#fa0d0d',
                        color: '#ffffff',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                        transition: 'transform 0.2s ease, opacity 0.2s ease',
                      }}
                    >
                      <i className="fa-solid fa-chevron-left" style={{ fontSize: '15px' }}></i>
                    </button>
                    <button
                      type="button"
                      className="hero-swiper-next btn p-0 d-flex align-items-center justify-content-center"
                      aria-label="Next Slide"
                      onClick={() => {
                        if (bgSwiper && !bgSwiper.destroyed) {
                          bgSwiper.slideNext();
                        }
                      }}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#fa0d0d',
                        color: '#ffffff',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                        transition: 'transform 0.2s ease, opacity 0.2s ease',
                      }}
                    >
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '15px' }}></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form Card */}
            <div className="col-md-6 order-first order-sm-last">
              <div className="heroBannerForm__form ms-auto" style={{ maxWidth: '420px' }}>
                <div className="heroBannerForm-header text-center">
                  <h3 className="mb-1" style={{ fontSize: '20px', fontWeight: 700 }}>
                    Apply Today for <span style={{ color: 'var(--flash-red)' }}>Chandigarh University, India</span>
                  </h3>
                  <div className="end_date" style={{ fontSize: '12px', color: '#666', marginBottom: '12px' }}>
                    Application Window Closes on <strong>20<sup>th</sup> September 2026</strong>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-3 bg-white rounded shadow-sm">
                  <div className="mb-2">
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-sm"
                      placeholder="Enter Full Name *"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-sm"
                      placeholder="Enter Email Address *"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control form-control-sm"
                      placeholder="Enter 10-Digit Mobile Number *"
                      pattern="[0-9]{10}"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-2">
                    <select
                      name="program"
                      className="form-select form-select-sm"
                      required
                      value={formData.program}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Discipline / Program *</option>
                      <option value="Engineering">Engineering (B.Tech / M.Tech)</option>
                      <option value="Management">Management (MBA / BBA)</option>
                      <option value="Computer Applications">Computer Applications (BCA / MCA)</option>
                      <option value="Pharmacy">Pharmacy (B.Pharm / M.Pharm)</option>
                      <option value="Law">Law (BA-LLB / BBA-LLB / LLM)</option>
                      <option value="Commerce">Commerce & Accounting (B.Com / M.Com)</option>
                      <option value="Biotechnology">Biotechnology / Applied Sciences</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <select
                      name="state"
                      className="form-select form-select-sm"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                    >
                      <option value="">Select State *</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Delhi">Delhi NCR</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Other">Other States</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-hoverEffect w-100 font-weight-bold"
                    style={{ background: 'var(--flash-red)', border: 'none', padding: '10px 0', borderRadius: '6px' }}
                  >
                    Apply Now for CUCET 2026
                  </button>
                  <div className="text-center mt-2" style={{ fontSize: '10px', color: '#888' }}>
                    By submitting this form, you accept CU's Privacy Policy & Terms.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
