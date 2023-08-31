//  top slider code

$(document).ready(function () {
$('.carousel-top').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: false,
         autoplay:true,
        autoplayTimeout:2000,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600:{
                items:3
            },
            1000: {
                items: 4
            },
        }
    });
});


// product card slider 


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: false,
        /* autoplay:true,
        autoplayTimeout:2000,*/
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 4

            },

            1000: {
                items: 6
            },
        }
    });
});


