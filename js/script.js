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
    duration = parseInt(durationInput.value),
    departureDate = departureInput.value.toString().split("-"),
    departureYear = +departureDate[0],
    departureMonth = +departureDate[1] - 1,
    departureDay = +departureDate[2],
    arrivalDay = departureDay + duration,
    arrivalDate = new Date(departureYear, departureMonth, arrivalDay);
//    arrivalDate = arrivalInput.value.toString().split("-"),
//    nyear = arrivalDate[0],
//    nmonth = arrivalDate[1] - 1,
//    nday = arrivalDate[2],
//    arrival = new Date(nyear, nmonth, nday);
//    
//alert(arrival);

durationButtonMinus.addEventListener("click", function(){
    if(duration < 1)return;
    duration--;
    durationInput.value = duration + " дней";
})
durationButtonPlus.addEventListener("click", function(){
    duration++;
    durationInput.value = duration + " дней";
})
durationInput.addEventListener("change", function(){
    if(isNaN(parseInt(durationInput.value))){
        alert("Неверное значение продолжительности путешествия");
        durationInput.value = 10 + " дней";
    }else{
        duration = parseInt(durationInput.value);
        arrivalInput.value = arrivalDate;
    }
})



