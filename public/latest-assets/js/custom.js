
    setTimeout(function() {
        $('.lsq-portal-widget-iframe').contents().find("head").append(
            $("<style type='text/css'>" +
//                "#lsq-form-modal * {" +
//                "font-family:Google Sans!important;" +
//                "} " +               
                ".select2-container--default span.select2-selection, input[type='text'].lsq-form-field-ctrl-text, .lsq-form-section-container .select2-container--default span.select2-selection {" +
                "height:42px!important;" +
                "border-radius: 6px !important" +
                "} " +
                ".select2-selection__rendered {" +
                "height:39px!important;" +
                "width: calc(100% - 30px) !important;" +
                "} " +
               ".select2-container--open {" +
                    "left:10px!important;" +
                    "right:10px!important;" +
                "} " +               
                ".select2-dropdown {" +
                    "width:100%!important;" +
                    "border:1px solid #000!important;" +
                    "border-radius:10px!important;" +
                    "box-shadow:0 6px 6px rgba(0,0,0,.3)!important;" +
                "} " +    
               ".select2-container .select2-results .select2-results__options {" +
                    "max-height:175px!important;" +
                "} " + 
                ".select2-results__option {" +
                    "line-height:1.35em!important;" +
                "} " +              
                ".modal-footer.lsq-form-theme-footer {" +
                "text-align:center;" +
                "} " +
                ".file-zoom-dialog.modal-v4 .modal-footer .btn-primary, .lsq-external-form-container.modal-v4 .modal-footer .btn-primary {" +
                "margin-bottom:5px!important;" +
                "padding: 11px 20px 11px !important;" +
                "border-radius: 6px !important" +
                "} " +
                ".lsq-form-section-container .lsq-form-section-body .lsq-form-field-item .field-validation-valid {" +
                "font-size: 10px !important;" +
                "font-weight: normal !important;" +
                "line-height: 11px;" +
                "margin: 2px 0 0 0  !important;" +
                "</style>")
        );
    }, 1000);



    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var header = $('.header'); 
        if (scrollTop > 100) {
            header.addClass('sticky');
        } else {
            header.removeClass('sticky');
        }
    });


    var lastScrollTop = 0;
    var header = $('.header'); 
    var hideThreshold = 500;

    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > hideThreshold) {
            if (currentScroll > lastScrollTop) {
                header.css('top', '-32px');
            } else {
                header.css('top', '0');
            }
        } else {
            header.css('top', '0');
        }
        lastScrollTop = currentScroll;
    });

    const buttons = document.querySelectorAll('.hoverState');
    let timeoutID;
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        timeoutID = setTimeout(() => {
            this.classList.add('active');
        }, 200);
        });
        button.addEventListener('mouseleave', function() {
        clearTimeout(timeoutID);
        });
    });

    function animateCounter(element, start, end, duration) {
    let current = start;
    const increment = (end - start) / (duration / 50);

    const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
        clearInterval(interval);
        current = end;
        }
        element.textContent = Math.floor(current);
    }, 50);
    }

    function observeCountersInSection(sectionId) {
    const section = document.getElementById(sectionId);
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.count');
            
            counters.forEach(counter => {
            if (!counter.classList.contains('animated')) {
                const endValue = parseInt(counter.getAttribute('data-count'), 10); 
                animateCounter(counter, 0, endValue, 2000); 
                counter.classList.add('animated');
            }
            });
        }
        });
    }, { threshold: 0.5 });
    observer.observe(section);
    }
    observeCountersInSection('counter-section1');
    observeCountersInSection('counter-section2');




    $(".hover-header-list li").on('mouseover', function() {
        $(".hover-header-list li").removeClass('active');
        $(this).addClass('active');
    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 500) {
        $('.gotoTop__icon').addClass('scrolled');  
        } else {
        $('.gotoTop__icon').removeClass('scrolled'); 
        }
    });
    $('.gotoTop__icon').click(function() {
        $("html, body").animate({ scrollTop: '0' }, 600);
    });
    $('.navbar-toggler').click(function() {
        $(this).toggleClass("clicked");            
        $('.navbar-expand-xl').addClass("mobileMenuShow");       
    });
    $('.mobileNavHeader .btn-close').click(function() {   
        $('.navbar-expand-xl').removeClass("mobileMenuShow");       
    });
    $(".header .navbar-nav li").on('mouseenter', function() {
        $('.blur-lay').addClass("active");
    });  
    $(".header .navbar-nav li").on('mouseleave', function() {
        $('.blur-lay').removeClass("active");
    });      
    $(".header .navbar-nav li").on('click', function() {
    $(this).toggleClass("active").siblings(this).removeClass("active");
    var offset = $(this).index();
    offset = offset * 50;
    $("#navbarCollapse").animate({ scrollTop: offset.toString() }, 600);
    });
    $('.page-scroll').click(function() {
        $("html, body").animate({ scrollTop: '0' }, 400);
    });
    if ($(window).width() < 1200) {
        $('.mob-void').attr('href', 'javascript:void(0);');
    }
    
    // For Better Accessibility
    $('#exampleModal').on('shown.bs.modal', () => $('.searchbar-input').focus());    


