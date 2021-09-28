export default function menu() {
    const divEl = document.createElement("div");
    const headLine = document.createElement("h1");
    headLine.innerHTML = "Menu";

    divEl.appendChild(headLine);
    console.log("addinsg menu");

    return divEl;
}
