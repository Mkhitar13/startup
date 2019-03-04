const headerInternal = document.querySelector(".header-internal");
const header = document.querySelector("header");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const headerMenuMobile = document.querySelector(".header-menu-mobile");
const headerMenu = document.querySelector(".header-menu");
const branding = document.querySelector(".branding");
const design = document.querySelector(".design");
const development = document.querySelector(".development");
const strategy = document.querySelector(".strategy");
const opacityBranding = document.querySelector(".opacity-branding");
const opacityDesign = document.querySelector(".opacity-design");
const opacityDevelopment = document.querySelector(".opacity-development");
const opacitystrategy = document.querySelector(".opacity-strategy");
const filters = document.querySelectorAll(".filters");
const worksImages = document.querySelector(".works-images");
const worksImage = document.querySelectorAll(".works-img");
const innerText3 = document.querySelector(".inner-text3");
const innerText2 = document.querySelector(".inner-text2");
const innerText1 = document.querySelector(".inner-text1");
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");

function a(x) {
    if (x.style.display === "none") {
        x.style.display = "";

        function f1() {

            x.style.transition = "1s";
            x.style.opacity = "1";
        }

        setTimeout(f1, 4);
    }
    else {
        x.style.opacity = "0";
        x.style.transition = "1.5s";

        function f() {
            x.style.display = "none";
        }

        setTimeout(f, 500);
    }
}

for (let i = 0; i < filters.length; i++) {
    filters[i].addEventListener("click", filterWorks);
}

function filterWorks() {
    var c = this.getAttribute("data-work");
    for (let i = 0; i < worksImages.length; i++) {
        if (worksImages[i].classList.contains(c)) {

        }
        else {
            worksImages[i].style.opacity = "0";
            worksImages[i].style.transition = "1.5s";

            function f() {
                worksImages[i].style.display = "none";
            }

            setTimeout(f, 500);
        }
    }
}


    dot1.addEventListener("click", function () {
        innerText1.style.display = "none";
    });

    dot2.addEventListener("click", function () {
        innerText2.style.display = "none";
    });

    dot3.addEventListener("click", function () {
        innerText3.style.display = "none";
    });







window.addEventListener("scroll", function () {
    let s = document.documentElement.scrollTop;
    if (s > 250) {
        header.classList.add("header-scroll");
    }
    else {
        header.classList.remove("header-scroll");
    }
});
hamburgerMenu.addEventListener("click",function () {
    headerMenu.classList.toggle("header-menu-mobile");
});

opacityDesign.addEventListener("click", function () {
    design.style.opacity = "0";
    design.style.display = "none";
});
opacityDevelopment.addEventListener("click", function () {
    development.style.opacity = "0";
    development.style.display = "none";
});
opacitystrategy.addEventListener("click", function () {
    strategy.style.opacity = "0";
    strategy.style.display = "none";
});
