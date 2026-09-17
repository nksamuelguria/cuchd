"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const topStudents = [
  {
    name: "Abhyansh",
    surname: "Agrahari",
    placedIn: "Amazon",
    salary: "60.00",
    unit: "LPA",
    bgImg: "/latest-assets/img/amazon-new-bg.webp",
    logoImg: "/latest-assets/img/amazon-logo-cap.webp",
    studentImg: "/latest-assets/img/top-student-abhyansh.webp",
    logoWidth: 157,
  },
  {
    name: "Jaspreet",
    surname: "Singh",
    placedIn: "Atlassian",
    salary: "59.9",
    unit: "LPA",
    bgImg: "/latest-assets/img/atlassian-office.webp",
    logoImg: "/latest-assets/img/atlassian--logo.webp",
    studentImg: "/latest-assets/img/top-student-jaspreet.webp",
    logoWidth: 157,
  },
  {
    name: "Vandana",
    surname: "Chauhan",
    placedIn: "Paloalto",
    salary: "54.75",
    unit: "LPA",
    bgImg: "/latest-assets/img/paloalto-bg.webp",
    logoImg: "/latest-assets/img/pan-logo-light-color.webp",
    studentImg: "/latest-assets/img/top-student-vandanaChauhan.webp",
    logoWidth: 157,
  },
  {
    name: "Kunal",
    surname: "Chawla",
    placedIn: "Volvo",
    salary: "54.00",
    unit: "LPA",
    bgImg: "/latest-assets/img/volvo-bg.webp",
    logoImg: "/latest-assets/img/volvo-logo.webp",
    studentImg: "/latest-assets/img/top-student-kunal.webp",
    logoWidth: 157,
  },
  {
    name: "Harsh",
    surname: "Vardhan",
    placedIn: "Amazon",
    salary: "44.00",
    unit: "LPA",
    bgImg: "/latest-assets/img/amazon-bg.webp",
    logoImg: "/latest-assets/img/amazon-logo-cap.webp",
    studentImg: "/latest-assets/img/top-student-harsh.webp",
    logoWidth: 157,
  },
  {
    name: "Shanya",
    surname: "Trehan",
    placedIn: "Microsoft",
    salary: "51.00",
    unit: "LPA",
    bgImg: "/latest-assets/img/microsoft-building-bg.webp",
    logoImg: "/latest-assets/img/microsoft-logo-cap.webp",
    studentImg: "/latest-assets/img/top-student-shanya.webp",
    logoWidth: 157,
  },
  {
    name: "Siddhant",
    surname: "Bhardwaj",
    placedIn: "Dr. Dame Munni Irone (Author, Educator & Humanitarian)",
    salary: "1.7",
    unit: "CRORE",
    bgImg: "/latest-assets/img/irone-bg.webp",
    logoImg: "/latest-assets/img/dame-munni-cap.webp",
    studentImg: "/latest-assets/img/top-student-siddhant.webp",
    logoWidth: 157,
  },
  {
    name: "Gaurav",
    surname: "Kumar",
    placedIn: "Nutanix",
    salary: "51.00",
    unit: "LPA",
    bgImg: "/latest-assets/img/nutanix-building-bg.webp",
    logoImg: "/latest-assets/img/nutanix-logo-cap.webp",
    studentImg: "/latest-assets/img/top-student-gaurav.webp",
    logoWidth: 157,
  },
];

