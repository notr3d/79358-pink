(function(){
    //проверка наличия необходимых объектов в браузере
    if (!("FormData" in window) || !("FileReader" in window)) {
        return;
    }
    //отправка формы с помощью ajax
    function request(data, f){
        var xhr = new XMLHttpRequest();
        xhr.open("post", "https://echo.htmlacademy.ru/adaptive?");
        xhr.addEventListener("readystatechange", function(){
            if (xhr.readyState == 4){
                f(xhr.responseText);
            }
        });
        xhr.send(data);
    };
    var form = c("form");
    var photos = [];
    //добавление фотографий для отправки 
    form.addEventListener("submit", function(e){
        e.preventDefault();
        var data = new FormData(form);
        photos.forEach(function(element){
            data.append("images", element.file);    
        });
        request(data, function(response){
            alert(response);
        });
    });
    //загрузка фотографий
    form.querySelector(".photo__upload-file").addEventListener("change", function(){
        var files = this.files;
        for(var i = 0; i < files.length; i++){
            preview(files[i]);    
        }
        this.value="";
    });
    function preview(file){
        var photosContainer = c("photo__preview");
        var templatePhotos = c("image-template").innerHTML;
        if(file.type.match(/image.*/)){
            var reader = new FileReader();
            reader.addEventListener("load", function(event){
                var html = Mustache.render(templatePhotos, {
                    "image": event.target.result,
                    "name": file.name
                });
                var figure = document.createElement("figure");
                figure.classList.add("photo__item");
                figure.innerHTML = html;
                photosContainer.appendChild(figure);
figure.querySelector(".photo__delete").addEventListener("click", function(event){
                    event.preventDefault();
                    removePreview(figure);
                });
                photos.push({
                    "file": file,
                    "figure": figure
                })
            });
            reader.readAsDataURL(file);
        }
    };
    function removePreview(figure){
        photos = photos.filter(function(element){
            return element.figure != figure;
        });
        figure.parentNode.removeChild(figure);
    };
    
    //кнопки для количества попутчиков
    var companionsButtonMinus = c("companions__minus"),
        companionsButtonPlus = c("companions__plus"),
        companionsInput = c("companions__count"),
        companionsCount = parseInt(companionsInput.value);

    companionsButtonMinus.addEventListener("click", function(){
        if(companionsCount < 1)return;
        companionsCount--;
        companionsInput.value = companionsCount + " чел";
        removeCompanion();
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
            addCompanion();
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
        var companion = document.createElement("div");
        var templateCompanion = c("companion-template").innerHTML;
        var innerContent = Mustache.render(templateCompanion, {
            "number": companionsCount
        });
        companion.classList.add("companion");
        companion.id = "companion-" + companionsCount;
        companion.innerHTML = innerContent;
        companionsContainer.appendChild(companion);
    };
    function removeCompanion(lastCompanion){
        var companionsContainer = c("companions__container");
        var lastCompanion = companionsContainer.lastChild;
        companionsContainer.removeChild(lastCompanion);
    }






})();