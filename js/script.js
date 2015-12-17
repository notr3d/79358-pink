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
    vacationDuration = parseInt(durationInput.value);
    /*arrivalInput = c("vacation__end"),
    departureDate = departureInput.value.toString().split("-"),
    departureYear = +departureDate[0],
    departureMonth = +departureDate[1] - 1,
    departureDay = +departureDate[2],
    arrivalDay = departureDay + vacationDuration,
    arrivalDate = new Date(departureYear, departureMonth, arrivalDay);*/


durationButtonMinus.addEventListener("click", function(){
    if(vacationDuration < 1)return;
    vacationDuration--;
    durationInput.value = vacationDuration + " дней";
});
durationButtonPlus.addEventListener("click", function(){
    vacationDuration++;
    durationInput.value = vacationDuration + " дней";
});
durationInput.addEventListener("change", function(){
    if(isNaN(parseInt(durationInput.value)) || parseInt(durationInput.value) < 0){
        alert("Неверное значение продолжительности путешествия");
        durationInput.value = 10 + " дней";
    }else{
        vacationDuration = parseInt(durationInput.value);
        durationInput.value = vacationDuration + " дней";
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
    if(companionsCount > 98){
        alert("Максимальное количество попутчиков: 99 чел.");
        companionsCount = 99;
        companionsInput.value = companionsCount + " чел";
    }else{
        companionsCount++;
        companionsInput.value = companionsCount + " чел";    
    }
    
});
companionsInput.addEventListener("change", function(){
    if(isNaN(parseInt(companionsInput.value)) || parseInt(companionsInput.value) < 0){
        alert("Неверное значение количества попутчиков");
        companionsInput.value = 2 + "  чел";
    }else if(parseInt(companionsInput.value) > 99){
        alert("1Максимальное количество попутчиков: 99 чел.");
        companionsCount = 99;
        companionsInput.value = companionsCount + " чел";
    }else{
        companionsCount = parseInt(companionsInput.value);
        companionsInput.value = companionsCount + " чел";
    }
});