import "./style.css";

import Home from "./home.js";
import Menu from "./menu.js";
import About from "./about.js";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
console.log("Loading up page");

// Tab logic goes within here actually
// wipes the current div and replaces it with the module div

const homeRender = (e) => {
    e.preventDefault();
    console.log("You clicked on HOME");
};

const aboutRender = (e) => {
    e.preventDefault();
    console.log("You clicked on ABOUT");
};

const menuRender = (e) => {
    e.preventDefault();
    console.log("You clicked on MENUUU");
};

const clearContent = () => {};

window.onload = () => {
    const content = document.querySelector(".content");

    // have three links here
    // here we add event listener to the list grouping

    content.appendChild(Navbar());

    const containerEl = document.createElement("div");
    containerEl.className = "container";
    content.appendChild(containerEl);

    containerEl.appendChild(Home());
    const homeEl = document.querySelector(".home-nav");
    const menuEl = document.querySelector(".menu-nav");
    const aboutEl = document.querySelector(".about-nav");

    homeEl.addEventListener("click", function () {
        containerEl.innerHTML = "";
        containerEl.appendChild(Home());
    });
    aboutEl.addEventListener("click", function () {
        containerEl.innerHTML = "";
        containerEl.appendChild(About());
    });

    menuEl.addEventListener("click", function () {
        containerEl.innerHTML = "";
        containerEl.appendChild(Menu());
    });

    content.appendChild(Footer());
};
