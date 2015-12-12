//функция для того чтобы каждый раз не писать document.querySelector
function c(e){
    return document.querySelector('.' + e);
}

//меню "гамбургер"
var menuButton = c("page-nav__button"),
    menuList = c("page-nav__list"),
    menuBar = c("page-nav");

menuButton.addEventListener("click", function(){
    menuButton.classList.toggle("page-nav__button--active");
    menuList.classList.toggle("page-nav__list--active");
    menuBar.classList.toggle("page-nav--active");
})

//кнопки "+" и "-" для поля продолжительности путешествия
var durationButtonMinus = c("vacation__duration-minus"),
    durationButtonPlus = c("vacation__duration-plus"),
    durationInput = c("vacation__duration-count"),
    departureInput = c("vacation__start"),
    arrivalInput = c("vacation__end"),
    duration = parseInt(durationInput.value);
    /*departureDate = departureInput.value.toString().split("-"),
    departureYear = +departureDate[0],
    departureMonth = +departureDate[1] - 1,
    departureDay = +departureDate[2],
    arrivalDay = departureDay + duration,
    arrivalDate = new Date(departureYear, departureMonth, arrivalDay);*/


durationButtonMinus.addEventListener("click", function(){
    if(duration < 1)return;
    duration--;
    durationInput.value = duration + " дней";
});
durationButtonPlus.addEventListener("click", function(){
    duration++;
    durationInput.value = duration + " дней";
});
durationInput.addEventListener("change", function(){
    if(isNaN(parseInt(durationInput.value))){
        alert("Неверное значение продолжительности путешествия");
        durationInput.value = 10 + " дней";
    }else{
        duration = parseInt(durationInput.value);
    }
});

//кнопки для количества попутчиков
var companionsButtonMinus = c("companions__minus"),
    companionsButtonPlus = c("companions__plus"),
    companionsInput = c("companions__count"),
    companionsCount = parseInt(companionsInput.value);

companionsButtonMinus.addEventListener("click", function(){
    if(companionsCount < 1)return;
    companionsCount--;
    companionsInput.value = companionsCount + " чел";
});
companionsButtonPlus.addEventListener("click", function(){
    companionsCount++;
    companionsInput.value = companionsCount + " чел";
});
companionsInput.addEventListener("change", function(){
    if(isNaN(parseInt(companionsInput.value))){
        alert("Неверное значение количества попутчиков");
        companionsInput.value = 2 + "  чел";
    }else{
        companionsCount = parseInt(companionsInput.value);
    }
});