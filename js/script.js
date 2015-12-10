var menuButton = document.querySelector(".page-nav__button");
var menu = document.querySelector(".page-nav__list");
var menuBar = document.querySelector(".page-nav");
    
menuButton.addEventListener("click", function(event){
    menuButton.classList.toggle("page-nav__button--active");
    menu.classList.toggle("page-nav__list--active");
    menuBar.classList.toggle("page-nav--active");
})