//    $('.allNotification__list').addClass(window.localStorage.toggled);
//    $('.allNotification__icon').on('click', function() {
//        if (window.localStorage.toggled != "show") {
//            $('.allNotification__list').addClass("show", true);
//            window.localStorage.toggled = "show";
//        } else {
//            $('.allNotification__list').removeClass("show", false);
//            window.localStorage.toggled = "";
//        }
//    }); 
//    $('.allNotification__icon').on('click', function() {
//         $('.allNotification__list').toggleClass("show");
//    });
    $('.allNotification__icon').on('click', function() {
         $('.allNotification__icon .fa-solid').toggleClass("bell");
         $('.allNotification__list').toggleClass("show");
    });  
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            //$('.header').addClass("sticky");
            $('.allNotification').addClass("moveUp");
            $('.gotoTop').addClass('moveUp');
        } else {
            //$('header').removeClass("sticky");
            $('.top-notification-slider').removeClass("stickyBottom");
            $('.allNotification').removeClass("moveUp");
            $('.gotoTop').removeClass('moveUp');
        }
    });



		$(document).ready(function(){
			function addParameterToURL(url, param){
				_url = url
				_url += (_url.split('?')[1] ? '&':'?') + param
				return _url
			}
			let queryParams = new URLSearchParams(window.top.location.search);
			let refererParam = queryParams.get('L_mx_Visit_Source')
			let referer
			if(refererParam){
				referer = refererParam
			} else {
				referer = window.top.document.referrer.replace('https://', '')
			}
		   
			$('a').each(function(){
				$(this).click(function(event){
                    if (this.hasAttribute("data-fancybox")) {
                        
                    }  
                    else if (this.hasClass("sb-chat-btn")) {
                        
                    }
                    else {
					event.preventDefault()
					let url = $(this).attr('href')
					if(!url.includes('#')) {
						queryParams.forEach((value, name) => {
							if(!url.includes(name)){
								url = addParameterToURL(url, name+"="+value)
							}
						})
						setTimeout(function(){
							if(referer) {
								let param = "L_mx_Visit_Source=" + referer
								if(!url.includes("L_mx_Visit_Source")){
									url = addParameterToURL(url, param)
								}
							}
							window.location.href = url
						},100)
					} else {
						window.location.href = url
					}
					}
				})
			})
		});	
    

window.__sbt_widget_client = JSON.parse('{\u0022id\u0022:31,\u0022account_id\u0022:26,\u0022api_key\u0022:\u0022vb_live_62672d90e8e974e6b6ced012df1deb3afceb187f053d6fae\u0022,\u0022bot_config\u0022:[{\u0022channel_type_id\u0022:3,\u0022usecasemodel_id\u0022:\u002279305\u0022,\u0022campaign_id\u0022:\u002224838\u0022,\u0022slug\u0022:\u0022text_assistant\u0022},{\u0022channel_type_id\u0022:2,\u0022usecasemodel_id\u0022:\u002279303\u0022,\u0022campaign_id\u0022:\u002224839\u0022,\u0022slug\u0022:\u0022voice_assistant\u0022}],\u0022api_base_url\u0022:\u0022https:\\\/\\\/api.superbot.one\\\/tel\u0022}');


    setTimeout(() => {
      document.getElementById("sbt-widget-host").shadowRoot.getElementById('sbt-minimize-styles').textContent += '.sbt-widget-trigger-container{right:12px!important;gap:3px!important}.sbt-widget-trigger{outline:0!important}.sbt-widget-trigger-label{font-weight:700!important;padding:3px 10px!important;font-size:12px!important;font-family:var(--primary-font)!important;color:var(--bs-black)!important}.sbt-widget-close svg,.sbt-widget-minimize svg{fill:#000!important}.sbt-widget-title{font-weight:400!important}.sbt-powered-by{display:none!important}@media (max-width:575px){.sbt-widget-trigger-container{right:3px!important;bottom:34px!important}}';
    }, 1200);



