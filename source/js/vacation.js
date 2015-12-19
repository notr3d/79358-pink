//кнопки "+" и "-" для поля продолжительности путешествия
var durationButtonMinus = c("vacation__duration-minus"),
    durationButtonPlus = c("vacation__duration-plus"),
    departureInput = c("vacation__start"),
    durationInput = c("vacation__duration-count"),
    arrivalInput = c("vacation__end");

arrivalInput.value = departureInput.value;
var departureDate = moment(departureInput.value, "MM/DD/YYYY");
var vacationDuration = parseInt(durationInput.value);



function setDate(){
    durationInput.value = vacationDuration + " дней";
    arrivalInput.value = moment(departureDate).set("date", vacationDuration + 1).format("MM/DD/YYYY");
}

departureInput.addEventListener("change", function(){
    departureDate = moment(departureInput.value, "MM/DD/YYYY");
    setDate();
})

durationButtonMinus.addEventListener("click", function(){
    if(vacationDuration < 1)return;
    vacationDuration--;
    setDate();
});

durationButtonPlus.addEventListener("click", function(){
    vacationDuration++;
    setDate();
});

durationInput.addEventListener("change", function(){
    if(isNaN(parseInt(durationInput.value)) || parseInt(durationInput.value) < 0){
        alert("Неверное значение продолжительности путешествия");
        durationInput.value = 0 + " дней";
    }else{
        vacationDuration = parseInt(durationInput.value);
        setDate();
    }
});
