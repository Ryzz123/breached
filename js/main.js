// ubah gambar
const display5 = document.querySelector(".file");
function validasiEkstensi(){
    var inputFile = document.getElementById('gambar');
    var pathFile = inputFile.value;
    var ekstensiOk = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!ekstensiOk.exec(pathFile)){
        alert('Silakan upload file yang memiliki ekstensi .jpeg/.jpg/.png/.gif');
        inputFile.value = '';
        return false;
    }else{
        // Preview gambar
        if (inputFile.files && inputFile.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                display5.classList.toggle("display");
                document.getElementById('target').innerHTML = '<img src="'+e.target.result+'" style="width:100px; height: 100px; position: relative; top: 2.6rem; margin-right: 1rem;"/>';
            };
            reader.readAsDataURL(inputFile.files[0]);
        }
    }
}


const namaInput = document.querySelector("#nama");
const namaProfile = document.querySelectorAll(".name-profil");

function ubahNama() {
    const display1 = document.querySelector(".nama");
    namaProfile[0].innerHTML = "<i style='color: rgb(255, 230, 0); margin-right: 7px;' class='fa-solid fa-crown'></i>" + namaInput.value;
    namaProfile[1].innerHTML = namaInput.value + "<span class='span'> Forum Info</span>";
    namaProfile[2].innerHTML = "<span class='span'>Additional Info About </span>" + namaInput.value;
    namaProfile[3].innerHTML = namaInput.value + "<span class='span'> Forum Statistics</span>";
    namaProfile[4].innerHTML = namaInput.value + "<span class='span'> Signature</span>";
    namaProfile[5].innerHTML = namaInput.value + "<span class='span'> Award.</span>"
    display1.classList.toggle("display");
}

const quoteUbahSatu = document.querySelector(".link");
const quoteSatuInput = document.querySelector("#quote");

function quoteUbah() {
    const display2 = document.querySelector(".quote-satu");
    quoteUbahSatu.innerHTML = quoteSatuInput.value;
    display2.classList.toggle("display");
}

const quoteUbahDua = document.querySelector(".link-tele");
const quoteDuaInput = document.querySelector("#quote2");

function quoteUbah2() {
    const display3 = document.querySelector(".quote-dua");
    quoteUbahDua.innerHTML = quoteDuaInput.value;
    display3.classList.toggle("display");
}

const genderUbah = document.querySelector(".undi");
const inputGender = document.querySelector("#status");

function gender() {
    const display4 = document.querySelector(".status2");
    genderUbah.innerHTML =inputGender.value;
    display4.classList.toggle("display");
}