"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const jcpdItems = [
  {
    logo: "/latest-assets/img/CtrlS-logo.webp",
    logoWidth: 120,
    text: "CtrlS Datacenters Ltd. (CtrlS Ltd) for B.Tech (ME, Civil, Electrical) of 2026 passing out batch.",
    lastDate: "",
    btnText: "Apply Now",
    btnUrl: "https://www.cuchd.in/campus-drives/ctrlS-datacenters-ltd/registration.html",
    isResult: false,
  },
  {
    logo: "/latest-assets/img/vvdn-logo.webp",
    logoWidth: 88,
    text: "VVDN Technologies Pvt Ltd for B.E/B.Tech (ECE / EEE / EIE / ICE) of 2026 passing out batch.",
    lastDate: "17th March 2026",
    btnText: "Apply Now",
    btnUrl: "https://www.cuchd.in/campus-drives/vvdn-technologies-pvt-ltd/registration.html",
    isResult: false,
  },
  {
    logo: "/latest-assets/img/mankind-pharma-logo.webp",
    logoWidth: 53,
    text: "Mankind Pharma Ltd. for B.Pharm / M.Pharm, M.Sc (Chemistry/Microbiology), B.Tech (Mechanical / Electrical / Chemical / Instrumentation) students of 2026 passing out batch.",
    lastDate: "",
    btnText: "Apply Now",
    btnUrl: "https://www.cuchd.in/campus-drives/mankind-pharma-ltd/registration.html",
    isResult: false,
  },
  {
    logo: "/latest-assets/img/meil-logo.webp",
    logoWidth: 116,
    text: "Megha Engineering & Infrastructure Ltd for B.Tech (Civil, Mechanical and Electrical Only) students of 2026 passing out batch.",
    lastDate: "",
    btnText: "Apply Now",
    btnUrl: "https://www.cuchd.in/campus-drives/meil/registration.html",
    isResult: false,
  },
  {
    logo: "/latest-assets/img/hero-motocorp-logo.png",
    logoWidth: 80,
    text: "Hero Motocorp Ltd for B.Tech / B.E in Mechanical, Mechatronics, Paint, Automobile",
    lastDate: "",
    btnText: "Find Results",
    btnUrl: "https://www.cuchd.in/campus-drives/results/hero-motocorp-ltd-result.pdf",
    isResult: true,
  },
  {
    logo: "/latest-assets/img/se-logo.webp",
    logoWidth: 75,
    text: "Schneider Electric India Pvt. Ltd. for B.Tech / M.Tech (Mechanical / Power Systems / EE / EEE) students of 2026 passing out batch.",
    lastDate: "",
    subText: "Shortlisted Students",
    btnText: "Find Results",
    btnUrl: "https://www.cuchd.in/campus-drives/results/schneider-shortlist-students.pdf",
    isResult: true,
  },
  {
    logo: "/latest-assets/img/sify-logo.webp",
    logoWidth: 66,
    text: "Sify Technologies Limited for B.E / B.Tech (EEE, Mechanical) of 2026 passing out batch.",
    lastDate: "",
    btnText: "Find Results",
    btnUrl: "https://www.cuchd.in/campus-drives/results/sify-technologies-limited-placement-drive-result.pdf",
    isResult: true,
  },
  {
    logo: "/latest-assets/img/jbm-logo.webp",
    logoWidth: 79,
    text: "JBM Group for B.E / B.Tech (Mechanical, Electrical) students of 2026 passing out batch.",
    lastDate: "",
    btnText: "Find Results",
    btnUrl: "https://www.cuchd.in/campus-drives/results/jbm-group-placement-drive-results.pdf",
    isResult: true,
  },
  {
    logo: "/latest-assets/img/daikin-logo.webp",
    logoWidth: 112,
    text: "Daikin Industries Ltd. for B.E/B.Tech (Mechanical) and Diploma (Mechanical) students of 2025 passing out batch.",
    lastDate: "",
    btnText: "Find Results",
    btnUrl: "https://www.cuchd.in/campus-drives/results/daikin-placement-drive-results.pdf",
    isResult: true,
  },
  {
    logo: "/latest-assets/img/blks-logo.webp",
    logoWidth: 38,
    text: "BL Kashyap & Sons Ltd for B.E / B.Tech (Civil) students of 2026 passing out batch.",
    lastDate: "",
    btnText: "Find Results",
    btnUrl: "https://www.cuchd.in/campus-drives/results/BLKashyap&SonsLtd-placement-drive-results.pdf",
    isResult: true,
  },
];

