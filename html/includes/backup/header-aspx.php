<?php
    $highestpackage = '1.7';
    $nationalpackage = '54.75';
    $placements = '9124';
    $companies = '904';
    $year = 'Batch 2023-24';
    $tieups = '486';
    $countries = '95';
    $patents = '2400+';
    $startups = '146';
    $publishedJournals = '10000';
?>

<style>
/******** DARK MODE TOUR BOX ********/    
.body-color-overlay2 {
	background: rgba(0,0,0,.8);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 14;
	display: none;
	transition: all 0.3s ease-in-out;
}
.z-index-9 {
    z-index: 99999999;
    position: relative;
}
#sb_container {
	z-index: 999!important;
}    
.custom-tooltip {
    position: relative;
}
.custom-tooltip .bottom {
	min-width: 200px;
	top: 15px;
	right: 0;
	padding: 20px;
	color: var(--text-color-dark);
	background-color: var(--bgcolor-white);
	font-weight: normal;
	border-radius: 6px;
	position: absolute;
	z-index: 99999999;
	white-space: nowrap;
    text-transform: capitalize;
	box-shadow: 0 1px 8px rgba(0,0,0,0.5);
	display: none;
    transition: all .3s linear;
}
.custom-tooltip .bottom img {
    width: 400px;
    border-radius: 6px;
}
.custom-tooltip .bottom i {
    position:absolute;
    bottom:100%;
    right:13px;
    margin-left:-12px;
    width:24px;
    height:12px;
    overflow:hidden;
}
.custom-tooltip .bottom i::after {
    content:'';
    position:absolute;
    width:12px;
    height:12px;
    left:50%;
    transform:translate(-50%,50%) rotate(45deg);
    background-color:var(--bgcolor-white);
    box-shadow:0 1px 8px rgba(0,0,0,0.5);
}
.custom-tooltip .bottom p {
    font-size: 12px;
    line-height: 16px;
} 
.custom-tooltip .bottom .btn {
	letter-spacing: 0;
	font-size: 13px;
	margin: 10px 0 0 !important;
	top: 0;
}
.custom-tooltip .bottom .btn:hover {
    cursor: pointer;
}
.justify-content-evenly {
    justify-content: space-evenly;
}
/***** Custom Add to Home Screen *****/    
.block__install {
    display: none;
}  
.h-thread-icon{position:relative; top:-1px;}  
.lazybg {
    background-size: cover!important;
}    
    
/***** Custom Exit Intent Popup *****/      
.exit-intent-popup {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    background: rgba(15, 15, 15, 0.9);
    transform: translateY(60%) scale(0);
    transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
}
.exit-intent-popup.visible {
    transform: translateY(0) scale(1);
}
.newsletter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #FFF;
    border-radius: 10px;
    width: 750px;
}
.newsletter img {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}    
.newsletter .popup-content {
	padding: 30px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
    text-align: left!important;
}
.newsletter .popup-content h2 {
	font-family: 'DM Sans', sans-serif !important;
	font-weight: 300 !important;
}
.newsletter .popup-content .pop-btn {
	border-radius: 6px;
	width: auto;
	font-family: 'DM Sans', sans-serif;
    font-weight: 800;
	font-size: 14px;
	text-transform: uppercase;
	color: var(--text-color-white);
	letter-spacing: 2px;
	text-decoration: none;
	padding: 12px 24px;
	display: inline-block;
    background: var(--bgcolor-red);
	transition: all 0.2s ease-in-out;
}
.newsletter .popup-content .pop-btn:hover {
	color: var(--text-color-white);
	background: var(--bgcolor-dark-purple);
}
.newsletter .popup-content .pop-btn svg {
	margin-left: 10px;
	margin-top: -2px;
}
.newsletter .popup-content h2 strong {
	font-weight: 800 !important;
}
.exit-intent-popup .close {
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
	width: 28px;
	border-radius: 50%;
    background: #fff;
	border: 1px solid #b3b3b3;
	padding: 7px;
	line-height: 0;
    display: none;
}
.exit-intent-popup .close svg { 
    position: relative;
    z-index: 99999;
    display: inline-block; 
}
/***** Custom Exit Intent Popup *****/      
    
@media (min-width: 768px) {
    header.dark-grey-bg .custom-tooltip .bottom {
        top: -150px;    
    }
    header.dark-grey-bg .custom-tooltip .bottom i {
        bottom: -12px;
        transform: rotate(180deg);
    }        
}
@media (max-width: 767px) {
    .newsletter {
        width: 90%;
    }
    .newsletter img {
        height: 300px;
        object-fit: cover;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 0;        
    }
    .newsletter .popup-content {
        text-align: center!important;
    }    
    .custom-tooltip .bottom {
        min-width: 320px;
        padding: 15px;
        white-space: normal;
    }    
    .block__install {
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        z-index: 9999999;
        background: var(--bs-primary);
        padding: 15px;
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    }
    .block__install .inner {
        display: flex;
        align-items: center;
    }
    .block__install .inner .close {
        font-size: 32px;
        margin-right: 15px;
    } 
    .block__install .inner .close:hover {
        cursor: pointer;
    } 
    .block__install .inner .logo {
        width: 48px;
        margin-top: 0;
        border-radius: 6px;
        background: transparent;
        border: 1px solid var(--bg-white-faded);
        padding: 9px;
    } 
    .block__install .inner .logo img {
        width: 100%;
    }
	 .block__install .inner .name {
		 padding-left: 10px;
         line-height: 18px;
	}
	 .block__install .inner .name span {
		 display: block;
        color: var(--bs-white);         
	}
    .block__install .inner .name span.title {
        font-size: 13px;
        font-family: var(--primary-font);
        font-weight: bold;
        color: var(--bs-white);
    }
    .block__install .inner .name span.description {
		 font-size: 10px;
         font-family: var(--primary-font);
	}
	 .block__install .inner .cta {
		 margin-left: auto;
	}
    .block__install .inner .cta button {
        padding: 5px 15px !important;
        font-family: var(--primary-font);
        font-weight: bold;        
        letter-spacing: .5px;
        border-radius: 6px;
        background: var(--bg-darkyellow);
        box-shadow: 0 3px 0 #cd8c07;
    }
	 .block__install.is-active {
		 display: block;
	}  
    
}   



/* new styling */


@media only screen and (min-width:1920px){
  .highlights-section .container-fluid,
  .placements-logos,
  .hero-banner .container-fluid{
      max-width: 1920px;
      margin: auto;
  }
}
.header.sticky .header__top {
	bottom: 10px;
	left: 10px;
	right: 10px;
	padding: 10px 15px;
	background: rgba(0, 0, 0, 0.4);
	border-radius: 10px;
	color: #fff;
	font-weight: bold;
	backdrop-filter: blur(5px) contrast(80%);
  -webkit-backdrop-filter: blur(5px) contrast(80%);
}
.header.sticky .top-notification-slider {
	background: #303339;
	background: transparent;
}
.btn {
	box-shadow: none;
	border-radius: 10px;
}
.tns-item {
	text-align: center;
}
.header__main {
	border-top: 1px solid rgba(255,255,255,.2);
}
.marquee {
	display: inline-block;
	white-space: nowrap;
	animation: scrollLeft 10s linear infinite;
	padding-left: 101%;
	overflow: hidden;
	height: 17px;
}

.marquee:hover {
   animation-play-state: paused
}

@keyframes scrollLeft {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%)
  }
}



@media only screen and (min-width:1700px){
  .header__top-right {
    width: 621px;
  }
}

@media only screen and (min-width:1200px) and (max-width:1399px){
    .header__top-left{
        opacity: 0;
        visibility: hidden;
    }
    .header.sticky .header__top-left{
        opacity: 1;
        visibility: visible;
    }
}

@media only screen and (max-width:767px){
  .header.sticky .header__top-left{
    position: static;
    background: transparent;
  }
  .header.sticky .header__top{
    display: block !important;
    position: fixed;
  }
  .header.sticky .tns-item a{
    padding: 0;
  }

  .marquee{
    height: auto;
  }
  .header__top-left {
	background: #1b2e4c;
    }
}

@media only screen and (max-width:575px){
    .header__main {
        border-top: 0;
    }
}


</style>


