//отправка формы с помощью ajax
(function(){
    /*if(!("FormData it window") || !(FileReader in window)){
        return;
    }*/
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
    form.addEventListener("submit", function(e){
        e.preventDefault();
        
        var data = new FormData(form);
        
        queue.forEach(function(element){
            data.append("images", element.file);    
        });
        request(data, function(response){
            alert(response);
        });
    });
    
    //загрузка фотографий
    var area = c("photo__preview");
    var queue = [];
    form.querySelector(".photo__upload-file").addEventListener("change", function(){
        var files = this.files;
        for(var i = 0; i < files.length; i++){
            preview(files[i]);    
        }
    });
    function preview(file){
        var template = c("image-template").innerHTML;
        
        if(file.type.match(/image.*/)){
            var reader = new FileReader();
            reader.addEventListener("load", function(event){
                var html = Mustache.render(template, {
                    "image": event.target.result,
                    "name": file.name
                });
                var figure = document.createElement("figure");
                figure.classList.add("photo__item");
                figure.innerHTML = html;
                area.appendChild(figure);
                figure.querySelector(".photo__delete").addEventListener("click", function(event){
                    removePreview(figure);
                });
                queue.push({
                    "file": file,
                    "figure": figure
                })
            });
            reader.readAsDataURL(file);
        }
    };
    function removePreview(figure){
        queue = queue.filter(function(element){
            return element.figure != figure;
        });
        var figure = figure.parentNode;
        figure.parentNode.removeChild(figure);
    }
})();