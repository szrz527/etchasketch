const grid = document.querySelector("#grid");
const root = document.querySelector(":root");
const negyzetek = document.querySelector("#grid").childNodes;

function hanynegyzet() {
    let hanydb = prompt("Hány négyzet legyen egy sorban?");
    return hanydb;
}

function negyzetkiir() {
    let j = hanynegyzet();
    let szelesseg = (j > 60) ? 10 : 720 / j - 2;
    root.style.setProperty("--size", + szelesseg + "px");
    for (let i = 0; i < (j*j); i++) {
        let negyzet = document.createElement("div");
        negyzet.classList.add("halozat");
        negyzet.addEventListener("mouseover", egerfolotte_fekete);
        grid.appendChild(negyzet);
    }
}

root.style.setProperty("--bgcolor", "rgb(100,100,100)");

function egerfolotte_fekete(e) {
    //e.target.style.backgroundColor = "rgb(0,0,0)";
    e.target.classList.add("festett");
}

function egerfolotte_random(e) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

function torles() {
    /*negyzetek.forEach((e) => {
        e.style.backgroundColor = "rgb(255,255,255)";
    });*/
    negyzetek.forEach((e) => {
        e.classList.remove("festett");
    });
}

torlesgomb.addEventListener("click", () => {
    torles();
});

negyzetkiir();
console.log(negyzetek);