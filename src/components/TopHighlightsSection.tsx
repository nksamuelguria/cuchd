"use client";

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const notificationsData = [
  {
    title: "CU Joint Campus",
    heading: "Register Now for CU Joint Campus Placement Programme",
    url: "https://www.cuchd.in/placements/frmregistration.aspx?Type=jpp2019",
    btnText: "Register Now"
  },
  {
    title: "Advanced Credit Program",
    heading: "Learn Beyond Classrooms, Get Certified, and Discover Your Path Early",
    url: "https://www.cuchd.in/acp/",
    btnText: "Register Now"
  },
  {
    title: "JURIS NEXUS - 2026",
    heading: "International Moot Court Competition on Artificial Intelligence & Intellectual Property Rights",
    url: "https://www.cuchd.in/conference/imccai-26/",
    btnText: "Register Now"
  },
  {
    title: "IC-AMDFA-2026",
    heading: "Advanced Materials & Devices for Futuristic Applications- 2026",
    url: "https://www.cuchd.in/conference/icamdfa-26/",
    btnText: "Register Now"
  },
  {
    title: "IC-SHAPED Tech 2026",
    heading: "International Conference on Smart Health, Allied Sciences, Physical Education and Digital Education Technologies",
    url: "https://www.cuchd.in/conference/ic-shaped-26/",
    btnText: "Register Now"
  },
  {
    title: "GESIEF 2026",
    heading: "Global Education Summit & Fair 2026",
    url: "https://www.cuchd.in/conference/gesief/",
    btnText: "Register Now"
  },
  {
    title: "BMPS-2026",
    heading: "Bioinformatics and Medicinal Plant Sciences 2026",
    url: "https://www.cuchd.in/conference/bmps-26/",
    btnText: "Register Now"
  },
  {
    title: "Build Summit 2026",
    heading: "Celebrating Engineers' Day with Build Summit 2026 - Innovating For Bharat",
    url: "https://www.cuchd.in/build-2026/",
    btnText: "Join the Movement"
  }
];

