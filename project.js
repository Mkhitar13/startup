const header = document.querySelector("header");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const headerMenu = document.querySelector(".header-menu");
const dot = document.querySelectorAll(".dot");
const innerText = document.querySelectorAll(".inner-text");
const sliderStructure = document.querySelector(".slider-structure");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const sliderParagraph = document.querySelectorAll(".slider-paragraph");

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


//
// prev.addEventListener("click", sliderPrev);
// next.addEventListener("click", sliderNext);
//
// function sliderPrev() {
//     sliderStructure.style = "transform: translate(-250px);";
//     for (let i = 0; i < sliderParagraph.length; i++){
//         if (sliderParagraph[i] === sliderParagraph.length) {
//             sliderParagraph[i] = sliderParagraph[0];
//         }
//     }
// }
//
// function sliderNext() {
//     sliderStructure.style = "transform: translate(250px);";
// }