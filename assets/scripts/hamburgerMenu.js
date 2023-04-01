import { scrollMenuActive } from "./activeMenu.js";

// Hamburger Menu

// To Show And Hide The Navbar
const emailContainer = document.querySelector(".email__container");
const navTablet = document.querySelector(".nav");

// To Animate Thet Hamburger Menu
const animateBars = document.querySelector(".menu__hamburger__bars");
const line1_bars = document.querySelector(".menu__hamburger__line1");
const line2_bars = document.querySelector(".menu__hamburger__line2");
const line3_bars = document.querySelector(".menu__hamburger__line3");

// Clickable Items Menu
const items = document.querySelectorAll(".nav-item");

function showNavbar() {
    // First remove the class fade-in
    emailContainer.classList.remove("email__fade-in");
    // Second add the class fade-out
    emailContainer.classList.add("email__fade-out");

    // Third go to the timer 
    setTimeout(() => {
        emailContainer.classList.remove("flex");
        emailContainer.classList.add("none");

        navTablet.classList.remove("nav-out");
        navTablet.classList.add("nav-in");
        navTablet.classList.remove("none");
        navTablet.classList.add("flex");
    }, 500);
}

function hideNavbar() {
    // First remove and add flex/none and fade-in/fade-out class
    emailContainer.classList.remove("none");
    emailContainer.classList.add("flex");
    emailContainer.classList.remove("email__fade-out");
    emailContainer.classList.add("email__fade-in");
    // Second remove and add nav-in/nav-out
    navTablet.classList.remove("nav-in");
    navTablet.classList.add("nav-out");
    // Third go to the timer
    setTimeout(() => {
        navTablet.classList.remove("flex");
        navTablet.classList.add("none");
    }, 500);
}

function showAndHideNavbar() {

        // Validation to show the navbar in tablet and mobile devices
    if (emailContainer.classList.contains("flex") 
        && navTablet.classList.contains("nav")) {
            showNavbar();

        // Validation to hide the navbar in tablet and mobile devices
    } else if (emailContainer.classList.contains("email__fade-out") 
    && navTablet.classList.contains("nav-in")) {
        hideNavbar();
    }
}

function toggleNavbarButton() {
    line1_bars.classList.toggle("activeline1_bars_menu");
    line2_bars.classList.toggle("activeline2_bars_menu");
    line3_bars.classList.toggle("activeline3_bars_menu");
}
// Animation of the bars to make the X with the hamburger menu
animateBars.addEventListener("click", () => {
    toggleNavbarButton();
    showAndHideNavbar();
});
// This for is for each click in the 
for( let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", () => {
        toggleNavbarButton();
        hideNavbar();
    });

}

scrollMenuActive();
