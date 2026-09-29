document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const mainNav = document.getElementById("main-nav");

    burgerMenu.addEventListener("click", () => {
        // Тогглим класс active, чтобы показать/скрыть меню
        mainNav.classList.toggle("active");
        
        // Анимация самого бургера (превращение в крестик)
        burgerMenu.classList.toggle("open");
    });
});