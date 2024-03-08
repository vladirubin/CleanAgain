//molti di questi valori potrebbero essere applicati tramite html o css, ma per rendere il codice e il css piu' coerenti li ho messi qui

//scalo il testo "vittoria" con lo schermo
let vittoriaWidth = (window.innerWidth / 10 * 9) / 100 * 69.047
let vittoria = document.getElementById("vittoria")
vittoria.style.width = vittoriaWidth + "px"
vittoria.style.height = vittoriaWidth / 100 * 22.988 + "px"
vittoria.style.left = (window.innerWidth - vittoriaWidth) / 2 + "px"
vittoria.style.top = "5%"
vittoria.style.transform = "rotate(-1deg) scale(1.05)"
let counter = 0
setInterval(() => {
    if (counter == 3) {
        vittoria.style.transform = "rotate(-1deg) scale(1.05)"
        counter = 0
    } else if (counter == 2 || counter == 0) {
        vittoria.style.transform = "rotate(0deg) scale(1)"
        counter++
    } else if (counter == 1) {
        vittoria.style.transform = "rotate(1deg) scale(1.05)"
        counter++
    }
}, 10000)

//scalo i contenitori con lo schermo
let buttonWidth = window.innerWidth / 10 * 2
let punti = document.getElementById("punti")
punti.style.width = buttonWidth + "px"
punti.style.height = buttonWidth / 100 * 37.5 + "px"
punti.style.left = "40%"
punti.style.top = (window.innerHeight / 100 * 5) * 2 + (vittoriaWidth / 100 * 22.988) + "px"

//scalo i tasti con lo schermo
let puntiTXT = document.getElementById("puntiTXT")
puntiTXT.innerHTML = new URL(window.location.href).searchParams.get("punti")
puntiTXT.style.color = "#faf4d8"
puntiTXT.style.width = "92.5%"
puntiTXT.style.height = "33.333%"
puntiTXT.style.fontSize = (buttonWidth / 100 * 37.5) / 100 * 33.333 + "px"
puntiTXT.style.left = "3.125%"
puntiTXT.style.bottom = "10%"
let nomeContainer = document.getElementById("nomeContainer")
nomeContainer.style.width = buttonWidth + "px"
nomeContainer.style.height = buttonWidth / 100 * 37.5 + "px"
nomeContainer.style.left = "40%"
nomeContainer.style.top = (window.innerHeight / 100 * 5) * 3 + (vittoriaWidth / 100 * 22.988) + (buttonWidth / 100 * 37.5) + "px"

//scalo i tasti con lo schermo
let nome = document.getElementById("nome")
nome.style.border = "none"
nome.style.outline = "none"
nome.style.background = "none"
nome.style.color = "#faf4d8"
nome.style.width = "92.5%"
nome.style.height = "33.333%"
nome.style.fontSize = (buttonWidth / 100 * 37.5) / 100 * 33.333 + "px"
nome.style.left = "3.125%"
nome.style.bottom = "10%"
let conferma = document.getElementById("conferma")
conferma.style.border = "none"
conferma.style.width = buttonWidth + "px"
conferma.style.height = buttonWidth / 100 * 21.951 + "px"
conferma.style.left = "40%"
conferma.style.top = (window.innerHeight / 100 * 5) * 4 + (vittoriaWidth / 100 * 22.988) + (buttonWidth / 100 * 37.5) * 2 + "px"

//codice per salvare i dati nel local storage
let nomeLocal = JSON.parse(localStorage.getItem("nomeLocal")) || [];

document.getElementById("form").addEventListener("submit", (event) => {
    nomeLocal.push(nome.value);
    localStorage.setItem("nomeLocal", JSON.stringify(nomeLocal));
});