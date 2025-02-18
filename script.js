document.addEventListener("DOMContentLoaded", function () {
    // Initialize the burger menu
    initializeBurgerMenu();

    // Initialize Typed.js immediately after DOM content is loaded
    // initializeTypedJs();
});

// Initialize the burger menu
function initializeBurgerMenu() {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar');
    const leftnav = document.querySelector('.leftnav');
    const rightnav = document.querySelector('.rightnav');

    if (burger && navbar && leftnav && rightnav) {
        burger.addEventListener('click', () => {
            console.log("✅ Burger clicked!");
            rightnav.classList.toggle('v-class');
            leftnav.classList.toggle('v-class');
            navbar.classList.toggle('h-nav-resp');
            navbar.classList.toggle('h-nav-click');
        });
    } else {
        console.error("❌ Navbar elements not found!");
    }
}


