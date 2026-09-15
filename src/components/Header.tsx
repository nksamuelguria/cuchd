export default function Header() {
  return (
    <><div>
  <style dangerouslySetInnerHTML={{__html: "\n    .event-highlight a {\n        background: linear-gradient(120deg, #224fff, #ec513f, #205ab5);\n        background-size: 200% 200%;\n        animation: borderMove 3s linear infinite;\n        padding: 10px 15px;\n        border-radius: 6px;\n        transition: opacity .25s;\n    }\n\n    .event-highlight a:hover {\n        text-decoration: none !important;\n        opacity: .7;\n    }\n\n    @keyframes borderMove {\n        0% {\n            background-position: 0% 50%;\n        }\n\n        100% {\n            background-position: 200% 50%;\n        }\n    }\n\n    .header .menu-options li.event-highlight a,\n    .header.sticky .menu-options li.event-highlight a {\n        color: var(--bs-white) !important;\n    }\n\n    .menu-options li {\n        margin-left: 42px;\n    }\n\n    #search-page-mob {\n        background: none;\n        border: 0;\n        padding: 0;\n        gap: 6px;\n    }\n\n    #search-page-mob:hover {\n        opacity: .5;\n    }\n\n    .footer-links ul li {\n        margin-bottom: 12px;\n    }\n    header.sticky .menu-options li.ws-highlight a {\n        color: var(--bs-white) !important;\n    }\n\n    \n/*** 2026 styles start ***/ \n#navbarToggleExternalContent {\n\tmargin: 5px auto auto;\n}    \n.navbar-brand {\n\ttop: 50px;\n}    \n.headerTopBar {\n\tmargin: 0 12px;\n}    \n.headerTopSlider .carousel-item, .header__top-right li a {\n\tcolor: #b3b3b3;\n} \n.headerTopSlider .carousel-control-next-icon, .headerTopSlider .carousel-control-prev-icon {\n\twidth: 15px;\n\theight: 15px;\n}    \n.xs-btn {\n\tbackground: transparent;\n\tcolor: var(--flash-red) !important;\n    position: relative;\n    margin-left: 40px;\n    padding-left: 38px;\n    padding-right: 38px;\n} \n.xs-btn::after {  \n    position: absolute;\n    content: \"\";\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 1px;\n    background: var(--flash-red);\n}   \n.header.sticky .xs-btn {\n\tbackground: var(--bs-white);\n}    \n.headerTopSocial {\n\twidth: auto;\n}    \n.desksearch .head-search {\n\tbackground: #ffffff1f;\n\twidth: 128px;\n\tborder-radius: 12px;\n}    \n.desksearch #search-page-mob {\n\tflex-direction: row-reverse;\n\tgap: 0;\n\twidth: 100%;\n\tjustify-content: space-between;\n\tpadding: 2px 10px;\n    color: #b3b3b3!important;\n}  \n.desksearch #search-page-mob span {\n\tfont-size: 12px;\n}\n.header.sticky .desksearch .head-search {\n\tbackground: #7070701f;\n}    \n.header.sticky .desksearch #search-page-mob img {\n\tfilter: brightness(0);\n}  \n.menu-options, .header.sticky .menu-options {\n    top: 10px;\n}\n.menu-options {\n    right: 600px;\n}    \n.menu-options li a {\n\tfont-size: 10px;\n    letter-spacing: .5px;\n}  \n.upper-header {\n\tpadding-left: 278px;\n    padding-bottom: 15px;\n    margin-top: 30px;\n    justify-content: space-between;\n}    \n.lower-header {\n    background: #ffffff1f;\n    width: auto;\n}  \n.header .nav-item {\n\tmargin: 0 32px;\n}    \n.header .nav-item > a {\n\tfont-size: 15px;\n\tletter-spacing: unset;\n    padding: 13px 0;\n}    \n.nav-item.dd-menu-lg::after, .header .nav-item.dd-menu-lg > a::after {\n\tdisplay: none;\n}  \n.hideOnMobile {\n\tgap: 24px;\n    align-items: center;\n}    \n.header_btn {\n\tpadding: 0 !important;\n\tpadding-right: 0 !important;\n    background: transparent;\n}  \n.header_btn:hover {\n    opacity: .5;\n} \n.header_btn span {\n\tfont-size: 20px;\n}    \n.header_btn span small {\n\tfont-size: 11px;\n    line-height: 18px;\n\tcolor: #b3b3b3;\n}  \n.header.sticky .header_btn span, .header.sticky .header_btn span small {\n    color: var(--bs-black);\n}    \n.apnowbtn {\n\twidth: 157px;\n\tborder-radius: 27px !important;\n\tdisplay: flex;\n\tpadding: 18px 0;\n\talign-items: center;\n\tjustify-content: center;\n}\n.apnowbtn img {\n\ttop: 0;\n\tleft: 4px;\n}  \n.navbar-toggler {\n    border: 0;\n}\n.navbar-toggler:focus {\n\tbox-shadow: none;\n}   \n.header.sticky .navbar-toggler-icon {\n\tfilter: invert();\n}  \n.navbar-toggler-icon {\n    width: 1.3em;\n} \n@media (max-width: 1899px){\n    .upper-header {\n        padding-left: 242px;\n    }\n    .header .nav-item {\n        margin: 0 26px;\n    }    \n}\n@media (min-width: 1600px) and (max-width: 1799px){\n    .headerTopSlider {\n        width: 58%;\n    }  \n    .header .nav-item {\n        margin: 0 18px;\n    }  \n    .header .nav-item > a {\n        font-size: 14px;\n    }  \n    .hideOnMobile {\n        gap: 15px;\n    }    \n    .header_btn span {\n        font-size: 18px;\n    } \n    .header_btn span small {\n        font-size: 10px;\n        line-height: 16px;\n    }    \n    .apnowbtn {\n        width: 150px;\n        padding: 16px 0;\n    }    \n}\n@media (min-width: 1400px) and (max-width: 1599px){\n    .headerTopSlider {\n        width: 62%;\n    }       \n    .upper-header {\n        padding-left: 270px;\n    }    \n    .lower-header {\n        width: 71%;\n    }  \n    .header .nav-item {\n        margin: 0 20px;\n    }    \n}    \n@media (min-width: 1300px) and (max-width: 1399px) {   \n    .upper-header {\n        padding-left: 260px;\n    }    \n    .lower-header {\n        width: 72%;\n    }    \n}    \n@media (min-width: 1200px) and (max-width: 1250px) { \n    .header .nav-item {\n        margin: 0 20px;\n    }    \n}   \n@media (max-width: 1199px) { \n    .navbar-brand .cu-logo {\n        width: 200px;\n    }\n    .headerTopSocial {\n        width: 100%;\n    }\n    .showOnMobile {\n        align-items: center;\n    }\n    .showOnMobile .tabletsearch {\n        display: none!important;\n    }   \n    .showOnMobile .navbar-toggler {\n        position: relative;\n        margin-left: 30px;\n        display: block!important;\n    }  \n    .showOnMobile .navbar-toggler-icon {\n        width: 1.7em;\n    }   \n    .showOnMobile .navbar-toggler-icon:hover {\n        opacity: .5;\n    }    \n    .header.sticky .header_btn img {\n        filter: invert();\n    }  \n    .upper-header {\n        padding-left: 0;\n        display: flex;\n        flex-direction: column-reverse;\n    }\n    .menu-options {\n        position: relative;\n        right: unset;        \n    }  \n    .lower-header {\n        width: 100%;\n    } \n    .header .nav-item.dd-menu-lg > a::after {\n        display: block;\n    }    \n}  \n@media (max-width: 670px) {   \n    .desksearch {\n        display: none!important;\n    }  \n    .showOnMobile .tabletsearch {\n        display: inline-flex!important;\n        margin-left: 12px!important;\n    }    \n}    \n@media (max-width: 575px) { \n    .header__top-right.social-sub {\n        margin-left: 32px !important;\n    }    \n    .navbar-brand .cu-logo {\n        width: 157px;\n    } \n    .showOnMobile .tabletsearch {\n        margin-left: 20px!important;\n    }    \n    .tabletsearch .head-search {\n        position: relative;\n        right: unset;\n    } \n    .showOnMobile .navbar-toggler {\n        margin-left: 24px;\n    }\n    .header.sticky .navbar-toggler {\n        filter: invert();\n    }  \n    .upper-header {\n        margin-top: 15px;\n    } \n    .header .nav-item {\n        margin: 0;\n    }    \n    .header .nav-item > a {\n        font-size: 13px;\n    } \n    .menu-options li {\n        margin-left: 0;\n    }    \n}    \n/*** 2026 styles end ***/\n    \n    @media (max-width: 1799px) {\n        .menu-options li {\n            margin-left: 18px;\n        }\n    }\n\n    @media (min-width: 1200px) {\n        .program-drop-down-graphic h3 {\n            font-size: 16px;\n        }\n\n        .program-drop-down-graphic h3 span {\n            font-size: 20px;\n        }\n    }\n\n    @media (min-width: 1600px) {\n        .st-programs {\n            width: 1530px;\n            height: 532px;\n            left: -190px;\n        }\n\n        .program-drop-down-graphic h3 {\n            font-size: 18px;\n        }\n\n        .program-drop-down-graphic h3 span {\n            font-size: 26px;\n        }\n    }\n\n    @media (min-width: 1800px) {\n        .st-programs {\n            left: -139px;\n        }\n    }\n\n    @media (min-width: 1400px) and (max-width: 1599px) {\n\n        \n            body {\n                zoom: 80%;\n            }\n\n            .container {\n                max-width: 1650px;\n            }\n\n            [data-aos^=\"fade\"][data-aos^=\"fade\"] {\n                opacity: 1;\n                transform: unset;\n            }\n\n        \n.st-programs {\n\theight: 566px;\n}\n        .event-highlight a {\n            padding: 5px;\n        }\n\n        .menu-options li {\n            margin-left: 11px;\n        }\n\n        .menu-options li a {\n            font-size: 11px;\n        }\n    }\n\n    /*******************************************************/\n    @media (min-width: 1200px) and (max-width: 1399px) {\n        body {\n            zoom: 70%;\n        }\n\n        [data-aos^=\"fade\"][data-aos^=\"fade\"] {\n            opacity: 1;\n            transform: unset;\n        }\n\n        .preloader {\n            height: 100%;\n        }\n\n        .modal-backdrop {\n            width: 100%;\n            height: 100%;\n        }\n\n        .menu-options li {\n            margin-left: 42px;\n        }\n    }\n\n    @media (min-width: 1366px) and (max-width: 1399px) {\n        .container {\n            max-width: 1550px;\n        }\n    }\n\n    @media (min-width: 1251px) and (max-width: 1365px) {\n        .container {\n            max-width: 1450px;\n        }\n    }\n\n    @media (min-width: 1200px) and (max-width: 1250px) {\n        .container {\n            max-width: 1300px;\n        }\n    }\n\n    @media (min-width: 1200px) {\n        .col-xl-2 {\n            flex: 0 0 auto;\n            width: 16.66666667%;\n        }\n\n        .col-xl-5 {\n            flex: 0 0 auto;\n            width: 41.66666667%;\n        }\n\n        .col-xl-10 {\n            flex: 0 0 auto;\n            width: 83.33333333%;\n        }\n    }\n\n    @media (max-width: 1399px) {\n        .nav-item.dd-menu-lg::after {\n            right: -60px;\n        }\n    }\n\n    @media (max-width: 1199px) {\n        .menu-options li.ws-highlight a {\n            border-radius: 0;\n            text-align: center;\n            color: var(--bs-white)!important;\n        }\n        .menu-options li.event-highlight {\n            border-bottom: 0;\n            margin-left: 0;\n        }\n\n        .menu-options li.event-highlight a {\n            padding: 13px;\n            color: var(--bs-white);\n            text-align: center;\n            position: relative;\n        }\n\n        .menu-options li.event-highlight a::after {\n            content: '\\f245';\n            font-weight: 900;\n            font-family: 'Font Awesome 6 Free';\n            position: absolute;\n            right: 50px;\n        }\n    }\n\n    /*******************************************************/\n" }} />
  <header className="header fixed top-0 left-0 right-0 z-50">
    <div className="header__main">
      <div className="headerTopBar flex items-center justify-between">
        <div className="headerTopSlider relative">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner text-center">
              <div className="carousel-item active" data-bs-interval={3000}>
                Register Now for CU Joint Campus Placement Programme <a href="https://www.cuchd.in/placements/frmRegistration.aspx?Type=jpp2019" target="_blank" className="xs-btn text-white btn-hoverEffect">Register Now</a>
              </div>
              <div className="carousel-item" data-bs-interval={3000}>Learn Beyond Classrooms, Get Certified, and
                Discover Your Path Early <a href="https://www.cuchd.in/acp/" target="_blank" className="xs-btn text-white">Register Now</a>
              </div>
              <div className="carousel-item" data-bs-interval={3000}>International Moot Court Competition on Artificial Intelligence &amp; Intellectual Property Rights <a href="https://www.cuchd.in/conference/imccai-26/" target="_blank" className="xs-btn text-white">Register Now</a>
              </div>
              {/* <div class="carousel-item " data-bs-interval="3000">FRESHMEN ORIENTATION 2026 &nbsp;<small>(23rd - 29th
                                              July 2026)</small><a href="https://www.cuchd.in/orientation-schedule-2026/"
                          target="_blank" class="xs-btn text-white">Register
                          Now</a>
                  </div> */}
              <div className="carousel-item" data-bs-interval={3000}>IC-AMDFA-2026 (Advanced Materials &amp; Devices for Futuristic
                Applications- 2026 )<a href="https://www.cuchd.in/conference/icamdfa-26/" target="_blank" className="xs-btn text-white">Register
                  Now</a>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="headerTopSocial flex items-center">
          <ul className="header__top-right w-auto flex list-none p-0 m-0">
            <li><a href="https://www.cuchd.in/whatsapp.php" target="_blank" aria-label="Call on CU's Whatsapp"><i className="fa-brands fa-whatsapp" /><span>Whatsapp</span></a></li>
            <li className="ph-missed"><a href="tel:8033094409" aria-label="Give a miss call"><i className="fa-solid fa-phone" style={{fontSize: 12}} /><span>Call Us</span></a></li>
            <li><a href="https://www.cuchd.in/maps/" id="vt-bt" aria-label="Get a Virtual Tour of CU campus"><i className="fa-solid fa-compass" style={{fontSize: 12}} /><span>360<sup>o</sup></span></a>
            </li>
          </ul>
          <ul className="header__top-right social-sub w-auto flex list-none p-0 m-0 items-center">
            <li><a rel="nofollow" href="https://www.facebook.com/chandigarhuniversitygharuan" target="_blank" aria-label="Go to Chandigarh University's Facebook Page"><i className="fa-brands fa-facebook-f" /></a></li>
            <li><a rel="nofollow" href="https://www.twitter.com/chandigarh_uni" target="_blank" aria-label="Go to Chandigarh University's Twitter (X) Page">
                <i className="fa-brands fa-x-twitter" /></a></li>
            <li><a rel="nofollow" href="https://www.linkedin.com/school/chandigarh-university/" target="_blank" aria-label="Go to Chandigarh University's Linkedin Page"><i className="fa-brands fa-linkedin-in" /></a></li>
            <li><a rel="nofollow" href="https://www.instagram.com/chandigarhuniversity" target="_blank" aria-label="Go to Chandigarh University's Instagram Page"><i className="fa-brands fa-instagram" /></a></li>
            <li><a rel="nofollow" href="https://www.youtube.com/user/chandigarhuniversity" target="_blank" aria-label="Go to Chandigarh University's Youtube Page"><i className="fa-brands fa-youtube" /></a></li>
            <li><a rel="nofollow" href="https://www.threads.net/@chandigarhuniversity" target="_blank" aria-label="Go to Chandigarh University's Threads Page">
                <i className="fa-brands fa-threads" /></a></li>
            <li><a rel="nofollow" href="https://www.snapchat.com/add/chd_university" target="_blank" aria-label="Go to Chandigarh University's Snapchat">
                <i className="fa-brands fa-snapchat" /></a></li>
          </ul>
          <ul className="header__top-right w-auto flex list-none p-0 m-0 items-center desksearch">
            <li className="head-search m-0">
              <button id="search-page-mob" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-label="Search Chandigarh University Website" className="text-white m-0">
                <img src="/header-footer/search-icon-small.png" alt="Search icon" />
                <span>Search</span>
              </button>
            </li>
          </ul>                
        </div>
      </div>
      <div className="navbar-brand p-0 mt-0">
        <div className="flex items-center">
          <a href="https://www.cuchd.in/" aria-label="Go to Chandigarh University's Home Page" className="white-logo">
            <img src="/header-footer/cu-logo-white.webp" alt="" width={221} className="mr-2 cu-logo" />
          </a>
          <a href="https://www.cuchd.in/" aria-label="Go to Chandigarh University's Home Page" className="dark-logo">
            <img src="/header-footer/cu-logo-dark-new.webp" alt="" width={221} className="mr-2 cu-logo" />
          </a>
        </div>
        <div className="flex ml-auto showOnMobile">
          <div className="flex header_btn blue-gradient mr-3">
            <a href="tel:+1800121288800" className="flex items-center text-white" aria-label="Call CU's Admission Helpline">
              <img src="/header-footer/phone-icon.webp" alt="" width={30} />
              <span className="block ml-2">
                <small className="block capitalize">Admission Helpline</small>1800121288800
              </span>
            </a>
          </div>            
          <ul className="header__top-right w-auto flex list-none p-0 m-0 items-center tabletsearch">
            <li className="head-search m-0">
              <button id="search-page-mob" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-label="Search Chandigarh University Website" className="text-white m-0"><i className="fa fa-search" aria-hidden="true" /><span>Search</span></button>
            </li>
          </ul>
          <button className="navbar-toggler flex" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" title="View Institutes">
            <span className="navbar-toggler-icon" />
          </button> {/* moved outside above div */}                    
        </div>
      </div>
      <nav className="navbar navbar-expand-xl" data-lenis-prevent-wheel>
        <div className="mobileNavHeader hidden">
          <a href="https://www.cuchd.in/" aria-label="Go to Chandigarh University's Home Page">
            <img src="/header-footer/cu-logo-dark-new.webp" alt="" width={180} className="mr-2 cu-logo" />
          </a>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="w-full px-4 items-start">
          <button id="main-toggler" className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="upper-header">
              <ul className="menu-options list-none m-0 p-0 m-auto"> {/* removed 'position-relative' class and brought lower-head below this */}
                {/*<li class="event-highlight"><a href="https://www.cuchd.in/aifest-2026/" target="_blank">AI FEST 2026</a></li>*/}
                <li className="relative campusDdLink">
                  <a href="#">Campuses</a>
                  <div className="campusDd">
                    <div className="flex flex-wrap -mx-4 m-0 p-0">
                      <div className="w-1/2 px-4">
                        <a href="https://www.cuchd.in/">
                          <img src="/header-footer/cuchd-icon.webp" alt="" className="w-full" width={70} />
                          <span>Punjab <br />Campus</span>
                        </a>
                      </div>
                      <div className="w-1/2 px-4">
                        <a rel="" href="https://www.culko.in/" target="_blank">
                          <img src="/header-footer/culko-icon.webp" alt="" className="w-full" width={70} />
                          <span>Uttar Pradesh <br />Campus</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li><a href="https://www.cuchd.in/international/index.php">International</a></li>
                <li><a href="https://www.cuchd.in/student-services/libraries.php">Library</a></li>
                <li><a href="https://www.cuchd.in/student-services/">Student Services</a></li>
                <li><a href="https://www.cuchd.in/jobs/">Career</a></li>
                <li><a href="https://www.cuchd.in/blogs/">Blogs</a></li>
                <li><a href="https://www.cuchd.in/podcast/">CU Podcast</a></li>
                <li><a href="https://www.cuchd.in/contact/index.php"> Contact Us</a></li>
                {/*<li><button class="ai-btn-shimmer" onclick="goToProgramFinder()">AI Program Finder</button></li>*/}
                {/* <li class="ws-highlight"><a href="https://www.cuchd.in/orientation-schedule-2026/index.php" target="_blank">Orientation Schedule</a></li> */}
              </ul>
              <div className="lower-header">
                <ul className="navbar-nav me-auto step-first-menu flex justify-content-around">
                  <li className="nav-item dd-menu-lg">
                    <a href="https://www.cuchd.in/about/" className="mob-void">About</a>
                    <div className="step-second-menu st-about">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="col-sm-6 col-xl-4">
                          <h4>Who We Are</h4>
                          <ul className="list-none p-0 m-0">
                            <li><a href="https://www.cuchd.in/about/">Overview</a></li>
                            <li><a href="https://www.cuchd.in/about/our-identity.php">Our
                                Identity</a>
                            </li>
                            <li><a href="https://www.cuchd.in/about/vision-and-mission.php">Vision
                                &amp;
                                Mission</a>
                            </li>
                            <li><a href="https://www.cuchd.in/about/LeaderShip.php">Leadership</a>
                            </li>
                            <li><a href="https://www.cuchd.in/core-values/">Core Values</a></li>
                            <li><a href="https://www.cuchd.in/recognitions-and-approvals/">Recognition
                                &amp;
                                Approvals</a>
                            </li>
                            <li><a href="https://www.cuchd.in/about/Awards-and-Rankings.php">Awards
                                &amp;
                                Rankings</a>
                            </li>
                            <li><a href="https://www.cuchd.in/about/institution-social-responsibility.php">Institutional
                                Social Responsibility</a>
                            </li>
                            <li><a href="https://www.cuchd.in/admissions/cu-edge.php">CU Edge</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-6 col-xl-4">
                          <h4>Related Links</h4>
                          <ul className="list-none p-0 m-0">
                            <li><a href="https://www.cuchd.in/academics/institutes.php">Institutes
                                &amp;
                                Departments</a>
                            </li>
                            <li><a href="https://www.cuchd.in/admissions/">Admissions</a></li>
                            <li><a href="https://www.cuchd.in/scholarship/">Scholarships</a></li>
                            <li><a href="https://www.cuchd.in/about/governance.php">Governance</a>
                            </li>
                            <li><a href="https://www.cuchd.in/student-services/hostel-facility.php">Hostel
                                Facility</a>
                            </li>
                            <li><a href="https://www.cuchd.in/student-services/">Student
                                Services</a>
                            </li>
                            <li><a href="https://www.cuchd.in/contact/how-to-reach-us.php">How to
                                Reach
                                Us?</a>
                            </li>
                            <li><a href="https://www.cuchd.in/GATI-charter-institution.php">GATI
                                Charter
                                Institution</a>
                            </li>
                            <li><a href="https://www.cuchd.in/abet/">ABET Engineering
                                Accreditation</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4 about-graphic hidden lg:block lazy-bg" style={{background: 'url("/header-footer/lazy-about-dd-image.webp")', margin: '-20px -20px -20px 20px', backgroundSize: 'cover'}} data-bg="/header-footer/about-dd-image.webp">
                          <div className="drop-down-graphic relative h-full">
                            <h3>Chandigarh University <span>Best Educational</span> Institution</h3>
                            <div className="dd-graphic-cont absolute bottom-0">
                              <div className="flex flex-wrap -mx-4 m-0 p-0">
                                <div className="w-1/2 px-4 p-2 py-3 flex">
                                  <div className="dd--title align-self-center mx-auto">
                                    <span>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={54}>
                                        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                                                            .stval {\n                                                                                fill: #FFFFFF;\n                                                                            }\n                                                                        " }} />
                                        <path className="stval" d="M415.3 275.2l-41.1 41.1c-0.5-0.7-1.1-1.3-1.7-1.9l-53.1-53.1c-2.9-2.9-7.7-2.9-10.6 0 -2.9 2.9-2.9 7.7 0 10.6l53.1 53.1c4.6 4.6 4.6 12 0 16.6 -4.6 4.6-12 4.6-16.6 0l-29.5-29.5c-2.9-2.9-7.7-2.9-10.6 0s-2.9 7.7 0 10.6l29.5 29.5c0 0 0 0 0 0 2.2 2.2 3.4 5.1 3.4 8.3 0 3.1-1.2 6.1-3.4 8.3 -2.2 2.2-5.1 3.4-8.3 3.4 -3.1 0-6.1-1.2-8.3-3.4l-29.5-29.5c-2.9-2.9-7.7-2.9-10.6 0s-2.9 7.7 0 10.6l29.5 29.5c4.6 4.6 4.6 12 0 16.6 -2.2 2.2-5.2 3.4-8.3 3.4 -3.1 0-6.1-1.2-8.3-3.4l-29.5-29.5c-2.9-2.9-7.7-2.9-10.6 0s-2.9 7.7 0 10.6l29.5 29.5c4.6 4.6 4.6 12 0 16.6 -2.2 2.2-5.1 3.4-8.3 3.4 -3.1 0-6.1-1.2-8.3-3.4L244.7 404c6.1-10.1 4.8-23.5-4-32.3l-0.5-0.5c-5.8-5.8-13.7-8.3-21.3-7.6 -0.4-6.4-3.1-12.3-7.7-16.9 -3.5-3.5-7.8-5.8-12.3-7 1.2-3 1.8-6.2 1.8-9.5 0-7.1-2.7-13.7-7.7-18.7s-11.6-7.7-18.7-7.7c-4 0-7.9 0.9-11.4 2.6 -1.2-4.2-3.4-8.2-6.7-11.5 -10.3-10.3-27.1-10.3-37.4 0l-3.1 3.1 -2.3-2.3c-3.6-3.6-5.6-8.5-5.6-13.6v-19.6c0-2-0.8-3.9-2.2-5.3l-32.1-32.1 9-9c2.9-2.9 2.9-7.7 0-10.6 -2.9-2.9-7.7-2.9-10.6 0l-12.1 12.1c-2.3 2.3-6 2.3-8.3 0L12.8 179c-2.9-2.9-7.7-2.9-10.6 0 -2.9 2.9-2.9 7.7 0 10.6l38.7 38.7c4.1 4.1 9.4 6.1 14.8 6.1 1.7 0 3.4-0.2 5.1-0.6l32 32v16.5c0 9.2 3.6 17.8 10 24.2l2.3 2.3 -2.5 2.5c-5 5-7.7 11.6-7.7 18.7 0 7.1 2.7 13.7 7.7 18.7 5.2 5.1 11.9 7.7 18.7 7.7 0.1 0 0.2 0 0.3 0 0 0.1 0 0.2 0 0.3 0 7.1 2.7 13.7 7.7 18.7 5 5 11.6 7.7 18.7 7.7 0.1 0 0.2 0 0.3 0 -0.1 6.9 2.5 13.8 7.7 19 5.2 5.1 11.9 7.7 18.7 7.7 0.1 0 0.2 0 0.3 0 -0.1 6.9 2.5 13.8 7.7 19l0.5 0.5c5 5 11.6 7.7 18.7 7.7 7.1 0 13.7-2.7 18.7-7.7l14.1-14.1 18.6 18.6c5 5.1 11.8 7.8 18.9 7.8 7.1 0 13.9-2.8 18.9-7.8 5.3-5.3 7.9-12.4 7.8-19.4 0.2 0 0.3 0 0.5 0 7.1 0 13.9-2.8 18.9-7.8 5.3-5.3 7.9-12.4 7.8-19.4 0.2 0 0.3 0 0.5 0 6.8 0 13.7-2.6 18.9-7.8 5.1-5 7.8-11.8 7.8-18.9 0-0.2 0-0.3 0-0.5 0.2 0 0.3 0 0.5 0 6.8 0 13.7-2.6 18.9-7.8 5.7-5.7 8.2-13.3 7.8-20.7l45.7-45.7c2.9-2.9 2.9-7.7 0-10.6C423 272.2 418.2 272.2 415.3 275.2L415.3 275.2zM113.1 338c-2.2-2.2-3.3-5-3.3-8 0-3 1.2-5.9 3.3-8.1l16.2-16.2c2.2-2.2 5.1-3.3 8.1-3.3 2.9 0 5.8 1.1 8 3.3 4.4 4.4 4.4 11.7 0 16.1L129.2 338C124.8 342.4 117.6 342.4 113.1 338L113.1 338zM147.9 368.1c-3 0-5.9-1.2-8.1-3.3 -2.2-2.2-3.3-5-3.3-8s1.2-5.9 3.3-8.1l16.2-16.2 10.1-10.1c2.2-2.2 5-3.3 8-3.3s5.9 1.2 8 3.3c2.2 2.2 3.3 5 3.3 8.1s-1.2 5.9-3.3 8.1L156 364.7C153.8 366.9 150.9 368.1 147.9 368.1L147.9 368.1zM166.6 391.5c-4.4-4.4-4.4-11.7 0-16.1l17.9-17.9c2.2-2.2 5.1-3.3 8.1-3.3 2.9 0 5.8 1.1 8 3.3 2.2 2.2 3.3 5 3.3 8.1 0 3-1.2 5.9-3.3 8l-17.9 17.9C178.2 395.9 171 395.9 166.6 391.5L166.6 391.5zM209.9 418.6c-2.2 2.2-5 3.3-8 3.3 -3 0-5.9-1.2-8-3.3l-0.5-0.5c-4.4-4.4-4.4-11.7 0-16.1l17.9-17.9c0 0 0 0 0 0l2.2-2.3c2.2-2.2 5.1-3.3 8.1-3.3 2.9 0 5.8 1.1 8 3.3l0.5 0.5c4.4 4.4 4.4 11.7 0 16.1L209.9 418.6z" />
                                        <path className="stval" d="M509.8 210.7c-2.9-2.9-7.7-2.9-10.6 0L471 238.9c-0.4 0.4-1 0.4-1.4 0L370 143.8c-0.2-0.2-0.3-0.4-0.3-0.7 0-0.3 0.1-0.5 0.3-0.7l59.1-59.1c2.9-2.9 2.9-7.7 0-10.6 -2.9-2.9-7.7-2.9-10.6 0l-59.1 59.1c-3.1 3.1-4.7 7.2-4.7 11.5 0 3.5 1.2 6.8 3.3 9.5l-27 26.5 -25.5-14.2c-3.3-1.9-7.1-2.8-10.9-2.8h-72.3l-5.5-5.5c-5.1-5.1-11.1-9-17.9-11.6l-20-7.6 -9.3-9.3c4.8-8 3.8-18.6-3.1-25.5l-30.2-30.2c-2.9-2.9-7.7-2.9-10.6 0 -2.9 2.9-2.9 7.7 0 10.6l30.2 30.2c2.3 2.3 2.3 6 0 8.3L94.5 183c-2.9 2.9-2.9 7.7 0 10.6 1.5 1.5 3.4 2.2 5.3 2.2 1.9 0 3.8-0.7 5.3-2.2l54.3-54.3 9.9 9.9c0.7 0.7 1.6 1.3 2.6 1.7l21.5 8.2c4.6 1.8 8.8 4.4 12.3 7.9 -0.5 0.4-0.9 0.8-1.3 1.2l-28.6 28.6c-5.7 5.7-8.8 13.2-8.8 21.2 0 8 3.1 15.6 8.8 21.2 5.9 5.9 13.5 8.8 21.2 8.8 6.7 0 13.5-2.3 19.1-6.9l21.6-17.8h22.5l25.7 25.7c1.5 1.5 3.4 2.2 5.3 2.2s3.8-0.7 5.3-2.2c2.9-2.9 2.9-7.7 0-10.6L278.2 220c0.7-1.2 1.2-2.5 1.2-4 0-4.2-3.4-7.5-7.5-7.5h-36.7c-1.7 0-3.4 0.6-4.8 1.7l-23.7 19.5c-6 4.9-14.6 4.5-20.1-1 -2.8-2.8-4.4-6.6-4.4-10.6 0-4 1.6-7.8 4.4-10.6l28.6-28.6c1.1-1.1 2.5-1.7 4-1.7h75.5c1.3 0 2.5 0.3 3.6 0.9l28.2 15.7c4.2 2.3 9.5 1.6 12.9-1.7l29.4-28.9 81 77.4L438 252.5c-2.9 2.9-2.9 7.7 0 10.6 1.5 1.5 3.4 2.2 5.3 2.2 1.9 0 3.8-0.7 5.3-2.2l12.1-12.1c2.8 2.1 6.2 3.1 9.6 3.1 4.1 0 8.2-1.6 11.4-4.7l28.2-28.2C512.7 218.4 512.7 213.6 509.8 210.7L509.8 210.7z" />
                                      </svg>
                                    </span>
                                    Human Dignity
                                  </div>
                                </div>
                                <div className="w-1/2 px-4 p-2 py-3 flex">
                                  <div className="dd--title align-self-center mx-auto">
                                    <span>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={45}>
                                        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                                                            .stval {\n                                                                                fill: #FFFFFF;\n                                                                            }\n                                                                        " }} />
                                        <path className="stval" d="M408 207.4L510 136 408 64.6V104h-80v64h80V207.4zM344 152v-32h80V95.4l58 40.6 -58 40.6V152H344z" />
                                        <path className="stval" d="M226 264l102 71.4V296h80v-64h-80v-39.4L226 264zM392 248v32h-80v24.6L254 264l58-40.6V248H392z" />
                                        <path className="stval" d="M224.2 219.1c15.3-15.3 23.8-35.7 23.8-57.6 0-18.2-6.3-36.1-17.6-50.3C218.6 96.4 201 88 182.2 88c-16.5 0-31.9 6.4-43.6 18.1L128 116.7l-10.6-10.6C105.7 94.4 90.2 88 73.8 88c-18.8 0-36.4 8.4-48.1 23.1C14.3 125.4 8 143.2 8 161.7c0 21.7 8.4 42.1 23.8 57.4l96.2 96.2L224.2 219.1zM24 161.4c0-14.6 5-28.9 14.1-40.3 8.7-10.9 21.7-17.1 35.6-17.1 12.2 0 23.7 4.7 32.3 13.4l21.9 21.9 21.9-21.9c8.6-8.6 20.1-13.4 32.3-13.4 13.9 0 26.9 6.2 35.6 17.1 9.1 11.4 14.1 25.7 14.1 40.6 0 17.4-6.8 33.8-19.1 46.1L128 292.7l-84.9-84.9C30.8 195.5 24 179.1 24 161.4z" />
                                        <path className="stval" d="M329.4 408.1l-14.1-11.7C299.6 383.2 279.6 376 259 376h-59c-11.9 0-22.2 6.6-27.7 16.4l-14.2-18.9c-6.3-8.4-16.4-13.5-26.9-13.5 -9.3 0-17.5 4.7-22.4 11.9C102.4 364.4 93 360 83.2 360c-15 0-27.2 12.2-27.2 27.2 0 4.5 1.1 8.9 3.2 12.9l51.1 73.2c13.5 19.3 35.5 30.8 59 30.8H504V392H352C341.5 392 332.7 398.8 329.4 408.1zM131.2 376c5.5 0 10.8 2.6 14.1 7.1l23.3 31.1c0.7 3.5 2.1 6.8 3.8 9.8H164c-10 0-19.6-4.8-25.6-12.8L120 386.7C120.3 380.8 125.2 376 131.2 376L131.2 376zM169.4 488c-18.3 0-35.4-8.9-45.9-23.9l-50.3-72c-0.8-1.5-1.2-3.2-1.2-4.9 0-6.2 5-11.2 11.2-11.2 5.5 0 10.8 2.6 14.1 7.1l28.3 37.7c9 12 23.4 19.2 38.4 19.2h66.1c10.5 0 20.9 2.5 30.3 7.2l7.2-14.3c-11.6-5.8-24.5-8.8-37.5-8.8H200c-8.8 0-16-7.2-16-16s7.2-16 16-16h59c16.8 0 33.2 5.9 46.1 16.7l22.9 19.1V488H169.4zM344 416c0-4.4 3.6-8 8-8h8v80h-16V416zM376 408h32v80h-32V408zM488 488h-64v-80h64V488z" />
                                      </svg>
                                    </span>
                                    Empathy
                                  </div>
                                </div>
                                <div className="w-1/2 px-4 p-2 py-3 flex">
                                  <div className="dd--title align-self-center mx-auto">
                                    <span>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={44}>
                                        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                                                            .stval {\n                                                                                fill: #FFFFFF;\n                                                                            }\n                                                                        " }} />
                                        <path className="stval" d="M447.2 304.9l-85.6 60.7C359 346.1 342.2 331 322 331h-10.3c-41.3 0-81.1-10.3-128.2-25.8 -8.5-2.8-17.5-4.2-26.5-4.2 -25.3 0-48.6 10.9-64.8 30H10c-5.5 0-10 4.5-10 10v90c0 5.5 4.5 10 10 10 36.7 0 73 10.3 111.4 21.2 41.1 11.7 83.7 23.8 129.7 23.8 86.1 0 127.7-23.9 245.9-118.4 17.3-13.8 20.1-39 6.2-56.2C489.5 294.2 464.5 291.3 447.2 304.9L447.2 304.9zM484.5 351.9C364.6 447.9 327.5 466 251.1 466c-43.2 0-84.4-11.7-124.2-23 -36.4-10.3-71-20.2-106.9-21.8V351h77c3.1 0 6.1-1.5 8-4 12.4-16.5 31.4-26 52-26 6.9 0 13.8 1.1 20.3 3.2 48.9 16.1 90.5 26.8 134.4 26.8H322c11 0 20 9 20 20 0 10.9-8.7 20-20 20H200.5c-5.5 0-10 4.5-10 10s4.5 10 10 10H322c12 0 23.5-5.5 31-14.8 110.7-78.5 106-75.2 106.5-75.5 8.6-6.9 21.2-5.5 28.1 3.1C494.5 332.4 493.1 345 484.5 351.9z" />
                                        <circle className="stval" cx={342} cy={276} r={10} />
                                        <path className="stval" d="M392 76c0-27.6-22.4-50-50-50 -27.6 0-50 22.4-50 50s22.4 50 50 50C369.6 126 392 103.6 392 76zM342 106c-16.5 0-30-13.5-30-30s13.5-30 30-30c16.5 0 30 13.5 30 30S358.5 106 342 106z" />
                                        <path className="stval" d="M252 216v60c0 5.5 4.5 10 10 10h35c5.5 0 10-4.5 10-10s-4.5-10-10-10h-25v-50c0-38.6 31.4-70 70-70s70 31.4 70 70v50h-25c-5.5 0-10 4.5-10 10s4.5 10 10 10h35c5.5 0 10-4.5 10-10v-60c0-49.6-40.4-90-90-90S252 166.4 252 216L252 216z" />
                                      </svg>
                                    </span>
                                    Humility
                                  </div>
                                </div>
                                <div className="w-1/2 px-4 p-2 py-3 flex">
                                  <div className="dd--title align-self-center mx-auto">
                                    <span>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={50}>
                                        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                                                            .stval {\n                                                                                fill: #FFFFFF;\n                                                                            }\n                                                                        " }} />
                                        <path className="stval" d="M502 134.1h-47.5c-5.5 0-10 4.5-10 10s4.5 10 10 10H502c5.5 0 10-4.5 10-10S507.5 134.1 502 134.1z" />
                                        <path className="stval" d="M434.9 75.9c2.2 0 4.4-0.7 6.2-2.2l39.4-31.2c4.3-3.4 5.1-9.7 1.6-14 -3.4-4.3-9.7-5.1-14-1.6l-39.4 31.2c-4.3 3.4-5.1 9.7-1.6 14C429 74.6 431.9 75.9 434.9 75.9z" />
                                        <path className="stval" d="M480.5 245.5l-39.4-31.2c-4.3-3.4-10.6-2.7-14 1.6 -3.4 4.3-2.7 10.6 1.6 14l39.4 31.2c1.8 1.5 4 2.2 6.2 2.2 3 0 5.9-1.3 7.8-3.8C485.5 255.3 484.8 249 480.5 245.5L480.5 245.5z" />
                                        <path className="stval" d="M34.5 154.1H82c5.5 0 10-4.5 10-10s-4.5-10-10-10H34.5c-5.5 0-10 4.5-10 10S29 154.1 34.5 154.1z" />
                                        <path className="stval" d="M56 42.6l39.4 31.2c1.8 1.5 4 2.2 6.2 2.2 3 0 5.9-1.3 7.8-3.8 3.4-4.3 2.7-10.6-1.6-14L68.4 26.9c-4.3-3.4-10.6-2.7-14 1.6C51 32.9 51.7 39.2 56 42.6z" />
                                        <path className="stval" d="M95.4 214.4L56 245.5c-4.3 3.4-5.1 9.7-1.6 14 2 2.5 4.9 3.8 7.8 3.8 2.2 0 4.4-0.7 6.2-2.2l39.4-31.2c4.3-3.4 5.1-9.7 1.6-14S99.8 210.9 95.4 214.4L95.4 214.4z" />
                                        <path className="stval" d="M158.4 185.9l7.8 7.5c1.9 1.9 4.4 2.8 7 2.8 2.6 0 5.2-1 7.2-3 3.8-4 3.7-10.3-0.2-14.1l-7.6-7.4c-23.2-24.2-23.2-63.4 0.1-87.6 18.5-19.2 51.3-18.1 73.1 2.3l0.9 0.9c6.3 5.9 10.4 9.7 16.8 9.7s10.6-3.9 16.8-9.7l0.9-0.9c21.8-20.4 54.6-21.4 73.1-2.3 20.3 21 22.9 54.8 7 79 -9 0.3-18.2 3.6-25.7 10 -16.1-13.6-39.6-13.3-53.4 0.9 -16.5 17-16.5 44.8 0 61.8 0.1 0.1 0.2 0.2 0.2 0.2l2.7 2.6 -21.7 20.9 -18.7-18.1c-4-3.8-10.3-3.7-14.1 0.3 -3.8 4-3.7 10.3 0.3 14.1l25.7 24.8c1.9 1.9 4.4 2.8 6.9 2.8 2.5 0 5-0.9 6.9-2.8l29.1-28.1 29.2 28.1c1.9 1.9 4.4 2.8 6.9 2.8 2.5 0 5-0.9 6.9-2.8l46.2-44.6c0.1-0.1 0.2-0.2 0.3-0.3 16.4-17 16.4-44.7 0-61.8 -2.3-2.3-4.8-4.3-7.5-5.9 7.3-13.3 10.8-28.6 10.1-44.2 -0.9-20.3-9.1-39.4-22.9-53.8 -13.2-13.6-31.2-20.7-50.8-19.9 -18.5 0.8-36.4 8.4-50.4 21.4l-0.9 0.9c-1.1 1-2.2 2.1-3.2 2.9 -1-0.9-2.1-1.9-3.2-2.9l-0.9-0.9c-14-13.1-31.9-20.7-50.4-21.4 -19.6-0.8-37.6 6.3-50.8 19.9 -30.8 31.9-30.8 83.7 0 115.5C158.3 185.7 158.3 185.8 158.4 185.9L158.4 185.9zM374.8 221.7l-39.1 37.8 -39.2-37.8c-8.8-9.2-8.8-24.7 0.1-33.9 7.5-7.8 19.9-5.4 27.1 1.3l0.4 0.4c3.3 3.1 6.4 6 11.5 6 5.1 0 8.2-2.9 11.5-6l0.5-0.4c7.1-6.7 19.5-9.1 27.1-1.3C383.5 197 383.6 212.5 374.8 221.7L374.8 221.7z" />
                                        <path className="stval" d="M397 323.1l-76.9 39.5c-6.6-6.7-15.7-10.9-25.9-10.9h-52.8c-2.8 0-3.5-0.2-3.6-0.2 -0.4-0.2-1.7-1.5-2.8-2.5l-0.5-0.5c-42.8-40.3-79-37.7-120.1-21.5 -6.5 2.6-6.6 2.6-13.1 2.9l-11.9 0c-3.5-10.3-13.2-17.6-24.6-17.6H26c-14.4 0-26 11.7-26 26v101.9c0 14.4 11.7 26 26 26h38.8c11.4 0 21.2-7.4 24.7-17.7h21.6c1.9 0 1.9 0 4 0.6 0.8 0.2 1.8 0.5 3.1 0.9l100.4 26.9c4.4 1.2 8.5 2.4 12.4 3.5 12.9 3.7 23.7 6.9 35 6.9 12.8 0 26.1-4 43.7-15.8 0.1-0.1 0.2-0.1 0.3-0.2L434 383.2c16.1-11.5 20.8-32.2 10.9-48.2C435.2 319.2 414.6 314.1 397 323.1L397 323.1zM70.9 440.1c0 3.3-2.7 6-6 6H26c-3.3 0-6-2.8-6-6V338.3c0-3.3 2.8-6 6-6h38.8c3.3 0 6 2.7 6 6V440.1zM422.4 366.9l-123.7 88.1c-25.3 16.9-36.1 13.7-62 6.2 -4-1.2-8.2-2.4-12.8-3.6l-100.4-26.9c-1.2-0.3-2.1-0.6-2.9-0.8 -3.7-1-5-1.4-9.5-1.4H90.9v-78.6h10.2c0.1 0 0.3 0 0.4 0l0.8 0c7.9-0.3 10.3-0.6 19.6-4.3 35.9-14.2 63.7-15.8 99.1 17.5l0.5 0.5c6 5.7 9.7 8.1 20.1 8.1h52.8c6 0 11.2 3.3 14 8.1 0 0 0 0 0 0.1 0.1 0.2 0.2 0.3 0.3 0.5 1.2 2.2 1.9 4.8 1.9 7.5 0 8.9-7.3 16.2-16.2 16.2h-85.5c-5.5 0-10 4.5-10 10s4.5 10 10 10h85.5c20 0 36.2-16.2 36.2-36.2 0-2.6-0.3-5.2-0.8-7.7l76.5-39.3c7.1-3.7 16.9-3.3 21.7 4.6C432.1 352.4 429.8 361.6 422.4 366.9L422.4 366.9z" />
                                        <path className="stval" d="M200.9 208.5c-4.9 2.5-6.9 8.5-4.4 13.4l0 0.1c1.8 3.5 5.3 5.4 8.9 5.4 1.5 0 3.1-0.4 4.5-1.1 4.9-2.5 6.9-8.6 4.4-13.5C211.9 207.9 205.8 206 200.9 208.5z" />
                                      </svg>
                                    </span>
                                    Giving
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dd-menu-lg">
                    <a href="javascript:void(0);">programs</a>
                    <div className="step-second-menu st-programs">
                      <div className="flex flex-wrap -mx-4 h-full m-0 p-0">
                        <div className="w-full xl:w-10/12 px-4 w-full lg:w-full px-4">
                          <div className="menuTabs">
                            <ul className="nav nav-tabs">
                              <li className="nav-item">
                                <a className="nav-link active" href="#">
                                  <strong>Regular <i className="fas fa-arrow-circle-down ms-1" /></strong>
                                </a>
                              </li>
                              {/*<li class="nav-item">
                                                  <a rel="nofollow" href="https://www.onlinecu.in"
                                                      class="nav-link">
                                                      <small>Click here to view Programs of</small>
                                                      <strong>Online Learning (OL) <i
                                                              class="fas fa-external-link-alt ms-1"></i></strong>
                                                  </a>
                                              </li>*/}
                            </ul>
                          </div>
                          <div className="flex flex-wrap -mx-4">
                            <div className="col-md-6 w-full xl:w-5/12 px-4">
                              <div className="flex flex-wrap -mx-4">
                                <div className="col-xl-6">
                                  <ul className="list-none p-0 m-0">
                                    <li><a href="https://www.cuchd.in/engineering/">Engineering</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/management/">Management
                                        (BBA/MBA)</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/business-management/">Business
                                        Management (BBA/MBA Flagship)
                                      </a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/apex-management/">Industry
                                        Collaborated (BBA/MBA)
                                      </a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/computing/">Computing
                                        (BCA/
                                        MCA)</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/hotel-management-and-tourism/bsc-airline-and-airport-management.php">Airlines
                                        &amp; Airport Management</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/applied-health-sciences/">Allied
                                        Health Sciences</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/animation-and-multimedia/">Animation
                                        &amp; Multimedia</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/architecture-and-design/">Architecture</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/liberal-arts-and-humanities/">Arts
                                        &amp; Humanities <small style={{fontSize: 11}}>(B.A &amp;
                                          M.A)</small></a>
                                    </li>
                                    {/* <li><a
                                                                  href="https://www.cuchd.in/liberal-arts-and-humanities/bachelor-of-arts-liberal-arts.php">BA
                                                                  (Hons.) Liberal Arts</a>
                                                          </li> */}
                                    <li><a href="https://www.cuchd.in/basic-sciences/">Physics<small style={{fontSize: 11}}> (B.Sc./ M.Sc.)</small></a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/basic-sciences/">Chemistry<small style={{fontSize: 11}}> (B.Sc./ M.Sc.)</small></a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/basic-sciences/">Mathematics<small style={{fontSize: 11}}> (B.Sc./ M.Sc.)</small></a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-xl-6">
                                  <ul className="list-none p-0 m-0">
                                    <li><a href="https://www.cuchd.in/commerce/">Commerce
                                        (B.Com/M.Com)</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/biotechnology/">Biotechnology
                                        &amp; Biosciences</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/animation-and-multimedia/bsc-digital-film-making.php">B.Sc.
                                        Digital Film Making</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/biosciences/bsc-medical.php">B.Sc.
                                        Medical</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/hotel-management-and-tourism/bsc-culinary-arts.php">Culinary
                                        Sciences</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/basic-sciences/msc-data-sciences.php">Data
                                        Science</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/economics/">Economics</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/teachers-training-and-research/">Education
                                        (B.A.B.Ed/ B.Sc.B.Ed)</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/design/bachelor-of-design-fashion.php">Fashion
                                        &amp; Design</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/finance-and-accounting">Finance
                                        &amp; Accounting
                                      </a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/design/">Fine
                                        Arts</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/applied-health-sciences/">Forensic
                                        Sciences (B.Sc./M.Sc.)</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/hotel-management-and-tourism/">Hotel
                                        &amp; Hospitality Management</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/design/bachelor-of-design-interior.php">Interior
                                        Design</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 w-full xl:w-5/12 px-4">
                              <div className="flex flex-wrap -mx-4">
                                <div className="col-xl-6">
                                  <ul className="list-none p-0 m-0">
                                    <li><a href="https://www.cuchd.in/legal-studies/">Legal
                                        Studies</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/basic-sciences/">Mathematics
                                        <small style={{fontSize: 11}}>(B.Sc./M.Sc./Phd)</small></a>
                                    </li>
                                    {/* <li><a
                                                                  href="https://www.cuchd.in/liberal-arts-and-humanities/ma-english.php">M.A.
                                                                  English</a>
                                                          </li> */}
                                    <li><a href="https://www.cuchd.in/biosciences/">M.Sc.
                                        Zoology/Botany</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/hotel-management-and-tourism/bsc-travel-and-tourism-management.php">Travel
                                        and Tourism</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/management/MBA-tourism-and-hospitality-management.php">MBA
                                        Tourism, Hospitality and Aviation</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/journalism-and-mass-communication/">Media
                                        Studies</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/biotechnology/msc-industrial-microbiology.php">Microbiology</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/applied-health-sciences/bsc-in-mlt.php">Medical
                                        Laboratory Sciences</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/applied-health-sciences/bsc-nutrition-dietetics.php">Nutrition
                                        &amp; Dietetics</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/applied-health-sciences/bachelor-of-optometry.php">Optometry
                                        {/*<small
                                                                      style="font-size:11px;">(B.Optom/M.Optom/PhD.Optom)</small>*/}</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/pharma-sciences/">Pharma
                                        Sciences</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/applied-health-sciences/bachelor-of-physiotherapy.php">Physiotherapy</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-xl-6">
                                  <ul className="list-none p-0 m-0">
                                    <li><a href="https://www.cuchd.in/design/bachelor-of-design.php">Product
                                        &amp; Industrial
                                        Design</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/liberal-arts-and-humanities/">Psychology</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/computing/mca-data-science.php">MCA
                                        Data Science with <img src="/header-footer/intel-logo.svg" alt="MCA Data Science with Intel" style={{marginTop: '-2px'}} width="26px" className="ptrans" /></a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/IBM/">CSE with <img src="/header-footer/IBM-logo.webp" alt="MBA with IBM" style={{marginTop: '-3px'}} width="30px" className="ptrans" /></a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/engineering/be-cse-artificial-intelligence.php">BE
                                        CSE Artificial<br /> Intelligence with <img src="/header-footer/microsoft-logo.png" alt="BE CSE AI with Microsoft" style={{verticalAlign: 'baseline', marginLeft: 2}} width="60px" className="ptrans" /></a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/engineering/virtusa-me-cse-cloud-computing.php">ME
                                        CSE Cloud<br /> Computing with <img src="/header-footer/virtusa-logo.webp" alt="ME CSE with Virtusa" style={{marginTop: '-4px'}} width="50px" className="ptrans" /></a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/TCS/">CSE with <img src="/header-footer/TCS-logo.webp" alt="MBA with TCS" style={{marginTop: '-1px'}} width="130px" className="ptrans" /></a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/finance-and-accounting/bcom-in-applied-finance-and-analytics-acca-gt.php">B.Com
                                        in Applied Finance &amp; Accounting with Grant
                                        Thronton <img src="/header-footer/acca-header-logo.webp" alt="BBA with ACCA" width="30px" className="lazy-img" /></a>
                                    </li>
                                    {/* <li><a
                                                                  href="https://www.cuchd.in/finance-and-accounting/bba-acca.php">BBA
                                                                  with <img
                                                                      src="/header-footer/acca-header-logo.webp"
                                                                      alt="BBA with ACCA" width="30px"
                                                                      class="lazy-img"></a>
                                                          </li>
                                                          <li><a
                                                                  href="https://www.cuchd.in/finance-and-accounting/bcom-acca.php">B.Com
                                                                  with <img
                                                                      src="/header-footer/acca-header-logo.webp"
                                                                      alt="B.Com with ACCA" width="30px"
                                                                      class="lazy-img"></a>
                                                          </li> */}
                                    {/* <li><a
                                                                  href="https://www.cuchd.in/finance-and-accounting/mcom-acca.php">M.Com
                                                                  with <img
                                                                      src="/header-footer/acca-header-logo.webp"
                                                                      alt="M.Com with ACCA" width="30px"
                                                                      class="lazy-img"></a>
                                                          </li> */}
                                    <li><a href="https://www.cuchd.in/cassm/mba-cassm.php">MBA
                                        - CASSM</a>
                                    </li>
                                    <li><a href="https://www.cuchd.in/apex-management/mba-healthcare-and-life-sciences.php">MBA
                                        Healthcare and Hospital Management <img src="/header-footer/max-logo.jpg" alt="MBA
                                                                  Healthcare and Hospital Management" width="75px" className="lazy-img" /></a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="w-full md:w-full px-4 w-full xl:w-1/6 px-4">
                              <ul className="list-none p-0 m-0">
                                <li><a href="https://www.cuchd.in/finance-and-accounting/mba-in-capital-markets-with-additional-certifications-from-nism.php">MBA
                                    in Capital Markets with <img src="/header-footer/nism-logo.webp" alt="MBA in Capital Markets with NISM" className="ptrans" /></a>
                                </li>
                                <li><a href="https://www.cuchd.in/apex-management/mba-strategic-hr.php">MBA
                                    Strategic HR with <img src="/header-footer/aon-logo.webp" alt="MBA with AON" width="36px" className="ptrans" /></a>
                                </li>
                                <li><a href="https://www.cuchd.in/apex-management/mba-data-science-and-artificial-intelligence.php">MBA
                                    Data Science &amp; AI with <img src="/header-footer/sas-logo.webp" alt="MBA with SAS" style={{marginTop: '-3px'}} width="30px" className="ptrans" /></a>
                                </li>
                                <li><a href="https://www.cuchd.in/IBM/MBA-business-analytics.php">MBA
                                    Business Analytics with <img src="/header-footer/IBM-logo.webp" alt="MBA with IBM" style={{marginTop: '-3px'}} width="30px" className="ptrans" /></a>
                                </li>
                                <li><a href="https://www.cuchd.in/finance-and-accounting/mba-applied-finance.php">MBA
                                    in Applied Finance &amp; Analytics with <img src="/header-footer/pwc-logo-new.png" alt="MBA with pwc" style={{marginTop: '-8px'}} width="30px" className="ptrans" /></a>
                                </li>
                                <li><a href="https://www.cuchd.in/apex-management/bfe.php">MBA
                                    in Banking, Financial Services &amp; Insurance <img src="/header-footer/SBI-logo.webp" alt="MBA Banking and Financial Engineering with SBI" style={{marginTop: '-3px'}} width="90px" className="ptrans" /></a>
                                </li>
                                <li><a href="https://www.cuchd.in/apex-management/mba-master-of-business-digital-marketing.php">MBA
                                    Digital
                                    Marketing{/*<img
                                                                  src="/header-footer/adobe-logo.png"
                                                                  alt="MBA Digital Marketing powered by Adobe" style="margin-top: -1px;"
                                                                  width="40px" class="ptrans">*/}</a>
                                </li>
                                <li><a href="https://www.cuchd.in/apex-management/mba-fintech.php">MBA
                                    FinTech &amp; AI <img src="/header-footer/nse-acadmey.webp" alt="MBA with Fintech" style={{marginTop: '-2px'}} width="36px" className="ptrans" /></a>
                                </li>
                                <li><a href="https://www.cuchd.in/apex-management/MBA-logistics-and-supply-chain-management.php">MBA
                                    Logistics and Supply Chain Management
                                    with
                                    <img src="/header-footer/cii-logo.webp" alt="MBA Logistics and Supply Chain Management with CII" style={{marginTop: 0}} width="60px" className="ptrans" /></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <hr />
                          <div className="flex flex-wrap -mx-4 g-3">
                            <div className="col-xl-6">
                              <h4>Doctorate Programs</h4>
                              <div className="flex flex-wrap -mx-4">
                                <div className="col-md-6">
                                  <ul className="list-none p-0 m-0">
                                    <li><a href="https://www.cuchd.in/doctorate-programs/">Doctor
                                        of Philosophy</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-6">
                                  <ul className="list-none p-0 m-0">
                                    <li><a href="https://www.cuchd.in/phd-me-admissions/ApplicationRegistration.aspx?Subject=fJAt3RX8ggEX//eDGysKyA==">Ph.D
                                        Admissions</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <h4>Study Abroad Programs</h4>
                              <div className="flex flex-wrap -mx-4">
                                <div className="col-md-3">
                                  <ul className="list-none p-0 m-0">
                                    <li><a href="https://www.cuchd.in/studyabroad/">Canada</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-3">
                                  <ul className="list-none p-0 m-0">
                                    <li><a href="https://www.cuchd.in/studyabroad/">USA</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-3">
                                  <ul className="list-none p-0 m-0">
                                    <li><a href="https://www.cuchd.in/studyabroad/">Australia</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="w-full md:w-full px-4 block d-lg-none mt-3">
                              <div className="flex flex-wrap -mx-4 g-3">
                                <div className="w-full lg:w-1/2 px-4">
                                  <div className="card br-6 p-3">
                                    <a rel="nofollow" href="https://www.cuidol.in/?utm_source=Website&utm_medium=cuchd" target="_blank" className="relative text-black text-uppercase"><small>Click
                                        here to view Programs
                                        of</small><br /> <b> Open &amp; Distance Learning
                                        (ODL)<small><i className="fas fa-external-link-alt ms-1" /></small></b></a>
                                  </div>
                                </div>
                                <div className="w-full lg:w-1/2 px-4">
                                  <div className="card br-6 p-3">
                                    <a rel="nofollow" href="https://www.onlinecu.in/?utm_source=Website&utm_medium=cuchd" target="_blank" className="relative text-black text-uppercase"><small>Click
                                        here to view Programs
                                        of </small><br /><b>Online Learning (OL) <small><i className="fas fa-external-link-alt ms-1" /></small></b></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full xl:w-1/6 px-4 w-full lg:w-full px-4 pg-bg program-graphic hidden lg:block lazy-bg" style={{background: 'url("/header-footer/lazy-program-dd-image.webp")', margin: '-20px -20px -20px 20px', backgroundSize: 'cover'}} data-bg="/header-footer/program-dd-image.webp">
                          <div className="program-drop-down-graphic relative h-full">
                            <h3>University with <span>Best Placements</span></h3>
                            <div className="placement--ddNumbers progNos mt-3">
                              <div className="flex flex-wrap -mx-4 g-2">
                                <div className="col-4 col-xl-12">
                                  <div className="card p-2">
                                    <span>
                                      <h4 id="plac-no"><span className="hidden" />
                                      </h4>
                                      <small>PLACEMENTS</small>
                                    </span>
                                  </div>
                                  <p>Offered in </p>
                                </div>
                                <div className="col-4 col-xl-12">
                                  <div className="card p-2">
                                    <span>
                                      <h4 id="high-pk"><span className="hidden" />
                                        <sub>CR
                                        </sub>
                                      </h4>
                                      <small>INTERNATIONAL</small>
                                    </span>
                                  </div>
                                  <p>Highest Package <br />Offered</p>
                                </div>
                                <div className="col-4 col-xl-12">
                                  <div className="card p-2">
                                    <span>
                                      <h4 id="high-npk"><span className="hidden" />
                                        <sub>LPA</sub>
                                      </h4>
                                      <small>NATIONAL</small>
                                    </span>
                                  </div>
                                  <p>Highest Package <br />Offered</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dd-menu-lg">
                    <a href="https://www.cuchd.in/academics/" className="mob-void">Academics</a>
                    <div className="step-second-menu st-academics">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="col-lg-5">
                          <h4 className="hidden xl:block">Academics</h4>
                          <ul className="list-none p-0 m-0">
                            <li><a href="https://www.cuchd.in/academics/">Academics Overview</a>
                            </li>
                            <li><a href="https://www.cuchd.in/academics/institutes.php">Institutes</a>
                            </li>
                            <li><a href="https://www.cuchd.in/admissions/course-fee.php">Program
                                (Courses)</a>
                            </li>
                            <li><a href="https://www.cuchd.in/academics/academic-calendar.php">Academic
                                Calendar</a>
                            </li>
                            <li><a href="https://www.cuchd.in/academics/list-of-holidays.php">List
                                of
                                Holidays</a>
                            </li>
                            <li><a href="https://www.cuchd.in/academics/teaching-practices.php">Teaching
                                Practices</a>
                            </li>
                            <li><a href="https://www.cuchd.in/academics/system-of-evaluation.php">System
                                of
                                Evaluation</a>
                            </li>
                            <li><a href="https://www.cuchd.in/professional-bodies/index.php">Professional
                                Bodies</a>
                            </li>
                            <li><a href="https://www.cuchd.in/professors-of-practice/index.php">Professors
                                of
                                Practice</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-7 hidden xl:block lazy-bg" style={{background: 'url("/header-footer/lazy-about-dd-image.webp")', margin: '-20px -20px -20px 20px', backgroundSize: 'cover'}} data-bg="/header-footer/about-dd-image.webp">
                          <div className="drop-down-graphic relative h-full">
                            <h3>Delivering <span>Innovation Excellence</span> in education</h3>
                            <div className="dd-graphic-cont mt-4">
                              <div className="flex flex-wrap -mx-4 m-0 p-0">
                                <div className="w-1/2 px-4 p-2 py-3 flex">
                                  <div className="dd--title align-self-center mx-auto">
                                    <span>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={44}>
                                        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                                                            .stval {\n                                                                                fill: #FFFFFF;\n                                                                            }\n                                                                        " }} />
                                        <path className="stval" d="M273.8 163h-5.8V93c0-4.5-3-8.5-7.4-9.6 -4.3-1.2-9 0.7-11.2 4.6l-14 23.7c-2.8 4.8-1.2 10.9 3.5 13.7 2.9 1.7 6.3 1.8 9.1 0.6V163h-5.8c-5.5 0-10 4.5-10 10s4.5 10 10 10h31.6c5.5 0 10-4.5 10-10S279.4 163 273.8 163z" />
                                        <path className="stval" d="M157.1 409h-21.7c12.4-12.8 25.8-30.8 25.8-48.9 0-18.6-12.5-31.1-31.1-31.1 -17.1 0-31.1 14-31.1 31.1 0 5.5 4.5 10 10 10s10-4.5 10-10c0-6.1 5-11.1 11.1-11.1 10 0 11.1 6.3 11.1 11.1 0 18.5-28.2 43.5-38.1 50.8 -3.5 2.6-4.9 7.1-3.6 11.2 1.4 4.1 5.2 6.9 9.5 6.9h48.1c5.5 0 10-4.5 10-10S162.6 409 157.1 409z" />
                                        <path className="stval" d="M407.6 359.1c0-16.5-13.4-29.9-29.9-29.9h-17.3c-5.5 0-10 4.5-10 10s4.5 10 10 10h17.3c5.5 0 10 4.5 10 10 0 5-3.7 9.1-8.5 9.8 -0.5 0-1 0-1.5 0h-17.3c-5.5 0-10 4.5-10 10s4.5 10 10 10h7c0.6 0.1 1.1 0.2 1.7 0.2h8.6c0.5 0 1 0 1.5 0 4.8 0.7 8.5 4.8 8.5 9.8 0 5.5-4.5 10-9.9 10h-17.3c-5.5 0-10 4.5-10 10s4.5 10 10 10h17.3c16.5 0 30-13.4 30-29.9 0-7.6-2.9-14.6-7.6-19.9C404.8 373.7 407.6 366.8 407.6 359.1z" />
                                        <path className="stval" d="M462 246h-83c6.3-8.4 10-18.7 10-30v-44.7c0-5.5-4.5-10-10-10s-10 4.5-10 10V216c0 16.5-13.5 30-30 30H173c-16.5 0-30-13.5-30-30V50c0-16.5 13.5-30 30-30h166c16.5 0 30 13.5 30 30v38c0 5.5 4.5 10 10 10s10-4.5 10-10V50c0-27.6-22.4-50-50-50H173c-27.6 0-50 22.4-50 50v166c0 11.3 3.7 21.6 10 30H50c-27.6 0-50 22.4-50 50v166c0 27.6 22.4 50 50 50h166c16.3 0 30.9-7.9 40-20 9.1 12.2 23.7 20 40 20h166c27.6 0 50-22.4 50-50V296C512 268.4 489.6 246 462 246zM246 462c0 16.5-13.5 30-30 30H50c-16.5 0-30-13.5-30-30V296c0-16.5 13.5-30 30-30h166c16.5 0 30 13.5 30 30V462zM256 266c0 0 0 0 0 0h0.1C256 266 256 266 256 266zM492 462c0 16.5-13.5 30-30 30H296c-16.5 0-30-13.5-30-30V296c0-16.5 13.5-30 30-30h166c16.5 0 30 13.5 30 30V462z" />
                                        <path className="stval" d="M386.1 125.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1.1-7.1 2.9c-1.9 1.9-2.9 4.4-2.9 7.1s1.1 5.2 2.9 7.1S376.4 143 379 143s5.2-1.1 7.1-2.9c1.9-1.9 2.9-4.4 2.9-7.1S387.9 127.8 386.1 125.9z" />
                                      </svg>
                                    </span>
                                    Flexible Choice Based Credit System
                                  </div>
                                </div>
                                <div className="w-1/2 px-4 p-2 py-3 flex">
                                  <div className="dd--title align-self-center mx-auto">
                                    <span>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={40}>
                                        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                                                            .stval {\n                                                                                fill: #FFFFFF;\n                                                                            }\n                                                                        " }} />
                                        <rect x="373.3" y="373.3" className="stval" width="42.7" height="21.3" />
                                        <rect x="373.3" y="245.3" className="stval" width="42.7" height="21.3" />
                                        <rect x="85.3" y={64} className="stval" width="106.7" height="21.3" />
                                        <rect x="85.3" y="106.7" className="stval" width="21.3" height="21.3" />
                                        <rect x={128} y="106.7" className="stval" width="21.3" height="21.3" />
                                        <path className="stval" d="M423.5 88.5L338.2 3.1c-2-2-4.7-3.1-7.5-3.1H53.3c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h192v-21.3h-192c-5.9 0-10.7-4.8-10.7-10.7V32c0-5.9 4.8-10.7 10.7-10.7h272.9l79.1 79.1v6.3h21.3V96C426.7 93.2 425.5 90.5 423.5 88.5z" />
                                        <path className="stval" d="M352 85.3c-5.9 0-10.7-4.8-10.7-10.7v-64H320v64c0 17.7 14.3 32 32 32h21.3V85.3H352z" />
                                        <rect x={288} y="426.7" className="stval" width="42.7" height="21.3" />
                                        <path className="stval" d="M339.5 196.8l-21.3-32c-0.6-0.8-1.4-1.6-2.2-2.2 -4.9-3.7-11.8-2.7-15.5 2.2l-21.3 32c-1.2 1.8-1.8 3.8-1.8 5.9v298.7c0 5.9 4.8 10.7 10.7 10.7h42.7c5.9 0 10.7-4.8 10.7-10.7V202.7C341.3 200.6 340.7 198.5 339.5 196.8zM320 490.7h-21.3v-284.8l10.7-16 10.7 16L320 490.7 320 490.7z" />
                                        <path className="stval" d="M469.3 128H384c-11.8 0-21.3 9.6-21.3 21.3v341.3c0 11.8 9.6 21.3 21.3 21.3h85.3c11.8 0 21.3-9.5 21.3-21.3V149.3C490.7 137.6 481.1 128 469.3 128zM469.3 490.7H384V149.3h85.3V490.7z" />
                                        <rect x="373.3" y="309.3" className="stval" width={64} height="21.3" />
                                        <rect x="373.3" y="181.3" className="stval" width={64} height="21.3" />
                                        <rect x="373.3" y="437.3" className="stval" width={64} height="21.3" />
                                        <path className="stval" d="M149.3 160h-42.7c-11.8 0-21.3 9.6-21.3 21.3V224c0 11.8 9.6 21.3 21.3 21.3h42.7c11.8 0 21.3-9.5 21.3-21.3v-42.7C170.7 169.6 161.1 160 149.3 160zM149.3 224h-42.7v-42.7h42.7V224z" />
                                        <path className="stval" d="M149.3 266.7h-42.7c-11.8 0-21.3 9.6-21.3 21.3v42.7c0 11.8 9.6 21.3 21.3 21.3h42.7c11.8 0 21.3-9.5 21.3-21.3V288C170.7 276.2 161.1 266.7 149.3 266.7zM149.3 330.7h-42.7V288h42.7V330.7z" />
                                        <path className="stval" d="M149.3 373.3h-42.7c-11.8 0-21.3 9.6-21.3 21.3v42.7c0 11.8 9.6 21.3 21.3 21.3h42.7c11.8 0 21.3-9.5 21.3-21.3v-42.7C170.7 382.9 161.1 373.3 149.3 373.3zM149.3 437.3h-42.7v-42.7h42.7V437.3z" />
                                        <rect x="202.7" y="170.7" className="stval" width="42.7" height="21.3" />
                                        <rect x="202.7" y="213.3" className="stval" width="53.3" height="21.3" />
                                        <rect x="202.7" y="277.3" className="stval" width="42.7" height="21.3" />
                                        <rect x="202.7" y={320} className="stval" width="53.3" height="21.3" />
                                        <rect x="202.7" y={384} className="stval" width="42.7" height="21.3" />
                                        <rect x="202.7" y="426.7" className="stval" width="53.3" height="21.3" />
                                      </svg>
                                    </span>
                                    70+ <br />Electives
                                  </div>
                                </div>
                                <div className="w-1/2 px-4 p-2 py-3 flex">
                                  <div className="dd--title align-self-center mx-auto">
                                    <span>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={40}>
                                        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                                                            .stval {\n                                                                                fill: #FFFFFF;\n                                                                            }\n                                                                        " }} />
                                        <path className="stval" d="M256 51.2c4.7 0 8.5-3.8 8.5-8.5V8.5c0-4.7-3.8-8.5-8.5-8.5 -4.7 0-8.5 3.8-8.5 8.5v34.1C247.5 47.4 251.3 51.2 256 51.2z" />
                                        <path className="stval" d="M150.5 39.1l17.1 29.6c2.3 4.1 7.5 5.5 11.6 3.2 4.1-2.3 5.5-7.5 3.2-11.6 0 0 0-0.1-0.1-0.1l-17.1-29.5c-2.3-4.1-7.5-5.5-11.6-3.2 -4.1 2.3-5.5 7.5-3.2 11.6C150.4 39 150.5 39.1 150.5 39.1z" />
                                        <path className="stval" d="M81.7 114c0 0 0.1 0 0.1 0.1l29.6 17.1c4.1 2.4 9.3 1 11.7-3 2.4-4.1 1-9.3-3-11.7 0 0-0.1 0-0.1-0.1L90.3 99.3c-4.1-2.4-9.3-1-11.7 3.1C76.2 106.4 77.6 111.6 81.7 114z" />
                                        <path className="stval" d="M102.4 204.8c0-4.7-3.8-8.5-8.5-8.5H59.7c-4.7 0-8.5 3.8-8.5 8.5 0 4.7 3.8 8.5 8.5 8.5h34.1C98.6 213.3 102.4 209.5 102.4 204.8z" />
                                        <path className="stval" d="M111.4 278.4c0 0-0.1 0-0.1 0.1l-29.5 17.1c-4.1 2.3-5.5 7.5-3.2 11.6 2.3 4.1 7.5 5.5 11.6 3.2 0 0 0.1 0 0.1-0.1l29.6-17.1c4.1-2.3 5.5-7.5 3.2-11.6C120.7 277.5 115.5 276.1 111.4 278.4z" />
                                        <path className="stval" d="M430.3 295.6c0 0-0.1 0-0.1-0.1l-29.5-17.1c-4.1-2.4-9.3-1-11.7 3 -2.4 4.1-1 9.3 3 11.7 0 0 0.1 0 0.1 0.1l29.6 17.1c4.1 2.4 9.3 1 11.7-3C435.8 303.2 434.4 298 430.3 295.6z" />
                                        <path className="stval" d="M452.3 196.3h-34.1c-4.7 0-8.5 3.8-8.5 8.5 0 4.7 3.8 8.5 8.5 8.5h34.1c4.7 0 8.5-3.8 8.5-8.5C460.8 200.1 457 196.3 452.3 196.3z" />
                                        <path className="stval" d="M396.4 132.3c1.5 0 3-0.4 4.3-1.1l29.6-17.1c4.1-2.3 5.5-7.5 3.2-11.6 -2.3-4.1-7.5-5.5-11.6-3.2 0 0-0.1 0-0.1 0.1l-29.5 17.1c-4.1 2.4-5.5 7.6-3.1 11.7C390.6 130.6 393.4 132.3 396.4 132.3z" />
                                        <path className="stval" d="M332.8 71.8C332.8 71.8 332.8 71.8 332.8 71.8c4.1 2.4 9.3 1 11.7-3.1 0 0 0 0 0 0l17.1-29.5c2.4-4.1 1-9.3-3-11.7 -4.1-2.4-9.3-1-11.7 3 0 0 0 0.1-0.1 0.1l-17.1 29.6C327.3 64.2 328.7 69.4 332.8 71.8z" />
                                        <path className="stval" d="M273.1 341.3c4.7 0 8.5-3.8 8.5-8.5v-93.9h17.1c18.9 0 34.1-15.3 34.1-34.1s-15.3-34.1-34.1-34.1c-18.8 0-34.1 15.3-34.1 34.1v17.1h-17.1V204.8c0-18.8-15.3-34.1-34.1-34.1s-34.1 15.3-34.1 34.1 15.3 34.1 34.1 34.1h17.1v93.9c0 4.7 3.8 8.5 8.5 8.5 4.7 0 8.5-3.8 8.5-8.5v-93.9h17.1v93.9C264.5 337.5 268.4 341.3 273.1 341.3zM281.6 204.8c0-9.4 7.6-17.1 17.1-17.1 9.4 0 17.1 7.6 17.1 17.1 0 9.4-7.6 17.1-17.1 17.1H281.6V204.8zM230.4 221.9h-17.1c-9.4 0-17.1-7.6-17.1-17.1 0-9.4 7.6-17.1 17.1-17.1s17.1 7.6 17.1 17.1V221.9z" />
                                        <path className="stval" d="M262.6 68.4c-75.3-3.6-139.3 54.5-142.9 129.8 -2.1 43.1 16.4 84.7 49.8 112.1 6 4.7 9.6 11.9 9.7 19.5v20c0 10.8 6.9 20.4 17.1 24V384c0 6.3 2.4 12.4 6.7 17.1 -8.9 9.7-8.9 24.5 0 34.1 -9.5 10.4-8.7 26.5 1.7 36 4.7 4.3 10.9 6.7 17.3 6.7 4.6 0.1 8.4-3.5 8.5-8.1 0.1-1.8-0.5-3.5-1.5-5 -0.3-0.5-0.6-1-1-1.5 -0.7-0.6-1.5-1.2-2.4-1.5 -0.2-0.1-0.5-0.2-0.7-0.3 -0.9-0.3-1.8-0.5-2.7-0.5 -0.1 0-0.2 0-0.2 0 -4.7 0-8.5-3.8-8.5-8.5 0-4.7 3.8-8.5 8.5-8.5H256c4.7 0 8.5-3.8 8.5-8.5 0-4.7-3.8-8.5-8.5-8.5h-34.1c-4.7 0-8.5-3.8-8.5-8.5 0-4.7 3.8-8.5 8.5-8.5H256c4.7 0 8.5-3.8 8.5-8.5 0-4.7-3.8-8.5-8.5-8.5h-34.1c-4.7 0-8.5-3.8-8.5-8.5v-8.5H256c4.7 0 8.5-3.8 8.5-8.5 0-4.7-3.8-8.5-8.5-8.5h-51.2c-4.7 0-8.5-3.8-8.5-8.5v-20c-0.1-12.8-6-24.8-16-32.7 -51-41.9-58.3-117.2-16.4-168.1 24-29.2 60.3-45.3 98-43.5 63.1 3.8 112.6 55.4 113.7 118.6 0.3 36.3-16 70.8-44.3 93.6 -9.9 8.2-15.6 20.4-15.4 33.2v19c0 4.7-3.8 8.5-8.5 8.5h-25.6c-4.7 0-8.5 3.8-8.5 8.5 0 4.7 3.8 8.5 8.5 8.5h17.1V384c0 4.7-3.8 8.5-8.5 8.5h-8.5c-4.7 0-8.5 3.8-8.5 8.5 0 4.7 3.8 8.5 8.5 8.5h8.5c4.7 0 8.5 3.8 8.5 8.5 0 4.7-3.8 8.5-8.5 8.5h-8.5c-4.7 0-8.5 3.8-8.5 8.5 0 4.7 3.8 8.5 8.5 8.5h8.5c4.7 0 8.5 3.8 8.5 8.5 0 4.7-3.8 8.5-8.5 8.5h-42.7c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h32.7c-4.7 13.3-19.3 20.3-32.7 15.6 -4.1-1.4-7.7-3.9-10.6-7.1 -3.1-3.5-8.5-3.8-12-0.7 -3.5 3.1-3.8 8.5-0.7 12.1 15.6 17.6 42.5 19.2 60.1 3.6 7.3-6.4 12.1-15.2 13.7-24.8 13.4-4.2 20.8-18.4 16.6-31.8 -1.1-3.5-3-6.8-5.5-9.6 8.9-9.6 8.9-24.5 0-34.1 4.3-4.7 6.6-10.7 6.7-17.1v-10.1c10.2-3.6 17-13.2 17.1-24v-19c-0.1-7.7 3.2-15 9.1-19.9 32.4-26 51-65.4 50.7-107C391.3 131.8 334.7 72.7 262.6 68.4z" />
                                      </svg>
                                    </span>
                                    Advanced Technologies &amp; Integration
                                  </div>
                                </div>
                                <div className="w-1/2 px-4 p-2 py-3 flex">
                                  <div className="dd--title align-self-center mx-auto">
                                    <span>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={40}>
                                        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                                                            .stval {\n                                                                                fill: #FFFFFF;\n                                                                            }\n                                                                        " }} />
                                        <rect x="117.3" y="437.3" className="stval" width="277.3" height="21.3" />
                                        <path className="stval" d="M309.3 0H202.7C196.8 0 192 4.8 192 10.7v42.7c0 5.9 4.8 10.7 10.7 10.7h106.7c5.9 0 10.7-4.8 10.7-10.7V10.7C320 4.8 315.2 0 309.3 0zM298.7 42.7h-85.3V21.3h85.3V42.7z" />
                                        <path className="stval" d="M501.3 42.7H10.7C4.8 42.7 0 47.4 0 53.3V96c0 5.9 4.8 10.7 10.7 10.7H192V85.3H21.3V64h469.3v21.3H320v21.3h181.3c5.9 0 10.7-4.8 10.7-10.7V53.3C512 47.4 507.2 42.7 501.3 42.7z" />
                                        <path className="stval" d="M469.3 128v245.3h-74.7c-5.9 0-10.7 4.8-10.7 10.7v117.3c0 5.9 4.8 10.7 10.7 10.7h42.7c5.9 0 10.7-4.8 10.7-10.7V394.7h21.3c11.8 0 21.3-9.5 21.3-21.3V128H469.3zM426.7 490.7h-21.3v-96h21.3V490.7z" />
                                        <path className="stval" d="M117.3 373.3H42.7V128H21.3v245.3c0 11.8 9.6 21.3 21.3 21.3H64v106.7c0 5.9 4.8 10.7 10.7 10.7h42.7c5.9 0 10.7-4.8 10.7-10.7V384C128 378.1 123.2 373.3 117.3 373.3zM106.7 490.7H85.3v-96h21.3L106.7 490.7 106.7 490.7z" />
                                        <path className="stval" d="M341.3 352H170.7c-5.9 0-10.7 4.8-10.7 10.7v42.7c0 5.9 4.8 10.7 10.7 10.7h170.7c5.9 0 10.7-4.8 10.7-10.7v-42.7C352 356.8 347.2 352 341.3 352zM330.7 394.7H181.3v-21.3h149.3L330.7 394.7 330.7 394.7z" />
                                        <rect x="117.3" y="373.3" className="stval" width="53.3" height="21.3" />
                                        <rect x="341.3" y="373.3" className="stval" width="53.3" height="21.3" />
                                        <polygon className="stval" points="41.6 270.9 41.6 249.6 -23.2 249.6 -23.2 184.8 -44.5 184.8 -44.5 249.6 -109.3 249.6 -109.3 270.9 -44.5 270.9 -44.5 335.7 -23.2 335.7 -23.2 270.9 " />
                                        <rect x="325.3" y="159.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -41.1191 295.3819)" className="stval" width="21.3" height="75.4" />
                                        <path className="stval" d="M408.5 163.1l-53.3 53.3c-2 2-3.1 4.7-3.1 7.5v64h21.3v-59.6l50.2-50.2L408.5 163.1z" />
                                        <rect x="245.3" y="181.3" className="stval" width="21.3" height="85.3" />
                                        <rect x="213.3" y="213.3" className="stval" width="85.3" height="21.3" />
                                      </svg>
                                    </span>
                                    Project based &amp; Experiential Learning
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dd-menu-lg">
                    <a href="https://www.cuchd.in/admissions/" className="mob-void">admissions</a>
                    <div className="step-second-menu st-admissions">
                      <div className="flex flex-wrap -mx-4">
                        <div className="col-sm-6 col-xl-4">
                          <h4>Job Oriented Programs</h4>
                          <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-full px-4">
                              <ul className="list-none p-0 m-0">
                                <li><a href="https://www.cuchd.in/admissions/after12th.php">After
                                    12th</a>
                                </li>
                                <li><a href="https://www.cuchd.in/admissions/aftergraduation.php">After
                                    Graduation</a>
                                </li>
                                <li><a href="https://www.cuchd.in/admissions/LEET-programs.php">Leet
                                    Programs</a>
                                </li>
                                <li><a href="https://www.cuchd.in/admissions/specialized-programs.php">Specialized
                                    Programs</a>
                                </li>
                                <li><a href="https://www.cuchd.in/admissions/integrated-programs.php">Integrated
                                    Programs</a>
                                </li>
                                <li><a href="https://www.cuchd.in/admissions/afterpostgraduation.php">After
                                    Post Graduation</a>
                                </li>
                                <li><a href="https://www.cuchd.in/admissions/cu-advantages.php">CU
                                    Advantages</a>
                                </li>
                                <li><a href="https://www.cuchd.in/abet/">ABET Engineering
                                    Accreditation</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-8">
                          <h4>Admission</h4>
                          <div className="flex flex-wrap -mx-4">
                            <div className="col-xl-6">
                              <ul className="list-none p-0 m-0">
                                <li><a href="https://www.cuchd.in/admissions/">Overview</a></li>
                                <li><a href="https://www.cuchd.in/admissions/course-fee.php">Course
                                    Fee</a>
                                </li>
                                <li><a href="https://www.cuchd.in/admissions/how-to-apply.php">How
                                    to
                                    Apply?</a>
                                </li>
                                <li><a href="https://www.cuchd.in/admissions/admission-criteria.php">Admission
                                    Criteria</a>
                                </li>
                                <li><a href="https://www.cuchd.in/scholarship/">CU
                                    Scholarship</a>
                                </li>
                                <li><a href="https://www.cuchd.in/admissions/education-loan.php">Education
                                    Loan</a>
                                </li>
                                <li><a href="https://www.cuchd.in/student-services/hostel-facility.php">Hostel
                                    Fee</a>
                                </li>
                                <li><a href="https://www.cuchd.in/orientation-schedule-2026/">Orientation Schedule 2026</a></li>
                              </ul>
                            </div>
                            <div className="col-xl-6">
                              <ul className="list-none p-0 m-0">
                                <li><a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" target="_blank">National Admissions</a></li>
                                <li><a href="https://www.cuchd.in/international/international.php">International
                                    Admissions</a>
                                </li>
                                <li><a href="https://www.cuchd.in/contact/index.php#ad-off">Admission
                                    Offices</a>
                                </li>
                                <li><a href="https://www.cuchd.in/contact/">Visit the Campus</a>
                                </li>
                                <li><a href="https://www.cuchd.in/migration/">Migration
                                    Policy</a>
                                </li>
                                <li><a href="https://www.cuchd.in/refund/">Refund Policy</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden xl:block" style={{margin: '65px -20px 0 -20px'}}>
                        <div className="redbox-applynow relative seagreen-overlay-faded lazy-bg" style={{backgroundImage: 'url(header-footer/lazy-unique3-bg.webp)'}} data-bg="/header-footer/unique3-bg.webp">
                          <div className="relative">
                            <h3>Unlock your Career Goals</h3>
                            <div className="flex flex-wrap -mx-4 m-0 p-0">
                              <div className="col-4 p-2 py-3 flex">
                                <div className="dd--title align-self-center mx-auto">
                                  <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" width={44}>
                                      <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                                                        .stval {\n                                                                            fill: #FFFFFF;\n                                                                        }\n                                                                    " }} />
                                      <path className="stval" d="M441.9 280.3c-1.1-0.3-2.2-0.3-3.4-0.1l-78.6 14.3v-38.4c0-4.4-3.6-8-8-8h-48c-2.1 0-4.2 0.8-5.7 2.3l-29.7 29.7h-49.4l-29.7-29.7c-1.5-1.5-3.5-2.3-5.7-2.3h-48c-4.4 0-8 3.6-8 8v38.1l-75.5-16.5c-3-0.9-6-1.5-9.1-2 -4.4-0.6-8.4 2.4-9.1 6.7 -0.6 4.2 2.1 8.1 6.2 9l8 1.8c9.8 3 18.4 9.1 24.6 17.3 2.3 3.1 4.2 6.5 5.7 10l-29.3-5.9c-2.3-1-4.8-1.7-7.3-2.1 -20.2-2.9-38.9 11.1-41.8 31.3 0 0 0 0 0 0.1 -3.4 24.2 13.4 46.5 37.5 50 2.5 0.4 5 0.5 7.6 0.5 1.1 0 2.1-0.2 3.2-0.3v0.3l87-8 -37.6 40.3c-3 3.2-2.8 8.3 0.4 11.3 1.5 1.4 3.5 2.2 5.5 2.2h24v24c0 4.4 3.6 8 8 8 2.1 0 4.2-0.8 5.7-2.3l77.7-77.7h49.4l77.7 77.7c1.5 1.5 3.5 2.3 5.7 2.3 1.1 0 2.1-0.2 3.1-0.6 3-1.2 4.9-4.2 4.9-7.4v-24h24c4.4 0 8-3.6 8-8 0-2-0.8-4-2.2-5.5l-38.1-40.8 87.7 6.3c0.2 0 0.4 0 0.6 0 0.7 0 1.3-0.1 1.9-0.2 13.2-3.3 38.1-19.2 38.1-55.8S455.1 283.5 441.9 280.3zM35.2 346.6L35.2 346.6c0.3-1.9 1.9-3.3 3.8-3.3 0.2 0 0.4 0 0.5 0l2.1-14.8c7.5 2 12.3 9.2 11.2 16.9 -0.8 5.8-6.1 9.8-11.9 8.9C37.2 353.8 34.6 350.4 35.2 346.6zM82.4 346.3c-2.9 20.4-21.8 34.5-42.1 31.6h0c-15.4-2.2-26.1-16.5-23.9-31.9 1.2-8.3 7.2-15 15.2-17.3 -6.5 2.7-11.2 8.6-12.2 15.6 -1.8 12.5 6.9 24 19.4 25.8 14.5 2.1 27.9-8 30-22.5 0 0 0 0 0 0 0.6-4.4 0.3-9-1-13.3l15.1 3C82.9 340.4 82.8 343.4 82.4 346.3zM86.7 374.7c6.1-7.5 10.1-16.5 11.5-26.1 2.4-16.7-1.9-33.7-11.9-47.3l41.7 9.1v33.6c0 4.4 3.6 8 8 8h31.7l-15.6 16.7L86.7 374.7zM208 380.7l-64 64v-12.7c0-4.4-3.6-8-8-8h-13.6l37.3-39.9 1.1-0.1 -0.1-0.9 47.4-50.8V380.7zM208 308.7l-27.3 27.3h-36.7v-72h36.7l27.3 27.3V308.7zM264 312v64h-40v-80h40V312zM280 291.3l27.3-27.3h36.7v72h-36.7l-27.3-27.3V291.3zM365.6 424h-13.6c-4.4 0-8 3.6-8 8v12.7l-64-64v-48.4l47.5 50.9 -0.1 0.8 0.9 0.1L365.6 424zM439.1 375.9l-103.4-7.4 -15.4-16.5H352c4.4 0 8-3.6 8-8v-33.3l79.5-14.4c5.4 2 24.5 11 24.5 39.8C464 365.5 444 374.2 439.1 375.9z" />
                                      <path className="stval" d="M69.5 79.6L69.5 79.6l66.5 22.2v74.2c0 1 0.2 2 0.6 3 0.7 1.8 19 45 103.4 45v-16c-66 0-84.7-27.7-88-33.8v-67.1l85.5 28.5c1.6 0.6 3.4 0.6 5.1 0l37.5-12.5v6.4c-9 3.2-15.2 11.4-15.8 21l-16 80 15.7 3.1 12.2-60.9c1.3 0.7 2.6 1.4 4 1.9v57.5h16v-57.5c1.4-0.5 2.7-1.1 4-1.9l12.2 60.9 15.7-3.1 -16-80c-0.6-9.5-6.8-17.8-15.8-21v-11.7l32-10.7v74.5c-1.5 2-3.3 3.8-5.2 5.4l10.4 12.2c4-3.2 7.4-7.1 10-11.6 0.5-1.1 0.8-2.3 0.8-3.6v-82.2l66.5-22.2c4.2-1.4 6.5-5.9 5.1-10.1 -0.8-2.4-2.7-4.3-5.1-5.1l-168-56c-1.6-0.5-3.4-0.5-5.1 0l-168 56c-4.2 1.4-6.5 5.9-5.1 10.1C65.2 76.9 67.1 78.8 69.5 79.6zM288 160c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8S292.4 160 288 160zM240 24.4l142.7 47.6 -87.3 29.1c-0.6-1.6-1.8-3-3.3-4l-29.4-17.7c0.8-2.4 1.3-4.9 1.3-7.5 0-13.3-10.7-24-24-24s-24 10.7-24 24 10.7 24 24 24c4.5 0 9-1.3 12.8-3.8l24.7 14.8 -37.5 12.5L97.3 72 240 24.4zM248 72c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8S248 67.6 248 72z" />
                                    </svg>
                                  </span>
                                  Scholarships
                                </div>
                              </div>
                              <div className="col-4 p-2 py-3 flex">
                                <div className="dd--title align-self-center mx-auto">
                                  <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={44}>
                                      <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                                                        .stval {\n                                                                            fill: #FFFFFF;\n                                                                        }\n                                                                    " }} />
                                      <path className="stval" d="M447.2 304.9l-85.6 60.7C359 346.1 342.2 331 322 331h-10.3c-41.3 0-81.1-10.3-128.2-25.8 -8.5-2.8-17.5-4.2-26.5-4.2 -25.3 0-48.6 10.9-64.8 30H10c-5.5 0-10 4.5-10 10v90c0 5.5 4.5 10 10 10 36.7 0 73 10.3 111.4 21.2 41.1 11.7 83.7 23.8 129.7 23.8 86.1 0 127.7-23.9 245.9-118.4 17.3-13.8 20.1-39 6.2-56.2C489.5 294.2 464.5 291.3 447.2 304.9L447.2 304.9zM484.5 351.9C364.6 447.9 327.5 466 251.1 466c-43.2 0-84.4-11.7-124.2-23 -36.4-10.3-71-20.2-106.9-21.8V351h77c3.1 0 6.1-1.5 8-4 12.4-16.5 31.4-26 52-26 6.9 0 13.8 1.1 20.3 3.2 48.9 16.1 90.5 26.8 134.4 26.8H322c11 0 20 9 20 20 0 10.9-8.7 20-20 20H200.5c-5.5 0-10 4.5-10 10s4.5 10 10 10H322c12 0 23.5-5.5 31-14.8 110.7-78.5 106-75.2 106.5-75.5 8.6-6.9 21.2-5.5 28.1 3.1C494.5 332.4 493.1 345 484.5 351.9z">
                                      </path>
                                      <circle className="stval" cx={342} cy={276} r={10}>
                                      </circle>
                                      <path className="stval" d="M392 76c0-27.6-22.4-50-50-50 -27.6 0-50 22.4-50 50s22.4 50 50 50C369.6 126 392 103.6 392 76zM342 106c-16.5 0-30-13.5-30-30s13.5-30 30-30c16.5 0 30 13.5 30 30S358.5 106 342 106z">
                                      </path>
                                      <path className="stval" d="M252 216v60c0 5.5 4.5 10 10 10h35c5.5 0 10-4.5 10-10s-4.5-10-10-10h-25v-50c0-38.6 31.4-70 70-70s70 31.4 70 70v50h-25c-5.5 0-10 4.5-10 10s4.5 10 10 10h35c5.5 0 10-4.5 10-10v-60c0-49.6-40.4-90-90-90S252 166.4 252 216L252 216z">
                                      </path>
                                    </svg>
                                  </span>
                                  Education Loan
                                </div>
                              </div>
                              <div className="col-4 p-2 py-3 flex">
                                <div className="dd--title align-self-center mx-auto">
                                  <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={40}>
                                      <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                                                        .stval {\n                                                                            fill: #FFFFFF;\n                                                                        }\n                                                                    " }} />
                                      <path className="stval" d="M190 411.9H60c-5.5 0-10 4.5-10 10s4.5 10 10 10h130c5.5 0 10-4.5 10-10S195.5 411.9 190 411.9z" />
                                      <path className="stval" d="M60 390.4h65c5.5 0 10-4.5 10-10s-4.5-10-10-10H60c-5.5 0-10 4.5-10 10S54.5 390.4 60 390.4z" />
                                      <path className="stval" d="M190 329H60c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10h130c5.5 0 10-4.5 10-10C200 333.4 195.5 329 190 329z" />
                                      <path className="stval" d="M60 307.5h65c5.5 0 10-4.5 10-10 0-5.5-4.5-10-10-10H60c-5.5 0-10 4.5-10 10C50 303 54.5 307.5 60 307.5z" />
                                      <path className="stval" d="M190 246H60c-5.5 0-10 4.5-10 10s4.5 10 10 10h130c5.5 0 10-4.5 10-10S195.5 246 190 246L190 246z" />
                                      <path className="stval" d="M60 224.5h65c5.5 0 10-4.5 10-10 0-5.5-4.5-10-10-10H60c-5.5 0-10 4.5-10 10C50 220.1 54.5 224.5 60 224.5z" />
                                      <path className="stval" d="M190 163.1H105c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10H190c5.5 0 10-4.5 10-10C200 167.5 195.5 163.1 190 163.1z" />
                                      <path className="stval" d="M135 131.6c0-5.5-4.5-10-10-10H60c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10h65C130.5 141.6 135 137.1 135 131.6z" />
                                      <path className="stval" d="M190 80.1H60c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10h130c5.5 0 10-4.5 10-10C200 84.6 195.5 80.1 190 80.1z" />
                                      <path className="stval" d="M261.5 138.6c2 2 4.5 2.9 7.1 2.9s5.1-1 7.1-2.9l41.5-41.5c3.9-3.9 3.9-10.2 0-14.1 -3.9-3.9-10.2-3.9-14.1 0l-34.4 34.4 -13.7-13.7c-3.9-3.9-10.2-3.9-14.1 0 -3.9 3.9-3.9 10.2 0 14.1L261.5 138.6z" />
                                      <path className="stval" d="M506 186.9l-13.2-13.2c-3.9-3.9-9.1-6-14.6-6 -5.5 0-10.7 2.2-14.6 6l-27 27c-3.9-2.4-9-1.9-12.4 1.4 -3.4 3.4-3.8 8.5-1.4 12.4L360 277.3V46c0-11-9-20-20-20H20C9 26 0 35 0 46v420c0 11 9 20 20 20h320c11 0 20-9 20-20V362.1l105.2-105.2c1.6 1 3.5 1.5 5.3 1.5 2.6 0 5.1-1 7.1-2.9 3.4-3.4 3.8-8.5 1.4-12.4l27-27C514 208.1 514 195 506 186.9L506 186.9zM299.3 394.5l-23.6 9.4 9.4-23.6 151.6-151.6 14.1 14.1L299.3 394.5zM340 466H20V46h320v251.2l-70.4 70.5c-1 1-1.7 2.1-2.2 3.4l-18.9 47.1c-1.5 3.7-0.6 8 2.2 10.8 1.9 1.9 4.5 2.9 7.1 2.9 1.3 0 2.5-0.2 3.7-0.7l47.1-18.9c1.3-0.5 2.4-1.3 3.4-2.2L340 382.1V466zM491.8 202l-26.8 26.8 -14.1-14.1 26.8-26.8c0.2-0.2 0.7-0.2 0.9 0l13.2 13.2C492.1 201.3 492.1 201.8 491.8 202z" />
                                      <path className="stval" d="M261.5 221.6c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l41.5-41.5c3.9-3.9 3.9-10.2 0-14.1 -3.9-3.9-10.2-3.9-14.1 0l-34.4 34.4 -13.7-13.7c-3.9-3.9-10.2-3.9-14.1 0 -3.9 3.9-3.9 10.2 0 14.1L261.5 221.6z" />
                                      <path className="stval" d="M268.5 307.5c2.6 0 5.1-1 7.1-2.9l41.5-41.5c3.9-3.9 3.9-10.2 0-14.1 -3.9-3.9-10.2-3.9-14.1 0l-34.4 34.4 -13.7-13.7c-3.9-3.9-10.2-3.9-14.1 0 -3.9 3.9-3.9 10.2 0 14.1l20.7 20.7C263.4 306.5 266 307.5 268.5 307.5L268.5 307.5z" />
                                      <path className="stval" d="M60 163.1c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10s10-4.5 10-10C70 167.5 65.5 163.1 60 163.1L60 163.1z" />
                                    </svg>
                                  </span>
                                  CUCET
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dd-menu-lg">
                    <a href="https://www.cuchd.in/campus-life/" className="mob-void">campus life</a>
                    <div className="step-second-menu st-campus">
                      <div className="hidden xl:block" style={{margin: '-20px -20px 15px -20px'}}>
                        <div className="redbox-applynow relative seagreen-overlay-faded lazy-bg" style={{backgroundImage: 'url(header-footer/lazy-campus-bg.webp)'}} data-bg="/header-footer/campus-bg.webp">
                          <div className="relative">
                            <h3>A Home away from Home</h3>
                            <div className="flex flex-wrap -mx-4 m-0 p-0">
                              <div className="col-3 p-2 py-3 flex">
                                <div className="dd--title align-self-center mx-auto">
                                  <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" width={44}>
                                      <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                                                        .stval {\n                                                                            fill: #FFFFFF;\n                                                                        }\n                                                                    " }} />
                                      <path className="stval" d="M441.9 280.3c-1.1-0.3-2.2-0.3-3.4-0.1l-78.6 14.3v-38.4c0-4.4-3.6-8-8-8h-48c-2.1 0-4.2 0.8-5.7 2.3l-29.7 29.7h-49.4l-29.7-29.7c-1.5-1.5-3.5-2.3-5.7-2.3h-48c-4.4 0-8 3.6-8 8v38.1l-75.5-16.5c-3-0.9-6-1.5-9.1-2 -4.4-0.6-8.4 2.4-9.1 6.7 -0.6 4.2 2.1 8.1 6.2 9l8 1.8c9.8 3 18.4 9.1 24.6 17.3 2.3 3.1 4.2 6.5 5.7 10l-29.3-5.9c-2.3-1-4.8-1.7-7.3-2.1 -20.2-2.9-38.9 11.1-41.8 31.3 0 0 0 0 0 0.1 -3.4 24.2 13.4 46.5 37.5 50 2.5 0.4 5 0.5 7.6 0.5 1.1 0 2.1-0.2 3.2-0.3v0.3l87-8 -37.6 40.3c-3 3.2-2.8 8.3 0.4 11.3 1.5 1.4 3.5 2.2 5.5 2.2h24v24c0 4.4 3.6 8 8 8 2.1 0 4.2-0.8 5.7-2.3l77.7-77.7h49.4l77.7 77.7c1.5 1.5 3.5 2.3 5.7 2.3 1.1 0 2.1-0.2 3.1-0.6 3-1.2 4.9-4.2 4.9-7.4v-24h24c4.4 0 8-3.6 8-8 0-2-0.8-4-2.2-5.5l-38.1-40.8 87.7 6.3c0.2 0 0.4 0 0.6 0 0.7 0 1.3-0.1 1.9-0.2 13.2-3.3 38.1-19.2 38.1-55.8S455.1 283.5 441.9 280.3zM35.2 346.6L35.2 346.6c0.3-1.9 1.9-3.3 3.8-3.3 0.2 0 0.4 0 0.5 0l2.1-14.8c7.5 2 12.3 9.2 11.2 16.9 -0.8 5.8-6.1 9.8-11.9 8.9C37.2 353.8 34.6 350.4 35.2 346.6zM82.4 346.3c-2.9 20.4-21.8 34.5-42.1 31.6h0c-15.4-2.2-26.1-16.5-23.9-31.9 1.2-8.3 7.2-15 15.2-17.3 -6.5 2.7-11.2 8.6-12.2 15.6 -1.8 12.5 6.9 24 19.4 25.8 14.5 2.1 27.9-8 30-22.5 0 0 0 0 0 0 0.6-4.4 0.3-9-1-13.3l15.1 3C82.9 340.4 82.8 343.4 82.4 346.3zM86.7 374.7c6.1-7.5 10.1-16.5 11.5-26.1 2.4-16.7-1.9-33.7-11.9-47.3l41.7 9.1v33.6c0 4.4 3.6 8 8 8h31.7l-15.6 16.7L86.7 374.7zM208 380.7l-64 64v-12.7c0-4.4-3.6-8-8-8h-13.6l37.3-39.9 1.1-0.1 -0.1-0.9 47.4-50.8V380.7zM208 308.7l-27.3 27.3h-36.7v-72h36.7l27.3 27.3V308.7zM264 312v64h-40v-80h40V312zM280 291.3l27.3-27.3h36.7v72h-36.7l-27.3-27.3V291.3zM365.6 424h-13.6c-4.4 0-8 3.6-8 8v12.7l-64-64v-48.4l47.5 50.9 -0.1 0.8 0.9 0.1L365.6 424zM439.1 375.9l-103.4-7.4 -15.4-16.5H352c4.4 0 8-3.6 8-8v-33.3l79.5-14.4c5.4 2 24.5 11 24.5 39.8C464 365.5 444 374.2 439.1 375.9z" />
                                      <path className="stval" d="M69.5 79.6L69.5 79.6l66.5 22.2v74.2c0 1 0.2 2 0.6 3 0.7 1.8 19 45 103.4 45v-16c-66 0-84.7-27.7-88-33.8v-67.1l85.5 28.5c1.6 0.6 3.4 0.6 5.1 0l37.5-12.5v6.4c-9 3.2-15.2 11.4-15.8 21l-16 80 15.7 3.1 12.2-60.9c1.3 0.7 2.6 1.4 4 1.9v57.5h16v-57.5c1.4-0.5 2.7-1.1 4-1.9l12.2 60.9 15.7-3.1 -16-80c-0.6-9.5-6.8-17.8-15.8-21v-11.7l32-10.7v74.5c-1.5 2-3.3 3.8-5.2 5.4l10.4 12.2c4-3.2 7.4-7.1 10-11.6 0.5-1.1 0.8-2.3 0.8-3.6v-82.2l66.5-22.2c4.2-1.4 6.5-5.9 5.1-10.1 -0.8-2.4-2.7-4.3-5.1-5.1l-168-56c-1.6-0.5-3.4-0.5-5.1 0l-168 56c-4.2 1.4-6.5 5.9-5.1 10.1C65.2 76.9 67.1 78.8 69.5 79.6zM288 160c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8S292.4 160 288 160zM240 24.4l142.7 47.6 -87.3 29.1c-0.6-1.6-1.8-3-3.3-4l-29.4-17.7c0.8-2.4 1.3-4.9 1.3-7.5 0-13.3-10.7-24-24-24s-24 10.7-24 24 10.7 24 24 24c4.5 0 9-1.3 12.8-3.8l24.7 14.8 -37.5 12.5L97.3 72 240 24.4zM248 72c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8S248 67.6 248 72z" />
                                    </svg>
                                  </span>
                                  Youth Festivals &amp; Summits
                                </div>
                              </div>
                              <div className="col-3 p-2 py-3 flex">
                                <div className="dd--title align-self-center mx-auto">
                                  <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={40}>
                                      <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                                                        .stval {\n                                                                            fill: #FFFFFF;\n                                                                        }\n                                                                    " }} />
                                      <path className="stval" d="M85.1 454.9C83.2 453.1 80.6 452 78 452s-5.2 1.1-7.1 2.9S68 459.4 68 462s1.1 5.2 2.9 7.1c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1.1 7.1-2.9c1.9-1.9 2.9-4.4 2.9-7.1S86.9 456.8 85.1 454.9z" />
                                      <path className="stval" d="M469.5 182.9c-1.9-1.9-4.4-2.9-7.1-2.9 -2.6 0-5.2 1.1-7.1 2.9 -1.9 1.9-2.9 4.4-2.9 7.1s1.1 5.2 2.9 7.1c1.9 1.9 4.4 2.9 7.1 2.9 2.6 0 5.2-1.1 7.1-2.9 1.9-1.9 2.9-4.4 2.9-7.1S471.4 184.8 469.5 182.9z" />
                                      <path className="stval" d="M509.1 2.9C507.2 1.1 504.6 0 502 0L256 0c-5.5 0-10 4.5-10 10v28.6l-94.8 25.4c-5.3 1.4-8.5 6.9-7.1 12.3l49.1 183.3 -42.5 42.5C145.4 294.2 136.3 289 126 289h-96c-16.5 0-30 13.5-30 30v163c0 16.5 13.5 30 30 30h96c14.1 0 25.9-9.7 29.1-22.8l11.9 10.4c9.2 8 20.9 12.4 33.1 12.4h301.9c5.5 0 10-4.5 10-10V10C512 7.4 510.9 4.8 509.1 2.9zM136 482c0 5.5-4.5 10-10 10H30c-5.5 0-10-4.5-10-10v-163c0-5.5 4.5-10 10-10h38v115.2c0 5.5 4.5 10 10 10s10-4.5 10-10v-115.2h38c5.5 0 10 4.5 10 10L136 482 136 482zM166 80.7L246 59.3v37.1l-6.7 1.8c-2.6 0.7-4.7 2.4-6.1 4.7s-1.7 5-1 7.6c3.8 14.3-4.7 29.1-19 33 -2.6 0.7-4.7 2.4-6.1 4.7 -1.3 2.3-1.7 5-1 7.6l39 144.3h-20.1l-10.3-40.5c-0.3-1.3-0.9-2.5-1.7-3.5L166 80.7zM246 142.2v84.4l-18.2-67.5C235.4 155.1 241.6 149.3 246 142.2zM389.7 492H200.1l0 0c-7.3 0-14.4-2.7-20-7.5L156 463.5V325.2l43.7-43.7 7.9 31c1.1 4.4 5.1 7.5 9.7 7.5l196.6 0c7.7 0 14 6.3 14 14s-6.3 14-14 14H313.1c-5.5 0-10 4.5-10 10s4.5 10 10 10h132c7.7 0 14 6.3 14 14s-6.3 14-14 14H313.1c-5.5 0-10 4.5-10 10s4.5 10 10 10h110.6c7.7 0 14 6.3 14 14s-6.3 14-14 14H313.1c-5.5 0-10 4.5-10 10s4.5 10 10 10h76.5c7.7 0 14 6.3 14 14C403.7 485.7 397.4 492 389.7 492zM492 492L492 492h-71.4c1.9-4.3 3-9 3-14s-1.1-9.7-3-14h3.1c18.8 0 34-15.2 34-34 0-5.5-1.3-10.6-3.6-15.2 14.4-3.9 25-17.1 25-32.8 0-7.6-2.5-14.6-6.7-20.3V235c0-5.5-4.5-10-10-10s-10 4.5-10 10V348.8c-2.3-0.5-4.8-0.8-7.3-0.8h-0.3c1.9-4.3 3-9 3-14 0-18.7-15.2-34-34-34h-16.1c17.1-7.3 29.1-24.3 29.1-44 0-26.4-21.5-47.9-47.9-47.9 -26.4 0-47.9 21.5-47.9 47.9 0 19.7 12 36.7 29.1 44h-54.7V109.9c17.9-3.9 32-18 35.9-35.8h75.2c3.9 17.9 18 32 35.9 35.9v31.1c0 5.5 4.5 10 10 10s10-4.5 10-10v-40c0-5.5-4.5-10-10-10 -14.8 0-26.9-12.1-26.9-26.9 0-5.5-4.5-10-10-10h-93.1c-5.5 0-10 4.5-10 10 0 14.9-12.1 26.9-26.9 26.9 -5.5 0-10 4.5-10 10V300H266V20L492 20V492zM379 283.9c-15.4 0-27.9-12.5-27.9-27.9s12.5-27.9 27.9-27.9 27.9 12.5 27.9 27.9S394.4 283.9 379 283.9z" />
                                    </svg>
                                  </span>
                                  Culturally Diverse
                                </div>
                              </div>
                              <div className="col-3 p-2 py-3 flex">
                                <div className="dd--title align-self-center mx-auto">
                                  <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={44}>
                                      <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                                                        .stval {\n                                                                            fill: #FFFFFF;\n                                                                        }\n                                                                    " }} />
                                      <path className="stval" d="M447.2 304.9l-85.6 60.7C359 346.1 342.2 331 322 331h-10.3c-41.3 0-81.1-10.3-128.2-25.8 -8.5-2.8-17.5-4.2-26.5-4.2 -25.3 0-48.6 10.9-64.8 30H10c-5.5 0-10 4.5-10 10v90c0 5.5 4.5 10 10 10 36.7 0 73 10.3 111.4 21.2 41.1 11.7 83.7 23.8 129.7 23.8 86.1 0 127.7-23.9 245.9-118.4 17.3-13.8 20.1-39 6.2-56.2C489.5 294.2 464.5 291.3 447.2 304.9L447.2 304.9zM484.5 351.9C364.6 447.9 327.5 466 251.1 466c-43.2 0-84.4-11.7-124.2-23 -36.4-10.3-71-20.2-106.9-21.8V351h77c3.1 0 6.1-1.5 8-4 12.4-16.5 31.4-26 52-26 6.9 0 13.8 1.1 20.3 3.2 48.9 16.1 90.5 26.8 134.4 26.8H322c11 0 20 9 20 20 0 10.9-8.7 20-20 20H200.5c-5.5 0-10 4.5-10 10s4.5 10 10 10H322c12 0 23.5-5.5 31-14.8 110.7-78.5 106-75.2 106.5-75.5 8.6-6.9 21.2-5.5 28.1 3.1C494.5 332.4 493.1 345 484.5 351.9z">
                                      </path>
                                      <circle className="stval" cx={342} cy={276} r={10}>
                                      </circle>
                                      <path className="stval" d="M392 76c0-27.6-22.4-50-50-50 -27.6 0-50 22.4-50 50s22.4 50 50 50C369.6 126 392 103.6 392 76zM342 106c-16.5 0-30-13.5-30-30s13.5-30 30-30c16.5 0 30 13.5 30 30S358.5 106 342 106z">
                                      </path>
                                      <path className="stval" d="M252 216v60c0 5.5 4.5 10 10 10h35c5.5 0 10-4.5 10-10s-4.5-10-10-10h-25v-50c0-38.6 31.4-70 70-70s70 31.4 70 70v50h-25c-5.5 0-10 4.5-10 10s4.5 10 10 10h35c5.5 0 10-4.5 10-10v-60c0-49.6-40.4-90-90-90S252 166.4 252 216L252 216z">
                                      </path>
                                    </svg>
                                  </span>
                                  Student-Friendly
                                </div>
                              </div>
                              <div className="col-3 p-2 py-3 flex">
                                <div className="dd--title align-self-center mx-auto">
                                  <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={40}>
                                      <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                                                        .stval {\n                                                                            fill: #FFFFFF;\n                                                                        }\n                                                                    " }} />
                                      <path className="stval" d="M190 411.9H60c-5.5 0-10 4.5-10 10s4.5 10 10 10h130c5.5 0 10-4.5 10-10S195.5 411.9 190 411.9z" />
                                      <path className="stval" d="M60 390.4h65c5.5 0 10-4.5 10-10s-4.5-10-10-10H60c-5.5 0-10 4.5-10 10S54.5 390.4 60 390.4z" />
                                      <path className="stval" d="M190 329H60c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10h130c5.5 0 10-4.5 10-10C200 333.4 195.5 329 190 329z" />
                                      <path className="stval" d="M60 307.5h65c5.5 0 10-4.5 10-10 0-5.5-4.5-10-10-10H60c-5.5 0-10 4.5-10 10C50 303 54.5 307.5 60 307.5z" />
                                      <path className="stval" d="M190 246H60c-5.5 0-10 4.5-10 10s4.5 10 10 10h130c5.5 0 10-4.5 10-10S195.5 246 190 246L190 246z" />
                                      <path className="stval" d="M60 224.5h65c5.5 0 10-4.5 10-10 0-5.5-4.5-10-10-10H60c-5.5 0-10 4.5-10 10C50 220.1 54.5 224.5 60 224.5z" />
                                      <path className="stval" d="M190 163.1H105c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10H190c5.5 0 10-4.5 10-10C200 167.5 195.5 163.1 190 163.1z" />
                                      <path className="stval" d="M135 131.6c0-5.5-4.5-10-10-10H60c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10h65C130.5 141.6 135 137.1 135 131.6z" />
                                      <path className="stval" d="M190 80.1H60c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10h130c5.5 0 10-4.5 10-10C200 84.6 195.5 80.1 190 80.1z" />
                                      <path className="stval" d="M261.5 138.6c2 2 4.5 2.9 7.1 2.9s5.1-1 7.1-2.9l41.5-41.5c3.9-3.9 3.9-10.2 0-14.1 -3.9-3.9-10.2-3.9-14.1 0l-34.4 34.4 -13.7-13.7c-3.9-3.9-10.2-3.9-14.1 0 -3.9 3.9-3.9 10.2 0 14.1L261.5 138.6z" />
                                      <path className="stval" d="M506 186.9l-13.2-13.2c-3.9-3.9-9.1-6-14.6-6 -5.5 0-10.7 2.2-14.6 6l-27 27c-3.9-2.4-9-1.9-12.4 1.4 -3.4 3.4-3.8 8.5-1.4 12.4L360 277.3V46c0-11-9-20-20-20H20C9 26 0 35 0 46v420c0 11 9 20 20 20h320c11 0 20-9 20-20V362.1l105.2-105.2c1.6 1 3.5 1.5 5.3 1.5 2.6 0 5.1-1 7.1-2.9 3.4-3.4 3.8-8.5 1.4-12.4l27-27C514 208.1 514 195 506 186.9L506 186.9zM299.3 394.5l-23.6 9.4 9.4-23.6 151.6-151.6 14.1 14.1L299.3 394.5zM340 466H20V46h320v251.2l-70.4 70.5c-1 1-1.7 2.1-2.2 3.4l-18.9 47.1c-1.5 3.7-0.6 8 2.2 10.8 1.9 1.9 4.5 2.9 7.1 2.9 1.3 0 2.5-0.2 3.7-0.7l47.1-18.9c1.3-0.5 2.4-1.3 3.4-2.2L340 382.1V466zM491.8 202l-26.8 26.8 -14.1-14.1 26.8-26.8c0.2-0.2 0.7-0.2 0.9 0l13.2 13.2C492.1 201.3 492.1 201.8 491.8 202z" />
                                      <path className="stval" d="M261.5 221.6c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l41.5-41.5c3.9-3.9 3.9-10.2 0-14.1 -3.9-3.9-10.2-3.9-14.1 0l-34.4 34.4 -13.7-13.7c-3.9-3.9-10.2-3.9-14.1 0 -3.9 3.9-3.9 10.2 0 14.1L261.5 221.6z" />
                                      <path className="stval" d="M268.5 307.5c2.6 0 5.1-1 7.1-2.9l41.5-41.5c3.9-3.9 3.9-10.2 0-14.1 -3.9-3.9-10.2-3.9-14.1 0l-34.4 34.4 -13.7-13.7c-3.9-3.9-10.2-3.9-14.1 0 -3.9 3.9-3.9 10.2 0 14.1l20.7 20.7C263.4 306.5 266 307.5 268.5 307.5L268.5 307.5z" />
                                      <path className="stval" d="M60 163.1c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10s10-4.5 10-10C70 167.5 65.5 163.1 60 163.1L60 163.1z" />
                                    </svg>
                                  </span>
                                  Technology integration
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4">
                          <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-full px-4">
                              <ul className="list-none p-0 m-0">
                                <li><a href="https://www.cuchd.in/campus-life/index.php">Overview</a>
                                </li>
                                <li><a href="https://www.cuchd.in/campus-life/convocation.php">Convocations</a>
                                </li>
                                <li><a href="https://www.cuchd.in/campus-life/live-concerts.php">Live-in-Concerts</a>
                                </li>
                                <li><a href="https://www.cuchd.in/campus-life/tech-invent.php">Tech
                                    Invent
                                    &amp; Events</a>
                                </li>
                                <li><a href="https://www.cuchd.in/campus-life/cultural.php">Cultural
                                    &amp;
                                    Cosmopolitan</a>
                                </li>
                                <li><a href="https://www.cuchd.in/campus-life/evoke.php">Evoke
                                    &amp;
                                    Youth
                                    Summits</a>
                                </li>
                                <li><a href="https://www.cuchd.in/campus-life/glorious-stars-cu.php">Glorious
                                    Stars at CU</a>
                                </li>
                                <li><a href="https://www.cuchd.in/student-services/sports.php">Sports
                                    &amp; Adventure</a>
                                </li>
                                <li><a href="https://www.cuchd.in/latest-news/index.php">Latest
                                    News</a>
                                </li>
                                <li><a href="https://www.cuchd.in/aifest-2026/" target="_blank">AI Fest 2026</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                          <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-full px-4">
                              <ul className="list-none p-0 m-0">
                                <li><a href="https://www.cuchd.in/campus-life/bollywood-celebrities.php">Bollywood
                                    Celebrities</a>
                                </li>
                                <li><a href="https://www.cuchd.in/campus-life/visitors.php">Prominent
                                    Visitors</a>
                                </li>
                                <li><a href="https://www.cuchd.in/campus-life/international-folklore-festival.php">CU-RHYTHMS
                                    International Folklore Festival</a>
                                </li>
                                <li><a href="https://www.cuchd.in/campus-life/national-international-conferences.php">National
                                    &amp; International Conferences</a>
                                </li>
                                <li><a href="https://www.cuchd.in/campus-life/international-faculties.php">International
                                    Faculties</a>
                                </li>
                                <li><a href="https://www.cuchd.in/campus-life/alumni.php">Notable
                                    Alumni</a>
                                </li>
                                <li><a href="https://www.cuchd.in/campus-life/canadian-alumni-meet.php">Canadian
                                    Alumni Chapter</a>
                                </li>
                                <li><a href="https://www.cuchd.in/campus-life/clubs-and-student-chapters.php" rel="nofollow">Clubs, Communities, Department Societies
                                    &amp; Student Chapters
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dd-menu-lg">
                    <a href="https://www.cuchd.in/placements/" className="mob-void">placements</a>
                    <div className="step-second-menu st-placements">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-1/2 px-4 hidden xl:block lazy-bg" style={{background: 'url("/header-footer/lazy-placement-bg.webp")', margin: '-20px 20px -20px -20px', backgroundSize: 'cover'}} data-bg="/header-footer/placement-bg.webp">
                          <div className="drop-down-graphic relative h-full">
                            <h3>Most sought after<span>Destination</span>of blue-chip companies</h3>
                            <div className="dd-graphic-cont absolute bottom-0 w-full">
                              <div className="flex flex-wrap -mx-4 m-0 p-0">
                                <div className="w-1/2 px-4 p-2 py-3 flex">
                                  <div className="dd--title align-self-center mx-auto">
                                    <span>
                                      <i className="fab fa-google" />
                                    </span>
                                    Google
                                  </div>
                                </div>
                                <div className="w-1/2 px-4 p-2 py-3 flex">
                                  <div className="dd--title align-self-center mx-auto">
                                    <span>
                                      <i className="fab fa-amazon" />
                                    </span>
                                    Amazon
                                  </div>
                                </div>
                                <div className="w-1/2 px-4 p-2 py-3 flex">
                                  <div className="dd--title align-self-center mx-auto">
                                    <span>
                                      <i className="fab fa-windows" />
                                    </span>
                                    Microsoft
                                  </div>
                                </div>
                                <div className="w-1/2 px-4 p-2 py-3 flex">
                                  <div className="dd--title align-self-center mx-auto">
                                    <span>
                                      <img className="w-full" src="/header-footer/mahindra-logo-dark.webp" />
                                    </span>
                                    Mahindra
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                          <h4 className="hidden xl:block">Placements</h4>
                          <ul className="list-none p-0 m-0">
                            <li><a href="https://www.cuchd.in/placements/">About Placements</a></li>
                            <li><a href="https://www.cuchd.in/placements/placement-tracker.php">Placement
                                Tracker</a>
                            </li>
                            <li><a href="https://www.cuchd.in/department-of-career-development/index.html" target="_blank">Department of Career Planning &amp;
                                Development</a>
                            </li>
                            <li><a href="https://www.cuchd.in/placements/joint-placement-programme.php">Joint
                                Placement Programme</a>
                            </li>
                            <li><a href="https://www.cuchd.in/placements/placement_engineering.php">Best
                                Engineering Placement</a>
                            </li>
                            <li><a href="https://www.cuchd.in/placements/placement_management.php">Best
                                Management Placement</a>
                            </li>
                            <li><a href="https://www.cuchd.in/placements/placement_hotel_management.php">Best
                                Hotel Management Placement</a>
                            </li>
                            <li><a href="https://www.cuchd.in/placements/placement-pharma-sciences.php">Best
                                Pharma Sciences Placement</a>
                            </li>
                            <li><a href="https://www.cuchd.in/placements/placement-physics.php">Best
                                Physics Placement</a>
                            </li>
                            <li><a href="https://www.cuchd.in/placement-offers-by-tcs/index.php">Best
                                TCS Placement</a>
                            </li>
                            <li><a href="https://www.cuchd.in/placements/placement-day.php">Placement
                                Day</a>
                            </li>
                            <li><a href="https://www.cuchd.in/placements/placement-overview.php">Our
                                Leading
                                Recruiters</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dd-menu-lg">
                    <a href="https://www.cuchd.in/research/" className="mob-void">Research &amp; Innovation</a>
                    <div className="step-second-menu st-research">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-1/2 px-4 hidden xl:block lazy-bg" style={{background: 'url("/header-footer/lazy-research-bg.webp")', margin: '-20px 20px -20px -20px', backgroundSize: 'cover'}} data-bg="/header-footer/research-bg.webp">
                          <div className="program-drop-down-graphic relative h-full text-center flex flex-column justify-between">
                            <h3>Our<span> Intellectual </span>Pursuits</h3>
                            <div className="placement--ddNumbers mt-4">
                              <div className="flex flex-wrap -mx-4 g-3">
                                <div className="w-1/2 px-4">
                                  <div className="card h-full p-3">
                                    <span>
                                      <h4 />
                                      <small>Research<br />Publications</small>
                                    </span>
                                  </div>
                                </div>
                                <div className="w-1/2 px-4">
                                  <div className="card h-full p-3">
                                    <span>
                                      <h4 id="patent-no"><span className="hidden" /></h4>
                                      <small>Patents<br />Filed</small>
                                    </span>
                                  </div>
                                </div>
                                <div className="w-1/2 px-4">
                                  <div className="card h-full p-3">
                                    <span>
                                      <h4>30</h4>
                                      <small>Industry Sponsored<br />Advanced Labs</small>
                                    </span>
                                  </div>
                                </div>
                                <div className="w-1/2 px-4">
                                  <div className="card h-full p-3">
                                    <span>
                                      <h4>200+</h4>
                                      <small>Departmental<br />Research Groups</small>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                          <h4>Research Intensive University</h4>
                          <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-full px-4">
                              <ul className="list-none p-0 m-0">
                                <li><a href="https://www.cuchd.in/research/">Research</a></li>
                                <li><a href="https://www.cuchd.in/research/patents.php">Patents</a>
                                </li>
                                <li><a href="https://www.cuchd.in/research/center-of-research.php">Centers
                                    Of Research</a>
                                </li>
                                <li><a href="https://www.cuchd.in/research/centers-of-excellence.php">Centers
                                    of Excellence</a>
                                </li>
                                <li><a href="https://www.cuchd.in/research/scholars.php">Visiting
                                    Scholars</a>
                                </li>
                                <li><a href="https://www.cuchd.in/usb/business-management/research-journal.php">CU
                                    Global Management Review</a>
                                </li>
                                <li><a href="https://www.cuchd.in/uils/legal-studies/research-journal.php">CU
                                    Law Review (CULR)</a>
                                </li>
                                {/* <li><a href="https://www.cuchd.in/ignite/"
                                                      target="_blank">IGNITE-2024
                                                      </a>
                                                  </li> */}
                              </ul>
                            </div>
                          </div>
                          <h4 className="mt-lg-4">Entrepreneurship Cells</h4>
                          <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-full px-4">
                              <ul className="list-none p-0 m-0">
                                <li><a href="https://www.cuchd.in/technology-business-incubator/index.php" target="_blank">Technology Business
                                    Incubator (TBI)</a>
                                </li>
                                <li><a href="https://www.cuchd.in/research/entrepreneurship.php">Innovation
                                    &amp; Entrepreneurship Development Cell (IEDC)</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h4 className="mt-lg-4">Sustainable Development Goals (SDG's)</h4>
                          <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-full px-4">
                              <ul className="list-none p-0 m-0">
                                <li><a href="https://www.cuchd.in/research/sdg">Policies &amp;
                                    Strategies</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex hideOnMobile">
                <div className="flex header_btn blue-gradient">
                  <a href="tel:+1800121288800" className="flex items-center text-white" aria-label="Call CU's Admission Helpline">
                    <span className="block"> {/* removed 'ms-2' */}
                      <small className="block capitalize">Admission Helpline (Free)</small>1800121288800
                    </span>
                  </a>
                </div>
                <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=engineering" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white btn-hoverEffect apnowbtn" target="_blank">Apply Now <img alt="Button Arrow" width={13} className="ml-2" src="/header-footer/right-arrow-small.png" /></a>  
                <button className="navbar-toggler flex" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" title="View Institutes">
                  <span className="navbar-toggler-icon" />
                </button>  {/* Moved out from the div above */}                          
                {/*
                      <ul class="header__top-right w-auto flex list-none p-0 m-0 items-center">
                          <li class="head-search">
                              <button id="search-page-mob" type="button" data-bs-toggle="modal"
                                  data-bs-target="#exampleModal" aria-label="Search Chandigarh University Website"
                                  class="text-white"><i class="fa fa-search"
                                      aria-hidden="true"></i><span>Search</span></button>
                          </li>
                      </ul>
*/}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div className="collapse" id="navbarToggleExternalContent">
      <div className="mega-menu blue-gradient" data-lenis-prevent-wheel>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 m-0 p-0">
            <div className="col-xl-7">
              <h3 className="text-switch">Our Institutes</h3>
              <div className="institute-list">
                <ul className="list-none step-first-menu hover-header-list ps-0">
                  <li className="active">
                    <a href="https://www.cuchd.in/engineering/">University Institute of Engineering</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/engg-institute-bg.webp" />
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/engg-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">A New Era in Engineering Education awaits
                              you
                              with dynamic experiential learning and a flexible academic
                              model.
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.cuchd.in/management/">University Institute of Business</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/management-institute-bg.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/management-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">Embark on your path to corporate leadership
                              with world-class facilities, research focus, innovation culture
                              &amp; entrepreneurial zeal.
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.cuchd.in/computing/">University Institute of Computing</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/computing-institute-bg.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/computing-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">Gain the ultimate toolkit for success in
                              computing with our versatile degree and hands-on learning
                              experience.
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.cuchd.in/pharma-sciences/">University Institute of Pharma Sciences</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/pharma-institute-bg.webp" />
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/pharma-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">Seize the unparalleled opportunity to become
                              a future Healthcare Pro &amp; immerse yourself in a clinically
                              focused, science-driven course.
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.cuchd.in/biotechnology/">University Institute of Biotechnology</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/bio-institute-bg.webp" />
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/bio-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">Dive into the fascinating world of
                              Biotechnology and Biosciences within our research-oriented
                              environment.
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.cuchd.in/architecture-and-design/">University Institute of Architecture</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/arch-institute-bg.webp" />
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/arch-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">Master architecture as core professionals
                              with cutting-edge tech and insights from the global community.
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.cuchd.in/liberal-arts-and-humanities/">University Institute of Liberal Arts &amp;
                      Humanities</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/liberal-institute-bg.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/liberal-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">Step into a hub of cultural diversity, where
                              learning centers on critical thinking, creativity, research, and
                              communication skills.
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.cuchd.in/animation-and-multimedia/">University Institute of Film and Visual
                      Arts</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/uifva-institute-bg.webp" />
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/uifva-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">Experience next-gen multimedia education,
                              merging technology with traditional art for the next generation
                              of industry leaders.
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.cuchd.in/teachers-training-and-research/">University Institute of Teachers Training
                      And Research</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/uittr-institute-bg.webp" />
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/uittr-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">Your pathway to becoming an exceptional
                              educator with NCTE approval, collaborative partnerships and much
                              more.
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.cuchd.in/legal-studies/">University Institute of Legal Studies</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/legal-institute-bg.webp" />
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/legal-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">Become a top-notch Legal Professional a
                              blend
                              of tradition and modernity in Legal Education.
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.cuchd.in/journalism-and-mass-communication/">University Institute of Media
                      Studies</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/media-institute-bg.webp" />
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/media-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">Your path to industry-ready media
                              professionalism with hands-on training, a dynamic environment
                              &amp; global collaborations.
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.cuchd.in/basic-sciences/">University Institute of Sciences</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/uis-institute-bg.webp" />
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/uis-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">Be a future leader with a pioneering blend
                              of
                              academic excellence, research endeavors, and hands-on learning.
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.cuchd.in/applied-health-sciences/">University Institute of Allied Health
                      Sciences</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/ahs-institute-bg.webp" />
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/ahs-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">Lead the forefront of Allied Health Sciences
                              with a clinically focused curriculum and immersive learning
                              experience.
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.cuchd.in/design/">University Institute of Design</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/design-institute-bg.webp" />
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/design-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">Embark on your journey with our
                              comprehensive
                              Design programs, guided by experienced faculty &amp; tailored
                              for success.
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.cuchd.in/hotel-management-and-tourism/">University Institute of Tourism &amp;
                      Hospitality Management</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/uithm-institute-bg.webp" />
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/uithm-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">Lead the way in hospitality education with
                              cutting-edge training, facilities &amp; a unique blend of
                              theoretical knowledge &amp; real-world experience.
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.cuchd.in/finance-and-accounting/">Global School of Finance and Accounting</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/gsfa-institute-bg.webp" />
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/gsfa-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">Unveil a revolutionary approach to finance
                              education with dynamic experiential learning.
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.cuchd.in/cassm/">Centre for Advanced Studies in Social Science and Management</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/cassm-institute-bg.webp" />
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/cassm-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">Embrace a new era of dynamic learning &amp;
                              flexibility in social science and management education.
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.cuchd.in/physical-education/">University Institute of Physical Education and
                      Sports</a>
                    <div className="step-second-menu institute-info-sec bg-transparent p-0">
                      <div className="flex flex-wrap -mx-4 m-0 p-0 h-full">
                        <div className="w-full lg:w-full px-4 h-55 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-big.webp")'}} data-bg="/header-footer/pes-institute-bg.webp" />
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block lazy-bg" style={{background: 'url("/header-footer/institute-bg-small.webp")'}} data-bg="/header-footer/pes-institute-bg-small.webp">
                        </div>
                        <div className="w-full lg:w-1/2 px-4 h-45 hidden lg:block">
                          <div className="institute-content flex flex-column justify-between h-full p-4 p-xxl-5">
                            <h5 className="text-switch">Lead the way in physical education with
                              emphasis on fundamental principles, psychological aspects, and
                              leadership development
                            </h5>
                            <div className="btn-grp">
                              <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" className="inline-block px-4 py-2 rounded text-center bg-blue-600 text-white" target="_blank">Apply Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>

</>
  );
}
