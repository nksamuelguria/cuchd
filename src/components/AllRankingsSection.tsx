'use client';
import React, { useState } from 'react';

const AllRankingsSection = () => {
    const [activeId, setActiveId] = useState(null);

    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <>
    <section className="allRankings-section  position-relative"  >
        <div className="container">
            <div className="mainHeading text-center"  >
                <h2 className="px-4 px-sm-0"><span>Proudly Distinguished</span> by Our<br />Prestigious Rankings</h2>
            </div>
            <div className="px-188 px-1399">
                <div className="accordion accordion-flush" id="accordionFlushExampleFAQ">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq-head-2">
                            <button className={`accordion-button hide-accordion-arrow-on-desktop md:pointer-events-none ${activeId === 2 ? '' : 'collapsed'}`} type="button" onClick={() => { if (window.innerWidth < 768) toggleAccordion(2); }} aria-expanded={activeId === 2}>
                                <div className="row g-0 w-94">
                                    <div className="col-5 col-sm-4 col-md-3">
                                        <img className="lazy-img" src="/latest-assets/img/qs-univ-logo-2027.webp"
                                            alt="QS World University Rankings" width="225" />
                                    </div>
                                    <div className="col-7 col-sm-8 col-md-9">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-6">
                                                <div className="uniRankingthumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked Among</span>
                                                        1%
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Top Universities in India by QS World University Rankings 2027
                                                        <span>(Among Top 10 Universities)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-6 d-none d-md-block">
                                                <div className="uniRankingthumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked Among</span>
                                                        2%
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Top Universities Globally by QS World University Rankings 2027
                                                        <span>(Global Rank #526)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </h2>
                        <div id="faq-collapse-2" className={`accordion-collapse collapse md:hidden ${activeId === 2 ? 'show' : ''}`}>
                            <div className="accordion-body">
                                <div className="row g-0 w-94">
                                    <div className="col-12 d-block d-md-none">
                                        <div className="uniRankingthumb">
                                            <div className="uniRankingthumb__no">
                                                <span>Ranked Among</span>
                                                2%
                                            </div>
                                            <div className="uniRankingthumb__content">
                                                Top Universities Globally by QS World University Rankings 2027
                                                <span>(Global Rank #526)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq-head-1">
                            <button className={`accordion-button ${activeId === 1 ? '' : 'collapsed'}`} type="button" onClick={() => toggleAccordion(1)} aria-expanded={activeId === 1}>
                                <div className="row g-0 w-94">
                                    <div className="col-5 col-sm-4 col-md-3">
                                        <img className="lazy-img" src="/latest-assets/img/qs-by-subject-logo.webp"
                                            alt="QS World University Rankings" width="225" />
                                    </div>
                                    <div className="col-7 col-sm-8 col-md-9">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-6">
                                                <div className="uniRankingthumb qs-thumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked</span>
                                                        #251-300
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Among the World's Top 1% Universities by QS World University
                                                        Rankings by Subject 2026
                                                        <span>(Mechanical, Aeronautical & Manufacturing)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-6 d-none d-lg-block">
                                                <div className="uniRankingthumb qs-thumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked</span>
                                                        #251-300
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Among the World's Top 1% Universities by QS World University
                                                        Rankings by Subject 2026
                                                        <span>(Electrical and Electronics Engineering)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </h2>
                        <div id="faq-collapse-1" className={`accordion-collapse collapse ${activeId === 1 ? 'show' : ''}`}> 
                            <div className="accordion-body">
                                <div className="row g-0 w-94">
                                    <div className="offset-md-3 col-md-9">
                                        <div className="row">
                                            <div className="col-6 mb-40">
                                                <div className="uniRankingthumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked</span>
                                                        #251-300
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Among the World's Top 1% Universities by QS World University
                                                        Rankings by Subject 2026
                                                        <span>(Computer Science & Information Systems)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-40">
                                                <div className="uniRankingthumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked</span>
                                                        #301-450
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Among the World's Top 1% Universities by QS World University
                                                        Rankings by Subject 2026
                                                        <span>(Business & Management Studies)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-40">
                                                <div className="uniRankingthumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked</span>
                                                        #351-400
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Among the World's Top 1% Universities by QS World University
                                                        Rankings by Subject 2026
                                                        <span>(Chemistry)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-40">
                                                <div className="uniRankingthumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked</span>
                                                        #351-400
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Among the World's Top 1% Universities by QS World University
                                                        Rankings by Subject 2026
                                                        <span>(Chemical Engineering)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-40">
                                                <div className="uniRankingthumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked</span>
                                                        #451-500
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Among the World's Top 1% Universities by QS World University
                                                        Rankings by Subject 2026
                                                        <span>(Environmental Sciences)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-40">
                                                <div className="uniRankingthumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked</span>
                                                        #501-600
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Among the World's Top 1% Universities by QS World University
                                                        Rankings by Subject 2026
                                                        <span>(Mathematics)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="uniRankingthumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked</span>
                                                        #551-600
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Among the World's Top 1% Universities by QS World University
                                                        Rankings by Subject 2026
                                                        <span>(Biological Sciences)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="uniRankingthumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked</span>
                                                        #601-675
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Among the World's Top 1% Universities by QS World University
                                                        Rankings by Subject 2026
                                                        <span>(Physics & Astronomy)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq-head-3">
                            <button className={`accordion-button ${activeId === 3 ? '' : 'collapsed'}`} type="button" onClick={() => toggleAccordion(3)} aria-expanded={activeId === 3}>
                                <div className="row g-0 w-94">
                                    <div className="col-5 col-sm-4 col-md-3">
                                        <img className="lazy-img" src="/latest-assets/img/nirf-ranking-logo.webp"
                                            alt="NIRF Ranking" width="225" />
                                    </div>
                                    <div className="col-7 col-sm-8 col-md-9">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-6">
                                                <div className="uniRankingthumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked</span>
                                                        19<sup>th</sup>
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Among The Best Universities in India by NIRF Rankings 2025
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-6 d-none d-lg-block">
                                                <div className="uniRankingthumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked</span>
                                                        31<sup>st</sup>
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Among The Best Institutions For Engineering In India By NIRF
                                                        Rankings 2025
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </h2>
                        <div id="faq-collapse-3" className={`accordion-collapse collapse ${activeId === 3 ? 'show' : ''}`}>
                            <div className="accordion-body">
                                <div className="row g-0 w-94">
                                    <div className="offset-md-3 col-md-9">
                                        <div className="row">
                                            <div className="col-6 mb-40">
                                                <div className="uniRankingthumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked</span>
                                                        32<sup>nd</sup>
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Among The Best Institutions For Management Studies In India By
                                                        NIRF Rankings 2025
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-40">
                                                <div className="uniRankingthumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked</span>
                                                        15<sup>th</sup>
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Among The Best Institutions For Pharmacy In India By NIRF
                                                        Rankings 2025
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="uniRankingthumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked</span>
                                                        14<sup>th</sup>
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Among The Best Institutions For Architecture &amp; Planning In
                                                        India By NIRF Rankings 2025
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 d-block d-lg-none">
                                                <div className="uniRankingthumb">
                                                    <div className="uniRankingthumb__no">
                                                        <span>Ranked</span>
                                                        31<sup>st</sup>
                                                    </div>
                                                    <div className="uniRankingthumb__content">
                                                        Among The Best Institutions For Engineering In India By NIRF
                                                        Rankings 2025
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mainHeading text-center mt-5"  >
                        <h2 className="px-4 px-sm-0"><span>Our</span> Accreditations</h2>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq-head-4">
                            <button className={`accordion-button hide-accordion-arrow-on-desktop md:pointer-events-none ${activeId === 4 ? '' : 'collapsed'}`} type="button" onClick={() => { if (window.innerWidth < 768) toggleAccordion(4); }} aria-expanded={activeId === 4}>
                                <div className="row w-94 align-items-center">
                                    <div className="col-5 col-sm-4 col-md-3">
                                        <img className="lazy-img" src="/latest-assets/img/abet-logo.webp"
                                            alt="QS World University Rankings" width="220" />
                                    </div>
                                    <div className="col-7 col-sm-8 col-md-3">
                                        <div className="uniRankingthumb">
                                            <div className="uniRankingthumb__content">
                                                ABET Accreditation For Globally Recognized Engineering Programs
                                                <span>B.E. Chemical Engineering,<br />B.E. Computer Science and
                                                    Engineering,<br />B.E. Electronics and Communication
                                                    Engineering</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-none d-md-block">
                                        <img className="lazy-img" src="/latest-assets/img/abet-logo-comp.webp"
                                            alt="QS World University Rankings" width="220" />
                                    </div>
                                    <div className="col-md-3 d-none d-md-block">
                                        <div className="uniRankingthumb">
                                            <div className="uniRankingthumb__content">
                                                ABET Accreditation For Globally Recognized Engineering Programs
                                                <span>B.E. Computer Science and Engineering</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </h2>
                        <div id="faq-collapse-4" className={`accordion-collapse collapse md:hidden ${activeId === 4 ? 'show' : ''}`}>
                            <div className="accordion-body">
                                <div className="row g-0 w-94">
                                    <div className="col-12 d-block d-md-none">
                                        <div className="row pt-2">
                                            <div className="col-5 col-sm-4 col-md-3">
                                                <img className="lazy-img" src="/latest-assets/img/abet-logo-comp.webp"
                                                    alt="QS World University Rankings" width="220" />
                                            </div>
                                            <div className="col-7 col-sm-8 col-md-3">
                                                <div className="uniRankingthumb">
                                                    <div className="uniRankingthumb__content">
                                                        ABET Accreditation For Globally Recognized Engineering Programs
                                                        <span>B.E. Computer Science and Engineering</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    );
};

export default AllRankingsSection;