<header class="header fixed-top">
    <div class="header__top d-flex justify-content-between align-items-center">
        <div class="header__top-left">
            <div class="top-notification-slider1 pagination-style overflow-hidden">
                <div class="tns-item marquee">
                    <a href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd" target="_blank" title="Register via CUCET to avail of a huge merit-based scholarship. - Apply Now"><span style="color: var(--bg-darkyellow)">APPLY NOW</span> for CUCET - 2024</a>
                </div>
            </div>
        </div>
        <div class="header__top-right d-flex justify-content-end">
            <ul class="d-flex list-unstyled p-0 m-0">
                <li class="hts-text">Get Connected</li>
                <li><a href="/whatsapp.php" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
                <li class="ph-missed"><a href="tel:8033094409"><i class="fa-solid fa-phone" style="font-size: 12px"></i></a></li>
                <li><a href="/maps/" id="vt-bt" class="text360"><i class="fa-solid fa-compass" style="font-size: 12px"></i><small class="ms-1">360<sup>o</sup></small></a></li>
                <li class="ms-5 hts-text">Get Social</li>
                <li><a href="https://www.facebook.com/chandigarhuniversitygharuan" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="https://www.twitter.com/chandigarh_uni" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/school/chandigarh-university/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="https://www.instagram.com/chandigarhuniversity" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/user/chandigarhuniversity" target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
                <li><a href="https://www.threads.net/@chandigarhuniversity" target="_blank"><img src="/includes/assets/images/header-footer/threads-icon.webp" alt="" height="13" class="h-thread-icon"></a></li>
                <li class="ms-5 head-search"><a href="javascript:void(0);" id="search-page-mob" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-search me-1" aria-hidden="true"></i><small>Search</small></a></li>
                <li>
                    <a href="javascript:void(0);" class="darkMode" title="Dark Mode" onClick="ga('send','event','DARK MODE','Dark Mode','Dark_Mode',0,{'nonInteration':false});"> 
                        <div class="dark_mode"></div>                                              
                    </a>
                     <div class="custom-tooltip">
                        <div class="bottom">
                            <h6 class="mb-1">Check Out Dark Mode!</h6>
                            <p class="mb-0">Toggle the button for better reading and less strain on eyes.</p>
                            <i></i> 
                            <div class="d-flex justify-content-evenly">
                                <a class="btn btn-md btn-primary text-capitalize darkMode darkMode-three" style="padding: .25rem 1.5rem!important">&check; Try Now</a>
                                <a class="btn btn-md btn-primary text-capitalize tooltip-close" style="padding: .25rem 3rem!important">&times; Later</a>
                            </div>
                        </div>                                              
                    </div>
                    <div class="body-color-overlay2"></div>                    
                </li>
            </ul>
        </div>
    </div>
    <div class="header__main">
        <nav class="navbar navbar-expand-xl">
            <div class="container-fluid align-items-center">
                <div class="navbar-brand p-0 d-flex align-items-center">
                    <a href="https://www.cuchd.in/"><img src="/includes/assets/images/header-footer/cu-logo-white.webp" alt="" width="192" class="me-2 cu-logo"></a>
                    <div class="navbar-brand__slider ms-2">
                        <div class="nbs-item">
                            <img src="/includes/assets/images/header-footer/qs-logo-white.webp" alt="" width="138">
                        </div>
                        <div class="nbs-item">
                            <img src="/includes/assets/images/header-footer/naac-a-logo.webp" alt="" width="138">
                        </div>
                        <!--<div class="nbs-item">
                            <img src="/includes/assets/images/header-footer/flag-2023.webp" alt="" width="138">
                        </div>-->
                    </div>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav m-auto step-first-menu">
                        <li class="nav-item dd-menu-lg">
                            <a href="javascript:void(0);">About</a>
                            <div class="step-second-menu st-about">
                                <div class="row g-0 h-100">
                                    <div class="col-xl-4">
                                        <h4>Who We Are</h4>
                                        <ul class="list-unstyled p-0 m-0">
                                            <li><a href="/about/">Overview</a></li>
                                            <li><a href="/about/our-identity.php">Our Identity</a></li>
                                            <li><a href="/about/vision-and-mission.php">Vision &amp;
                                                Mission</a>
                                            </li>
                                            <li><a href="/about/LeaderShip.php">LeaderShip</a></li>
                                            <li><a href="/core-values/">Core Values</a></li>
                                            <li><a href="/recognitions-and-approvals/">Recognition &amp;
                                                Approvals</a>
                                            </li>
                                            <li><a href="/about/Awards-and-Rankings.php">Awards &amp;
                                                Rankings</a>
                                            </li>
                                            <li><a href="/about/institution-social-responsibility.php">Institutional
                                                Social Responsibility</a>
                                            </li>
                                            <li><a href="/admissions/cu-edge.php">CU Edge</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-xl-4">
                                        <h4>Related Links</h4>
                                        <ul class="list-unstyled p-0 m-0">
                                            <li><a href="/academics/institutes.php">Institutes &amp;
                                                Departments</a>
                                            </li>
                                            <li><a href="/admissions/">Admissions</a></li>
                                            <li><a href="/scholarship/">Scholarships</a></li>
                                            <li><a href="/about/governance.php">Governance</a></li>
                                            
                                            <li><a href="/student-services/hostel-facility.php">Hostel
                                                Facility</a>
                                            </li>
                                            <li><a href="/student-services/">Student Services</a></li>
                                            <li><a href="/contact/how-to-reach-us.php">How to Reach
                                                Us?</a>
                                            </li>
                                            <li><a href="/GATI-charter-institution.php">GATI Charter
                                                Institution</a>
                                            </li>
											<li><a href="/abet/">ABET Engineering Accreditation</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4 about-graphic d-none d-lg-block lazybg"
                                        style="background: url('/includes/assets/images/header-footer/lazy-about-dd-image.webp'); margin: -20px -20px -20px 20px;  background-size: cover;" data-src="/includes/assets/images/header-footer/about-dd-image.webp">
                                        <div class="drop-down-graphic position-relative h-100">
                                            <h3>Chandigarh University <span>Best Educational</span> Institution</h3>
                                            <div class="dd-graphic-cont position-absolute bottom-0">
                                                <div class="row g-0">
                                                    <div class="col-6 p-2 py-3 d-flex">
                                                        <div class="dd--title align-self-center mx-auto">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 512 512" width="54">
                                                                    <style type="text/css">
                                                                        .stval {
                                                                        fill: #FFFFFF;
                                                                        }
                                                                    </style>
                                                                    <path class="stval"
                                                                        d="M415.3 275.2l-41.1 41.1c-0.5-0.7-1.1-1.3-1.7-1.9l-53.1-53.1c-2.9-2.9-7.7-2.9-10.6 0 -2.9 2.9-2.9 7.7 0 10.6l53.1 53.1c4.6 4.6 4.6 12 0 16.6 -4.6 4.6-12 4.6-16.6 0l-29.5-29.5c-2.9-2.9-7.7-2.9-10.6 0s-2.9 7.7 0 10.6l29.5 29.5c0 0 0 0 0 0 2.2 2.2 3.4 5.1 3.4 8.3 0 3.1-1.2 6.1-3.4 8.3 -2.2 2.2-5.1 3.4-8.3 3.4 -3.1 0-6.1-1.2-8.3-3.4l-29.5-29.5c-2.9-2.9-7.7-2.9-10.6 0s-2.9 7.7 0 10.6l29.5 29.5c4.6 4.6 4.6 12 0 16.6 -2.2 2.2-5.2 3.4-8.3 3.4 -3.1 0-6.1-1.2-8.3-3.4l-29.5-29.5c-2.9-2.9-7.7-2.9-10.6 0s-2.9 7.7 0 10.6l29.5 29.5c4.6 4.6 4.6 12 0 16.6 -2.2 2.2-5.1 3.4-8.3 3.4 -3.1 0-6.1-1.2-8.3-3.4L244.7 404c6.1-10.1 4.8-23.5-4-32.3l-0.5-0.5c-5.8-5.8-13.7-8.3-21.3-7.6 -0.4-6.4-3.1-12.3-7.7-16.9 -3.5-3.5-7.8-5.8-12.3-7 1.2-3 1.8-6.2 1.8-9.5 0-7.1-2.7-13.7-7.7-18.7s-11.6-7.7-18.7-7.7c-4 0-7.9 0.9-11.4 2.6 -1.2-4.2-3.4-8.2-6.7-11.5 -10.3-10.3-27.1-10.3-37.4 0l-3.1 3.1 -2.3-2.3c-3.6-3.6-5.6-8.5-5.6-13.6v-19.6c0-2-0.8-3.9-2.2-5.3l-32.1-32.1 9-9c2.9-2.9 2.9-7.7 0-10.6 -2.9-2.9-7.7-2.9-10.6 0l-12.1 12.1c-2.3 2.3-6 2.3-8.3 0L12.8 179c-2.9-2.9-7.7-2.9-10.6 0 -2.9 2.9-2.9 7.7 0 10.6l38.7 38.7c4.1 4.1 9.4 6.1 14.8 6.1 1.7 0 3.4-0.2 5.1-0.6l32 32v16.5c0 9.2 3.6 17.8 10 24.2l2.3 2.3 -2.5 2.5c-5 5-7.7 11.6-7.7 18.7 0 7.1 2.7 13.7 7.7 18.7 5.2 5.1 11.9 7.7 18.7 7.7 0.1 0 0.2 0 0.3 0 0 0.1 0 0.2 0 0.3 0 7.1 2.7 13.7 7.7 18.7 5 5 11.6 7.7 18.7 7.7 0.1 0 0.2 0 0.3 0 -0.1 6.9 2.5 13.8 7.7 19 5.2 5.1 11.9 7.7 18.7 7.7 0.1 0 0.2 0 0.3 0 -0.1 6.9 2.5 13.8 7.7 19l0.5 0.5c5 5 11.6 7.7 18.7 7.7 7.1 0 13.7-2.7 18.7-7.7l14.1-14.1 18.6 18.6c5 5.1 11.8 7.8 18.9 7.8 7.1 0 13.9-2.8 18.9-7.8 5.3-5.3 7.9-12.4 7.8-19.4 0.2 0 0.3 0 0.5 0 7.1 0 13.9-2.8 18.9-7.8 5.3-5.3 7.9-12.4 7.8-19.4 0.2 0 0.3 0 0.5 0 6.8 0 13.7-2.6 18.9-7.8 5.1-5 7.8-11.8 7.8-18.9 0-0.2 0-0.3 0-0.5 0.2 0 0.3 0 0.5 0 6.8 0 13.7-2.6 18.9-7.8 5.7-5.7 8.2-13.3 7.8-20.7l45.7-45.7c2.9-2.9 2.9-7.7 0-10.6C423 272.2 418.2 272.2 415.3 275.2L415.3 275.2zM113.1 338c-2.2-2.2-3.3-5-3.3-8 0-3 1.2-5.9 3.3-8.1l16.2-16.2c2.2-2.2 5.1-3.3 8.1-3.3 2.9 0 5.8 1.1 8 3.3 4.4 4.4 4.4 11.7 0 16.1L129.2 338C124.8 342.4 117.6 342.4 113.1 338L113.1 338zM147.9 368.1c-3 0-5.9-1.2-8.1-3.3 -2.2-2.2-3.3-5-3.3-8s1.2-5.9 3.3-8.1l16.2-16.2 10.1-10.1c2.2-2.2 5-3.3 8-3.3s5.9 1.2 8 3.3c2.2 2.2 3.3 5 3.3 8.1s-1.2 5.9-3.3 8.1L156 364.7C153.8 366.9 150.9 368.1 147.9 368.1L147.9 368.1zM166.6 391.5c-4.4-4.4-4.4-11.7 0-16.1l17.9-17.9c2.2-2.2 5.1-3.3 8.1-3.3 2.9 0 5.8 1.1 8 3.3 2.2 2.2 3.3 5 3.3 8.1 0 3-1.2 5.9-3.3 8l-17.9 17.9C178.2 395.9 171 395.9 166.6 391.5L166.6 391.5zM209.9 418.6c-2.2 2.2-5 3.3-8 3.3 -3 0-5.9-1.2-8-3.3l-0.5-0.5c-4.4-4.4-4.4-11.7 0-16.1l17.9-17.9c0 0 0 0 0 0l2.2-2.3c2.2-2.2 5.1-3.3 8.1-3.3 2.9 0 5.8 1.1 8 3.3l0.5 0.5c4.4 4.4 4.4 11.7 0 16.1L209.9 418.6z" />
                                                                    <path class="stval"
                                                                        d="M509.8 210.7c-2.9-2.9-7.7-2.9-10.6 0L471 238.9c-0.4 0.4-1 0.4-1.4 0L370 143.8c-0.2-0.2-0.3-0.4-0.3-0.7 0-0.3 0.1-0.5 0.3-0.7l59.1-59.1c2.9-2.9 2.9-7.7 0-10.6 -2.9-2.9-7.7-2.9-10.6 0l-59.1 59.1c-3.1 3.1-4.7 7.2-4.7 11.5 0 3.5 1.2 6.8 3.3 9.5l-27 26.5 -25.5-14.2c-3.3-1.9-7.1-2.8-10.9-2.8h-72.3l-5.5-5.5c-5.1-5.1-11.1-9-17.9-11.6l-20-7.6 -9.3-9.3c4.8-8 3.8-18.6-3.1-25.5l-30.2-30.2c-2.9-2.9-7.7-2.9-10.6 0 -2.9 2.9-2.9 7.7 0 10.6l30.2 30.2c2.3 2.3 2.3 6 0 8.3L94.5 183c-2.9 2.9-2.9 7.7 0 10.6 1.5 1.5 3.4 2.2 5.3 2.2 1.9 0 3.8-0.7 5.3-2.2l54.3-54.3 9.9 9.9c0.7 0.7 1.6 1.3 2.6 1.7l21.5 8.2c4.6 1.8 8.8 4.4 12.3 7.9 -0.5 0.4-0.9 0.8-1.3 1.2l-28.6 28.6c-5.7 5.7-8.8 13.2-8.8 21.2 0 8 3.1 15.6 8.8 21.2 5.9 5.9 13.5 8.8 21.2 8.8 6.7 0 13.5-2.3 19.1-6.9l21.6-17.8h22.5l25.7 25.7c1.5 1.5 3.4 2.2 5.3 2.2s3.8-0.7 5.3-2.2c2.9-2.9 2.9-7.7 0-10.6L278.2 220c0.7-1.2 1.2-2.5 1.2-4 0-4.2-3.4-7.5-7.5-7.5h-36.7c-1.7 0-3.4 0.6-4.8 1.7l-23.7 19.5c-6 4.9-14.6 4.5-20.1-1 -2.8-2.8-4.4-6.6-4.4-10.6 0-4 1.6-7.8 4.4-10.6l28.6-28.6c1.1-1.1 2.5-1.7 4-1.7h75.5c1.3 0 2.5 0.3 3.6 0.9l28.2 15.7c4.2 2.3 9.5 1.6 12.9-1.7l29.4-28.9 81 77.4L438 252.5c-2.9 2.9-2.9 7.7 0 10.6 1.5 1.5 3.4 2.2 5.3 2.2 1.9 0 3.8-0.7 5.3-2.2l12.1-12.1c2.8 2.1 6.2 3.1 9.6 3.1 4.1 0 8.2-1.6 11.4-4.7l28.2-28.2C512.7 218.4 512.7 213.6 509.8 210.7L509.8 210.7z" />
                                                                </svg>
                                                            </span>
                                                            Human Dignity
                                                        </div>
                                                    </div>
                                                    <div class="col-6 p-2 py-3 d-flex">
                                                        <div class="dd--title align-self-center mx-auto">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 512 512" width="45">
                                                                    <style type="text/css">
                                                                        .stval {
                                                                        fill: #FFFFFF;
                                                                        }
                                                                    </style>
                                                                    <path class="stval"
                                                                        d="M408 207.4L510 136 408 64.6V104h-80v64h80V207.4zM344 152v-32h80V95.4l58 40.6 -58 40.6V152H344z" />
                                                                    <path class="stval"
                                                                        d="M226 264l102 71.4V296h80v-64h-80v-39.4L226 264zM392 248v32h-80v24.6L254 264l58-40.6V248H392z" />
                                                                    <path class="stval"
                                                                        d="M224.2 219.1c15.3-15.3 23.8-35.7 23.8-57.6 0-18.2-6.3-36.1-17.6-50.3C218.6 96.4 201 88 182.2 88c-16.5 0-31.9 6.4-43.6 18.1L128 116.7l-10.6-10.6C105.7 94.4 90.2 88 73.8 88c-18.8 0-36.4 8.4-48.1 23.1C14.3 125.4 8 143.2 8 161.7c0 21.7 8.4 42.1 23.8 57.4l96.2 96.2L224.2 219.1zM24 161.4c0-14.6 5-28.9 14.1-40.3 8.7-10.9 21.7-17.1 35.6-17.1 12.2 0 23.7 4.7 32.3 13.4l21.9 21.9 21.9-21.9c8.6-8.6 20.1-13.4 32.3-13.4 13.9 0 26.9 6.2 35.6 17.1 9.1 11.4 14.1 25.7 14.1 40.6 0 17.4-6.8 33.8-19.1 46.1L128 292.7l-84.9-84.9C30.8 195.5 24 179.1 24 161.4z" />
                                                                    <path class="stval"
                                                                        d="M329.4 408.1l-14.1-11.7C299.6 383.2 279.6 376 259 376h-59c-11.9 0-22.2 6.6-27.7 16.4l-14.2-18.9c-6.3-8.4-16.4-13.5-26.9-13.5 -9.3 0-17.5 4.7-22.4 11.9C102.4 364.4 93 360 83.2 360c-15 0-27.2 12.2-27.2 27.2 0 4.5 1.1 8.9 3.2 12.9l51.1 73.2c13.5 19.3 35.5 30.8 59 30.8H504V392H352C341.5 392 332.7 398.8 329.4 408.1zM131.2 376c5.5 0 10.8 2.6 14.1 7.1l23.3 31.1c0.7 3.5 2.1 6.8 3.8 9.8H164c-10 0-19.6-4.8-25.6-12.8L120 386.7C120.3 380.8 125.2 376 131.2 376L131.2 376zM169.4 488c-18.3 0-35.4-8.9-45.9-23.9l-50.3-72c-0.8-1.5-1.2-3.2-1.2-4.9 0-6.2 5-11.2 11.2-11.2 5.5 0 10.8 2.6 14.1 7.1l28.3 37.7c9 12 23.4 19.2 38.4 19.2h66.1c10.5 0 20.9 2.5 30.3 7.2l7.2-14.3c-11.6-5.8-24.5-8.8-37.5-8.8H200c-8.8 0-16-7.2-16-16s7.2-16 16-16h59c16.8 0 33.2 5.9 46.1 16.7l22.9 19.1V488H169.4zM344 416c0-4.4 3.6-8 8-8h8v80h-16V416zM376 408h32v80h-32V408zM488 488h-64v-80h64V488z" />
                                                                </svg>
                                                            </span>
                                                            Empathy
                                                        </div>
                                                    </div>
                                                    <div class="col-6 p-2 py-3 d-flex">
                                                        <div class="dd--title align-self-center mx-auto">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 512 512" width="44">
                                                                    <style type="text/css">
                                                                        .stval {
                                                                        fill: #FFFFFF;
                                                                        }
                                                                    </style>
                                                                    <path class="stval"
                                                                        d="M447.2 304.9l-85.6 60.7C359 346.1 342.2 331 322 331h-10.3c-41.3 0-81.1-10.3-128.2-25.8 -8.5-2.8-17.5-4.2-26.5-4.2 -25.3 0-48.6 10.9-64.8 30H10c-5.5 0-10 4.5-10 10v90c0 5.5 4.5 10 10 10 36.7 0 73 10.3 111.4 21.2 41.1 11.7 83.7 23.8 129.7 23.8 86.1 0 127.7-23.9 245.9-118.4 17.3-13.8 20.1-39 6.2-56.2C489.5 294.2 464.5 291.3 447.2 304.9L447.2 304.9zM484.5 351.9C364.6 447.9 327.5 466 251.1 466c-43.2 0-84.4-11.7-124.2-23 -36.4-10.3-71-20.2-106.9-21.8V351h77c3.1 0 6.1-1.5 8-4 12.4-16.5 31.4-26 52-26 6.9 0 13.8 1.1 20.3 3.2 48.9 16.1 90.5 26.8 134.4 26.8H322c11 0 20 9 20 20 0 10.9-8.7 20-20 20H200.5c-5.5 0-10 4.5-10 10s4.5 10 10 10H322c12 0 23.5-5.5 31-14.8 110.7-78.5 106-75.2 106.5-75.5 8.6-6.9 21.2-5.5 28.1 3.1C494.5 332.4 493.1 345 484.5 351.9z" />
                                                                    <circle class="stval" cx="342" cy="276" r="10" />
                                                                    <path class="stval"
                                                                        d="M392 76c0-27.6-22.4-50-50-50 -27.6 0-50 22.4-50 50s22.4 50 50 50C369.6 126 392 103.6 392 76zM342 106c-16.5 0-30-13.5-30-30s13.5-30 30-30c16.5 0 30 13.5 30 30S358.5 106 342 106z" />
                                                                    <path class="stval"
                                                                        d="M252 216v60c0 5.5 4.5 10 10 10h35c5.5 0 10-4.5 10-10s-4.5-10-10-10h-25v-50c0-38.6 31.4-70 70-70s70 31.4 70 70v50h-25c-5.5 0-10 4.5-10 10s4.5 10 10 10h35c5.5 0 10-4.5 10-10v-60c0-49.6-40.4-90-90-90S252 166.4 252 216L252 216z" />
                                                                </svg>
                                                            </span>
                                                            Humility
                                                        </div>
                                                    </div>
                                                    <div class="col-6 p-2 py-3 d-flex">
                                                        <div class="dd--title align-self-center mx-auto">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 512 512" width="50">
                                                                    <style type="text/css">
                                                                        .stval {
                                                                        fill: #FFFFFF;
                                                                        }
                                                                    </style>
                                                                    <path class="stval"
                                                                        d="M502 134.1h-47.5c-5.5 0-10 4.5-10 10s4.5 10 10 10H502c5.5 0 10-4.5 10-10S507.5 134.1 502 134.1z" />
                                                                    <path class="stval"
                                                                        d="M434.9 75.9c2.2 0 4.4-0.7 6.2-2.2l39.4-31.2c4.3-3.4 5.1-9.7 1.6-14 -3.4-4.3-9.7-5.1-14-1.6l-39.4 31.2c-4.3 3.4-5.1 9.7-1.6 14C429 74.6 431.9 75.9 434.9 75.9z" />
                                                                    <path class="stval"
                                                                        d="M480.5 245.5l-39.4-31.2c-4.3-3.4-10.6-2.7-14 1.6 -3.4 4.3-2.7 10.6 1.6 14l39.4 31.2c1.8 1.5 4 2.2 6.2 2.2 3 0 5.9-1.3 7.8-3.8C485.5 255.3 484.8 249 480.5 245.5L480.5 245.5z" />
                                                                    <path class="stval"
                                                                        d="M34.5 154.1H82c5.5 0 10-4.5 10-10s-4.5-10-10-10H34.5c-5.5 0-10 4.5-10 10S29 154.1 34.5 154.1z" />
                                                                    <path class="stval"
                                                                        d="M56 42.6l39.4 31.2c1.8 1.5 4 2.2 6.2 2.2 3 0 5.9-1.3 7.8-3.8 3.4-4.3 2.7-10.6-1.6-14L68.4 26.9c-4.3-3.4-10.6-2.7-14 1.6C51 32.9 51.7 39.2 56 42.6z" />
                                                                    <path class="stval"
                                                                        d="M95.4 214.4L56 245.5c-4.3 3.4-5.1 9.7-1.6 14 2 2.5 4.9 3.8 7.8 3.8 2.2 0 4.4-0.7 6.2-2.2l39.4-31.2c4.3-3.4 5.1-9.7 1.6-14S99.8 210.9 95.4 214.4L95.4 214.4z" />
                                                                    <path class="stval"
                                                                        d="M158.4 185.9l7.8 7.5c1.9 1.9 4.4 2.8 7 2.8 2.6 0 5.2-1 7.2-3 3.8-4 3.7-10.3-0.2-14.1l-7.6-7.4c-23.2-24.2-23.2-63.4 0.1-87.6 18.5-19.2 51.3-18.1 73.1 2.3l0.9 0.9c6.3 5.9 10.4 9.7 16.8 9.7s10.6-3.9 16.8-9.7l0.9-0.9c21.8-20.4 54.6-21.4 73.1-2.3 20.3 21 22.9 54.8 7 79 -9 0.3-18.2 3.6-25.7 10 -16.1-13.6-39.6-13.3-53.4 0.9 -16.5 17-16.5 44.8 0 61.8 0.1 0.1 0.2 0.2 0.2 0.2l2.7 2.6 -21.7 20.9 -18.7-18.1c-4-3.8-10.3-3.7-14.1 0.3 -3.8 4-3.7 10.3 0.3 14.1l25.7 24.8c1.9 1.9 4.4 2.8 6.9 2.8 2.5 0 5-0.9 6.9-2.8l29.1-28.1 29.2 28.1c1.9 1.9 4.4 2.8 6.9 2.8 2.5 0 5-0.9 6.9-2.8l46.2-44.6c0.1-0.1 0.2-0.2 0.3-0.3 16.4-17 16.4-44.7 0-61.8 -2.3-2.3-4.8-4.3-7.5-5.9 7.3-13.3 10.8-28.6 10.1-44.2 -0.9-20.3-9.1-39.4-22.9-53.8 -13.2-13.6-31.2-20.7-50.8-19.9 -18.5 0.8-36.4 8.4-50.4 21.4l-0.9 0.9c-1.1 1-2.2 2.1-3.2 2.9 -1-0.9-2.1-1.9-3.2-2.9l-0.9-0.9c-14-13.1-31.9-20.7-50.4-21.4 -19.6-0.8-37.6 6.3-50.8 19.9 -30.8 31.9-30.8 83.7 0 115.5C158.3 185.7 158.3 185.8 158.4 185.9L158.4 185.9zM374.8 221.7l-39.1 37.8 -39.2-37.8c-8.8-9.2-8.8-24.7 0.1-33.9 7.5-7.8 19.9-5.4 27.1 1.3l0.4 0.4c3.3 3.1 6.4 6 11.5 6 5.1 0 8.2-2.9 11.5-6l0.5-0.4c7.1-6.7 19.5-9.1 27.1-1.3C383.5 197 383.6 212.5 374.8 221.7L374.8 221.7z" />
                                                                    <path class="stval"
                                                                        d="M397 323.1l-76.9 39.5c-6.6-6.7-15.7-10.9-25.9-10.9h-52.8c-2.8 0-3.5-0.2-3.6-0.2 -0.4-0.2-1.7-1.5-2.8-2.5l-0.5-0.5c-42.8-40.3-79-37.7-120.1-21.5 -6.5 2.6-6.6 2.6-13.1 2.9l-11.9 0c-3.5-10.3-13.2-17.6-24.6-17.6H26c-14.4 0-26 11.7-26 26v101.9c0 14.4 11.7 26 26 26h38.8c11.4 0 21.2-7.4 24.7-17.7h21.6c1.9 0 1.9 0 4 0.6 0.8 0.2 1.8 0.5 3.1 0.9l100.4 26.9c4.4 1.2 8.5 2.4 12.4 3.5 12.9 3.7 23.7 6.9 35 6.9 12.8 0 26.1-4 43.7-15.8 0.1-0.1 0.2-0.1 0.3-0.2L434 383.2c16.1-11.5 20.8-32.2 10.9-48.2C435.2 319.2 414.6 314.1 397 323.1L397 323.1zM70.9 440.1c0 3.3-2.7 6-6 6H26c-3.3 0-6-2.8-6-6V338.3c0-3.3 2.8-6 6-6h38.8c3.3 0 6 2.7 6 6V440.1zM422.4 366.9l-123.7 88.1c-25.3 16.9-36.1 13.7-62 6.2 -4-1.2-8.2-2.4-12.8-3.6l-100.4-26.9c-1.2-0.3-2.1-0.6-2.9-0.8 -3.7-1-5-1.4-9.5-1.4H90.9v-78.6h10.2c0.1 0 0.3 0 0.4 0l0.8 0c7.9-0.3 10.3-0.6 19.6-4.3 35.9-14.2 63.7-15.8 99.1 17.5l0.5 0.5c6 5.7 9.7 8.1 20.1 8.1h52.8c6 0 11.2 3.3 14 8.1 0 0 0 0 0 0.1 0.1 0.2 0.2 0.3 0.3 0.5 1.2 2.2 1.9 4.8 1.9 7.5 0 8.9-7.3 16.2-16.2 16.2h-85.5c-5.5 0-10 4.5-10 10s4.5 10 10 10h85.5c20 0 36.2-16.2 36.2-36.2 0-2.6-0.3-5.2-0.8-7.7l76.5-39.3c7.1-3.7 16.9-3.3 21.7 4.6C432.1 352.4 429.8 361.6 422.4 366.9L422.4 366.9z" />
                                                                    <path class="stval"
                                                                        d="M200.9 208.5c-4.9 2.5-6.9 8.5-4.4 13.4l0 0.1c1.8 3.5 5.3 5.4 8.9 5.4 1.5 0 3.1-0.4 4.5-1.1 4.9-2.5 6.9-8.6 4.4-13.5C211.9 207.9 205.8 206 200.9 208.5z" />
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
                        <li class="nav-item dd-menu-lg">
                            <a href="javascript:void(0);">programs</a>
                            <div class="step-second-menu st-programs">
                                <div class="row h-100 g-0">
                                    <div class="col-xl-9 col-lg-12">
                                        <div class="menuTabs">
                                            <ul class="nav nav-tabs">
                                                <li class="nav-item">
                                                    <a class="nav-link active" href="#">
                                                    <strong>Regular <i class="fas fa-arrow-circle-down ms-1"></i></strong>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a rel="nofollow" href="https://www.cuidol.in" class="nav-link">
                                                    <small>Click here to view Programs of</small>
                                                    <strong>Open &amp; Distance Learning (ODL) <i class="fas fa-external-link-alt ms-1"></i></strong>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a rel="nofollow" href="https://www.onlinecu.in" class="nav-link">
                                                    <small>Click here to view Programs of</small>
                                                    <strong>Online Learning (OL) <i class="fas fa-external-link-alt ms-1"></i></strong>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="row">
                                                    <div class="col-xl-6">
                                                        <ul class="list-unstyled p-0 m-0">
                                                            <li><a href="/engineering/">Engineering</a>
                                                            </li>
                                                            <li><a href="/management/">Management
                                                                (BBA/MBA)</a>
                                                            </li>
                                                            <li><a href="/computing/">Computing (BCA/ MCA)</a>
                                                            </li>
															<li><a
                                                                href="/hotel-management-and-tourism/bsc-airline-and-airport-management.php">Airlines
                                                                &amp; Airport Management</a>
                                                            </li>
                                                            <li><a href="/animation-and-multimedia/">Animation
                                                                &amp; Multimedia</a>
                                                            </li>
															<li><a href="/applied-health-sciences/">Allied
                                                                Health Sciences</a>
                                                            </li>
															<li><a
                                                                href="/architecture-and-design/">Architecture</a>
                                                            </li>
															<li><a href="/liberal-arts-and-humanities/">Arts
                                                                &amp; Humanities</a>
                                                            </li>
															<li><a href="/basic-sciences/">Basic
                                                                Sciences</a>
                                                            </li>
															<li><a
                                                                href="/liberal-arts-and-humanities/bachelor-of-arts-liberal-arts.php">BA
                                                                (Hons.) Liberal Arts</a>
                                                            </li>
															<li><a href="/engineering/be-artificial-intelligence-and-data-science.php">B.E. (Artificial Intelligence and Data Science)</a>
                                                            </li>
															<li><a href="/engineering/be-robotics-automation.php">B.E. (Robotics and Automation)</a>
                                                            </li>
															<li><a href="/engineering/be-industrial-internet-of-things.php">B.E. (Industrial Internet of Things)</a>
                                                            </li>
															<li><a
                                                                href="/biotechnology/">Biotechnology & Biosciences</a>
                                                            </li>
															<!-- <li><a
                                                                href="/hotel-management-and-tourism/ihm-chandigarh-university.php">NCHMCT
                                                                Hospitality Program</a>
                                                            </li> -->
                                                        </ul>
                                                    </div>
                                                    <div class="col-xl-6">
                                                        <ul class="list-unstyled p-0 m-0">
                                                            <li><a href="/basic-sciences/">Chemistry/ Physics/ Mathematics</a>
                                                            </li>
															<li><a href="/commerce/">Commerce (B.Com/
                                                                M.Com)</a>
                                                            </li>
															<li><a
                                                                href="/hotel-management-and-tourism/bsc-culinary-arts.php">Culinary
                                                                Sciences</a>
                                                            </li>
															<li><a
                                                                href="/basic-sciences/msc-data-sciences.php">Data
                                                                Science</a>
                                                            </li>
															<li><a href="/commerce/">Economics</a></li>
															<li><a
                                                                href="/teachers-training-and-research/">Education</a>
                                                            </li>
															<li><a href="/design/bachelor-of-design-fashion.php">Fashion
                                                                &amp; Design</a>
                                                            </li>
															<li><a href="/design/fine-arts.php">Fine
                                                                Arts</a>
                                                            </li>
															<li><a
                                                                href="/applied-health-sciences/msc-in-forensic-and-toxicology.php">Forensic Sciences</a>
                                                            </li>
															<li><a href="/hotel-management-and-tourism/">Hotel
                                                                &amp; Hospitality Management</a>
                                                            </li>
															<li><a href="/IBM">IBM Specialized
                                                                CSE Programs</a>
                                                            </li>
															<li><a
                                                                href="/biotechnology/msc-industrial-microbiology.php">Industrial
                                                                Microbiology</a>
                                                            </li>
                                                            <li><a href="/design/bachelor-of-design.php">Industrial
                                                                Design</a>
                                                            </li>
                                                            <li><a href="/design/bachelor-of-design-interior.php">Interior
                                                                Design</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="row">
                                                    <div class="col-xl-6">
                                                        <ul class="list-unstyled p-0 m-0">
                                                            <li><a href="/legal-studies/">Legal
                                                                Studies</a>
                                                            </li>
															<li><a href="/management/mba-healthcare-and-life-sciences.php">MBA Healthcare and Life Sciences</a>
                                                            </li>
															<li><a
                                                                href="/management/MBA-tourism-and-hospitality-management.php">MBA
                                                                Tourism &amp; Hospitality</a>
                                                            </li>
															<li><a
                                                                href="/applied-health-sciences/bsc-in-mlt.php">Medical
                                                                Lab Technology</a>
                                                            </li>
															<li><a
                                                                href="/journalism-and-mass-communication/">Media
                                                                Studies</a>
                                                            </li>
															<li><a
                                                                href="/applied-health-sciences/bsc-nutrition-dietetics.php">Nutrition
                                                                &amp; Dietetics</a>
                                                            </li>
															<li><a
                                                                href="/applied-health-sciences/bachelor-of-optometry.php">Optometry</a>
                                                            </li>
															<li><a href="/pharma-sciences/">Pharma
                                                                Sciences</a>
                                                            </li>
															<li><a
                                                                href="/applied-health-sciences/bachelor-of-physiotherapy.php">Physiotherapy</a>
                                                            </li>
															<li><a
                                                                href="/liberal-arts-and-humanities/ma-psychology.php">Psychology</a>
                                                            </li>
															<li><a
                                                                href="/hotel-management-and-tourism/bsc-travel-and-tourism-management.php">Travel
                                                                and Tourism</a>
                                                            </li>
														<!--<li><a href="/agricultural-science/">Agricultural
                                                                Science</a>
                                                            </li>-->
                                                            <li><a href="/finance-and-accounting/bba-acca.php">BBA with <img data-src="/includes/assets/images/header-footer/acca-header-logo.webp" alt="BBA with ACCA" width="30px" class="lazyload"></a></li>
															<li><a href="/finance-and-accounting/bcom-acca.php">B.Com with <img data-src="/includes/assets/images/header-footer/acca-header-logo.webp" alt="B.Com with ACCA" width="30px" class="lazyload"></a></li>
                                                            <!--<li><a href="/nursing/">Nursing</a></li>-->
                                                        </ul>
                                                    </div>
                                                    <div class="col-xl-6">
                                                        <ul class="list-unstyled p-0 m-0">
                                                            <!--<li><a
                                                                href="/teachers-training-and-research/post-graduate-diploma-in-yoga-education.php">Yoga
                                                                Education</a>
                                                            </li>-->
                                                            <li><a href="/finance-and-accounting/mcom-acca.php">M.Com with <img data-src="/includes/assets/images/header-footer/acca-header-logo.webp" alt="M.Com with ACCA" width="30px" class="lazyload"></a></li>
                                                            <li><a
                                                                href="/management/mba-strategic-hr.php">MBA
                                                                with <img data-src="/includes/assets/images/header-footer/aon-logo.webp"
                                                                    alt="MBA with AON" width="36px"
                                                                    class="ptrans lazyload"></a>
                                                            </li>
															<li><a
                                                                href="/management/mba-data-science-and-artificial-intelligence.php">MBA
                                                                with <img data-src="/includes/assets/images/header-footer/sas-logo.webp"
                                                                    alt="MBA with SAS" style="margin-top: -3px;"
                                                                    width="30px" class="ptrans lazyload"></a>
                                                            </li>
                                                            <li><a href="/IBM/MBA-business-analytics.php">MBA
                                                                with <img data-src="/includes/assets/images/header-footer/IBM-logo.webp"
                                                                    alt="MBA with IBM" style="margin-top: -3px;"
                                                                    width="30px" class="ptrans lazyload"></a>
                                                            </li>
                                                            <li><a href="/IBM/">CSE with <img
                                                                data-src="/includes/assets/images/header-footer/IBM-logo.webp"
                                                                alt="MBA with IBM" style="margin-top: -3px;"
                                                                width="30px" class="ptrans lazyload"></a></li>
                                                            <li><a
                                                                href="/engineering/virtusa-me-cse-cloud-computing.php">ME
                                                                CSE Cloud<br> Computing with <img data-src="/includes/assets/images/header-footer/virtusa-logo.webp"
                                                                    alt="ME CSE with Virtusa"
                                                                    style="margin-top: -4px;" width="50px"
                                                                    class="ptrans lazyload"></a>
                                                            </li>
                                                            <li><a href="/bfe/">MBA with <img
                                                                data-src="/includes/assets/images/header-footer/SBI-logo.webp"
                                                                alt="MBA with SBI" style="margin-top: -3px;"
                                                                width="90px" class="ptrans lazyload"></a></li>
                                                            <li><a href="/TCS/">CSE with <img
                                                                data-src="/includes/assets/images/header-footer/TCS-logo.webp"
                                                                alt="MBA with TCS" style="margin-top: -1px;"
                                                                width="130px" class="ptrans lazyload"></a></li>
                                                            <li><a
                                                                href="/management/bba-business-analytics.php">BBA
                                                                with <img data-src="/includes/assets/images/header-footer/sas-logo.webp"
                                                                    alt="BBA with SAS" style="margin-top: -3px;"
                                                                    width="30px" class="ptrans lazyload"></a>
                                                            </li>
                                                            <li><a href="/management/mba-fintech.php">MBA
                                                                Fintech with <img
                                                                    data-src="/includes/assets/images/header-footer/nse-acadmey.webp"
                                                                    alt="MBA with Fintech" style="margin-top: -2px;"
                                                                    width="36px" class="ptrans lazyload"></a>
                                                            </li>
                                                            <li><a href="/management/MBA-logistics-and-supply-chain-management.php">MBA
                                                                Logistics and<br> Supply Chain Management<br> with <img
                                                                    data-src="/includes/assets/images/header-footer/cii-logo.webp"
                                                                    alt="MBA Logistics and Supply Chain Management with CII" style="margin-top: 0px;"
                                                                    width="60px" class="ptrans lazyload"></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row g-3">
                                            <div class="col-xl-6">
                                                <h4>Doctorate Programs</h4>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <ul class="list-unstyled p-0 m-0">
                                                            <li><a
                                                                href="/doctorate-programs/">Doctor
                                                                of Philosophy</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <ul class="list-unstyled p-0 m-0">
                                                            <li><a
                                                                href="/phd-me-admissions/ApplicationRegistration.aspx?Subject=fJAt3RX8ggEX//eDGysKyA==">Ph.D
                                                                Admissions</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <h4>Study Abroad Programs</h4>
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <ul class="list-unstyled p-0 m-0">
                                                            <li><a href="/studyabroad/">Canada</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <ul class="list-unstyled p-0 m-0">
                                                            <li><a href="/studyabroad/">USA</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <ul class="list-unstyled p-0 m-0">
                                                            <li><a href="/studyabroad/">Australia</a></li>
                                                        </ul>
                                                    </div>
                                                    <!--<div class="col-md-3">
                                                        <ul>
                                                          <li><a href="/studyabroad/">Italy</a></li>
                                                        </ul>
                                                        </div>-->
                                                </div>
                                            </div>
                                            <div class="col-md-12 d-block d-lg-none mt-3">
                                                <div class="row g-3">
                                                    <div class="col-lg-6">
                                                        <div class="card br-6 p-3">
                                                            <a href="https://www.cuidol.in/?utm_source=Website&utm_medium=cuchd" target="_blank"
                                                            class="position-relative text-dark text-uppercase"><small>Click here to view Programs
                                                            of</small><br> <b> Open &amp; Distance Learning
                                                            (ODL)<small><i
                                                                class="fas fa-external-link-alt ms-1"></i></small></b></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="card br-6 p-3">    
                                                        <a href="https://www.onlinecu.in/?utm_source=Website&utm_medium=cuchd" target="_blank"
                                                                class="position-relative text-dark text-uppercase"><small>Click here to view Programs
                                                                of </small><br><b>Online Learning (OL) <small><i
                                                                class="fas fa-external-link-alt ms-1"></i></small></b></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-12 pg-bg program-graphic d-none d-lg-block lazybg"
                                        style="background: url('/includes/assets/images/header-footer/lazy-program-dd-image.webp'); margin: -20px -20px -20px 20px; background-size: cover;" data-src="/includes/assets/images/header-footer/program-dd-image.webp">
                                        <div class="program-drop-down-graphic position-relative h-100">
                                            <h3>University with <span>Best Placements</span></h3>
                                            <div class="placement--ddNumbers progNos mt-3">
                                                <div class="row g-2">
                                                    <div class="col-4 col-xl-12">
                                                        <div class="card p-2">
                                                            <span>
                                                                <h4 id="plac-no"><span class="d-none"></span><?=@$placements?></h4>
                                                                <small>PLACEMENTS</small>
                                                            </span>
                                                        </div>
                                                        <p id="pyr">Offered in <span class="d-none"></span><?=@$year?><!--<br>(Highest in India)--></p>
                                                    </div>
