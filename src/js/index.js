'use strict';
import data from '../data/site-ES.json' assert { type: 'json' };
import setHomeInfo from './home.js';
import setExperiences from './experience.js';
import setSectionTitles from './sections.js';

const documentReady = () => {
    const body = document.querySelector(".body");
    const headerNavLogo = document.getElementById("header-nav-logo");
    const headerNavToggle = document.getElementById("header-nav-toggle");
    const headerNavMenuContainer = document.getElementById("header-nav-menu-container");
    const headerNavThemeContainer = document.getElementById("header-nav-theme-container");
    const headerNavThemeIconMoon = document.getElementById("header-nav-theme-icon-moon");
    const headerNavThemeIconSun = document.getElementById("header-nav-theme-icon-sun");
    const menuItems = document.querySelectorAll(".header-nav-menu-link-item");
    const sections = document.querySelectorAll(".section");

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

    const toggleMenu = () => {
        body.classList.toggle("body-no-scroll");
        headerNavToggle.classList.toggle("header-nav-toggle-open");
        headerNavMenuContainer.classList.toggle("header-nav-menu-container-open");
    }

    const toggleTheme = () => {
        body.classList.toggle("body-light");
        headerNavThemeIconMoon.classList.toggle("active");
        headerNavThemeIconSun.classList.toggle("active");

        if (body.classList.contains("body-light")) {
            localStorage.setItem("darkMode", "false");
            headerNavLogo.classList.remove("header-nav-logo-dark");
            headerNavLogo.classList.add("header-nav-logo-light");
        } else {
            localStorage.setItem("darkMode", "true");
            headerNavLogo.classList.add("header-nav-logo-dark");
            headerNavLogo.classList.remove("header-nav-logo-light");
        }
    }

    if (localStorage.getItem("darkMode") === "true" || localStorage.getItem("darkMode") === null) {
        body.classList.remove("body-light");
        headerNavLogo.classList.add("header-nav-logo-dark");
        headerNavLogo.classList.remove("header-nav-logo-light");
        headerNavThemeIconMoon.classList.remove("active");
        headerNavThemeIconSun.classList.add("active");
    } else {
        body.classList.add("body-light");
        headerNavLogo.classList.remove("header-nav-logo-dark");
        headerNavLogo.classList.add("header-nav-logo-light");
        headerNavThemeIconMoon.classList.add("active");
        headerNavThemeIconSun.classList.remove("active");
    }

    menuItems.forEach((link) =>
        link.addEventListener("click", () => {
            body.classList.remove("body-no-scroll");
            headerNavToggle.classList.remove("header-nav-toggle-open");
            headerNavMenuContainer.classList.remove("header-nav-menu-container-open");
        })
    );

    setHomeInfo(data);
    setExperiences(data);
    setSectionTitles(data);

    document.addEventListener('scroll', documentScroll);
    headerNavToggle.addEventListener('click', toggleMenu);
    headerNavThemeContainer.addEventListener('click', toggleTheme);
};

document.addEventListener('DOMContentLoaded', documentReady);
