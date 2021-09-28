import "./style.css";

import Home from "./home.js";
import Menu from "./menu.js";
import About from "./about.js";
import Navbar from "./navbar.js";
console.log("Loading up page");

// Tab logic goes within here actually
// wipes the current div and replaces it with the module div

window.onload = () => {
    //write your code here
    // getting content div
    const content = document.querySelector(".content");
    // const h2El = document.createElement("h2");
    // h2El.innerHTML = "Hello testing";
    // console.log("here");
    // have three links here

    // content.appendChild(h2El);
    content.appendChild(Navbar());
    content.appendChild(Home());
    content.appendChild(Menu());
    content.appendChild(About());
};
