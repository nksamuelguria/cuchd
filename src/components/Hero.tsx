"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import "./hero.css";
import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function Hero() {
  const heroPlaceSliderRef = useRef(null);
  const heroSliderRef = useRef(null);
  const anotherOneRef = useRef(null);

  useEffect(() => {
    const widgetDiv = document.getElementById("lsq-portal-widget-26c2650d-9b4a-11ef-8bcb-06998e7502ab-bcb99b86-42be-40c9-a606-fd96a6e329f8");
    if (widgetDiv && !widgetDiv.querySelector("script")) {
      const script = document.createElement("script");
      script.src = "https://portal-widgets.lsqportal.com/assets/bootstrap-widget.js";
      script.setAttribute("data-widget-id", "26c2650d-9b4a-11ef-8bcb-06998e7502ab");
      script.setAttribute("data-version-id", "bcb99b86-42be-40c9-a606-fd96a6e329f8");
      script.setAttribute("data-formjs", "https://forms.lsqportal.com/r21/js/lsq.form.js");
      script.setAttribute("data-url", "https://portal-widgets.lsqportal.com");
      script.charset = "utf-8";
      script.onload = (event) => {
        if ((window as any)['___lsq-portal-widget-helpers___']) {
          (window as any)['___lsq-portal-widget-helpers___'].bootstrapLSQWidget({ target: script });
        }
      };
      widgetDiv.appendChild(script);
    }

    // We assume jQuery and Flickity are loaded globally in layout.tsx via Script tags.
    // Wait a bit for them to be ready, or check if (window as any).$ is available.
    const initFlickity = () => {
      if ((window as any).$ && (window as any).$.fn.flickity) { console.log("Initializing Flickity...");
        (window as any).$(heroPlaceSliderRef.current).flickity({
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            prevNextButtons: false,
            fade: true,
            draggable: false,
            wrapAround: true
        });

        (window as any).$(heroSliderRef.current).flickity({
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            prevNextButtons: false,
            autoPlay: 3000,
            pauseAutoPlayOnHover: false,
            fade: true,
            asNavFor: '.hero-place-slider',
            wrapAround: true,
            draggable: false
        });
        
        (window as any).$(anotherOneRef.current).flickity({
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            prevNextButtons: false,
            asNavFor: '.hero-place-slider',
            fade: true,
            draggable: false,
            wrapAround: true
        });
      } else {
        setTimeout(initFlickity, 100);
      }
    };
    initFlickity();
  }, []);

  return (
    <>
      <style>{`
        .end_date {
            background: #AE141A;
            padding: 6px 8px;
            display: inline-block;
            font-size: 12px;
            line-height: 14px;
            border-radius: 6px;
            color: #fff;
            text-transform: capitalize;
            margin-top: 10px;
        }
      `}</style>
          <section className="heroContainer relative">
        <div className="heroSlider h-full" ref={heroSliderRef}>
            <div className="heroSlider__item" style={{backgroundImage: "url('/latest-assets/img/banner-jaheen.webp')"}}></div>
            <div className="heroSlider__item" style={{backgroundImage: "url('/latest-assets/img/banner-atlassian.webp')"}}>
            </div>
            <div className="heroSlider__item" style={{backgroundImage: "url('/latest-assets/img/army-bg.webp')"}}></div>
            <div className="heroSlider__item" style={{backgroundImage: "url('/latest-assets/img/banner-2025-2.webp')"}}></div>
            <div className="heroSlider__item" style={{backgroundImage: "url('/latest-assets/img/banner-2025-sid-bg.webp')"}}>
            </div>
            <div className="heroSlider__item" style={{backgroundImage: "url('/latest-assets/img/bbuzz-honey-bg.webp')"}}></div>
        </div>
        <div className="heroBannerForm">
            <div className="container mx-auto px-4 mx-auto px-4">
                <div className="flex-wrap -mx-4 items-center">
                    <div className="md:w-1/2 px-4 order-last order-sm-first">
                        <div className="heroSlider__content">
                            <h1 className="relative"><span>Best Private</span> University <br />in Punjab (India)
                            </h1>
                            <div className="ps-67">
                                <p>Chandigarh University Mohali (Punjab) integrates groundbreaking research and
                                    inclusive education to
                                    shape professionals driving innovation, sustainability, and social impact.</p>
                                <div className="btn-grp">
                                    <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd"
                                        className="inline-block px-4 py-2 rounded text-center cursor-pointer bg-[#fa0d0d] text-white hover:bg-[#d00b0b] border-none btn-hoverEffect" target="_blank">Apply Today <img
                                            src="/latest-assets/img/right-arrow-btn.webp" alt="Button Arrow" width="22"
                                            className="ml-2" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="ps-67 pos-abs-mob">
                            <div className="hero-place-slider" ref={heroPlaceSliderRef}>
                                <div className="item jahrang">
                                    <div className="hp-info text-white">
                                        <div className="hpName">Ms. Jaheen<span> Rangi</span></div>
                                        <div className="hpText">Account Executive &amp; Global Sales Development Manager
                                        </div>
                                    </div>
                                    <div className="hp-package text-white">
                                        <div className="hpTextbig">International <br />Package</div>
                                        <div className="hpAmount block">{/* <sup>₹</sup> */}1.19 <span>CR</span><span
                                                className="block mt-1">(EUR 140,000)</span></div>
                                    </div>
                                    <div className="hpCompany">
                                        <img src="/latest-assets/img/colect-logo.webp" alt="Colect Logo" width="155" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="hp-info text-white">
                                        <div className="hpName">Jaspreet<span>Singh</span></div>
                                        <div className="hpText invisible jasp">CU Alumni</div>
                                    </div>
                                    <div className="hp-package text-white">
                                        <div className="hpTextbig">National <br />Package</div>
                                        <div className="hpAmount"><sup>₹</sup>59.9 <span>LPA</span></div>
                                    </div>
                                    <div className="hpCompany atl-logo">
                                        <img src="/latest-assets/img/Atlassian-Logo.webp" alt="Atlassian Logo"
                                            width="75" />
                                    </div>
                                </div>
                                <div className="item army">
                                    <div className="hp-info text-white">
                                        <div className="hpName">Major Arshdeep<span> Singh Gill</span></div>
                                        <div className="hpText">Awarded to CU Alumnus</div>
                                    </div>
                                    <div className="hpCompany bcci-mark">
                                        <img src="/latest-assets/img/kirti-chakra-logo.webp" alt="Kirti Chakra Logo"
                                            width="71" style={{width: '71px'}} />
                                        <img src="/latest-assets/img/indian-army-logo.webp" alt="Indian Army Logo"
                                            width="90" style={{width: '90px'}} />
                                    </div>
                                    <div className="hp-package text-white invisible">
                                        <div className="hpTextbig">National <br />Highest Package</div>
                                        <div className="hpAmount"><sup>₹</sup>51.00 <span>LPA</span></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="hp-info text-white">
                                        <div className="hpName">Arshdeep<span>Singh</span></div>
                                        <div className="hpText">International Cricketer</div>
                                    </div>
                                    <div className="hpCompany bcci-mark">
                                        <img src="/latest-assets/img/bcci-logo.webp" alt="Board of Cricket Council Logo"
                                            width="63" style={{width: '63px'}} />
                                    </div>
                                    <div className="hp-package text-white invisible">
                                        <div className="hpTextbig">National <br />Highest Package</div>
                                        <div className="hpAmount"><sup>₹</sup>51.00 <span>LPA</span></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="hp-info text-white">
                                        <div className="hpName">Siddhant<span>Bhardwaj</span></div>
                                        <div className="hpText">CSE-IBM Information Security</div>
                                    </div>
                                    <div className="hp-package text-white">
                                        <div className="hpTextbig">International <br />Highest Package</div>
                                        <div className="hpAmount"><sup>₹</sup>1.7 <span>CRORE</span></div>
                                    </div>
                                    <div className="hpCompany invisible">
                                        <img src="/latest-assets/img/dame-munni-cap.webp" alt="Dame Irone logo"
                                            width="183" />
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="hp-info text-white">
                                        <div className="hpName">Parbhat <span>Phogat</span></div>
                                        <div className="hpText">CU Alumni & Founder - BBuzzHoney</div>
                                    </div>
                                    <div className="hp-package text-white phogat-shadow">
                                        <div className="hpTextbig">Turnover <br />(2024-2025)</div>
                                        <div className="hpAmount"><sup>₹</sup>2.5 <span>CRORE</span></div>
                                    </div>
                                    <div className="hpCompany">
                                        <img src="/latest-assets/img/bbuzz-honey-logo.webp" alt="bbuzzhoney logo"
                                            width="70" style={{width: '55px'}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 px-4 order-first order-sm-last">
                        <div className="heroBannerForm__form ml-auto">
                            <div className="heroBannerForm-header">
                                <h3 className="mb-0">Apply Today for <span>Chandigarh University, India</span></h3>
                                <span className="end_date">Registration End Date (Phase-II): 20<sup>th</sup> September 2026</span>
                            </div>
                            <div id="lsq-portal-widget-26c2650d-9b4a-11ef-8bcb-06998e7502ab-bcb99b86-42be-40c9-a606-fd96a6e329f8"
                                className="lsq-portal-widget lsq-form-widget">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="another-one" ref={anotherOneRef}>
                <div className="hp-photo jahrang">
                    <img src="/latest-assets/img/jaheen-inset.webp" alt="Jaheen Photo" />
                </div>
                <div className="hp-photo">
                    <picture>
                        <source srcSet="/latest-assets/img/jaspreet-inset-bg-400w.webp" media="(max-width: 575px)" />
                        <img src="/latest-assets/img/jaspreet-inset-bg.webp" fetchPriority="high" loading="eager"
                            decoding="async" alt="Jaspreet Photo" />
                    </picture>
                    {/* <img src="/latest-assets/img/jaspreet-inset-bg.webp" alt="Jaspreet Photo" /> */}
                </div>
                <div className="hp-photo major-arsh">
                    <picture>
                        <source srcSet="/latest-assets/img/major-gill-inset-400w.webp" media="(max-width: 575px)" />
                        <img src="/latest-assets/img/major-gill-inset.webp" fetchPriority="high" loading="eager"
                            decoding="async" alt="Major Arshdeep Singh Gill Photo" />
                    </picture>
                    {/* <img src="/latest-assets/img/major-gill-inset.webp" alt="Major Arshdeep Singh Gill Photo" /> */}
                </div>
                <div className="hp-photo">
                    <img src="/latest-assets/img/arshdeep-inset-bg.webp" alt="Arshdeep Photo" />
                </div>
                <div className="hp-photo">
                    <img src="/latest-assets/img/sid-inset-bg.webp" alt="Siddharth Photo" />
                </div>
                <div className="hp-photo">
                    <img src="/latest-assets/img/parbhat-inset-bg.webp" alt="Parbhat Photo" />
                </div>
            </div>
        </div>
    </section>

    </>
  );
}
