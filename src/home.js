import KabobBanner from "./kabob.jpg";

export default function home() {
    const divEl = document.createElement("div");
    const hero = document.createElement("section");
    const headLine = document.createElement("h1");
    const description = document.createElement("h2");

    divEl.className = "home-section";
    hero.className = "hero-home";

    headLine.innerHTML = "Welcome to Kabob hut";
    description.innerHTML = "Customize your own kabab into whatever you like!";
    description.className = "home-description";

    const listDiv = document.createElement("div");
    const listDiv1 = document.createElement("div");
    const freshH3 = document.createElement("h3");
    const freshP = document.createElement("p");
    freshH3.innerHTML = "Fresh Ingredients";
    freshP.innerHTML = "We represent out local farmers to get high-quality organic indredients";
    listDiv1.appendChild(freshH3);
    listDiv1.appendChild(freshP);

    const listDiv2 = document.createElement("div");
    const handH3 = document.createElement("h3");
    const handP = document.createElement("p");
    handH3.innerHTML = "Hand Made";
    handP.innerHTML =
        "Our greek culture lets us stay true to the art of kabob making. Ensuring that everything is done by hand!";
    listDiv2.appendChild(handH3);
    listDiv2.appendChild(handP);

    const listDiv3 = document.createElement("div");
    const tasteH3 = document.createElement("h3");
    const tasteP = document.createElement("p");
    tasteH3.innerHTML = "Authentic Taste";
    tasteP.innerHTML =
        "Discover the rich and deep flavors of Greek cuisine we bring forward! Be warned, you'll get hooked!";
    listDiv3.appendChild(tasteH3);
    listDiv3.appendChild(tasteP);

    listDiv.appendChild(listDiv1);
    listDiv.appendChild(listDiv2);
    listDiv.appendChild(listDiv3);
    listDiv.className = "item-container";

    listDiv1.className = "attention-item";
    listDiv2.className = "attention-item";
    listDiv3.className = "attention-item";

    divEl.appendChild(hero);
    hero.appendChild(headLine);
    divEl.appendChild(description);
    divEl.appendChild(listDiv);

    console.log("adding home");

    return divEl;
}