const highlightsData = [
  {
    bg: "/latest-assets/img/topHighlights-campus-tank.webp",
    heading: "Chandigarh University, India Launches ‘Campus Tank’ in Collaboration with Apna & Venture Catalysts to Empower India’s Next-Gen Entrepreneurs",
    text: "To empower India’s next generation of startup founders, Apna, which is India’s largest early talent platform trusted by 6 crore+ ...",
    btnText: "Campus Tank",
    btnUrl: "https://news.cuchd.in/2025/07/chandigarh-university-launches-campus.html",
    tags: "Start Ups | Entrepreneurship",
  },
  {
    bg: "/latest-assets/img/topHighlights-adobe.webp",
    heading: "Global Giant Adobe Establishes India’s First Express Lounge at Chandigarh University",
    text: "The Adobe Express Lounge will cater to a wide range of students from Engineering (Computer Science, AI/ML, IT), Media & Communication ...",
    btnText: "Express Lounge",
    btnUrl: "https://news.cuchd.in/2025/08/global-giant-adobe-establishes-indias.html",
    tags: "Adobe | Industry Partnerships",
  },
  {
    bg: "/latest-assets/img/topHighlights-cucet-toppers.webp",
    heading: "Chandigarh University Felicitates 2,516 CUCET Toppers; Offers Scholarships up to 100% at CU Scholars’ Summit 2025",
    text: "In a major push toward making world-class education accessible and reducing student dropouts, Chandigarh University inaugurated ...",
    btnText: "Scholarships",
    btnUrl: "https://news.cuchd.in/2025/06/chandigarh-university-felicitates-2516.html",
    tags: "Scholarships | CUCET",
  },
  {
    bg: "/latest-assets/img/cu-ambitious-bharat-img.webp",
    heading: "",
    text: "",
    btnText: "",
    btnUrl: "https://www.youtube.com/watch?v=iGh2X5o0V0o",
    tags: "",
    isVideo: true,
  },
  {
    bg: "/latest-assets/img/kabaddi-asia-champion.webp",
    heading: "MA Student Sakshi Sharma wins GOLD MEDAL at the 6th Asian Kabaddi Championship held in Iran",
    text: "Sakshi Sharma, Indian Women's Kabaddi Player and CU Punjab, India student, has made CU incredibly proud by winning GOLD ...",
    btnText: "Proud Moments",
    btnUrl: "https://www.facebook.com/chandigarhuniversitygharuan/posts/pfbid024pEmv7ezHVEtc3L1gaDPMyLfiRBjkxzQorszXxT6kea6FH1733FSxzgwBh2myYgSl",
    tags: "Achievement | Sports",
  },
  {
    bg: "/latest-assets/img/topHighlights-maka-trophy.webp",
    heading: "CU Becomes India's First Private University to Win the MAKA Trophy",
    text: "This historic achievement marks a significant milestone for Chandigarh University Punjab India as it continues to inspire young athletes ...",
    btnText: "Historic Moments",
    btnUrl: "https://news.cuchd.in/2025/01/cu-makes-history-becomes-indias-first.html",
    tags: "Achievement | Sports",
  },
  {
    bg: "/latest-assets/img/topHighlights-anupam-mittal.webp",
    heading: "CU-TBI Celebrates National Startup Day with SANDBOX 2025, Featuring Mr. Anupam Mittal",
    text: "The event provided a platform for startups to connect with mentors, industry experts, and investors. Participants explored ...",
    btnText: "TBI & Startups",
    btnUrl: "https://news.cuchd.in/2025/01/cu-tbi-celebrates-national-startup-day.html",
    tags: "Sandbox | Entrepreneurship",
  },
  {
    bg: "/latest-assets/img/topHighlights-sanjay-kumar.webp",
    heading: "President Droupadi Murmu Confers Arjuna Award on CU's Hockey Sensation Sanjay Kumar",
    text: "Sanjay, a prominent member of India’s Hockey Team and Chandigarh University student, was conferred the prestigious Arjuna ...",
    btnText: "National Honours",
    btnUrl: "https://news.cuchd.in/2025/01/president-droupadi-murmu-confers-arjuna.html",
    tags: "Achievement | Hockey",
  },
  {
    bg: "/latest-assets/img/topHighlights-amanGupta.webp",
    heading: "Aman Gupta Inspires at IGNITE 2024: A Celebration of Innovation and Entrepreneurship at Chandigarh University!",
    text: "Chandigarh University Punjab India officially launched IGNITE 2024, bringing together entrepreneurs, students, alumni, and faculty to ...",
    btnText: "Startup Events",
    btnUrl: "https://www.facebook.com/chandigarhuniversitygharuan/posts/pfbid028kXhVD22Xt2pFMMBE5aCf1QQaY9KD1Pf3LYe4NBydhCAksoKGsiXAngGFq8T1x63l",
    tags: "IGNITE | News",
  },
  {
    bg: "/latest-assets/img/topHighlights-worldRecord.webp",
    heading: "CU creates Guinness World Record for largest human image of waving National Flag",
    text: "Strengthening Prime Minister Shri Narendra Modi’s ongoing ‘Har Ghar Tiranga’ campaign and taking it to international ...",
    btnText: "World Records",
    btnUrl: "https://news.cuchd.in/2022/08/chandigarh-university-create-guinness.html",
    tags: "Achievement | World Record",
  },
  {
    bg: "/latest-assets/img/topHighlights-indiaNavy.webp",
    heading: "CSE Student commissioned into the Officer Cadre of the Indian Navy!",
    text: "We are delighted to announce that Ashi Sharma, a distinguished B.E. CSE student and NCC Army Wing Cadet from the 2020 batch ...",
    btnText: "National Service",
    btnUrl: "https://news.cuchd.in/2024/11/cse-student-commissioned-into-officer.html",
    tags: "Achievement | Indian Navy",
  },
];

