document.addEventListener('DOMContentLoaded', function() { 
    const body = document.querySelector('body')
    hamburger = body.querySelector('.hamburger'),
    nav = body.querySelector('nav'),
    closeElem = body.querySelector('.nav-close'),
    overlay = body.querySelector('.header-overlay');

    let resizeTime;

    //open nav

    hamburger.addEventListener('click', () => {
        nav.classList.add('active');
        overlay.style.display = 'block';
        body.classList.add('overflow-hide');
    });

    //close nav

    function closeNav() {
        nav.classList.remove('active');
        body.classList.remove('overflow-hide');
        overlay.style.display = 'none';
    }

    //close on resize
    
    window.addEventListener('resize', () => {
        clearTimeout(resizeTime);
        resizeTime = setTimeout(closeNav, 100);
    });

    // close on click
    closeElem.addEventListener('click', () => {
        closeNav(closeElem);
    });
    
    // close on overlay
    overlay.addEventListener('click', () => {
        closeNav(closeElem);
    });

    //close on escape

    document.addEventListener('keyup', function(e) {
        if (e.code === 'Escape' && nav.classList.contains("active")) {
            closeNav(closeElem);
        }
    });
});