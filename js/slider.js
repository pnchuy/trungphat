$(document).ready(function () {
    $('.owl-carousel-cover').owlCarousel({
        animateIn: 'animate__fadeIn',
        animateOut: 'animate__fadeOut',
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        margin: 0,
        dots:false,
        nav: true,
        items: 1,
        navText: ["<div class='btn-owl-left'></div>", "<div class='btn-owl-right'></div>"],
        responsive: {
            0: {
                nav: false,
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.owl-carousel-duan').owlCarousel({
        animateIn: 'animate__fadeIn',
        animateOut: 'animate__fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        margin: 0,
        dots:false,
        nav: true,
        navText: ["<div class='btn-owl-left'></div>", "<div class='btn-owl-right'></div>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
    $('.owl-carousel-doitac').owlCarousel({
        animateIn: 'animate__fadeIn',
        animateOut: 'animate__fadeOut',
        autoplay: false,
        autoplayTimeout: 2500,
        loop: true,
        margin: 100,
        dots:false,
        nav: true,
        navText: ["<div class='btn-owl-left'></div>", "<div class='btn-owl-right'></div>"],
        responsive: {
            0: {
                items: 2
            },
            700: {
                items: 3
            },
            900: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    })
});

