const header = document.querySelector('.header');

window.addEventListener('scroll', event => {

    if (window.scrollY > 100) {
        header.classList.add('header_scroll-active');
    } else {
        header.classList.remove('header_scroll-active');
    }
})
