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
        
        request(data, function(response){
            alert(response);
        });
    });
})();