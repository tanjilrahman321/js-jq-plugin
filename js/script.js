$(document).ready(function(){

    // Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Wow js
      wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();

      // Aos Js
      AOS.init({
        offset: 120,
        duration: 1000,
      });

      // Mixitup Js
      var mixer = mixitup('.box-list');

      // Slick Slider jq
      $('.autoplay').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

      // Owl carousel

      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:1000,
        stagePadding:70,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });


});
