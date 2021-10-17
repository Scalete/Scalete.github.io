window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body'),
        menu = body.querySelector('.header__menu'),
        hamburger = body.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
        body.classList.toggle('overflow-h');
    });
});