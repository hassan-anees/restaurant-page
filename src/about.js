export default function about() {
    const divEl = document.createElement("div");
    const headLine = document.createElement("h1");
    headLine.innerHTML = "About";

    divEl.appendChild(headLine);
    console.log("adding about");

    return divEl;
}
