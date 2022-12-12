document.addEventListener('DOMContentLoaded', function() { 
    const body = document.querySelector('body')
    header = body.querySelector('header'),
    hamburger = header.querySelector('.hamburger'),
    nav = header.querySelector('header nav'),
    closeElem = header.querySelector('.close-mobile'),
    overlay = body.querySelector('.overlay');

    let resizeTime;

    //open nav

    hamburger.addEventListener('click', () => {
        overlay.classList.add('active');
        nav.classList.add('active');
        body.classList.add('overflow-hide');
    });

    //close nav

    function closeNav() {
        nav.classList.remove('active');
        body.classList.remove('overflow-hide');
        overlay.classList.remove('active');
    }

    //close on resize
    
    window.addEventListener('resize', () => {
        clearTimeout(resizeTime);
        resizeTime = setTimeout(closeNav, 100);
    });

    // close on click, overlay
    [closeElem, overlay].forEach(item => {
        item.addEventListener('click', () => {
            closeNav(closeElem);
        })
    });

    //close on escape

    document.addEventListener('keyup', function(e) {
        if (e.code === 'Escape' && nav.classList.contains("active")) {
            closeNav(closeElem);
        }
    });

    new WOW().init();
});