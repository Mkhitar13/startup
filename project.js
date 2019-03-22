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
            innerText[i].classList.add("show");
        }
        else {
            let x = innerText[i];
            innerText[i].classList.remove("show");
        }
    }
}

// slider-top

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 4
    });
});


function f(){
    var z = [44, 3, 6, 2, 5, 7, 3, 34];
    var x ;
    for(var i = 0; i < z.length; i++){

        if(z[i] > z[i+1]){
            x = z[i];
        }
    }
    return x;
}
alert(f());