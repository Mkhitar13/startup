// const hamburgerMenu = document.querySelector(".hamburger-menu");
// const headerMenuMobile = document.querySelector(".header-menu-mobile");
// const headerInternal = document.querySelector(".header-internal");
//
// hamburgerMenu.addEventListener("click",function () {
//     headerInternal.classList.toggle("header-internal");
//     headerMenuMobile.style.display = "block";
//     headerMenuMobile.classList.toggle("header-menu-mobile");
//
// });
//




// const headerScroll = document.querySelector(".header-scroll");
//
// window.addEventListener("scroll", function () {
//     let s = document.documentElement.scrollTop;
//     if (s > 250) {
//         headerScroll.classList.add("header-scroll");
//     }
//     else {
//         headerScroll.classList.remove("header-scroll");
//     }
// });

window.addEventListener("scroll", function () {
    let s = document.documentElement.scrollTop;
    if (s > 250) {
        document.querySelector("header").classList.add("header-scroll");
    } else {
        document.querySelector("header").classList.remove("header-scroll");
    }
});