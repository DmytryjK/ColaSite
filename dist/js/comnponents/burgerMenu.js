const burgerMenu = () => {
    const burgerBtn = document.querySelector('.burger-menu');
    const navigationMenu = document.querySelector('.navigation');

    burgerBtn.addEventListener('click', (event) => {
        navigationMenu.classList.contains('navigation-adaptive_active') ? navigationMenu.classList.remove('navigation-adaptive_active') : navigationMenu.classList.add('navigation-adaptive_active');

        burgerBtn.classList.toggle('burger-menu_active');
    });
};
