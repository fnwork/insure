const navBar = document.querySelector("nav"),
menuBtn = document.querySelector(".menu__btn"),
navMenu = document.querySelector(".nav__menu");

menuBtn.addEventListener("click", function (){
    menuBtn.classList.toggle("active");
    navBar.classList.toggle("active");
    navMenu.classList.toggle("show");
});