<!--
                                                    <div class="col-4 col-xl-12">
                                                        <div class="card p-2">
                                                            <span>
                                                                <h4 id="plac-no"><span
                                                                    class="d-none"></span>9500+</h4>
                                                                <small>PLACEMENTS</small>
                                                            </span>
                                                        </div>
                                                        <p>Offered so far in <br>2023-24</p>
                                                    </div>
-->
                                                    <div class="col-4 col-xl-12">
                                                        <div class="card p-2">
                                                            <span>
                                                                <h4 id="high-pk"><span
                                                                    class="d-none"></span><?=@$highestpackage?> <sub>CR
                                                                    </sub>
                                                                </h4>
                                                                <small>INTERNATIONAL</small>
                                                            </span>
                                                        </div>
                                                        <p>Highest Package <br>Offered</p>
                                                    </div>
                                                    <div class="col-4 col-xl-12">
                                                        <div class="card p-2">
                                                            <span>
                                                                <h4 id="high-npk"><span
                                                                    class="d-none"></span><?=@$nationalpackage?> <sub>LPA</sub>
                                                                </h4>
                                                                <small>NATIONAL</small>
                                                            </span>
                                                            <!--<p>For CU <br>campus placements</p>-->
                                                        </div>
                                                        <p>Highest Package <br>Offered</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dd-menu-lg">
                            <a href="javascript:void(0);">Academics</a>
                            <div class="step-second-menu st-academics">
                                <div class="row g-0 h-100">
                                    <div class="col-lg-5">
                                        <h4>Academics</h4>
                                        <ul class="list-unstyled p-0 m-0">
                                            <li><a href="/academics/">Academics Overview</a></li>
                                            <li><a href="/academics/institutes.php">Institutes</a></li>
                                            <li><a href="/admissions/course-fee.php">Program (Courses)</a>
                                            </li>
                                            <li><a href="/academics/academic-calendar-odd.php">Academic
                                                Calendar</a>
                                            </li>
                                            <li><a href="/academics/list-of-holidays.php">List of
                                                Holidays</a>
                                            </li>
                                            <li><a href="/academics/teaching-practices.php">Teaching
                                                Practices</a>
                                            </li>
                                            <li><a href="/academics/system-of-evaluation.php">System of
                                                Evaluation</a>
                                            </li>
                                            <li><a href="/professional-bodies/index.php">Professional
                                                Bodies</a>
                                            </li>
                                            <li><a href="/professors-of-practice/index.php">Professors of
                                                Practice</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-7 d-none d-lg-block lazybg"
                                        style="background: url('/includes/assets/images/header-footer/lazy-about-dd-image.webp'); margin: -20px -20px -20px 20px;  background-size: cover;" data-src="/includes/assets/images/header-footer/about-dd-image.webp">
                                        <div class="drop-down-graphic position-relative h-100">
                                            <!--<h3>For your <span>Comprehensive</span> Development</h3>-->
                                            <div class="dd-graphic-cont position-absolute bottom-0">
                                                <div class="row g-0">
                                                    <div class="col-6 p-2 py-3 d-flex">
                                                        <div class="dd--title align-self-center mx-auto">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 512 512" width="44">
                                                                    <style type="text/css">
                                                                        .stval {
                                                                        fill: #FFFFFF;
                                                                        }
                                                                    </style>
                                                                    <path class="stval"
                                                                        d="M273.8 163h-5.8V93c0-4.5-3-8.5-7.4-9.6 -4.3-1.2-9 0.7-11.2 4.6l-14 23.7c-2.8 4.8-1.2 10.9 3.5 13.7 2.9 1.7 6.3 1.8 9.1 0.6V163h-5.8c-5.5 0-10 4.5-10 10s4.5 10 10 10h31.6c5.5 0 10-4.5 10-10S279.4 163 273.8 163z" />
                                                                    <path class="stval"
                                                                        d="M157.1 409h-21.7c12.4-12.8 25.8-30.8 25.8-48.9 0-18.6-12.5-31.1-31.1-31.1 -17.1 0-31.1 14-31.1 31.1 0 5.5 4.5 10 10 10s10-4.5 10-10c0-6.1 5-11.1 11.1-11.1 10 0 11.1 6.3 11.1 11.1 0 18.5-28.2 43.5-38.1 50.8 -3.5 2.6-4.9 7.1-3.6 11.2 1.4 4.1 5.2 6.9 9.5 6.9h48.1c5.5 0 10-4.5 10-10S162.6 409 157.1 409z" />
                                                                    <path class="stval"
                                                                        d="M407.6 359.1c0-16.5-13.4-29.9-29.9-29.9h-17.3c-5.5 0-10 4.5-10 10s4.5 10 10 10h17.3c5.5 0 10 4.5 10 10 0 5-3.7 9.1-8.5 9.8 -0.5 0-1 0-1.5 0h-17.3c-5.5 0-10 4.5-10 10s4.5 10 10 10h7c0.6 0.1 1.1 0.2 1.7 0.2h8.6c0.5 0 1 0 1.5 0 4.8 0.7 8.5 4.8 8.5 9.8 0 5.5-4.5 10-9.9 10h-17.3c-5.5 0-10 4.5-10 10s4.5 10 10 10h17.3c16.5 0 30-13.4 30-29.9 0-7.6-2.9-14.6-7.6-19.9C404.8 373.7 407.6 366.8 407.6 359.1z" />
                                                                    <path class="stval"
                                                                        d="M462 246h-83c6.3-8.4 10-18.7 10-30v-44.7c0-5.5-4.5-10-10-10s-10 4.5-10 10V216c0 16.5-13.5 30-30 30H173c-16.5 0-30-13.5-30-30V50c0-16.5 13.5-30 30-30h166c16.5 0 30 13.5 30 30v38c0 5.5 4.5 10 10 10s10-4.5 10-10V50c0-27.6-22.4-50-50-50H173c-27.6 0-50 22.4-50 50v166c0 11.3 3.7 21.6 10 30H50c-27.6 0-50 22.4-50 50v166c0 27.6 22.4 50 50 50h166c16.3 0 30.9-7.9 40-20 9.1 12.2 23.7 20 40 20h166c27.6 0 50-22.4 50-50V296C512 268.4 489.6 246 462 246zM246 462c0 16.5-13.5 30-30 30H50c-16.5 0-30-13.5-30-30V296c0-16.5 13.5-30 30-30h166c16.5 0 30 13.5 30 30V462zM256 266c0 0 0 0 0 0h0.1C256 266 256 266 256 266zM492 462c0 16.5-13.5 30-30 30H296c-16.5 0-30-13.5-30-30V296c0-16.5 13.5-30 30-30h166c16.5 0 30 13.5 30 30V462z" />
                                                                    <path class="stval"
                                                                        d="M386.1 125.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1.1-7.1 2.9c-1.9 1.9-2.9 4.4-2.9 7.1s1.1 5.2 2.9 7.1S376.4 143 379 143s5.2-1.1 7.1-2.9c1.9-1.9 2.9-4.4 2.9-7.1S387.9 127.8 386.1 125.9z" />
                                                                </svg>
                                                            </span>
                                                            Flexible Choice Based Credit System
                                                        </div>
                                                    </div>
                                                    <div class="col-6 p-2 py-3 d-flex">
                                                        <div class="dd--title align-self-center mx-auto">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 512 512" width="40">
                                                                    <style type="text/css">
                                                                        .stval {
                                                                        fill: #FFFFFF;
                                                                        }
                                                                    </style>
                                                                    <rect x="373.3" y="373.3" class="stval" width="42.7"
                                                                        height="21.3" />
                                                                    <rect x="373.3" y="245.3" class="stval" width="42.7"
                                                                        height="21.3" />
                                                                    <rect x="85.3" y="64" class="stval" width="106.7"
                                                                        height="21.3" />
                                                                    <rect x="85.3" y="106.7" class="stval" width="21.3"
                                                                        height="21.3" />
                                                                    <rect x="128" y="106.7" class="stval" width="21.3"
                                                                        height="21.3" />
                                                                    <path class="stval"
                                                                        d="M423.5 88.5L338.2 3.1c-2-2-4.7-3.1-7.5-3.1H53.3c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h192v-21.3h-192c-5.9 0-10.7-4.8-10.7-10.7V32c0-5.9 4.8-10.7 10.7-10.7h272.9l79.1 79.1v6.3h21.3V96C426.7 93.2 425.5 90.5 423.5 88.5z" />
                                                                    <path class="stval"
                                                                        d="M352 85.3c-5.9 0-10.7-4.8-10.7-10.7v-64H320v64c0 17.7 14.3 32 32 32h21.3V85.3H352z" />
                                                                    <rect x="288" y="426.7" class="stval" width="42.7"
                                                                        height="21.3" />
                                                                    <path class="stval"
                                                                        d="M339.5 196.8l-21.3-32c-0.6-0.8-1.4-1.6-2.2-2.2 -4.9-3.7-11.8-2.7-15.5 2.2l-21.3 32c-1.2 1.8-1.8 3.8-1.8 5.9v298.7c0 5.9 4.8 10.7 10.7 10.7h42.7c5.9 0 10.7-4.8 10.7-10.7V202.7C341.3 200.6 340.7 198.5 339.5 196.8zM320 490.7h-21.3v-284.8l10.7-16 10.7 16L320 490.7 320 490.7z" />
                                                                    <path class="stval"
                                                                        d="M469.3 128H384c-11.8 0-21.3 9.6-21.3 21.3v341.3c0 11.8 9.6 21.3 21.3 21.3h85.3c11.8 0 21.3-9.5 21.3-21.3V149.3C490.7 137.6 481.1 128 469.3 128zM469.3 490.7H384V149.3h85.3V490.7z" />
                                                                    <rect x="373.3" y="309.3" class="stval" width="64"
                                                                        height="21.3" />
                                                                    <rect x="373.3" y="181.3" class="stval" width="64"
                                                                        height="21.3" />
                                                                    <rect x="373.3" y="437.3" class="stval" width="64"
                                                                        height="21.3" />
                                                                    <path class="stval"
                                                                        d="M149.3 160h-42.7c-11.8 0-21.3 9.6-21.3 21.3V224c0 11.8 9.6 21.3 21.3 21.3h42.7c11.8 0 21.3-9.5 21.3-21.3v-42.7C170.7 169.6 161.1 160 149.3 160zM149.3 224h-42.7v-42.7h42.7V224z" />
                                                                    <path class="stval"
                                                                        d="M149.3 266.7h-42.7c-11.8 0-21.3 9.6-21.3 21.3v42.7c0 11.8 9.6 21.3 21.3 21.3h42.7c11.8 0 21.3-9.5 21.3-21.3V288C170.7 276.2 161.1 266.7 149.3 266.7zM149.3 330.7h-42.7V288h42.7V330.7z" />
                                                                    <path class="stval"
                                                                        d="M149.3 373.3h-42.7c-11.8 0-21.3 9.6-21.3 21.3v42.7c0 11.8 9.6 21.3 21.3 21.3h42.7c11.8 0 21.3-9.5 21.3-21.3v-42.7C170.7 382.9 161.1 373.3 149.3 373.3zM149.3 437.3h-42.7v-42.7h42.7V437.3z" />
                                                                    <rect x="202.7" y="170.7" class="stval" width="42.7"
                                                                        height="21.3" />
                                                                    <rect x="202.7" y="213.3" class="stval" width="53.3"
                                                                        height="21.3" />
                                                                    <rect x="202.7" y="277.3" class="stval" width="42.7"
                                                                        height="21.3" />
                                                                    <rect x="202.7" y="320" class="stval" width="53.3"
                                                                        height="21.3" />
                                                                    <rect x="202.7" y="384" class="stval" width="42.7"
                                                                        height="21.3" />
                                                                    <rect x="202.7" y="426.7" class="stval" width="53.3"
                                                                        height="21.3" />
                                                                </svg>
                                                            </span>
                                                            70+ <br>Electives
                                                        </div>
                                                    </div>
                                                    <div class="col-6 p-2 py-3 d-flex">
                                                        <div class="dd--title align-self-center mx-auto">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 512 512" width="40">
                                                                    <style type="text/css">
                                                                        .stval {
                                                                        fill: #FFFFFF;
                                                                        }
                                                                    </style>
                                                                    <path class="stval"
                                                                        d="M256 51.2c4.7 0 8.5-3.8 8.5-8.5V8.5c0-4.7-3.8-8.5-8.5-8.5 -4.7 0-8.5 3.8-8.5 8.5v34.1C247.5 47.4 251.3 51.2 256 51.2z" />
                                                                    <path class="stval"
                                                                        d="M150.5 39.1l17.1 29.6c2.3 4.1 7.5 5.5 11.6 3.2 4.1-2.3 5.5-7.5 3.2-11.6 0 0 0-0.1-0.1-0.1l-17.1-29.5c-2.3-4.1-7.5-5.5-11.6-3.2 -4.1 2.3-5.5 7.5-3.2 11.6C150.4 39 150.5 39.1 150.5 39.1z" />
                                                                    <path class="stval"
                                                                        d="M81.7 114c0 0 0.1 0 0.1 0.1l29.6 17.1c4.1 2.4 9.3 1 11.7-3 2.4-4.1 1-9.3-3-11.7 0 0-0.1 0-0.1-0.1L90.3 99.3c-4.1-2.4-9.3-1-11.7 3.1C76.2 106.4 77.6 111.6 81.7 114z" />
                                                                    <path class="stval"
                                                                        d="M102.4 204.8c0-4.7-3.8-8.5-8.5-8.5H59.7c-4.7 0-8.5 3.8-8.5 8.5 0 4.7 3.8 8.5 8.5 8.5h34.1C98.6 213.3 102.4 209.5 102.4 204.8z" />
                                                                    <path class="stval"
                                                                        d="M111.4 278.4c0 0-0.1 0-0.1 0.1l-29.5 17.1c-4.1 2.3-5.5 7.5-3.2 11.6 2.3 4.1 7.5 5.5 11.6 3.2 0 0 0.1 0 0.1-0.1l29.6-17.1c4.1-2.3 5.5-7.5 3.2-11.6C120.7 277.5 115.5 276.1 111.4 278.4z" />
                                                                    <path class="stval"
                                                                        d="M430.3 295.6c0 0-0.1 0-0.1-0.1l-29.5-17.1c-4.1-2.4-9.3-1-11.7 3 -2.4 4.1-1 9.3 3 11.7 0 0 0.1 0 0.1 0.1l29.6 17.1c4.1 2.4 9.3 1 11.7-3C435.8 303.2 434.4 298 430.3 295.6z" />
                                                                    <path class="stval"
                                                                        d="M452.3 196.3h-34.1c-4.7 0-8.5 3.8-8.5 8.5 0 4.7 3.8 8.5 8.5 8.5h34.1c4.7 0 8.5-3.8 8.5-8.5C460.8 200.1 457 196.3 452.3 196.3z" />
                                                                    <path class="stval"
                                                                        d="M396.4 132.3c1.5 0 3-0.4 4.3-1.1l29.6-17.1c4.1-2.3 5.5-7.5 3.2-11.6 -2.3-4.1-7.5-5.5-11.6-3.2 0 0-0.1 0-0.1 0.1l-29.5 17.1c-4.1 2.4-5.5 7.6-3.1 11.7C390.6 130.6 393.4 132.3 396.4 132.3z" />
                                                                    <path class="stval"
                                                                        d="M332.8 71.8C332.8 71.8 332.8 71.8 332.8 71.8c4.1 2.4 9.3 1 11.7-3.1 0 0 0 0 0 0l17.1-29.5c2.4-4.1 1-9.3-3-11.7 -4.1-2.4-9.3-1-11.7 3 0 0 0 0.1-0.1 0.1l-17.1 29.6C327.3 64.2 328.7 69.4 332.8 71.8z" />
                                                                    <path class="stval"
                                                                        d="M273.1 341.3c4.7 0 8.5-3.8 8.5-8.5v-93.9h17.1c18.9 0 34.1-15.3 34.1-34.1s-15.3-34.1-34.1-34.1c-18.8 0-34.1 15.3-34.1 34.1v17.1h-17.1V204.8c0-18.8-15.3-34.1-34.1-34.1s-34.1 15.3-34.1 34.1 15.3 34.1 34.1 34.1h17.1v93.9c0 4.7 3.8 8.5 8.5 8.5 4.7 0 8.5-3.8 8.5-8.5v-93.9h17.1v93.9C264.5 337.5 268.4 341.3 273.1 341.3zM281.6 204.8c0-9.4 7.6-17.1 17.1-17.1 9.4 0 17.1 7.6 17.1 17.1 0 9.4-7.6 17.1-17.1 17.1H281.6V204.8zM230.4 221.9h-17.1c-9.4 0-17.1-7.6-17.1-17.1 0-9.4 7.6-17.1 17.1-17.1s17.1 7.6 17.1 17.1V221.9z" />
                                                                    <path class="stval"
                                                                        d="M262.6 68.4c-75.3-3.6-139.3 54.5-142.9 129.8 -2.1 43.1 16.4 84.7 49.8 112.1 6 4.7 9.6 11.9 9.7 19.5v20c0 10.8 6.9 20.4 17.1 24V384c0 6.3 2.4 12.4 6.7 17.1 -8.9 9.7-8.9 24.5 0 34.1 -9.5 10.4-8.7 26.5 1.7 36 4.7 4.3 10.9 6.7 17.3 6.7 4.6 0.1 8.4-3.5 8.5-8.1 0.1-1.8-0.5-3.5-1.5-5 -0.3-0.5-0.6-1-1-1.5 -0.7-0.6-1.5-1.2-2.4-1.5 -0.2-0.1-0.5-0.2-0.7-0.3 -0.9-0.3-1.8-0.5-2.7-0.5 -0.1 0-0.2 0-0.2 0 -4.7 0-8.5-3.8-8.5-8.5 0-4.7 3.8-8.5 8.5-8.5H256c4.7 0 8.5-3.8 8.5-8.5 0-4.7-3.8-8.5-8.5-8.5h-34.1c-4.7 0-8.5-3.8-8.5-8.5 0-4.7 3.8-8.5 8.5-8.5H256c4.7 0 8.5-3.8 8.5-8.5 0-4.7-3.8-8.5-8.5-8.5h-34.1c-4.7 0-8.5-3.8-8.5-8.5v-8.5H256c4.7 0 8.5-3.8 8.5-8.5 0-4.7-3.8-8.5-8.5-8.5h-51.2c-4.7 0-8.5-3.8-8.5-8.5v-20c-0.1-12.8-6-24.8-16-32.7 -51-41.9-58.3-117.2-16.4-168.1 24-29.2 60.3-45.3 98-43.5 63.1 3.8 112.6 55.4 113.7 118.6 0.3 36.3-16 70.8-44.3 93.6 -9.9 8.2-15.6 20.4-15.4 33.2v19c0 4.7-3.8 8.5-8.5 8.5h-25.6c-4.7 0-8.5 3.8-8.5 8.5 0 4.7 3.8 8.5 8.5 8.5h17.1V384c0 4.7-3.8 8.5-8.5 8.5h-8.5c-4.7 0-8.5 3.8-8.5 8.5 0 4.7 3.8 8.5 8.5 8.5h8.5c4.7 0 8.5 3.8 8.5 8.5 0 4.7-3.8 8.5-8.5 8.5h-8.5c-4.7 0-8.5 3.8-8.5 8.5 0 4.7 3.8 8.5 8.5 8.5h8.5c4.7 0 8.5 3.8 8.5 8.5 0 4.7-3.8 8.5-8.5 8.5h-42.7c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h32.7c-4.7 13.3-19.3 20.3-32.7 15.6 -4.1-1.4-7.7-3.9-10.6-7.1 -3.1-3.5-8.5-3.8-12-0.7 -3.5 3.1-3.8 8.5-0.7 12.1 15.6 17.6 42.5 19.2 60.1 3.6 7.3-6.4 12.1-15.2 13.7-24.8 13.4-4.2 20.8-18.4 16.6-31.8 -1.1-3.5-3-6.8-5.5-9.6 8.9-9.6 8.9-24.5 0-34.1 4.3-4.7 6.6-10.7 6.7-17.1v-10.1c10.2-3.6 17-13.2 17.1-24v-19c-0.1-7.7 3.2-15 9.1-19.9 32.4-26 51-65.4 50.7-107C391.3 131.8 334.7 72.7 262.6 68.4z" />
                                                                </svg>
                                                            </span>
                                                            Advanced Technologies & Integration
                                                        </div>
                                                    </div>
                                                    <div class="col-6 p-2 py-3 d-flex">
                                                        <div class="dd--title align-self-center mx-auto">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 512 512" width="40">
                                                                    <style type="text/css">
                                                                        .stval {
                                                                        fill: #FFFFFF;
                                                                        }
                                                                    </style>
                                                                    <rect x="117.3" y="437.3" class="stval"
                                                                        width="277.3" height="21.3" />
                                                                    <path class="stval"
                                                                        d="M309.3 0H202.7C196.8 0 192 4.8 192 10.7v42.7c0 5.9 4.8 10.7 10.7 10.7h106.7c5.9 0 10.7-4.8 10.7-10.7V10.7C320 4.8 315.2 0 309.3 0zM298.7 42.7h-85.3V21.3h85.3V42.7z" />
                                                                    <path class="stval"
                                                                        d="M501.3 42.7H10.7C4.8 42.7 0 47.4 0 53.3V96c0 5.9 4.8 10.7 10.7 10.7H192V85.3H21.3V64h469.3v21.3H320v21.3h181.3c5.9 0 10.7-4.8 10.7-10.7V53.3C512 47.4 507.2 42.7 501.3 42.7z" />
                                                                    <path class="stval"
                                                                        d="M469.3 128v245.3h-74.7c-5.9 0-10.7 4.8-10.7 10.7v117.3c0 5.9 4.8 10.7 10.7 10.7h42.7c5.9 0 10.7-4.8 10.7-10.7V394.7h21.3c11.8 0 21.3-9.5 21.3-21.3V128H469.3zM426.7 490.7h-21.3v-96h21.3V490.7z" />
                                                                    <path class="stval"
                                                                        d="M117.3 373.3H42.7V128H21.3v245.3c0 11.8 9.6 21.3 21.3 21.3H64v106.7c0 5.9 4.8 10.7 10.7 10.7h42.7c5.9 0 10.7-4.8 10.7-10.7V384C128 378.1 123.2 373.3 117.3 373.3zM106.7 490.7H85.3v-96h21.3L106.7 490.7 106.7 490.7z" />
                                                                    <path class="stval"
                                                                        d="M341.3 352H170.7c-5.9 0-10.7 4.8-10.7 10.7v42.7c0 5.9 4.8 10.7 10.7 10.7h170.7c5.9 0 10.7-4.8 10.7-10.7v-42.7C352 356.8 347.2 352 341.3 352zM330.7 394.7H181.3v-21.3h149.3L330.7 394.7 330.7 394.7z" />
                                                                    <rect x="117.3" y="373.3" class="stval" width="53.3"
                                                                        height="21.3" />
                                                                    <rect x="341.3" y="373.3" class="stval" width="53.3"
                                                                        height="21.3" />
                                                                    <polygon class="stval"
                                                                        points="41.6 270.9 41.6 249.6 -23.2 249.6 -23.2 184.8 -44.5 184.8 -44.5 249.6 -109.3 249.6 -109.3 270.9 -44.5 270.9 -44.5 335.7 -23.2 335.7 -23.2 270.9 " />
                                                                    <rect x="325.3" y="159.6"
                                                                        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -41.1191 295.3819)"
                                                                        class="stval" width="21.3" height="75.4" />
                                                                    <path class="stval"
                                                                        d="M408.5 163.1l-53.3 53.3c-2 2-3.1 4.7-3.1 7.5v64h21.3v-59.6l50.2-50.2L408.5 163.1z" />
                                                                    <rect x="245.3" y="181.3" class="stval" width="21.3"
                                                                        height="85.3" />
                                                                    <rect x="213.3" y="213.3" class="stval" width="85.3"
                                                                        height="21.3" />
                                                                </svg>
                                                            </span>
                                                            Project based & Experiential Learning
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dd-menu-lg">
                            <a href="javascript:void(0);">admissions</a>
                            <div class="step-second-menu st-admissions">
                                <div class="row">
                                    <div class="col-xl-4 col-lg-6">
                                        <h4>Job Oriented Programs</h4>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <ul class="list-unstyled p-0 m-0">
                                                    <li><a href="/admissions/after12th.php">After 12th</a>
                                                    </li>
                                                    <li><a href="/admissions/aftergraduation.php">After
                                                        Graduation</a>
                                                    </li>
                                                    <li><a href="/admissions/LEET-programs.php">Leet
                                                        Programs</a>
                                                    </li>
                                                    <li><a href="/admissions/specialized-programs.php">Specialized
                                                        Programs</a>
                                                    </li>
                                                    <li><a href="/admissions/integrated-programs.php">Integrated
                                                        Programs</a>
                                                    </li>
                                                    <li><a href="/admissions/afterpostgraduation.php">After
                                                        Post Graduation</a>
                                                    </li>
                                                    <li><a href="/admissions/cu-advantages.php">CU Advantages</a>
                                                    </li>
													<li><a href="/abet/">ABET Engineering Accreditation</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-8 col-lg-6">
                                        <h4>Admission</h4>
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <ul class="list-unstyled p-0 m-0">
                                                    <li><a href="/admissions/">Overview</a></li>
                                                    <li><a href="/admissions/course-fee.php">Course
                                                        Fee</a>
                                                    </li>
                                                    <li><a href="/admissions/how-to-apply.php">How to
                                                        Apply?</a>
                                                    </li>
                                                    <li><a href="/admissions/admission-criteria.php">Admission
                                                        Criteria</a>
                                                    </li>
                                                    <li><a href="/scholarship/">CU Scholarship</a></li>
                                                    <li><a href="/admissions/education-loan.php">Education
                                                        Loan</a>
                                                    </li>
                                                    <!--<li><a href="https://aid.cuchd.in/" target="_blank">Financial
                                                        Aid</a>
                                                    </li>-->
                                                    <li><a href="/student-services/hostel-facility.php">Hostel
                                                        Fee</a>
                                                    </li>
													<li><a href="/admissions/admissions-status.php">Admissions Status</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-xl-6">
                                                <ul class="list-unstyled p-0 m-0">
                                                    <li><a href="http://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd"
                                                        target="_blank">National Admissions</a></li>
                                                    <li><a href="/international/international.php">International
                                                        Admissions</a>
                                                    </li>
                                                    <!--<li><a href="http://www.cuidol.in/apply.aspx?utm_source=Website&utm_medium=cuchd"
                                                        target="_blank">Distance Education Admissions</a></li>
                                                    <li><a href="https://www.onlinecu.in/index.php?utm_source=Website&utm_medium=cuchd"
                                                        target="_blank">Online Admissions</a></li>-->
                                                    <li><a href="/contact/index.php#ad-off">Admission
                                                        Offices</a>
                                                    </li>
                                                    <li><a href="/contact/">Visit the Campus</a></li>
                                                    <li><a href="/migration/">Migration Policy</a></li>
                                                    <li><a href="/refund/">Refund Policy</a></li>
													<li><a href="/orientation-schedule-2023/index.php">Orientation
                                                        Schedule</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr class="mb-0 d-none d-lg-block">
                                <div class="d-none d-lg-block" style="margin: 0 -20px 0 -20px;">
                                    <div class="redbox-applynow position-relative blue-overlay lazybg" style="background-image: url(/includes/assets/images/header-footer/lazy-unique3-bg.webp);" data-src="/includes/assets/images/header-footer/unique3-bg.webp">
                                        <div class="position-relative">
                                            <h3>Unlock your Career Goals</h3>
                                            <div class="row g-0">
                                                <div class="col-4 p-2 py-3 d-flex">
                                                    <div class="dd--title align-self-center mx-auto">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480"
                                                                width="44">
                                                                <style type="text/css">
                                                                    .stval {
                                                                    fill: #FFFFFF;
                                                                    }
                                                                </style>
                                                                <path class="stval"
                                                                    d="M441.9 280.3c-1.1-0.3-2.2-0.3-3.4-0.1l-78.6 14.3v-38.4c0-4.4-3.6-8-8-8h-48c-2.1 0-4.2 0.8-5.7 2.3l-29.7 29.7h-49.4l-29.7-29.7c-1.5-1.5-3.5-2.3-5.7-2.3h-48c-4.4 0-8 3.6-8 8v38.1l-75.5-16.5c-3-0.9-6-1.5-9.1-2 -4.4-0.6-8.4 2.4-9.1 6.7 -0.6 4.2 2.1 8.1 6.2 9l8 1.8c9.8 3 18.4 9.1 24.6 17.3 2.3 3.1 4.2 6.5 5.7 10l-29.3-5.9c-2.3-1-4.8-1.7-7.3-2.1 -20.2-2.9-38.9 11.1-41.8 31.3 0 0 0 0 0 0.1 -3.4 24.2 13.4 46.5 37.5 50 2.5 0.4 5 0.5 7.6 0.5 1.1 0 2.1-0.2 3.2-0.3v0.3l87-8 -37.6 40.3c-3 3.2-2.8 8.3 0.4 11.3 1.5 1.4 3.5 2.2 5.5 2.2h24v24c0 4.4 3.6 8 8 8 2.1 0 4.2-0.8 5.7-2.3l77.7-77.7h49.4l77.7 77.7c1.5 1.5 3.5 2.3 5.7 2.3 1.1 0 2.1-0.2 3.1-0.6 3-1.2 4.9-4.2 4.9-7.4v-24h24c4.4 0 8-3.6 8-8 0-2-0.8-4-2.2-5.5l-38.1-40.8 87.7 6.3c0.2 0 0.4 0 0.6 0 0.7 0 1.3-0.1 1.9-0.2 13.2-3.3 38.1-19.2 38.1-55.8S455.1 283.5 441.9 280.3zM35.2 346.6L35.2 346.6c0.3-1.9 1.9-3.3 3.8-3.3 0.2 0 0.4 0 0.5 0l2.1-14.8c7.5 2 12.3 9.2 11.2 16.9 -0.8 5.8-6.1 9.8-11.9 8.9C37.2 353.8 34.6 350.4 35.2 346.6zM82.4 346.3c-2.9 20.4-21.8 34.5-42.1 31.6h0c-15.4-2.2-26.1-16.5-23.9-31.9 1.2-8.3 7.2-15 15.2-17.3 -6.5 2.7-11.2 8.6-12.2 15.6 -1.8 12.5 6.9 24 19.4 25.8 14.5 2.1 27.9-8 30-22.5 0 0 0 0 0 0 0.6-4.4 0.3-9-1-13.3l15.1 3C82.9 340.4 82.8 343.4 82.4 346.3zM86.7 374.7c6.1-7.5 10.1-16.5 11.5-26.1 2.4-16.7-1.9-33.7-11.9-47.3l41.7 9.1v33.6c0 4.4 3.6 8 8 8h31.7l-15.6 16.7L86.7 374.7zM208 380.7l-64 64v-12.7c0-4.4-3.6-8-8-8h-13.6l37.3-39.9 1.1-0.1 -0.1-0.9 47.4-50.8V380.7zM208 308.7l-27.3 27.3h-36.7v-72h36.7l27.3 27.3V308.7zM264 312v64h-40v-80h40V312zM280 291.3l27.3-27.3h36.7v72h-36.7l-27.3-27.3V291.3zM365.6 424h-13.6c-4.4 0-8 3.6-8 8v12.7l-64-64v-48.4l47.5 50.9 -0.1 0.8 0.9 0.1L365.6 424zM439.1 375.9l-103.4-7.4 -15.4-16.5H352c4.4 0 8-3.6 8-8v-33.3l79.5-14.4c5.4 2 24.5 11 24.5 39.8C464 365.5 444 374.2 439.1 375.9z" />
                                                                <path class="stval"
                                                                    d="M69.5 79.6L69.5 79.6l66.5 22.2v74.2c0 1 0.2 2 0.6 3 0.7 1.8 19 45 103.4 45v-16c-66 0-84.7-27.7-88-33.8v-67.1l85.5 28.5c1.6 0.6 3.4 0.6 5.1 0l37.5-12.5v6.4c-9 3.2-15.2 11.4-15.8 21l-16 80 15.7 3.1 12.2-60.9c1.3 0.7 2.6 1.4 4 1.9v57.5h16v-57.5c1.4-0.5 2.7-1.1 4-1.9l12.2 60.9 15.7-3.1 -16-80c-0.6-9.5-6.8-17.8-15.8-21v-11.7l32-10.7v74.5c-1.5 2-3.3 3.8-5.2 5.4l10.4 12.2c4-3.2 7.4-7.1 10-11.6 0.5-1.1 0.8-2.3 0.8-3.6v-82.2l66.5-22.2c4.2-1.4 6.5-5.9 5.1-10.1 -0.8-2.4-2.7-4.3-5.1-5.1l-168-56c-1.6-0.5-3.4-0.5-5.1 0l-168 56c-4.2 1.4-6.5 5.9-5.1 10.1C65.2 76.9 67.1 78.8 69.5 79.6zM288 160c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8S292.4 160 288 160zM240 24.4l142.7 47.6 -87.3 29.1c-0.6-1.6-1.8-3-3.3-4l-29.4-17.7c0.8-2.4 1.3-4.9 1.3-7.5 0-13.3-10.7-24-24-24s-24 10.7-24 24 10.7 24 24 24c4.5 0 9-1.3 12.8-3.8l24.7 14.8 -37.5 12.5L97.3 72 240 24.4zM248 72c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8S248 67.6 248 72z" />
                                                            </svg>
                                                        </span>
                                                        Scholarships
                                                    </div>
                                                </div>
                                                <!--<div class="col-3 p-2 py-3 d-flex">
                                                    <div class="dd--title align-self-center mx-auto">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                                width="40">
                                                                <style type="text/css">
                                                                    .stval {
                                                                    fill: #FFFFFF;
                                                                    }
                                                                </style>
                                                                <path class="stval"
                                                                    d="M85.1 454.9C83.2 453.1 80.6 452 78 452s-5.2 1.1-7.1 2.9S68 459.4 68 462s1.1 5.2 2.9 7.1c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1.1 7.1-2.9c1.9-1.9 2.9-4.4 2.9-7.1S86.9 456.8 85.1 454.9z" />
                                                                <path class="stval"
                                                                    d="M469.5 182.9c-1.9-1.9-4.4-2.9-7.1-2.9 -2.6 0-5.2 1.1-7.1 2.9 -1.9 1.9-2.9 4.4-2.9 7.1s1.1 5.2 2.9 7.1c1.9 1.9 4.4 2.9 7.1 2.9 2.6 0 5.2-1.1 7.1-2.9 1.9-1.9 2.9-4.4 2.9-7.1S471.4 184.8 469.5 182.9z" />
                                                                <path class="stval"
                                                                    d="M509.1 2.9C507.2 1.1 504.6 0 502 0L256 0c-5.5 0-10 4.5-10 10v28.6l-94.8 25.4c-5.3 1.4-8.5 6.9-7.1 12.3l49.1 183.3 -42.5 42.5C145.4 294.2 136.3 289 126 289h-96c-16.5 0-30 13.5-30 30v163c0 16.5 13.5 30 30 30h96c14.1 0 25.9-9.7 29.1-22.8l11.9 10.4c9.2 8 20.9 12.4 33.1 12.4h301.9c5.5 0 10-4.5 10-10V10C512 7.4 510.9 4.8 509.1 2.9zM136 482c0 5.5-4.5 10-10 10H30c-5.5 0-10-4.5-10-10v-163c0-5.5 4.5-10 10-10h38v115.2c0 5.5 4.5 10 10 10s10-4.5 10-10v-115.2h38c5.5 0 10 4.5 10 10L136 482 136 482zM166 80.7L246 59.3v37.1l-6.7 1.8c-2.6 0.7-4.7 2.4-6.1 4.7s-1.7 5-1 7.6c3.8 14.3-4.7 29.1-19 33 -2.6 0.7-4.7 2.4-6.1 4.7 -1.3 2.3-1.7 5-1 7.6l39 144.3h-20.1l-10.3-40.5c-0.3-1.3-0.9-2.5-1.7-3.5L166 80.7zM246 142.2v84.4l-18.2-67.5C235.4 155.1 241.6 149.3 246 142.2zM389.7 492H200.1l0 0c-7.3 0-14.4-2.7-20-7.5L156 463.5V325.2l43.7-43.7 7.9 31c1.1 4.4 5.1 7.5 9.7 7.5l196.6 0c7.7 0 14 6.3 14 14s-6.3 14-14 14H313.1c-5.5 0-10 4.5-10 10s4.5 10 10 10h132c7.7 0 14 6.3 14 14s-6.3 14-14 14H313.1c-5.5 0-10 4.5-10 10s4.5 10 10 10h110.6c7.7 0 14 6.3 14 14s-6.3 14-14 14H313.1c-5.5 0-10 4.5-10 10s4.5 10 10 10h76.5c7.7 0 14 6.3 14 14C403.7 485.7 397.4 492 389.7 492zM492 492L492 492h-71.4c1.9-4.3 3-9 3-14s-1.1-9.7-3-14h3.1c18.8 0 34-15.2 34-34 0-5.5-1.3-10.6-3.6-15.2 14.4-3.9 25-17.1 25-32.8 0-7.6-2.5-14.6-6.7-20.3V235c0-5.5-4.5-10-10-10s-10 4.5-10 10V348.8c-2.3-0.5-4.8-0.8-7.3-0.8h-0.3c1.9-4.3 3-9 3-14 0-18.7-15.2-34-34-34h-16.1c17.1-7.3 29.1-24.3 29.1-44 0-26.4-21.5-47.9-47.9-47.9 -26.4 0-47.9 21.5-47.9 47.9 0 19.7 12 36.7 29.1 44h-54.7V109.9c17.9-3.9 32-18 35.9-35.8h75.2c3.9 17.9 18 32 35.9 35.9v31.1c0 5.5 4.5 10 10 10s10-4.5 10-10v-40c0-5.5-4.5-10-10-10 -14.8 0-26.9-12.1-26.9-26.9 0-5.5-4.5-10-10-10h-93.1c-5.5 0-10 4.5-10 10 0 14.9-12.1 26.9-26.9 26.9 -5.5 0-10 4.5-10 10V300H266V20L492 20V492zM379 283.9c-15.4 0-27.9-12.5-27.9-27.9s12.5-27.9 27.9-27.9 27.9 12.5 27.9 27.9S394.4 283.9 379 283.9z" />
                                                            </svg>
                                                        </span>
                                                        Financial Aid
                                                    </div>
                                                </div>-->
                                                <div class="col-4 p-2 py-3 d-flex">
                                                    <div class="dd--title align-self-center mx-auto">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                                width="44">
                                                                <style type="text/css">
                                                                    .stval {
                                                                    fill: #FFFFFF;
                                                                    }
                                                                </style>
                                                                <path class="stval"
                                                                    d="M447.2 304.9l-85.6 60.7C359 346.1 342.2 331 322 331h-10.3c-41.3 0-81.1-10.3-128.2-25.8 -8.5-2.8-17.5-4.2-26.5-4.2 -25.3 0-48.6 10.9-64.8 30H10c-5.5 0-10 4.5-10 10v90c0 5.5 4.5 10 10 10 36.7 0 73 10.3 111.4 21.2 41.1 11.7 83.7 23.8 129.7 23.8 86.1 0 127.7-23.9 245.9-118.4 17.3-13.8 20.1-39 6.2-56.2C489.5 294.2 464.5 291.3 447.2 304.9L447.2 304.9zM484.5 351.9C364.6 447.9 327.5 466 251.1 466c-43.2 0-84.4-11.7-124.2-23 -36.4-10.3-71-20.2-106.9-21.8V351h77c3.1 0 6.1-1.5 8-4 12.4-16.5 31.4-26 52-26 6.9 0 13.8 1.1 20.3 3.2 48.9 16.1 90.5 26.8 134.4 26.8H322c11 0 20 9 20 20 0 10.9-8.7 20-20 20H200.5c-5.5 0-10 4.5-10 10s4.5 10 10 10H322c12 0 23.5-5.5 31-14.8 110.7-78.5 106-75.2 106.5-75.5 8.6-6.9 21.2-5.5 28.1 3.1C494.5 332.4 493.1 345 484.5 351.9z">
                                                                </path>
                                                                <circle class="stval" cx="342" cy="276" r="10"></circle>
                                                                <path class="stval"
                                                                    d="M392 76c0-27.6-22.4-50-50-50 -27.6 0-50 22.4-50 50s22.4 50 50 50C369.6 126 392 103.6 392 76zM342 106c-16.5 0-30-13.5-30-30s13.5-30 30-30c16.5 0 30 13.5 30 30S358.5 106 342 106z">
                                                                </path>
                                                                <path class="stval"
                                                                    d="M252 216v60c0 5.5 4.5 10 10 10h35c5.5 0 10-4.5 10-10s-4.5-10-10-10h-25v-50c0-38.6 31.4-70 70-70s70 31.4 70 70v50h-25c-5.5 0-10 4.5-10 10s4.5 10 10 10h35c5.5 0 10-4.5 10-10v-60c0-49.6-40.4-90-90-90S252 166.4 252 216L252 216z">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                        Education Loan
                                                    </div>
                                                </div>
                                                <div class="col-4 p-2 py-3 d-flex">
                                                    <div class="dd--title align-self-center mx-auto">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                                width="40">
                                                                <style type="text/css">
                                                                    .stval {
                                                                    fill: #FFFFFF;
                                                                    }
                                                                </style>
                                                                <path class="stval"
                                                                    d="M190 411.9H60c-5.5 0-10 4.5-10 10s4.5 10 10 10h130c5.5 0 10-4.5 10-10S195.5 411.9 190 411.9z" />
                                                                <path class="stval"
                                                                    d="M60 390.4h65c5.5 0 10-4.5 10-10s-4.5-10-10-10H60c-5.5 0-10 4.5-10 10S54.5 390.4 60 390.4z" />
                                                                <path class="stval"
                                                                    d="M190 329H60c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10h130c5.5 0 10-4.5 10-10C200 333.4 195.5 329 190 329z" />
                                                                <path class="stval"
                                                                    d="M60 307.5h65c5.5 0 10-4.5 10-10 0-5.5-4.5-10-10-10H60c-5.5 0-10 4.5-10 10C50 303 54.5 307.5 60 307.5z" />
                                                                <path class="stval"
                                                                    d="M190 246H60c-5.5 0-10 4.5-10 10s4.5 10 10 10h130c5.5 0 10-4.5 10-10S195.5 246 190 246L190 246z" />
                                                                <path class="stval"
                                                                    d="M60 224.5h65c5.5 0 10-4.5 10-10 0-5.5-4.5-10-10-10H60c-5.5 0-10 4.5-10 10C50 220.1 54.5 224.5 60 224.5z" />
                                                                <path class="stval"
                                                                    d="M190 163.1H105c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10H190c5.5 0 10-4.5 10-10C200 167.5 195.5 163.1 190 163.1z" />
                                                                <path class="stval"
                                                                    d="M135 131.6c0-5.5-4.5-10-10-10H60c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10h65C130.5 141.6 135 137.1 135 131.6z" />
                                                                <path class="stval"
                                                                    d="M190 80.1H60c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10h130c5.5 0 10-4.5 10-10C200 84.6 195.5 80.1 190 80.1z" />
                                                                <path class="stval"
                                                                    d="M261.5 138.6c2 2 4.5 2.9 7.1 2.9s5.1-1 7.1-2.9l41.5-41.5c3.9-3.9 3.9-10.2 0-14.1 -3.9-3.9-10.2-3.9-14.1 0l-34.4 34.4 -13.7-13.7c-3.9-3.9-10.2-3.9-14.1 0 -3.9 3.9-3.9 10.2 0 14.1L261.5 138.6z" />
                                                                <path class="stval"
                                                                    d="M506 186.9l-13.2-13.2c-3.9-3.9-9.1-6-14.6-6 -5.5 0-10.7 2.2-14.6 6l-27 27c-3.9-2.4-9-1.9-12.4 1.4 -3.4 3.4-3.8 8.5-1.4 12.4L360 277.3V46c0-11-9-20-20-20H20C9 26 0 35 0 46v420c0 11 9 20 20 20h320c11 0 20-9 20-20V362.1l105.2-105.2c1.6 1 3.5 1.5 5.3 1.5 2.6 0 5.1-1 7.1-2.9 3.4-3.4 3.8-8.5 1.4-12.4l27-27C514 208.1 514 195 506 186.9L506 186.9zM299.3 394.5l-23.6 9.4 9.4-23.6 151.6-151.6 14.1 14.1L299.3 394.5zM340 466H20V46h320v251.2l-70.4 70.5c-1 1-1.7 2.1-2.2 3.4l-18.9 47.1c-1.5 3.7-0.6 8 2.2 10.8 1.9 1.9 4.5 2.9 7.1 2.9 1.3 0 2.5-0.2 3.7-0.7l47.1-18.9c1.3-0.5 2.4-1.3 3.4-2.2L340 382.1V466zM491.8 202l-26.8 26.8 -14.1-14.1 26.8-26.8c0.2-0.2 0.7-0.2 0.9 0l13.2 13.2C492.1 201.3 492.1 201.8 491.8 202z" />
                                                                <path class="stval"
                                                                    d="M261.5 221.6c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l41.5-41.5c3.9-3.9 3.9-10.2 0-14.1 -3.9-3.9-10.2-3.9-14.1 0l-34.4 34.4 -13.7-13.7c-3.9-3.9-10.2-3.9-14.1 0 -3.9 3.9-3.9 10.2 0 14.1L261.5 221.6z" />
                                                                <path class="stval"
                                                                    d="M268.5 307.5c2.6 0 5.1-1 7.1-2.9l41.5-41.5c3.9-3.9 3.9-10.2 0-14.1 -3.9-3.9-10.2-3.9-14.1 0l-34.4 34.4 -13.7-13.7c-3.9-3.9-10.2-3.9-14.1 0 -3.9 3.9-3.9 10.2 0 14.1l20.7 20.7C263.4 306.5 266 307.5 268.5 307.5L268.5 307.5z" />
                                                                <path class="stval"
                                                                    d="M60 163.1c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10s10-4.5 10-10C70 167.5 65.5 163.1 60 163.1L60 163.1z" />
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
                        <li class="nav-item dd-menu-lg">
                            <a href="javascript:void(0);">campus life</a>
                            <div class="step-second-menu st-campus">
                                <div class="d-none d-lg-block" style="margin: -20px -20px 15px -20px;">
                                    <div class="redbox-applynow position-relative blue-overlay lazybg"
                                        style="background-image: url(/includes/assets/images/header-footer/lazy-campus-bg.webp);" data-src="/includes/assets/images/header-footer/campus-bg.webp">
                                        <div class="position-relative">
                                            <h3>A Home away from Home</h3>
                                            <div class="row g-0">
                                                <div class="col-3 p-2 py-3 d-flex">
                                                    <div class="dd--title align-self-center mx-auto">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480"
                                                                width="44">
                                                                <style type="text/css">
                                                                    .stval {
                                                                    fill: #FFFFFF;
                                                                    }
                                                                </style>
                                                                <path class="stval"
                                                                    d="M441.9 280.3c-1.1-0.3-2.2-0.3-3.4-0.1l-78.6 14.3v-38.4c0-4.4-3.6-8-8-8h-48c-2.1 0-4.2 0.8-5.7 2.3l-29.7 29.7h-49.4l-29.7-29.7c-1.5-1.5-3.5-2.3-5.7-2.3h-48c-4.4 0-8 3.6-8 8v38.1l-75.5-16.5c-3-0.9-6-1.5-9.1-2 -4.4-0.6-8.4 2.4-9.1 6.7 -0.6 4.2 2.1 8.1 6.2 9l8 1.8c9.8 3 18.4 9.1 24.6 17.3 2.3 3.1 4.2 6.5 5.7 10l-29.3-5.9c-2.3-1-4.8-1.7-7.3-2.1 -20.2-2.9-38.9 11.1-41.8 31.3 0 0 0 0 0 0.1 -3.4 24.2 13.4 46.5 37.5 50 2.5 0.4 5 0.5 7.6 0.5 1.1 0 2.1-0.2 3.2-0.3v0.3l87-8 -37.6 40.3c-3 3.2-2.8 8.3 0.4 11.3 1.5 1.4 3.5 2.2 5.5 2.2h24v24c0 4.4 3.6 8 8 8 2.1 0 4.2-0.8 5.7-2.3l77.7-77.7h49.4l77.7 77.7c1.5 1.5 3.5 2.3 5.7 2.3 1.1 0 2.1-0.2 3.1-0.6 3-1.2 4.9-4.2 4.9-7.4v-24h24c4.4 0 8-3.6 8-8 0-2-0.8-4-2.2-5.5l-38.1-40.8 87.7 6.3c0.2 0 0.4 0 0.6 0 0.7 0 1.3-0.1 1.9-0.2 13.2-3.3 38.1-19.2 38.1-55.8S455.1 283.5 441.9 280.3zM35.2 346.6L35.2 346.6c0.3-1.9 1.9-3.3 3.8-3.3 0.2 0 0.4 0 0.5 0l2.1-14.8c7.5 2 12.3 9.2 11.2 16.9 -0.8 5.8-6.1 9.8-11.9 8.9C37.2 353.8 34.6 350.4 35.2 346.6zM82.4 346.3c-2.9 20.4-21.8 34.5-42.1 31.6h0c-15.4-2.2-26.1-16.5-23.9-31.9 1.2-8.3 7.2-15 15.2-17.3 -6.5 2.7-11.2 8.6-12.2 15.6 -1.8 12.5 6.9 24 19.4 25.8 14.5 2.1 27.9-8 30-22.5 0 0 0 0 0 0 0.6-4.4 0.3-9-1-13.3l15.1 3C82.9 340.4 82.8 343.4 82.4 346.3zM86.7 374.7c6.1-7.5 10.1-16.5 11.5-26.1 2.4-16.7-1.9-33.7-11.9-47.3l41.7 9.1v33.6c0 4.4 3.6 8 8 8h31.7l-15.6 16.7L86.7 374.7zM208 380.7l-64 64v-12.7c0-4.4-3.6-8-8-8h-13.6l37.3-39.9 1.1-0.1 -0.1-0.9 47.4-50.8V380.7zM208 308.7l-27.3 27.3h-36.7v-72h36.7l27.3 27.3V308.7zM264 312v64h-40v-80h40V312zM280 291.3l27.3-27.3h36.7v72h-36.7l-27.3-27.3V291.3zM365.6 424h-13.6c-4.4 0-8 3.6-8 8v12.7l-64-64v-48.4l47.5 50.9 -0.1 0.8 0.9 0.1L365.6 424zM439.1 375.9l-103.4-7.4 -15.4-16.5H352c4.4 0 8-3.6 8-8v-33.3l79.5-14.4c5.4 2 24.5 11 24.5 39.8C464 365.5 444 374.2 439.1 375.9z" />
                                                                <path class="stval"
                                                                    d="M69.5 79.6L69.5 79.6l66.5 22.2v74.2c0 1 0.2 2 0.6 3 0.7 1.8 19 45 103.4 45v-16c-66 0-84.7-27.7-88-33.8v-67.1l85.5 28.5c1.6 0.6 3.4 0.6 5.1 0l37.5-12.5v6.4c-9 3.2-15.2 11.4-15.8 21l-16 80 15.7 3.1 12.2-60.9c1.3 0.7 2.6 1.4 4 1.9v57.5h16v-57.5c1.4-0.5 2.7-1.1 4-1.9l12.2 60.9 15.7-3.1 -16-80c-0.6-9.5-6.8-17.8-15.8-21v-11.7l32-10.7v74.5c-1.5 2-3.3 3.8-5.2 5.4l10.4 12.2c4-3.2 7.4-7.1 10-11.6 0.5-1.1 0.8-2.3 0.8-3.6v-82.2l66.5-22.2c4.2-1.4 6.5-5.9 5.1-10.1 -0.8-2.4-2.7-4.3-5.1-5.1l-168-56c-1.6-0.5-3.4-0.5-5.1 0l-168 56c-4.2 1.4-6.5 5.9-5.1 10.1C65.2 76.9 67.1 78.8 69.5 79.6zM288 160c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8S292.4 160 288 160zM240 24.4l142.7 47.6 -87.3 29.1c-0.6-1.6-1.8-3-3.3-4l-29.4-17.7c0.8-2.4 1.3-4.9 1.3-7.5 0-13.3-10.7-24-24-24s-24 10.7-24 24 10.7 24 24 24c4.5 0 9-1.3 12.8-3.8l24.7 14.8 -37.5 12.5L97.3 72 240 24.4zM248 72c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8S248 67.6 248 72z" />
                                                            </svg>
                                                        </span>
                                                        Youth Festivals &amp; Summits
                                                    </div>
                                                </div>
                                                <div class="col-3 p-2 py-3 d-flex">
                                                    <div class="dd--title align-self-center mx-auto">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                                width="40">
                                                                <style type="text/css">
                                                                    .stval {
                                                                    fill: #FFFFFF;
                                                                    }
                                                                </style>
                                                                <path class="stval"
                                                                    d="M85.1 454.9C83.2 453.1 80.6 452 78 452s-5.2 1.1-7.1 2.9S68 459.4 68 462s1.1 5.2 2.9 7.1c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1.1 7.1-2.9c1.9-1.9 2.9-4.4 2.9-7.1S86.9 456.8 85.1 454.9z" />
                                                                <path class="stval"
                                                                    d="M469.5 182.9c-1.9-1.9-4.4-2.9-7.1-2.9 -2.6 0-5.2 1.1-7.1 2.9 -1.9 1.9-2.9 4.4-2.9 7.1s1.1 5.2 2.9 7.1c1.9 1.9 4.4 2.9 7.1 2.9 2.6 0 5.2-1.1 7.1-2.9 1.9-1.9 2.9-4.4 2.9-7.1S471.4 184.8 469.5 182.9z" />
                                                                <path class="stval"
                                                                    d="M509.1 2.9C507.2 1.1 504.6 0 502 0L256 0c-5.5 0-10 4.5-10 10v28.6l-94.8 25.4c-5.3 1.4-8.5 6.9-7.1 12.3l49.1 183.3 -42.5 42.5C145.4 294.2 136.3 289 126 289h-96c-16.5 0-30 13.5-30 30v163c0 16.5 13.5 30 30 30h96c14.1 0 25.9-9.7 29.1-22.8l11.9 10.4c9.2 8 20.9 12.4 33.1 12.4h301.9c5.5 0 10-4.5 10-10V10C512 7.4 510.9 4.8 509.1 2.9zM136 482c0 5.5-4.5 10-10 10H30c-5.5 0-10-4.5-10-10v-163c0-5.5 4.5-10 10-10h38v115.2c0 5.5 4.5 10 10 10s10-4.5 10-10v-115.2h38c5.5 0 10 4.5 10 10L136 482 136 482zM166 80.7L246 59.3v37.1l-6.7 1.8c-2.6 0.7-4.7 2.4-6.1 4.7s-1.7 5-1 7.6c3.8 14.3-4.7 29.1-19 33 -2.6 0.7-4.7 2.4-6.1 4.7 -1.3 2.3-1.7 5-1 7.6l39 144.3h-20.1l-10.3-40.5c-0.3-1.3-0.9-2.5-1.7-3.5L166 80.7zM246 142.2v84.4l-18.2-67.5C235.4 155.1 241.6 149.3 246 142.2zM389.7 492H200.1l0 0c-7.3 0-14.4-2.7-20-7.5L156 463.5V325.2l43.7-43.7 7.9 31c1.1 4.4 5.1 7.5 9.7 7.5l196.6 0c7.7 0 14 6.3 14 14s-6.3 14-14 14H313.1c-5.5 0-10 4.5-10 10s4.5 10 10 10h132c7.7 0 14 6.3 14 14s-6.3 14-14 14H313.1c-5.5 0-10 4.5-10 10s4.5 10 10 10h110.6c7.7 0 14 6.3 14 14s-6.3 14-14 14H313.1c-5.5 0-10 4.5-10 10s4.5 10 10 10h76.5c7.7 0 14 6.3 14 14C403.7 485.7 397.4 492 389.7 492zM492 492L492 492h-71.4c1.9-4.3 3-9 3-14s-1.1-9.7-3-14h3.1c18.8 0 34-15.2 34-34 0-5.5-1.3-10.6-3.6-15.2 14.4-3.9 25-17.1 25-32.8 0-7.6-2.5-14.6-6.7-20.3V235c0-5.5-4.5-10-10-10s-10 4.5-10 10V348.8c-2.3-0.5-4.8-0.8-7.3-0.8h-0.3c1.9-4.3 3-9 3-14 0-18.7-15.2-34-34-34h-16.1c17.1-7.3 29.1-24.3 29.1-44 0-26.4-21.5-47.9-47.9-47.9 -26.4 0-47.9 21.5-47.9 47.9 0 19.7 12 36.7 29.1 44h-54.7V109.9c17.9-3.9 32-18 35.9-35.8h75.2c3.9 17.9 18 32 35.9 35.9v31.1c0 5.5 4.5 10 10 10s10-4.5 10-10v-40c0-5.5-4.5-10-10-10 -14.8 0-26.9-12.1-26.9-26.9 0-5.5-4.5-10-10-10h-93.1c-5.5 0-10 4.5-10 10 0 14.9-12.1 26.9-26.9 26.9 -5.5 0-10 4.5-10 10V300H266V20L492 20V492zM379 283.9c-15.4 0-27.9-12.5-27.9-27.9s12.5-27.9 27.9-27.9 27.9 12.5 27.9 27.9S394.4 283.9 379 283.9z" />
                                                            </svg>
                                                        </span>
                                                        Culturally Diverse
                                                    </div>
                                                </div>
                                                <div class="col-3 p-2 py-3 d-flex">
                                                    <div class="dd--title align-self-center mx-auto">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                                width="44">
                                                                <style type="text/css">
                                                                    .stval {
                                                                    fill: #FFFFFF;
                                                                    }
                                                                </style>
                                                                <path class="stval"
                                                                    d="M447.2 304.9l-85.6 60.7C359 346.1 342.2 331 322 331h-10.3c-41.3 0-81.1-10.3-128.2-25.8 -8.5-2.8-17.5-4.2-26.5-4.2 -25.3 0-48.6 10.9-64.8 30H10c-5.5 0-10 4.5-10 10v90c0 5.5 4.5 10 10 10 36.7 0 73 10.3 111.4 21.2 41.1 11.7 83.7 23.8 129.7 23.8 86.1 0 127.7-23.9 245.9-118.4 17.3-13.8 20.1-39 6.2-56.2C489.5 294.2 464.5 291.3 447.2 304.9L447.2 304.9zM484.5 351.9C364.6 447.9 327.5 466 251.1 466c-43.2 0-84.4-11.7-124.2-23 -36.4-10.3-71-20.2-106.9-21.8V351h77c3.1 0 6.1-1.5 8-4 12.4-16.5 31.4-26 52-26 6.9 0 13.8 1.1 20.3 3.2 48.9 16.1 90.5 26.8 134.4 26.8H322c11 0 20 9 20 20 0 10.9-8.7 20-20 20H200.5c-5.5 0-10 4.5-10 10s4.5 10 10 10H322c12 0 23.5-5.5 31-14.8 110.7-78.5 106-75.2 106.5-75.5 8.6-6.9 21.2-5.5 28.1 3.1C494.5 332.4 493.1 345 484.5 351.9z">
                                                                </path>
                                                                <circle class="stval" cx="342" cy="276" r="10"></circle>
                                                                <path class="stval"
                                                                    d="M392 76c0-27.6-22.4-50-50-50 -27.6 0-50 22.4-50 50s22.4 50 50 50C369.6 126 392 103.6 392 76zM342 106c-16.5 0-30-13.5-30-30s13.5-30 30-30c16.5 0 30 13.5 30 30S358.5 106 342 106z">
                                                                </path>
                                                                <path class="stval"
                                                                    d="M252 216v60c0 5.5 4.5 10 10 10h35c5.5 0 10-4.5 10-10s-4.5-10-10-10h-25v-50c0-38.6 31.4-70 70-70s70 31.4 70 70v50h-25c-5.5 0-10 4.5-10 10s4.5 10 10 10h35c5.5 0 10-4.5 10-10v-60c0-49.6-40.4-90-90-90S252 166.4 252 216L252 216z">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                        Student-Friendly
                                                    </div>
                                                </div>
                                                <div class="col-3 p-2 py-3 d-flex">
                                                    <div class="dd--title align-self-center mx-auto">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                                width="40">
                                                                <style type="text/css">
                                                                    .stval {
                                                                    fill: #FFFFFF;
                                                                    }
                                                                </style>
                                                                <path class="stval"
                                                                    d="M190 411.9H60c-5.5 0-10 4.5-10 10s4.5 10 10 10h130c5.5 0 10-4.5 10-10S195.5 411.9 190 411.9z" />
                                                                <path class="stval"
                                                                    d="M60 390.4h65c5.5 0 10-4.5 10-10s-4.5-10-10-10H60c-5.5 0-10 4.5-10 10S54.5 390.4 60 390.4z" />
                                                                <path class="stval"
                                                                    d="M190 329H60c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10h130c5.5 0 10-4.5 10-10C200 333.4 195.5 329 190 329z" />
                                                                <path class="stval"
                                                                    d="M60 307.5h65c5.5 0 10-4.5 10-10 0-5.5-4.5-10-10-10H60c-5.5 0-10 4.5-10 10C50 303 54.5 307.5 60 307.5z" />
                                                                <path class="stval"
                                                                    d="M190 246H60c-5.5 0-10 4.5-10 10s4.5 10 10 10h130c5.5 0 10-4.5 10-10S195.5 246 190 246L190 246z" />
                                                                <path class="stval"
                                                                    d="M60 224.5h65c5.5 0 10-4.5 10-10 0-5.5-4.5-10-10-10H60c-5.5 0-10 4.5-10 10C50 220.1 54.5 224.5 60 224.5z" />
                                                                <path class="stval"
                                                                    d="M190 163.1H105c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10H190c5.5 0 10-4.5 10-10C200 167.5 195.5 163.1 190 163.1z" />
                                                                <path class="stval"
                                                                    d="M135 131.6c0-5.5-4.5-10-10-10H60c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10h65C130.5 141.6 135 137.1 135 131.6z" />
                                                                <path class="stval"
                                                                    d="M190 80.1H60c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10h130c5.5 0 10-4.5 10-10C200 84.6 195.5 80.1 190 80.1z" />
                                                                <path class="stval"
                                                                    d="M261.5 138.6c2 2 4.5 2.9 7.1 2.9s5.1-1 7.1-2.9l41.5-41.5c3.9-3.9 3.9-10.2 0-14.1 -3.9-3.9-10.2-3.9-14.1 0l-34.4 34.4 -13.7-13.7c-3.9-3.9-10.2-3.9-14.1 0 -3.9 3.9-3.9 10.2 0 14.1L261.5 138.6z" />
                                                                <path class="stval"
                                                                    d="M506 186.9l-13.2-13.2c-3.9-3.9-9.1-6-14.6-6 -5.5 0-10.7 2.2-14.6 6l-27 27c-3.9-2.4-9-1.9-12.4 1.4 -3.4 3.4-3.8 8.5-1.4 12.4L360 277.3V46c0-11-9-20-20-20H20C9 26 0 35 0 46v420c0 11 9 20 20 20h320c11 0 20-9 20-20V362.1l105.2-105.2c1.6 1 3.5 1.5 5.3 1.5 2.6 0 5.1-1 7.1-2.9 3.4-3.4 3.8-8.5 1.4-12.4l27-27C514 208.1 514 195 506 186.9L506 186.9zM299.3 394.5l-23.6 9.4 9.4-23.6 151.6-151.6 14.1 14.1L299.3 394.5zM340 466H20V46h320v251.2l-70.4 70.5c-1 1-1.7 2.1-2.2 3.4l-18.9 47.1c-1.5 3.7-0.6 8 2.2 10.8 1.9 1.9 4.5 2.9 7.1 2.9 1.3 0 2.5-0.2 3.7-0.7l47.1-18.9c1.3-0.5 2.4-1.3 3.4-2.2L340 382.1V466zM491.8 202l-26.8 26.8 -14.1-14.1 26.8-26.8c0.2-0.2 0.7-0.2 0.9 0l13.2 13.2C492.1 201.3 492.1 201.8 491.8 202z" />
                                                                <path class="stval"
                                                                    d="M261.5 221.6c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l41.5-41.5c3.9-3.9 3.9-10.2 0-14.1 -3.9-3.9-10.2-3.9-14.1 0l-34.4 34.4 -13.7-13.7c-3.9-3.9-10.2-3.9-14.1 0 -3.9 3.9-3.9 10.2 0 14.1L261.5 221.6z" />
                                                                <path class="stval"
                                                                    d="M268.5 307.5c2.6 0 5.1-1 7.1-2.9l41.5-41.5c3.9-3.9 3.9-10.2 0-14.1 -3.9-3.9-10.2-3.9-14.1 0l-34.4 34.4 -13.7-13.7c-3.9-3.9-10.2-3.9-14.1 0 -3.9 3.9-3.9 10.2 0 14.1l20.7 20.7C263.4 306.5 266 307.5 268.5 307.5L268.5 307.5z" />
                                                                <path class="stval"
                                                                    d="M60 163.1c-5.5 0-10 4.5-10 10 0 5.5 4.5 10 10 10s10-4.5 10-10C70 167.5 65.5 163.1 60 163.1L60 163.1z" />
                                                            </svg>
                                                        </span>
                                                        Technology integration
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <ul class="list-unstyled p-0 m-0">
                                                    <!-- <li><a href="/campus-life/ifdp.php">International
                                                        Faculty Development Program (IFDP)</a>
                                                    </li> -->
                                                    <li><a
                                                        href="/campus-life/index.php">Overview</a>
                                                    </li>
                                                    <li><a
                                                        href="/campus-life/convocation.php">Convocations</a>
                                                    </li>
                                                    <li><a
                                                        href="/campus-life/live-concerts.php">Live-in-Concerts</a>
                                                    </li>
                                                    <li><a href="/campus-life/tech-invent.php">Tech Invent
                                                        &amp; Events</a>
                                                    </li>
                                                    <li><a href="/campus-life/cultural.php">Cultural &amp;
                                                        Cosmopolitan</a>
                                                    </li>
                                                    <li><a href="/campus-life/evoke.php">Evoke &amp; Youth
                                                        Summits</a>
                                                    </li>
                                                    <li><a href="/campus-life/glorious-stars-cu.php">Glorious
                                                        Stars at CU</a>
                                                    </li>
                                                    <li><a href="/student-services/sports.php">Sports
                                                        &amp; Adventure</a>
                                                    </li>
													<li><a href="/latest-news/index.php">Latest News</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <ul class="list-unstyled p-0 m-0">
                                                    <li><a href="/campus-life/bollywood-celebrities.php">Bollywood
                                                        Celebrities</a>
                                                    </li>
                                                    <li><a href="/campus-life/visitors.php">Prominent
                                                        Visitors</a>
                                                    </li>
                                                    <li><a
                                                        href="/campus-life/international-folklore-festival.php">CU-RHYTHMS
                                                        International Folklore Festival</a>
                                                    </li>
                                                    <li><a
                                                        href="/campus-life/national-international-conferences.php">National
                                                        &amp; International Conferences</a>
                                                    </li>
                                                    <li><a
                                                        href="/campus-life/international-faculties.php">International
                                                        Faculties</a>
                                                    </li>
                                                    <li><a href="/campus-life/alumni.php">Notable
                                                        Alumni</a>
                                                    </li>
                                                    <li><a href="/campus-life/canadian-alumni-meet.php">Canadian
                                                        Alumni Chapter</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dd-menu-lg">
                            <a href="javascript:void(0);">placements</a>
                            <div class="step-second-menu st-placements">
                                <div class="row g-0 h-100">
                                    <div class="col-lg-6 d-none d-lg-block lazybg"
                                        style="background: url('/includes/assets/images/header-footer/lazy-placement-bg.webp'); margin: -20px 20px -20px -20px;  background-size: cover;" data-src="/includes/assets/images/header-footer/placement-bg.webp">
                                        <div class="drop-down-graphic position-relative h-100">
                                            <h3>Most sought after<span>Destination</span>of blue-chip companies</h3>
                                            <div class="dd-graphic-cont position-absolute bottom-0 w-100">
                                                <div class="row g-0">
                                                    <div class="col-6 p-2 py-3 d-flex">
                                                        <div class="dd--title align-self-center mx-auto">
                                                            <span>
                                                            <i class="fab fa-google"></i>
                                                            </span>
                                                            Google
                                                        </div>
                                                    </div>
                                                    <div class="col-6 p-2 py-3 d-flex">
                                                        <div class="dd--title align-self-center mx-auto">
                                                            <span>
                                                            <i class="fab fa-amazon"></i>
                                                            </span>
                                                            Amazon
                                                        </div>
                                                    </div>
                                                    <div class="col-6 p-2 py-3 d-flex">
                                                        <div class="dd--title align-self-center mx-auto">
                                                            <span>
                                                            <i class="fab fa-windows"></i>
                                                            </span>
                                                            Microsoft
                                                        </div>
                                                    </div>
                                                    <div class="col-6 p-2 py-3 d-flex">
                                                        <div class="dd--title align-self-center mx-auto">
                                                            <span>
                                                                <img class="w-100 lazyload" data-src="/includes/assets/images/header-footer/mahindra-logo-dark.webp">
                                                            </span>
                                                            Mahindra
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <h4>Placements</h4>
                                        <ul class="list-unstyled p-0 m-0">
                                            <li><a href="/placements/">About Placements</a></li>
                                            <li><a href="/placements/placement-tracker.php">Placement
                                                Tracker</a>
                                            </li>
                                            <li><a href="/department-of-career-development/index.html"
                                                target="_blank">Department of Career Planning &amp; Development</a>
                                            </li>
                                            <li><a href="/placements/joint-placement-programme.php">Joint
                                                Placement Programme</a>
                                            </li>
                                            <li><a href="/placements/placement_engineering.php">Best
                                                Engineering Placement</a>
                                            </li>
                                            <li><a href="/placements/placement_management.php">Best
                                                Management Placement</a>
                                            </li>
                                            <li><a href="/placements/placement_hotel_management.php">Best
                                                Hotel Management Placement</a>
                                            </li>
                                            <li><a href="/placements/placement-pharma-sciences.php">Best
                                                Pharma Sciences Placement</a>
                                            </li>
                                            <li><a href="/placements/placement-physics.php">Best
                                                Physics Placement</a>
                                            </li>
                                            <li><a href="/placements/placement-day.php">Placement Day</a>
                                            </li>
                                            <li><a href="/placements/placement-overview.php">Our Leading
                                                Recruiters</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dd-menu-lg">
                            <a href="javascript:void(0);">Research &amp; Innovation</a>
                            <div class="step-second-menu st-research">
                                <div class="row g-0 h-100">
                                    <div class="col-lg-6 d-none d-lg-block lazybg"
                                        style="background: url('/includes/assets/images/header-footer/lazy-research-bg.webp'); margin: -20px 20px -20px -20px; background-size: cover;" data-src="/includes/assets/images/header-footer/research-bg.webp">
                                        <div class="program-drop-down-graphic position-relative h-100 text-center d-flex align-items-end flex-column">
                                            <h3 style="
    margin-bottom: auto !important;
    width: 100%;
    text-align: left;
