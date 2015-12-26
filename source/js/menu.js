//меню "гамбургер"
var menuButton = c("page-nav__button"),
    menuList = c("page-nav__list"),
    menuBar = c("page-nav");

menuButton.addEventListener("click", function(){
    menuButton.classList.toggle("page-nav__button--active");
    menuList.classList.toggle("page-nav__list--active");
    menuBar.classList.toggle("page-nav--active");
});
