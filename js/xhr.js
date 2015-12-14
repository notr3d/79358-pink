//отправка формы с помощью ajax
(function(){
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
    var queue = [];
    form.querySelector(".photo__upload-file").addEventListener("change", function(){
        var files = this.files;
        for(var i = 0; i < files.length; i++){
            preview(files[i]);    
        }
    });
    function preview(file){
        var area = c("photo__preview"),
            template = '<figure class="photo__item"><img src="{{image}}" alt="{{name}}"><figcaption>{{name}}</figcaption><button>&times;</button></figure>';
        
        if(file.type.match(/image.*/)){
            var reader = new FileReader();
            reader.addEventListener("load", function(event){
                var html = template.replace("{{image}}", event.target.result);
                html = html.replace("{{name}}", file.name);
                area.innerHTML = area.innerHTML + html;
                /*var img = document.createElement("img");
                img.src = event.target.result;
                img.alt = file.name;
                area.appendChild(img);*/
                //queue.push({file: file, img: img});
            });
            reader.readAsDataURL(file);
        }
    };
})();