export default function PlacementsOverviewSection() {
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <section className="uniPlacement-section position-relative py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Top Student Placement Slider */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="topStudents-slider position-relative">
              <Swiper
                onSwiper={setSwiperRef}
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  576: { slidesPerView: 1.5, spaceBetween: 15 },
                  768: { slidesPerView: 2, spaceBetween: 20 },
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                speed={700}
              >
                {topStudents.map((student, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="topStudent-item">
                      <div
                        className="topStudent-item__card card border-0 position-relative h-100 overflow-hidden"
                        style={{
                          backgroundImage: `url(${student.bgImg})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        <div className="card-body p-0">
                          <span className="tsCompany">
                            <img
                              src={student.logoImg}
                              alt={student.placedIn}
                              width={student.logoWidth || 157}
                            />
                          </span>
                          <div className="topStudent__info">
                            <span className="tsName">
                              {student.name}
                              <small>{student.surname}</small>
                            </span>
                            <span className="tsText">
                              - Placed in {student.placedIn}
                            </span>
                            <div className="topStudent__package">
                              <span className="tsText mt-0">Salary Package</span>
                              <span className="tsAmount">
                                <sup>₹</sup>{student.salary}{" "}
                                <div className="lpa">{student.unit}</div>
                              </span>
                            </div>
                          </div>
                          <div className="topStudent__photo">
                            <img
                              src={student.studentImg}
                              alt={`${student.name} ${student.surname}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Slider Controls */}
              <div className="d-flex justify-content-end gap-2 mt-3 me-2">
                <button
                  type="button"
                  className="btn rounded-circle d-flex align-items-center justify-content-center ts-nav-btn"
                  onClick={() => swiperRef?.slidePrev()}
                  aria-label="Previous Slide"
                  style={{ width: '38px', height: '38px', backgroundColor: '#fa0d0d', border: 'none', color: '#fff' }}
                >
                  <i className="fa-solid fa-chevron-left" style={{ fontSize: '14px', color: '#fff' }}></i>
                </button>
                <button
                  type="button"
                  className="btn rounded-circle d-flex align-items-center justify-content-center ts-nav-btn"
                  onClick={() => swiperRef?.slideNext()}
                  aria-label="Next Slide"
                  style={{ width: '38px', height: '38px', backgroundColor: '#fa0d0d', border: 'none', color: '#fff' }}
                >
                  <i className="fa-solid fa-chevron-right" style={{ fontSize: '14px', color: '#fff' }}></i>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Placement Statistics & Info */}
          <div className="col-lg-6 ps-lg-4">
            <div className="mainHeading mb-0 position-relative text-center text-sm-start">
              <p>Chandigarh University Mohali (Punjab) Placements Overview</p>
              <h2>
                <span>The World's</span> Leading Companies Hire Our Talent
              </h2>
            </div>

            <div className="mt-5 btnsGroup">
              <a
                href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd"
                className="btn btn-red btn-hoverEffect"
                target="_blank"
                rel="noreferrer"
              >
                Apply Now{" "}
                <img
                  src="/latest-assets/img/right-arrow-btn.webp"
                  alt="Button Arrow"
                  width={22}
                  className="ms-2"
                />
              </a>
              <a
                href="https://www.cuchd.in/placements/"
                className="btn btn-white btn-hoverEffect ms-2"
                target="_blank"
                rel="noreferrer"
              >
                View Placements{" "}
                <img
                  src="/latest-assets/img/right-arrow-btn.webp"
                  alt="Button Arrow"
                  width={22}
                  className="ms-2"
                />
              </a>
            </div>

            {/* Numbers Grid Top */}
            <div className="cuPlacement-numbers my-5">
              <div className="row g-2">
                <div className="col-6 col-lg-3">
                  <div className="placementNo bigpl">
                    <span className="placementNo__num">10000+</span>
                    <span className="placementNo__title">
                      Placement <br />Offers
                    </span>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="placementNo">
                    <span className="placementNo__num">1300+</span>
                    <span className="placementNo__title">
                      Companies Visited<br /> for Recruitment
                    </span>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="placementNo text-white bg-dark">
                    <span className="placementNo__num">
                      59.9<sub>LPA</sub>
                    </span>
                    <span className="placementNo__title">
                      Highest National<br /> Package Offered
                    </span>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="placementNo">
                    <span className="placementNo__num">
                      1.7<sub>CR</sub>
                    </span>
                    <span className="placementNo__title">
                      Highest International<br /> Package Offered
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Package Breakdown Stats */}
              <div className="borderLines">
                <div className="placementNo">
                  <span className="placementNo__num">
                    20<sub>LPA</sub>
                  </span>
                  <span className="placementNo__title">
                    Package Offered by<br /> <strong>40+</strong> Companies
                  </span>
                </div>
                <div className="placementNo">
                  <span className="placementNo__num">
                    15<sub>LPA</sub>
                  </span>
                  <span className="placementNo__title">
                    Package Offered by<br /> <strong>50+</strong> Companies
                  </span>
                </div>
                <div className="placementNo">
                  <span className="placementNo__num">
                    10<sub>LPA</sub>
                  </span>
                  <span className="placementNo__title">
                    Package Offered by<br /> <strong>100+</strong> Companies
                  </span>
                </div>
                <div className="placementNo">
                  <span className="placementNo__num">
                    7<sub>LPA</sub>
                  </span>
                  <span className="placementNo__title">
                    Package Offered by<br /> <strong>350+</strong> Companies
                  </span>
                </div>
                <div className="placementNo">
                  <span className="placementNo__num">
                    5<sub>LPA</sub>
                  </span>
                  <span className="placementNo__title">
                    Package Offered by<br /> <strong>650+</strong> Companies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .uniPlacement-section {
          background-color: #fff;
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .uniPlacement-section .mainHeading p {
          font-size: 18px !important;
          line-height: 22px !important;
          font-weight: 300 !important;
          color: var(--bs-black, #000) !important;
          margin-bottom: 7px !important;
        }
        .uniPlacement-section .mainHeading h2 {
          font-size: 50px !important;
          line-height: 50px !important;
          font-weight: 800 !important;
          color: var(--bs-black, #000) !important;
        }
        .uniPlacement-section .mainHeading h2 span {
          font-weight: 200 !important;
        }
        .btnsGroup .btn {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 14px !important;
          line-height: 20px !important;
          padding: 14px 32px !important;
          border-radius: 6px !important;
          text-transform: uppercase !important;
          font-weight: 700 !important;
          vertical-align: middle !important;
          height: 48px !important;
        }
        .btnsGroup .btn.btn-red {
          background-color: var(--flash-red, #fa0d0d) !important;
          border-color: var(--flash-red, #fa0d0d) !important;
          color: #ffffff !important;
        }
        .btnsGroup .btn.btn-white {
          background-color: #ffffff !important;
          border: 1px solid #dcdcdc !important;
          color: #000000 !important;
        }
        .btnsGroup .btn.btn-white img {
          filter: brightness(0) !important;
        }
        .btnsGroup .btn.btn-white:hover {
          color: #ffffff !important;
        }
        .btnsGroup .btn.btn-white:hover img {
          filter: brightness(0) invert(1) !important;
        }
        .btnsGroup .btn img {
          width: 22px !important;
          height: auto !important;
          display: inline-block !important;
          margin-left: 8px !important;
        }
        .placementNo {
          color: var(--bs-black, #000);
          border-radius: 6px;
          background: #e9e9e9;
          border: 1px solid #e9e9e9;
          height: 131px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 24px;
        }
        .placementNo.bg-dark {
          background: #232323 !important;
          border-color: #232323 !important;
          color: #ffffff !important;
        }
        .placementNo.bg-dark .placementNo__num,
        .placementNo.bg-dark .placementNo__title {
          color: #ffffff !important;
        }
        .placementNo__num {
          font-size: 40px !important;
          line-height: 40px !important;
          font-weight: 800 !important;
          display: block;
          margin-bottom: 8px;
        }
        .placementNo__num sub {
          font-size: 18px !important;
          bottom: 0 !important;
          font-weight: 800 !important;
        }
        .placementNo__title {
          font-size: 12px !important;
          line-height: 14px !important;
          font-weight: 300 !important;
          display: block;
        }
        .placementNo__title strong {
          font-weight: 800 !important;
          color: var(--flash-red, #fa0d0d) !important;
        }
        .placementNo.bigpl {
          background: #ffffff !important;
          border: 1px solid #e9e9e9 !important;
          padding-left: 17px !important;
        }
        .placementNo.bigpl .placementNo__num {
          font-size: 40px !important;
          color: var(--flash-red, #fa0d0d) !important;
        }
        .placementNo.bigpl .placementNo__title {
          font-size: 16px !important;
          font-weight: 700 !important;
        }
        .borderLines {
          display: flex !important;
          justify-content: space-between !important;
          margin-top: 32px !important;
          gap: 0 !important;
        }
        .borderLines .placementNo {
          background: transparent !important;
          border: 0 !important;
          border-radius: 0 !important;
          padding-left: 20px !important;
          padding-right: 20px !important;
          height: 99px !important;
          border-right: 1px solid #e9e9e9 !important;
          flex: 1 !important;
        }
        .borderLines .placementNo:first-child {
          padding-left: 0 !important;
        }
        .borderLines .placementNo:last-child {
          border-right: 0 !important;
          padding-right: 0 !important;
        }
        .topStudents-slider .swiper-slide {
          height: auto !important;
          display: flex !important;
        }
        .topStudents-slider .swiper-slide .topStudent-item {
          width: 100% !important;
          margin-right: 0 !important;
          height: 614px !important;
          display: flex !important;
          flex-direction: column !important;
        }
        .topStudent-item__card {
          width: 100% !important;
          height: 614px !important;
          border-radius: 10px !important;
          padding: 40px 34px !important;
          background-size: cover !important;
          background-position: center !important;
          position: relative !important;
          overflow: hidden !important;
        }
        .tsCompany {
          display: block !important;
          text-align: right !important;
          padding-bottom: 24px !important;
          border-bottom: 1px solid rgba(233, 233, 233, 0.5) !important;
          width: 100% !important;
        }
        .tsCompany img {
          width: 157px !important;
          max-height: 44px !important;
          object-fit: contain !important;
          display: inline-block !important;
        }
        .topStudent__info {
          color: #ffffff !important;
          margin-top: 50px !important;
          position: relative !important;
          z-index: 2 !important;
        }
        .tsName {
          font-size: 40px !important;
          line-height: 22px !important;
          font-weight: 800 !important;
          color: #ffffff !important;
          display: block !important;
          letter-spacing: -0.5px !important;
        }
        .tsName small {
          font-size: 30px !important;
          font-weight: 200 !important;
          display: block !important;
          line-height: 36px !important;
          margin-top: 4px !important;
          color: #ffffff !important;
        }
        .tsText {
          font-size: 12px !important;
          margin-top: 20px !important;
          font-weight: 200 !important;
          color: #ffffff !important;
          display: block !important;
        }
        .topStudent__package {
          margin-top: 40px !important;
        }
        .tsText.mt-0 {
          font-size: 13px !important;
          line-height: 13px !important;
          font-weight: 700 !important;
          display: inline-block !important;
          margin-top: 0 !important;
          color: #ffffff !important;
        }
        .tsAmount {
          font-size: 36px !important;
          font-weight: 800 !important;
          line-height: 46px !important;
          letter-spacing: -0.9px !important;
          margin-top: -5px !important;
          display: block !important;
          color: #ffffff !important;
        }
        .tsAmount sup {
          top: -22px !important;
          font-size: 10px !important;
          font-weight: 400 !important;
          position: relative !important;
        }
        .lpa {
          font-size: 13px !important;
          line-height: 13px !important;
          font-weight: 700 !important;
          display: inline-block !important;
        }
        .topStudent__photo {
          position: absolute !important;
          bottom: 0 !important;
          right: 0 !important;
          width: 332px !important;
          z-index: 1 !important;
          pointer-events: none !important;
        }
        .topStudent__photo img {
          width: 100% !important;
          height: auto !important;
          display: block !important;
        }
      `}</style>
    </section>
  );
}
