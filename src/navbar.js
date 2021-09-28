import "./style.css";

export default function navbar() {
    const navDivEl = document.createElement("nav");
    const navList = document.createElement("ul");
    const homeLink = document.createElement("li");
    const menuLink = document.createElement("li");
    const aboutLink = document.createElement("li");

    navDivEl.className = "navbar";
    navList.classList = "navlist";
    homeLink.innerHTML = "Kabob Hut";
    aboutLink.innerHTML = "About";
    menuLink.innerHTML = "Menu";

    navDivEl.appendChild(navList);
    navList.appendChild(menuLink);
    navList.appendChild(homeLink);
    navList.appendChild(aboutLink);

    return navDivEl;
}
