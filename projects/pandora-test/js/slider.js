let slideIndex = 1;
let doit;
const slider = document.getElementById("slider");
const slides = slider.querySelectorAll(".slider__wrapper li");

setActiveSlider();

function resizeSlider() {
    setActiveSlider();
}

window.onresize = function() {
    clearTimeout(doit);
    doit = setTimeout(resizeSlider, 100);
};

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function setActiveSlider() {
    if (window.matchMedia("(max-width: 1024px)").matches) {
        showSlides(slideIndex);
    } else {
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove('hidden');
        }
    }
}

function showSlides(n) {
    let i;
    const dots = slider.querySelectorAll(".slider__dots span");
    const prev = slider.querySelector(".prev");
    const next = slider.querySelector(".next");

    if (n > slides.length) {
        slideIndex = slides.length;
        next.classList.add('disable');
    } else {
        next.classList.remove('disable');
    }

    if (n <= 1) {
        slideIndex = 1;
        prev.classList.add('disable');
    } else {
        prev.classList.remove('disable');
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].classList.remove('hidden');
    dots[slideIndex - 1].className += " active";
}