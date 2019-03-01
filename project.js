const headerInternal = document.querySelector(".header-internal");
const header = document.querySelector("header");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const headerMenuMobile = document.querySelector(".header-menu-mobile");
const headerMenu = document.querySelector(".header-menu");
const branding = document.querySelector(".branding");
const design = document.querySelector(".design");
const developmen = document.querySelector(".developmen");
const strategy = document.querySelector(".strategy");
const opacityBranding = document.querySelector(".opacity-branding");
const opacityDesign = document.querySelector(".opacity-design");
const opacityDevelopmen = document.querySelector(".opacity-developmen");
const opacitystrategy = document.querySelector(".opacity-strategy");



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

    var x = setTimeout({opacity },2000);

    opacityBranding.addEventListener("click", function () {

    branding.style.opacity = "0";
    branding.style.display = "none";
});

opacityDesign.addEventListener("click", function () {
    design.style.opacity = "0";
    design.style.display = "none";
});
opacityDevelopmen.addEventListener("click", function () {
    developmen.style.opacity = "0";
    developmen.style.display = "none";
});
opacitystrategy.addEventListener("click", function () {
    strategy.style.opacity = "0";
    strategy.style.display = "none";
});
