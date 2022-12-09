'use strict';

const documentReady = () => {
    const body = document.querySelector(".body");
    const headerNavToggle = document.getElementById("header-nav-toggle");
    const headerNavMenuContainer = document.getElementById("header-nav-menu-container");
    const menuItems = document.querySelectorAll(".header-nav-menu-link-item");
    const sections = document.querySelectorAll(".section");

    const toggleMenu = () => {
        body.classList.toggle("body-no-scroll");
        headerNavToggle.classList.toggle("header-nav-toggle-open");
        headerNavMenuContainer.classList.toggle("header-nav-menu-container-open");
    }

    menuItems.forEach((link) =>
        link.addEventListener("click", () => {
            body.classList.remove("body-no-scroll");
            headerNavToggle.classList.remove("header-nav-toggle-open");
            headerNavMenuContainer.classList.remove("header-nav-menu-container-open");
        })
    );

    const documentScroll = () => {
        var current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        menuItems.forEach((link) => {
            link.classList.remove("active");
            if (link.href.indexOf(current) > -1) {
                link.classList.add("active");
            }
        });
    }

    document.addEventListener('scroll', documentScroll);
    headerNavToggle.addEventListener('click', toggleMenu);
};

document.addEventListener('DOMContentLoaded', documentReady);