const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay'),
    menuList = document.querySelectorAll('.menu__link');

//open menu

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

//close menu

function closeMenu(closeElem) {
    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });
}

closeMenu(closeElem);
closeMenu(overlay);

menuList.forEach(item => {
    closeMenu(item);
});

//auto progress bar

const counters = document.querySelectorAll('.work__bar-title span'),
    lines = document.querySelectorAll('.work__bar-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

//change sidepanel color

$(window).scroll(function () {
    var top = $(this).scrollTop();
    if (top >= $('.promo').height() / 2) {
        changeSidepanelColor('black');
    } else {
        changeSidepanelColor('white');
    }
});

function changeSidepanelColor(color) {
    $(".sidepanel__link svg path").css('fill', color);
    $(".sidepanel__divider").css('background-color', color);
    $(".sidepanel__text").css('color', color);
}

//email

$('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function () {
        $('form').trigger('reset');
    });
    return false;
});