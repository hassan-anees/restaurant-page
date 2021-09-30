export default function about() {
    const divEl = document.createElement("div");
    const motiveH2 = document.createElement("h2");
    motiveH2.className = "motive-headline";
    const motiveDivP = document.createElement("div");
    motiveDivP.className = "motive-div-p";
    const motiveP = document.createElement("p");
    // motiveP.className = "motive-p";

    motiveH2.innerHTML = "Our Story";
    motiveP.innerHTML =
        "Fusce semper, libero vel sollicitudin faucibus, purus felis convallis ante, quis dignissim nibh tortor id odio. Integer augue lacus, euismod in quam id, dignissim sollicitudin orci. Donec mollis congue mi, fringilla imperdiet mauris vehicula ultricies. Nam at accumsan mauris, nec bibendum est. Pellentesque sed tellus mauris. Nunc eros mauris, vehicula a ornare eget, tincidunt et elit. Pellentesque efficitur bibendum fermentum. Mauris at eleifend sem. In dignissim fringilla mauris ac commodo. Nam non purus magna. Cras nisi diam, rutrum non placerat vitae, facilisis at mi. Etiam aliquam massa vitae lectus blandit, quis imperdiet enim fringilla. Etiam congue quam lectus, a laoreet tellus faucibus sed. Nam ornare non ante non accumsan. Pellentesque eget neque odio.";

    const contactH2 = document.createElement("h2");
    contactH2.className = "contact-headline";
    const infoDiv = document.createElement("div");
    infoDiv.className = "about-info";
    const pDiv = document.createElement("div");
    pDiv.className = "pdiv";

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    contactH2.innerHTML = "Contact Information";
    p1.innerHTML = "Phone: 123-456-789";
    p2.innerHTML = "Email: admin@kabobhut.com";
    p3.innerHTML = "Address: 123 Mary Dr, Nowhere, SO";

    pDiv.appendChild(p1);
    pDiv.appendChild(p2);
    pDiv.appendChild(p3);
    infoDiv.appendChild(pDiv);
    motiveDivP.appendChild(motiveP);

    divEl.appendChild(motiveH2);
    divEl.appendChild(motiveDivP);
    divEl.appendChild(contactH2);
    divEl.appendChild(infoDiv);

    console.log("adding about");

    return divEl;
}
