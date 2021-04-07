$(document).ready(function () {
    $('.promo__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/promo/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/promo/right.png"></button>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                dots: true,
                arrows: false,
            }
        }, ]
    });

    $('.solutions__slider').slick({
        infinite: true,
        speed: 1000,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/right.png"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false,
            }
        }, ]
    });

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            })
        })
    })
});