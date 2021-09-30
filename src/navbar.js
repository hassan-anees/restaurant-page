import menu from "./menu";
import "./style.css";

export default function navbar() {
    const navContainer = document.createElement("div");
    const navListDiv = document.createElement("div");
    const navList = document.createElement("ul");
    const homeLink = document.createElement("li");
    const menuLink = document.createElement("li");
    const aboutLink = document.createElement("li");

    navContainer.className = "navContainer";
    navListDiv.className = "div-nav-list";
    navList.classList = "nav-list";

    homeLink.className = "home-nav";
    homeLink.innerHTML = "Kabob Hut";

    aboutLink.className = "about-nav";
    aboutLink.innerHTML = "About";

    menuLink.className = "menu-nav";
    menuLink.innerHTML = "Menu";

    navContainer.appendChild(navListDiv);
    navListDiv.appendChild(navList);
    navList.appendChild(menuLink);
    navList.appendChild(homeLink);
    navList.appendChild(aboutLink);

    return navContainer;
}
