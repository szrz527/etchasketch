const grid = document.querySelector("#grid");
const root = document.querySelector(":root");
const negyzetek = document.querySelector("#grid").childNodes;

let hanydb;

function hanynegyzet() {
    hanydb = prompt("Hány négyzet legyen egy sorban?");
    if (hanydb > 30) {
        hanydb = 30;
    }
    let szelesseg = 480 / hanydb;
    /*if (root.style.getPropertyValue("--bord_width") == "1px") {
        szelesseg = 480 / hanydb - 2;
    }
    else {
        szelesseg = 480 / hanydb;
    }*/
    root.style.setProperty("--size", + szelesseg + "px");
}

function negyzetkiir() {
    for (let i = 0; i < (hanydb * hanydb); i++) {
        let negyzet = document.createElement("div");
        negyzet.classList.add("halozat");
        negyzet.style.backgroundColor = "rgb(255,255,255)";
        negyzet.addEventListener("mouseover", egerfolotte_random);
        grid.appendChild(negyzet);
    }
}

function negyzetszinez_fekete() {
    negyzetek.forEach((e) => {
        e.removeEventListener("mouseover", egerfolotte_random);
        e.removeEventListener("mouseover", egerfolotte_arny);
        e.addEventListener("mouseover", egerfolotte_fekete);
    });
}

function negyzetszinez_random() {
    negyzetek.forEach((e) => {
        e.removeEventListener("mouseover", egerfolotte_fekete);
        e.removeEventListener("mouseover", egerfolotte_arny);
        e.addEventListener("mouseover", egerfolotte_random);
    });
}

function negyzetszinez_arny() {
    negyzetek.forEach((e) => {
        e.removeEventListener("mouseover", egerfolotte_fekete);
        e.removeEventListener("mouseover", egerfolotte_random);
        e.addEventListener("mouseover", egerfolotte_arny);
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

function egerfolotte_arny(e) {
    let rgb = e.target.style.backgroundColor;
    console.log(rgb);
    let text = rgb.split(",");
    let red = (text[0].slice(4));
    let green, blue;
    if (text[1].length == 2) {
        green = (text[1].slice(1,2));
    }
    else if (text[1].length == 3) {
        green = (text[1].slice(1,3));
    }
    else if (text[1].length == 4) {
        green = (text[1].slice(1,4));
    }
    if (text[2].length == 3) {
        blue = (text[2].slice(1,2));
    }
    else if (text[2].length == 4) {
        blue = (text[2].slice(1,3));
    }
    else if (text[2].length == 5) {
        blue = (text[2].slice(1,4));
    }
    red = red - 25;
    blue = blue - 25;
    green = green - 25;
    e.target.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

function torles() {
    negyzetek.forEach((e) => {
        e.style.backgroundColor = "rgb(255,255,255)";
    });
}

function racs_lathato() {
    if ((root.style.getPropertyValue("--bord_width")) == "1px") {
        root.style.setProperty("--bord_width", "0px");
        /*let meret = parseFloat(root.style.getPropertyValue("--size"));
        meret += 2;
        root.style.setProperty("--size", + meret + "px");*/
    }
    else {
        root.style.setProperty("--bord_width", "1px");
        /*let meret = parseFloat(root.style.getPropertyValue("--size"));
        meret -= 2;
        root.style.setProperty("--size", + meret + "px");*/
    }
}

torlesgomb.addEventListener("click", () => {
    torles();
});

feketegomb.addEventListener("click", () => {
    negyzetszinez_fekete();
});

randomgomb.addEventListener("click", () => {
    negyzetszinez_random();
});

arnygomb.addEventListener("click", () => {
    negyzetszinez_arny();
});

ujgomb.addEventListener("click", () => {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
      }
    hanynegyzet();
    negyzetkiir();
});

racsgomb.addEventListener("click", () => {
    racs_lathato();
});

root.style.setProperty("--bord_width", "1px");

hanynegyzet();
negyzetkiir();