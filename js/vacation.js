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