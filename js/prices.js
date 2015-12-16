(function pricesSlider(){
    var firstSlide = document.getElementById("prices__control-1");
    var secondSlide = document.getElementById("prices__control-2");
    var thirdSlide = document.getElementById("prices__control-3");
    var slider = c("prices__wrapper");
firstSlide.addEventListener("click", function(){
    slider.classList.remove("prices__wrapper--second-slide");
    slider.classList.remove("prices__wrapper--third-slide");
    slider.classList.add("prices__wrapper--first-slide");
    });
secondSlide.addEventListener("click", function(){
    slider.classList.remove("prices__wrapper--first-slide");
    slider.classList.remove("prices__wrapper--third-slide");
    slider.classList.add("prices__wrapper--second-slide");
    });
thirdSlide.addEventListener("click", function(){
    slider.classList.remove("reviews__slider--first-slide");
    slider.classList.remove("reviews__slider--second-slide");
    slider.classList.add("prices__wrapper--third-slide");
    });
})()