const hamburgerMenu = document.querySelector(".hamburger-menu");
const headerMenu = document.querySelector(".header-menu");

hamburgerMenu.addEventListener("click",function () {
    if (headerMenu.style.display === 'none'){
        headerMenu.style.display = "block";
        headerMenu.style.height = "100vh";

    }
    else {
        headerMenu.style.display = "none";
        headerMenu.style.height = "100vh";
        headerMenu.style.transformtransition = "3s";

    }

});