export default function JointPlacementSection() {
  const [jcpdSwiper, setJcpdSwiper] = useState<any>(null);

  return (
    <section className="jcpd-sec position-relative pt-115">
      <div className="container">
        <div className="head-flex">
          <div className="mainHeading position-relative mb-0">
            <h2>
              Joint <span>Campus</span>
              <div className="pill-head">
                Placement{" "}
                <img
                  src="/latest-assets/img/jcpd-pill-bg.webp"
                  alt="Joint Campus Placement at CU"
                  width={176}
                />{" "}
                Drive
              </div>
            </h2>
          </div>
          <div className="jcpd-title d-flex justify-content-between align-items-center">
            <h5>
              Step into High-Impact Career Opportunities with Top Global Recruiters and Industry Pioneers
            </h5>
            <div className="bor-after position-relative d-flex align-items-center">
              <a
                href="https://www.cuchd.in/placements/joint-placement-programme.php"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-hoverEffect"
              >
                Register Now{" "}
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

        <div className="jcpd-slider position-relative">
          {/* Custom Left Arrow Button */}
          <button
            type="button"
            className="btn rounded-circle d-flex align-items-center justify-content-center jcpd-nav-btn jcpd-prev-btn"
            onClick={() => jcpdSwiper?.slidePrev()}
            aria-label="Previous Slide"
          >
            <i className="fa-solid fa-chevron-left" style={{ fontSize: '14px' }}></i>
          </button>

          {/* Custom Right Arrow Button */}
          <button
            type="button"
            className="btn rounded-circle d-flex align-items-center justify-content-center jcpd-nav-btn jcpd-next-btn"
            onClick={() => jcpdSwiper?.slideNext()}
            aria-label="Next Slide"
          >
            <i className="fa-solid fa-chevron-right" style={{ fontSize: '14px' }}></i>
          </button>

          <Swiper
            onSwiper={setJcpdSwiper}
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              576: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2.2, spaceBetween: 25 },
              992: { slidesPerView: 3, spaceBetween: 30 },
              1200: { slidesPerView: 4, spaceBetween: 30 },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={700}
          >
            {jcpdItems.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="jcpd-item">
                  <div className="jcpd-comp">
                    <img
                      src={item.logo}
                      alt={item.btnText}
                      width={item.logoWidth}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent && !parent.querySelector('.fallback-logo')) {
                          const span = document.createElement('span');
                          span.className = 'fallback-logo fw-bold text-dark fs-6';
                          span.innerText = item.text.split(' ')[0] || 'Company';
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                  <p>{item.text}</p>
                  {item.lastDate ? (
                    <span>
                      Last Date - <span className="text-danger fw-bold d-inline">{item.lastDate}</span>
                    </span>
                  ) : item.subText ? (
                    <span>{item.subText}</span>
                  ) : (
                    <span className="invisible">Last Date</span>
                  )}
                  <a
                    href={item.btnUrl}
                    className={`btn btn-primary btn-hoverEffect ${item.isResult ? 'fr-btn' : ''}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.btnText}
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .jcpd-slider .swiper-slide {
          height: auto !important;
          display: flex;
        }
        .jcpd-slider .swiper-slide .jcpd-item {
          width: 100% !important;
          margin-right: 0 !important;
          height: 100% !important;
          min-height: 190px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          align-items: flex-start !important;
        }
        .jcpd-item span span {
          display: inline !important;
        }
        .jcpd-comp {
          overflow: hidden !important;
          max-width: 100% !important;
        }
        .jcpd-comp img {
          max-height: 38px !important;
          width: auto !important;
          object-fit: contain !important;
        }
        .jcpd-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 37px;
          height: 37px;
          background-color: var(--flash-red, #fa0d0d) !important;
          color: #ffffff !important;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        .jcpd-nav-btn:hover {
          background-color: #d00b0b !important;
          color: #ffffff !important;
        }
        .jcpd-prev-btn {
          left: -3.5%;
        }
        .jcpd-next-btn {
          right: -3.5%;
        }
        @media (max-width: 1199px) {
          .jcpd-prev-btn {
            left: 0;
          }
          .jcpd-next-btn {
            right: 0;
          }
        }
        @media (max-width: 575px) {
          .jcpd-prev-btn {
            left: -10px;
          }
          .jcpd-next-btn {
            right: -10px;
          }
        }
      `}</style>
    </section>
  );
}
