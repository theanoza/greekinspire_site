/*====================================================
                        Travel Guide
====================================================*/
$(function () {

    new WOW().init();
});


/*====================================================
                      Islands
====================================================
$(function () {

    $("#destinations-island").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 2
		  },
		  768: {
			items: 3
		  }
		}
    });
});*/


/*====================================================
                    Quote-FirstCover
====================================================*/
$(function () {

    $("#quote")({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});


/*====================================================
                        SecondCover
====================================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});


/*====================================================
                        NAVIGATION
====================================================*/

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
        
            $("nav").removeClass("greeceinspire-top-nav");
            $("#back-to-top").fadeOut();

        } else {
    
            $("nav").addClass("greeceinspire-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

$(function(){
    
    $(".navbar-collapse ul li a").on("click touch", function(){
       
        $(".navbar-toggle").click();
    });
});

/*====================================================
                      second  NAVIGATION
====================================================*/

// direct browser to top right away
if (window.location.hash)
    scroll(0,0);
// takes care of some browsers issue
setTimeout(function(){scroll(0,0);},1);

$(function(){
//your current click function
$('.scroll').on('click',function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop:$($(this).attr('href')).offset().top + 'px'
    },1000,'swing');
});

// if we have anchor on the url (calling from other page)
if(window.location.hash){
    // smooth scroll to the anchor id
    $('html,body').animate({
        scrollTop:$(window.location.hash).offset().top + 'px'
        },1000,'swing');
    }
});




