">Our<br> Intellectual <br>Pursuits</h3>
                                            <div class="placement--ddNumbers mt-3">
                                                <div class="row g-3">
                                                    <div class="col-6">
                                                        <div class="card h-100 p-3">
                                                            <span>
                                                                <h4>10K+</h4>
                                                                <small>Research<br>Publications</small>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="card h-100 p-3">
                                                            <span>
                                                                <h4 id="patent-no"><span
                                                                    class="d-none"></span><?=@$patents?></h4>
                                                                <small>Patents<br>Filed</small>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="card h-100 p-3">
                                                            <span>
                                                                <h4>30</h4>
                                                                <small>Industry Sponsored<br>Advanced Labs</small>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="card h-100 p-3">
                                                            <span>
                                                                <h4>75</h4>
                                                                <small>Departmental<br>Research Groups</small>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <h4>Research Intensive University</h4>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <ul class="list-unstyled p-0 m-0">
                                                    <li><a href="/research/">Research</a></li>
                                                    <li><a href="/research/patents.php">Patents</a></li>
                                                    <li><a href="/research/center-of-research.php">Centers
                                                        Of Research</a>
                                                    </li>
                                                    <li><a href="/research/centers-of-excellence.php">Centers
                                                        of Excellence</a>
                                                    </li>
                                                    <li><a href="/research/scholars.php">Visiting
                                                        Scholars</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4 class="mt-lg-4">Entrepreneurship Cells</h4>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <ul class="list-unstyled p-0 m-0">
                                                    <li><a href="https://cutbi.in/" target="_blank">Technology Business
                                                        Incubator (TBI)</a>
                                                    </li>
                                                    <li><a href="/research/entrepreneurship.php">Innovation
                                                        &amp; Entrepreneurship Development Cell (IEDC)</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4 class="mt-lg-4">Sustainable Development Goals (SDG's)</h4>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <ul class="list-unstyled p-0 m-0">
                                                    <li><a href="/research/sdg">Policies &amp;
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
                    <ul class="menu-options d-flex list-unstyled m-0 p-0">
                        <li><a href="/international/index.php">International</a></li>
                        <li><a href="/student-services/libraries.php">Library</a></li>
                        <li><a href="/student-services/">Student Services</a></li>
                        <li><a href="/jobs/">Career</a></li>
                        <li><a href="https://alumni.cuchd.in/">Alumni</a></li>
                        <li><a href="/contact/index.php"> Contact Us</a></li>
                    </ul>
                    <div class="d-flex header_btn">
                        <a href="tel:+1800121288800" class="btn btn-lg btn-info text-start d-flex align-items-center text-white">
                        <img src="/includes/assets/images/header-footer/phone-icon.webp" alt="" width="30">
                        <span class="d-block ms-2">
                        <small class="d-block text-capitalize">Admission Helpline</small>1800121288800
                        </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</header>