var sliderCount = 0;
let sliderPages = 3; //Amount of slides you have (.slider-content class) - CHANGE if needed

let sliderAutoplayTime = 4000; //Atuoplay time in millisecs - CHANGE if needed
var interval;

function changeSlide(next = true){
    if(next){
        sliderCount++;
        if(sliderCount > (sliderPages - 1))
            sliderCount = 0;
    }else{
        sliderCount--;
        if(sliderCount < 0)
            sliderCount = sliderPages - 1;
    } 
    showSlide();
}

function createNewInterval(){
    clearInterval(interval);
    interval = setInterval(changeSlide, sliderAutoplayTime);
}

//Clicked on arrow
function changeSlideByArrow(next){
    createNewInterval();
    changeSlide(next);
}

//Clicked on dot
function changeSlideByDot(newSliderCount){
    createNewInterval();

    if(newSliderCount > (sliderPages - 1) || newSliderCount < 0){
        alert("Do not try!");
        sliderCount = 0;
    }

    sliderCount = Number(newSliderCount);
    showSlide();
}

function showSlide(){
    //DOTS
    var dots = document.getElementsByClassName('slider-dot');
    for(let i = 0; i < dots.length; ++i){
        dots[i].style.filter = "none";
    }
    dots[sliderCount].style.filter = "invert(21%) sepia(69%) saturate(7055%) hue-rotate(355deg) brightness(103%) contrast(122%)"; //SVG images were used, that is the reason for filter - CHANGE if needed
    //DOTS END

    //SLIDES
    var slides = document.getElementsByClassName('slider-content');
    for(let i = 0; i < slides.length; ++i)
        slides[i].style.display = "none";
    slides[sliderCount].style.display = 'block';
    //SLIDES END
}


(function(){
    interval = setInterval(changeSlide, sliderAutoplayTime);
})();

//By @retirem - 02.02.2022.
