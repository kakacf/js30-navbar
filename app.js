
let menu = document.getElementById('menu');
let nav = document.getElementById('nav');
let popup = document.getElementById('popup');
let close = document.getElementById('close');

menu.addEventListener('click', function() {
    // menu
    menu.style.display = 'none';
    // nav
    nav.style.display = 'flex';
    nav.style.color = 'transparent';
    nav.style.position = 'absolute';
    if (window.innerWidth < 490) {
        nav.style.top = '2rem';
        nav.style.left = '2rem';
    } else {
        nav.style.top = '3rem';
        nav.style.left = '3rem';
    }
    // popup
    popup.style.display = 'block';
    popup.style.top = '-1rem';
    popup.style.right = '0rem';
    popup.style.left = '0rem';
    popup.style.width = '80vw';
    // close btn
    close.style.display = 'block';
});

close.addEventListener('click', function() {
    // menu
    menu.style.display = 'block';
    // nav
    nav.style.display = 'none';
    // popup
    popup.style.display = 'none';
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        // nav
        nav.style.display = 'flex';
        nav.style.color = '#6c6c6c';
        nav.style.position = null;
        nav.style.top = null;
        nav.style.left = null;
    } else {
        // nav
        nav.style.display = 'none';
    }
});

