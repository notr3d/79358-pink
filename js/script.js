(function reviewsSlider(){
    var firstSlide = document.getElementById("reviews__control-1");
    var secondSlide = document.getElementById("reviews__control-2");
    var thirdSlide = document.getElementById("reviews__control-3");
    var slider = c("reviews__slider");

firstSlide.addEventListener("click", function(){
    slider.classList.remove("reviews__slider--second");
    slider.classList.remove("reviews__slider--third");
    slider.classList.add("reviews__slider--first");
    });
secondSlide.addEventListener("click", function(){
    slider.classList.remove("reviews__slider--first");
    slider.classList.remove("reviews__slider--third");
    slider.classList.add("reviews__slider--second");
    });
thirdSlide.addEventListener("click", function(){
    slider.classList.remove("reviews__slider--first");
    slider.classList.remove("reviews__slider--second");
    slider.classList.add("reviews__slider--third");
    });
})()

