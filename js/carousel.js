$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center:true,
        nav: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:3,
            }
        }
    });
    let navBtnNext = $('.carousel-control-next-icon');
    let navBtnPrev = $('.carousel-control-prev-icon');

    navBtnNext.click(function() {
        $('.travel_carousel-animation').css({'left':'-74%','opacity':'0.8' });
        $('.travel_carousel-animation').animate({left: '1%'},2500);
        $('.travel_carousel-animation').animate({ opacity: '0.5'},500);

        $('.travel_carousel-animation-wrap').css({'left': '-74%','opacity': '0'});
        $('.travel_carousel-animation-wrap').animate({left: '1%'},2500);
        $('.travel_carousel-animation-wrap').animate({ opacity: '0.5'},600);

        $('.travel_carousel-animation-extra').hide().slideDown(2000);
    })

    navBtnPrev.click(function() {
        $('.travel_carousel-animation').css({'left':'-74%','opacity':'0.8' });
        $('.travel_carousel-animation').animate({left: '1%'},2500);
        $('.travel_carousel-animation').animate({ opacity: '0.5'},500);

        $('.travel_carousel-animation-wrap').css({'left': '-74%','opacity': '0'});
        $('.travel_carousel-animation-wrap').animate({left: '1%'},2500);
        $('.travel_carousel-animation-wrap').animate({ opacity: '0.5'},600);

        $('.travel_carousel-animation-extra').hide().slideDown(2000);
    }) 
    
})