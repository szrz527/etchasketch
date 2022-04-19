const grid = document.querySelector("#grid");
//const osztaly = document.querySelector(":halozat");

function hanynegyzet() {
    let hanydb = prompt("Hány négyzet legyen egy sorban?");
    return hanydb;
}

function negyzetkiir() {
//    let j = hanynegyzet();
//    let szelesseg = 720/j;
//    osztaly.style.setProperty("--size", + szelesseg);
    for (let i = 0; i < 100; i++) {
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