const grid = document.querySelector("#grid");
const negyzetek = document.querySelector("#grid").childNodes;

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
    //e.target.style.backgroundColor = "black"; //ugyanaz az eredménye mintha classt adnánk hozzá
    e.target.classList.add("fekete");
}

function torles() {
    negyzetek.forEach((e) => e.classList.remove("fekete"));
}

torlesgomb.addEventListener("click", () => {
    torles();
});

negyzetkiir();
console.log(negyzetek);