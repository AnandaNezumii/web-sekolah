$(document).ready(function(){
   
    $("#slider-jumbotron").owlCarousel({
        loop: true,
        nav: true,
        // mouseDrag: false,
        items: 1,
        dots: false,
        margin: 0,
        navText: [
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"
        ],
        navContainer: "#slider-jumbotron-nav",
    });

    $("#tenaga-pendidik-slider").owlCarousel({
        loop: true,
        nav: true,
        // mouseDrag: false,
        items: 3,
        dots: false,
        margin: 20,
        navText: [
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>",
        ],
        navContainer: "#slider-tools-1",
    });

    $("#galeri-slider").owlCarousel({
        loop: true,
        nav: true,
        // mouseDrag: false,
        items: 3,
        dots: false,
        margin: 20,
        navText: [
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>",
        ],
        navContainer: "#slider-tools-2",
    });

});