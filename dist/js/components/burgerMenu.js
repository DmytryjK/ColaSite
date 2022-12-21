const burgerMenu = () => {
    const burgerBtn = document.querySelector('.burger-menu');
    const navigationMenu = document.querySelector('.navigation');
    const body = document.querySelector('body');

    burgerBtn.addEventListener('click', () => {

        if (navigationMenu.classList.contains('navigation-adaptive_active')) {
            body.removeEventListener('click', closeMenuOutsideField);
            body.style.overflow = 'visible';
        } else {
            body.addEventListener('click', closeMenuOutsideField);
            body.style.overflow = 'hidden'
        }

        navigationMenu.classList.toggle('navigation-adaptive_active');
        burgerBtn.classList.toggle('burger-menu_active');
    });

    const closeMenuOutsideField = (event) => {

        if(!event.target.closest('.navigation-adaptive_active') && !event.target.closest('.burger-menu')) {

            burgerBtn.classList.remove('burger-menu_active');

            navigationMenu.classList.remove('navigation-adaptive_active');
            body.removeEventListener('click', closeBurgerMenu);
            body.style.overflow = 'visible';
        }

    }
};
