/*
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
        addCompanion()
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

//реализация добавления новых блоков для попутчиков
function addCompanion(){
    var companionsContainer = c("companions__container");
    var templateCompanion = c("companion-template").innerHTML;
    var innerContent = Mustache.render(templateCompanion, {
        "number": companionsCount
    });
    var companion = document.createElement("div");
    companion.classList.add("companion");
    companion.innerHTML = innerContent;
    companionsContainer.appendChild(companion);
};





*/
