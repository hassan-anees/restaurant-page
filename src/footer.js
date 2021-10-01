export default function footer() {
    const footerEl = document.createElement("footer");
    const pEl = document.createElement("p");
    pEl.innerHTML = "Copyright &copy; hassan-anees";

    footerEl.appendChild(pEl);

    return footerEl;
}
