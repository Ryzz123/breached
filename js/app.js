const settingMenu = document.querySelector(".setting");
const settingButton = document.querySelector(".setting-button");
const container = document.querySelector(".container");

settingButton.addEventListener("click", function() {
    settingMenu.classList.toggle('display');
    container.classList.toggle("display");
})

// tombol back ke menu utama
const buttonBack = document.querySelector(".back");

buttonBack.addEventListener("click", function() {
    settingMenu.classList.toggle('display');
    container.classList.toggle("display");
})