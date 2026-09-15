<style>
    .course-nav {
        position: fixed;
        left: 50%;
        top: 100px;
        z-index: 1029;
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 5px;
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(12px);
        border-radius: 14px;
        box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.08),
            0 2px 8px rgba(0, 0, 0, 0.04);
        overflow-x: auto;
        max-width: calc(100vw - 40px);
        opacity: 0;
        pointer-events: none;
        transform: translateX(-50%) translateY(-40px);
        transition:
            top 0.35s ease,
            opacity 0.35s ease,
            transform 0.35s ease;
    }
    .course-nav.show {
        top: -100px; /*** previously 142px ***/
        opacity: 1;
        pointer-events: auto;
        transform: translateX(-50%) translateY(0);
    }
    .course-nav.show.header-visible {
        top: 144px;
    }
    .course-nav::-webkit-scrollbar {
        display: none;
    }
    .filter-link {
        border: none;
        background: transparent;
        font-family: var(--alt-font);
        color: #374151;
        cursor: pointer;
        padding: 10px 24px;
        border-radius: 10px;
        letter-spacing: .4px;
        font-size: 12px;
        font-weight: 700;
        white-space: nowrap;
        transition: all 0.25s ease;
    }
    .filter-link:hover {
        background: #f3f4f6;
        color: #111827;
    }
    .filter-link.active {
        background: #4744c8;
        color: #fff;
        box-shadow: 0 4px 12px rgba(17, 24, 39, 0.25);
    }
    .filter-link:focus {
        outline: none;
    }

    @media (max-width: 1199px) {
        .course-nav.show {
            /*top: 104px;*/
            z-index: 11;            
        }
        .course-nav.show.header-visible {
            top: 136px;
        }  
        .navbar.navbar-expand-xl.mobileMenuShow { /***** iOS Fix *****/
            overflow-x: hidden;
        }        
    }
    @media (max-width: 767px) {
        .course-nav {
            left: 12px;
            right: 12px;
            max-width: none;
            transform: translateY(-40px);
        }
        .course-nav.show {
            /*top: 97px;*/
            transform: translateY(0);
        }
        .course-nav.show.header-visible {
            top: 129px;
        }
        .filter-link {
            padding: 8px 18px;
            font-size: 10px;
        }    
    }
    @media (max-width: 575px) {    
        .course-nav.show {
            top: 83px;
        }
        .course-nav.show.header-visible {
            top: 115px;
        }  
        .pl-indi-num img { /***** iOS Fix *****/
            filter: unset!important;
        }        
        .side-link.fixed-nut {
            right: 90px;
            padding: 5px 18px;
            bottom: 45px;
            top: unset;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;            
            z-index: 11;
            left: 70px;
        }    
        .side-link.fixed-nut .listStyle-2 {
            padding-bottom: 5px;
        }        
    }    
</style>

<div class="course-nav">
    <button type="button" class="filter-link" data-target="placmnt-sec">
        PLACEMENTS
    </button> 
    <button type="button" class="filter-link" data-target="ranks-bg">
        RANKINGS
    </button>    
    <button type="button" class="filter-link" data-target="prgmdet-sec">
        ABOUT PROGRAM
    </button>    
    <button type="button" class="filter-link" data-target="edge-sec">
        USPs
    </button>
    <button type="button" class="filter-link" data-target="course-pdf">
        CURRICULUM
    </button>              
    <button type="button" class="filter-link" data-target="cert-sec">
        CERTIFICATIONS
    </button>
    <button type="button" class="filter-link" data-target="eligibility-fee-sec">
        FEE &amp; SCHOLARSHIPS
    </button>      
    <button type="button" class="filter-link" data-target="hta-sec">
        HOW TO APPLY
    </button>
</div>