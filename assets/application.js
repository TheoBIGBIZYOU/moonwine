// Search Bar
let searchIcon = document.querySelector("button.searchIcon");
let closeIcon = document.querySelector("button.closeIcon");
let searchBar = document.querySelector(".header__searchBar");

searchIcon.addEventListener('click', (e) => {
    e.preventDefault();
    searchBar.classList.toggle("search");
})

closeIcon.addEventListener('click', (e) => {
    e.preventDefault();
    searchBar.classList.remove("search");
})


// Menu mob

let burgerBtn = document.querySelector("div.header__burger");
let menu = document.querySelector("nav.header__nav");
let menuLinks = document.querySelectorAll("nav.header__nav ul li");

burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        document.querySelector("body").style.overflow = "hidden";
    }
    else {
        document.querySelector("body").style.overflow = "visible";
    }
})


menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        menu.classList.remove('active');
    })
})


//SWIPER JS
