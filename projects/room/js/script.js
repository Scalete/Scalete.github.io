window.addEventListener('DOMContentLoaded', () => {
    //menu
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

    //add logos

    const logosParent = document.querySelector('.logos__wrapper');
    for (let i = 1; i <= 18; i++) {
        const img = document.createElement('img');
        img.src = `icons/logos/${i}.svg`;
        img.alt = 'icon';
        img.classList.add('logos__icon');
        logosParent.append(img);
    }

    //slider

    $(document).ready(function () {
        $('.slider__wrapper').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            fade: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/left.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/right.svg"></button>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }, ]
        });
    });
    $(document).ready(function () {
        $('.slider__wrapper-footer').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            fade: true,
            arrows: false,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }, ]
        });
    });
    
})