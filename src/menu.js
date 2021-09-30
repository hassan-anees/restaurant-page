import Veggie from "./veggie.jpg";
import Chicken from "./chicken.jpg";
import Beef from "./beef.jpg";

// returns a div of a menu item
const createMenuItem = (imgSrc, dishName, description, price) => {
    const menuItemDivEl = document.createElement("div");
    menuItemDivEl.className = "menu-item-div";
    const imgEl = document.createElement("img");
    const dishNameEl = document.createElement("h4");
    const dishDescriptionEl = document.createElement("p");
    const priceEl = document.createElement("p");
    const nameDescriptionDivEl = document.createElement("div");
    nameDescriptionDivEl.className = "nd-div";

    imgEl.src = imgSrc;
    dishNameEl.innerHTML = dishName;
    dishDescriptionEl.innerHTML = description;
    priceEl.innerHTML = price;

    nameDescriptionDivEl.appendChild(dishNameEl);
    nameDescriptionDivEl.appendChild(dishDescriptionEl);

    menuItemDivEl.appendChild(imgEl);
    menuItemDivEl.appendChild(nameDescriptionDivEl);
    menuItemDivEl.appendChild(priceEl);

    return menuItemDivEl;
};

export default function menu() {
    const divEl = document.createElement("div");
    divEl.className = "menu-section";

    const menuHeadline = document.createElement("h2");
    menuHeadline.className = "menu-headline";
    menuHeadline.innerHTML = "Today's Specials";

    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";

    menuContainer.appendChild(
        createMenuItem(
            Veggie,
            "Veggie Kabob",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in quam quis sodales.",
            "$11.99"
        )
    );

    menuContainer.appendChild(
        createMenuItem(
            Chicken,
            "Chicken Kabob",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in quam quis sodales.",
            "$11.99"
        )
    );

    menuContainer.appendChild(
        createMenuItem(
            Beef,
            "Beef Kabob",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in quam quis sodales.",
            "$11.99"
        )
    );

    // Main items to the div
    divEl.appendChild(menuHeadline);
    divEl.appendChild(document.createElement("br"));
    divEl.appendChild(menuContainer);

    console.log("addinsg menu");

    return divEl;
}
