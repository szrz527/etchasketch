const grid = document.querySelector("#grid");

function hanynegyzet() {
    let hanydb = prompt("Hány négyzet legyen egy sorban?");
    return hanydb;
}

function negyzetkiir() {
    //let j = hanynegyzet();
    for (let i = 0; i < 100; i++) {
        let negyzet = document.createElement("div");
        negyzet.classList.add("halozat");
        negyzet.addEventListener("mouseover", egerfolotte);
        grid.appendChild(negyzet);
    }
}

function egerfolotte(e) {
    //e.target.style.backgroundColor = "black";
    e.target.classList.add("fekete");
}

negyzetkiir();