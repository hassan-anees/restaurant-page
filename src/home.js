export default function home() {
    const divEl = document.createElement("div");
    const headLine = document.createElement("h1");
    headLine.innerHTML = "Welcome to Kabob hut";

    divEl.appendChild(headLine);
    console.log("adding home");

    return divEl;
}
