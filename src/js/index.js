'use strict';

const documentReady = () => {
    const headerNavToggle = document.getElementById("header-nav-toggle");
    const headerNavMenuContainer = document.getElementById("header-nav-menu-container");

    const toggleMenu = () => {
        headerNavToggle.classList.toggle("header-nav-toggle-open");
        headerNavMenuContainer.classList.toggle("header-nav-menu-container-open");
    }

    headerNavToggle.addEventListener('click', toggleMenu);

    document.querySelectorAll(".header-nav-menu-link-item").forEach((link) =>
        link.addEventListener("click", () => {
            headerNavToggle.classList.remove("header-nav-toggle-open");
            headerNavMenuContainer.classList.remove("header-nav-menu-container-open");
        })
    );
};

document.addEventListener('DOMContentLoaded', documentReady);