const display = document.querySelector(".setting");
const tampilNama = document.querySelector(".nama");
const container2 = document.querySelector(".container");


function nama() {
    display.classList.toggle("display");
    tampilNama.classList.toggle("display");
    container2.classList.toggle("display");
}

const gambarFile = document.querySelector(".file");

function gambar() {
    display.classList.toggle("display");
    gambarFile.classList.toggle("display");
    container2.classList.toggle("display");
}

const quoteSatu = document.querySelector(".quote-satu");

function quote() {
    display.classList.toggle("display");
    quoteSatu.classList.toggle("display");
    container2.classList.toggle("display");
}

const quoteDua = document.querySelector(".quote-dua");

function quote2() {
    display.classList.toggle("display");
    quoteDua.classList.toggle("display");
    container2.classList.toggle("display");
}

const statusProfil = document.querySelector(".status2");

function status() {
    display.classList.toggle("display");
    statusProfil.classList.toggle("display");
    container2.classList.toggle("display");
}