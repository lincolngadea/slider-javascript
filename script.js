let totalSlides = document.querySelectorAll(".slider--item").length; //retorna quantidade de elementos com a classe
let currentSlide = 0;

document.querySelector(".slider--width").style.width = 
    `calc(100vw * ${totalSlides})`;

document.querySelector(".slider--controls").style.height = 
    `${document.querySelector('.slider').clientHeight}px`;

function goPrev(){
    currentSlide--;
    if(currentSlide <0){
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
    //console.log(newMargin);
}

setInterval(goNext,5000);

