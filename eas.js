const grid = document.querySelector("#grid");
const root = document.querySelector(":root");
const negyzetek = document.querySelector("#grid").childNodes;

let hanydb;

function hanynegyzet() {
    hanydb = prompt("Hány négyzet legyen egy sorban?");
    let szelesseg = (hanydb > 60) ? 10 : 720 / hanydb - 2;
    root.style.setProperty("--size", + szelesseg + "px");
}

function negyzetkiir() {
    for (let i = 0; i < (hanydb * hanydb); i++) {
        let negyzet = document.createElement("div");
        negyzet.classList.add("halozat");
        negyzet.addEventListener("mouseover", egerfolotte_random);
        grid.appendChild(negyzet);
    }
}

function negyzetkiir_fekete() {
    negyzetek.forEach((e) => {
        e.addEventListener("mouseover", egerfolotte_fekete)
    });
}

function negyzetkiir_random() {
    negyzetek.forEach((e) => {
        e.addEventListener("mouseover", egerfolotte_random)
    });
}

function egerfolotte_fekete(e) {
    e.target.style.backgroundColor = "rgb(0,0,0)";
}

function egerfolotte_random(e) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

function torles() {
    negyzetkiir();
    /*negyzetek.forEach((e) => {
        e.style.backgroundColor = "rgb(255,255,255)";
    });*/
    negyzetek.forEach((e) => {
        //e.classList.remove("festett");
        e.style.backgroundColor = "rgb(255,255,255)";
    });
}

torlesgomb.addEventListener("click", () => {
    torles();
});

feketegomb.addEventListener("click", () => {
    negyzetkiir_fekete();
});

randomgomb.addEventListener("click", () => {
    negyzetkiir_random();
});

hanynegyzet();
negyzetkiir();