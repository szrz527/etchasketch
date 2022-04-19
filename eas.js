const grid = document.querySelector("#grid");
const root = document.querySelector(":root");

function hanynegyzet() {
    let hanydb = prompt("Hány négyzet legyen egy sorban?");
    return hanydb;
}

function negyzetkiir() {
    let j = hanynegyzet();
    let szelesseg = (j > 60) ? 10 : 720 / j - 2;
    console.log(szelesseg);
    root.style.setProperty("--size", + szelesseg + "px");
    for (let i = 0; i < (j*j); i++) {
        let negyzet = document.createElement("div");
        negyzet.classList.add("halozat");
        negyzet.addEventListener("mouseover", egerfolotte);
        grid.appendChild(negyzet);
    }
}

function egerfolotte(e) {
    e.target.style.backgroundColor = "rgb(0,0,0)"; //ugyanaz az eredménye mintha classt adnánk hozzá
    //e.target.classList.add("fekete");
}

function torles() {
    let grid = document.getElementById("grid");
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    negyzetkiir();
}

torlesgomb.addEventListener("click", () => {
    torles();
});

negyzetkiir();