const statNumbers = [
  { rawCount: "154", display: "154", title: "PROGRAMS", text: "Industry-Oriented<br/>Academic Programs" },
  { rawCount: "980", display: "980", title: "STALWARTS", text: "Industry Stalwarts for<br/>Top-Tier Mentorship" },
  { rawCount: "1350", display: "1350", title: "FACULTY", text: "Doctoral<br/>Faculty" },
  { rawCount: "300", display: "300", title: "FACULTY", text: "International<br/>Faculty" },
  { rawCount: "100000", display: "100000", title: "ALUMNI", text: "Accomplished Alumni<br/>Across the Globe" },
];

export default function TopHighlightsSection() {
  const [newsSwiper, setNewsSwiper] = useState<any>(null);

  useEffect(() => {
    // Ensure data-count is set and triggered properly
    const counters = document.querySelectorAll('#counter-section1 .count');
    counters.forEach((counter) => {
      const targetCount = counter.getAttribute('data-count');
      if (targetCount && (counter.textContent === '' || counter.textContent === 'NaN' || counter.textContent === '0')) {
        counter.textContent = targetCount;
      }
    });
  }, []);

  return (
    <section className="topHighlights-section pt-115 pb-115 position-relative">
      {/* QS Ranking Banner Card */}
      <div className="qsRanking">
        <div className="container px-188 px-1399">
          <div className="highlight-sl">
            <div className="ra-item">
              <img
                src="/latest-assets/img/qsworlduniranking-2027.webp"
                alt="QS World University Rankings 2027"
                className="w-100 desktopRankings"
              />
              <img
                src="/latest-assets/img/qsworlduniranking-mob-2027.webp"
                alt="QS World University Rankings 2027"
                className="w-100 mobileRankings"
              />
              <a
                href="https://www.cuchd.in/qs-world-university-rankings-2027/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-hoverEffect"
              >
                QS World Rankings 2027{" "}
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
      </div>

      <div className="container">
        {/* Main Section Heading */}
        <div className="mainHeading text-center">
          <h2>
            An <span>Illustrious</span> Legacy we<br /> continue to Shape
          </h2>
        </div>

        {/* Counter Statistics Row */}
        <div className="topHighlights__numbers px-188 px-1399 d-flex justify-content-between" id="counter-section1">
          {statNumbers.map((stat, idx) => (
            <div key={idx} className="tpNumbersCard">
              <span className="count plusIcon" data-count={stat.rawCount}>
                {stat.display}
              </span>
              <div className="tpNumbersCard__title">{stat.title}</div>
              <p dangerouslySetInnerHTML={{ __html: stat.text }} />
            </div>
          ))}
        </div>

        {/* Top Highlights News Slider */}
        <div className="topNewsSection position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="topHighlights__news position-relative">
                {/* Left Swiper Navigation Button */}
                <button
                  type="button"
                  className="btn rounded-circle d-flex align-items-center justify-content-center"
                  onClick={() => newsSwiper?.slidePrev()}
                  aria-label="Previous Slide"
                  style={{
                    position: 'absolute',
                    left: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#fa0d0d',
                    color: '#fff',
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                  }}
                >
                  <i className="fa-solid fa-chevron-left" style={{ fontSize: '16px' }}></i>
                </button>

                {/* Right Swiper Navigation Button */}
                <button
                  type="button"
                  className="btn rounded-circle d-flex align-items-center justify-content-center"
                  onClick={() => newsSwiper?.slideNext()}
                  aria-label="Next Slide"
                  style={{
                    position: 'absolute',
                    right: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#fa0d0d',
                    color: '#fff',
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                  }}
                >
                  <i className="fa-solid fa-chevron-right" style={{ fontSize: '16px' }}></i>
                </button>

                <div className="topHighlights__slider">
                  <Swiper
                    onSwiper={setNewsSwiper}
                    modules={[Autoplay, Navigation]}
                    spaceBetween={25}
                    slidesPerView={1}
                    breakpoints={{
                      768: { slidesPerView: 1.5 },
                      1200: { slidesPerView: 2 },
                    }}
                    autoplay={{
                      delay: 4500,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={800}
                  >
                    {highlightsData.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="ths-item w-100" style={{ width: '100%', height: '496px', marginRight: 0 }}>
                          <div
                            className="card border-0 h-100 overflow-hidden br-10"
                            style={{
                              backgroundImage: `url(${item.bg})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'top',
                            }}
                          >
                            {item.isVideo ? (
                              <>
                                <div className="card-body"></div>
                                <div className="video-play-icon">
                                  <a
                                    rel="nofollow"
                                    href={item.btnUrl}
                                    target="_blank"
                                    className="video-play-button"
                                  >
                                    <span />
                                  </a>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="card-body p-0 d-flex justify-content-end">
                                  <div className="nw-cont">
                                    <h6>{item.heading}</h6>
                                    <p>{item.text}</p>
                                    <a
                                      href={item.btnUrl}
                                      className="btn btn-primary btn-hoverEffect"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {item.btnText}{" "}
                                      <img
                                        src="/latest-assets/img/right-arrow-btn.webp"
                                        alt="Button Arrow"
                                        width={16}
                                        className="ms-2"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="card-footer bg-transparent p-0">
                                  <div
                                    className="newsTags"
                                    dangerouslySetInnerHTML={{
                                      __html: item.tags.replace(' | ', ' <span>|</span> '),
                                    }}
                                  />
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                </div>
              </div>
            </div>

            <div className="col-xl-10 col-lg-11 mx-auto mt-4">
              <div className="whatsNew__notifications position-relative">
                <div className="notifications__slider">
                  <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={15}
                    slidesPerView={1}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={800}
                    pagination={{ clickable: true }}
                    className="notifications-swiper-container pb-4"
                  >
                    {notificationsData.map((item, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="ns-item w-100 d-flex justify-content-center">
                          <div
                            className="card w-100 overflow-hidden border d-flex flex-row align-items-center justify-content-between"
                            style={{
                              backgroundColor: '#ffffff',
                              borderColor: '#e2e2e2',
                              borderRadius: '12px',
                              minHeight: '94px',
                              padding: '24px 32px'
                            }}
                          >
                            <div className="card-body p-0 me-4 text-start">
                              <span
                                className="notiTitle"
                                style={{
                                  fontSize: '13px',
                                  color: '#fa0d0d',
                                  fontWeight: 700,
                                  textDecoration: 'underline',
                                  textTransform: 'uppercase',
                                  display: 'block',
                                  marginBottom: '6px'
                                }}
                              >
                                {item.title}
                              </span>
                              <span
                                className="notiHeading"
                                style={{
                                  fontSize: '16px',
                                  lineHeight: '22px',
                                  fontWeight: 700,
                                  color: '#2b2b2b',
                                  display: 'block'
                                }}
                              >
                                {item.heading}
                              </span>
                            </div>
                            <div className="card-footer border-0 bg-transparent p-0 flex-shrink-0">
                              <a
                                href={item.url}
                                className="btn btn-primary btn-hoverEffect"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                  whiteSpace: 'nowrap',
                                  backgroundColor: '#fa0d0d',
                                  color: '#ffffff',
                                  border: 'none',
                                  padding: '12px 24px',
                                  borderRadius: '8px',
                                  fontWeight: 700,
                                  fontSize: '13px',
                                  letterSpacing: '0.5px',
                                  textTransform: 'uppercase'
                                }}
                              >
                                {item.btnText}
                                <img src="/latest-assets/img/right-arrow-btn.webp" alt="Button Arrow" width="20" className="ms-2" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <style jsx global>{`
        .notifications-swiper-container {
          padding-bottom: 45px !important;
        }
        .notifications-swiper-container .swiper-pagination {
          bottom: 5px !important;
        }
        .notifications-swiper-container .swiper-slide {
          height: auto !important;
          display: flex !important;
        }
        .notifications-swiper-container .ns-item {
          width: 100% !important;
          display: flex !important;
        }
        .notifications-swiper-container .swiper-pagination-bullet {
          background-color: #cccccc !important;
          opacity: 0.6 !important;
          width: 6px !important;
          height: 6px !important;
          margin: 0 4px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }
        .notifications-swiper-container .swiper-pagination-bullet-active {
          background-color: #fa0d0d !important;
          opacity: 1 !important;
          width: 20px !important;
          height: 6px !important;
          border-radius: 3px !important;
        }
      `}</style>
    </section>
  );
}
