//molti di questi valori potrebbero essere applicati tramite html o css, ma per rendere il codice e il css piu' coerenti li ho messi qui

//scalo il testo "sconfitta" con lo schermo
let sconfittaWidth = (window.innerWidth / 10 * 9) / 100 * 85.714
let sconfitta = document.getElementById("sconfitta")
sconfitta.style.width = sconfittaWidth + "px"
sconfitta.style.height = sconfittaWidth / 100 * 18.518 + "px"
sconfitta.style.left = (window.innerWidth - sconfittaWidth) / 2 + "px"
sconfitta.style.top = "5%"
sconfitta.style.transform = "rotate(-1deg) scale(1.05)"
let counter = 0
setInterval(() => {
    if (counter == 3) {
        sconfitta.style.transform = "rotate(-1deg) scale(1.05)"
        counter = 0
    } else if (counter == 2 || counter == 0) {
        sconfitta.style.transform = "rotate(0deg) scale(1)"
        counter++
    } else if (counter == 1) {
        sconfitta.style.transform = "rotate(1deg) scale(1.05)"
        counter++
    }
}, 10000)

//scalo i tasti con lo schermo
let buttonWidth = window.innerWidth / 10 * 2
let riprova = document.getElementById("riprova")
riprova.style.width = buttonWidth + "px"
riprova.style.height = buttonWidth / 100 * 21.951 + "px"
riprova.style.left = "40%"
riprova.style.top = (window.innerHeight / 100 * 5) * 2 + (sconfittaWidth / 100 * 18.518) + "px"
let menu = document.getElementById("menu")
menu.style.width = buttonWidth + "px"
menu.style.height = buttonWidth / 100 * 21.951 + "px"
menu.style.left = "40%"
menu.style.top = (window.innerHeight / 100 * 5) * 3 + (sconfittaWidth / 100 * 18.518) + (buttonWidth / 100 * 21.951) + "px"

//scalo i testi con i pulsanti
let txtRiprova = document.getElementById("txtRiprova")
txtRiprova.style.width = "92.5%"
txtRiprova.style.height = "62.25%"
txtRiprova.style.left = "3.75%"
txtRiprova.style.bottom = "18.75%"
txtRiprova.style.fontSize = (buttonWidth / 100 * 21.951) / 100 * 62.25 + "px"
let txtMenu = document.getElementById("txtMenu")
txtMenu.style.width = "92.5%"
txtMenu.style.height = "62.25%"
txtMenu.style.left = "3.75%"
txtMenu.style.bottom = "18.75%"
txtMenu.style.fontSize = (buttonWidth / 100 * 21.951) / 100 * 62.25 + "px"

let level = new URL(window.location.href).searchParams.get("level")
let audioLevel = new URL(window.location.href).searchParams.get("audioLevel")
riprova.addEventListener("click", () => {
    location.href = "level.html?level=" + level + "&audioLevel=" + audioLevel;
})

menu.addEventListener("click", () => {
    location.href = "mainMenu.html"
})