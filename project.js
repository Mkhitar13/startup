const header = document.querySelector("header");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const headerMenu = document.querySelector(".header-menu");
const dot = document.querySelectorAll(".dot");
const innerText = document.querySelectorAll(".inner-text");

// navigation dark

window.addEventListener("scroll", function () {
    let s = document.documentElement.scrollTop;
    if (s > 250) {
        header.classList.add("header-scroll");
    }
    else {
        header.classList.remove("header-scroll");
    }
});


// hamburgerMenu show mobile

hamburgerMenu.addEventListener("click", function () {
    headerMenu.classList.toggle("header-menu-mobile");
});



// slider-bottom

for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", slideShow);
}

function slideShow() {
    for (let i = 0; i < dot.length; i++) {
        if (this === dot[i]) {
            let x = innerText[i];
            x.classList.add("show");
        }
        else {
            let x = innerText[i];
            x.classList.remove("show");
        }
    }
}

// slider-top

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        mouseDrag: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1500:{
                items:4
            }
        }
    });
});

// filter

var grid = $('.grid').isotope({
    itemSelector: '.grid-item'
});

$('.filter li').on("click", function () {
   var value = $(this).attr('data-work');
       grid.isotope({
        filter:value
    })
});

// ----------------------------------

// function func(x) {
//     console.log(x/100 + " metr");
// }
// func(580);


// function func(x) {
//     console.log(x/1000 + " tonna");
// }
// func(5800);



// function func(x,y) {
//     console.log(parseInt(x/y)*y);
// }
// func(1000,300);
























