//molti di questi valori potrebbero essere applicati tramite html o css, ma per rendere il codice e il css piu' coerenti li ho messi qui

//applico uno degli sfondi a caso
document.getElementById("body").style.backgroundImage = "url(BG" + Math.floor(Math.random() * 3.9) + ".png)"

//scalo il titolo con lo schermo
let titleWidth = window.innerWidth / 10 * 9
let title = document.getElementById("title")
title.style.width = titleWidth + "px"
title.style.height = titleWidth / 100 * 15.873 + "px"
title.style.left = "5%"
title.style.top = "5%"
title.style.transform = "rotate(-1deg) scale(1.05)"
let counter = 0
setInterval(() => {
    if (counter == 3) {
        title.style.transform = "rotate(-1deg) scale(1.05)"
        counter = 0
    } else if (counter == 2 || counter == 0) {
        title.style.transform = "rotate(0deg) scale(1)"
        counter++
    } else if (counter == 1) {
        title.style.transform = "rotate(1deg) scale(1.05)"
        counter++
    }
}, 10000)

//scalo i contenitori con lo schermo
let buttonWidth = window.innerWidth / 10 * 2
let level = document.getElementById("level")
level.style.width = buttonWidth + "px"
level.style.height = buttonWidth / 100 * 41.463 + "px"
level.style.left = "40%"
level.style.top = (window.innerHeight / 100 * 5) * 2 + (titleWidth / 100 * 15.873) + (buttonWidth / 100 * 21.951) + (window.innerHeight / 100 * 2.5) + "px"
let audio = document.getElementById("audio")
audio.style.width = buttonWidth + "px"
audio.style.height = buttonWidth / 100 * 41.463 + "px"
audio.style.left = "40%"
audio.style.top =  (window.innerHeight / 100 * 5) * 2 + (titleWidth / 100 * 15.873) + (buttonWidth / 100 * 21.951) + (buttonWidth / 100 * 41.463) + (window.innerHeight / 100 * 2.5) * 2 + "px"

//scalo i tasti con i contenitori
let gioca = document.getElementById("gioca")
gioca.style.width = buttonWidth + "px"
gioca.style.height = buttonWidth / 100 * 21.951 + "px"
gioca.style.left = "40%"
gioca.style.top = (window.innerHeight / 100 * 5) * 2 + (titleWidth / 100 * 15.873) + "px"
let levelPlus = document.getElementById("levelPlus")
levelPlus.style.width = buttonWidth / 100 * 21.25 + "px"
levelPlus.style.height = (buttonWidth / 100 * 41.463) / 100 * 53.125 + "px"
levelPlus.style.right = "0%"
levelPlus.style.bottom = "0%"
let levelMinus = document.getElementById("levelMinus")
levelMinus.style.width = buttonWidth / 100 * 21.25 + "px"
levelMinus.style.height = (buttonWidth / 100 * 41.463) / 100 * 53.125 + "px"
levelMinus.style.left = "0%"
levelMinus.style.bottom = "0%"
let audioPlus = document.getElementById("audioPlus")
audioPlus.style.width = buttonWidth / 100 * 21.25 + "px"
audioPlus.style.height = (buttonWidth / 100 * 41.463) / 100 * 53.125 + "px"
audioPlus.style.right = "0%"
audioPlus.style.bottom = "0%"
let audioMinus = document.getElementById("audioMinus")
audioMinus.style.width = buttonWidth / 100 * 21.25 + "px"
audioMinus.style.height = (buttonWidth / 100 * 41.463) / 100 * 53.125 + "px"
audioMinus.style.left = "0%"
audioMinus.style.bottom = "0%"
let classifica = document.getElementById("classifica")
classifica.style.width = buttonWidth + "px"
classifica.style.height = buttonWidth / 100 * 21.951 + "px"
classifica.style.left = "40%"
classifica.style.top = (window.innerHeight / 100 * 5) * 2 + (titleWidth / 100 * 15.873) + (buttonWidth / 100 * 21.951) + (buttonWidth / 100 * 41.463) * 2 + (window.innerHeight / 100 * 2.5) * 3 + "px"

//scalo i txt con i contenitori
let txtGioca = document.getElementById("txtGioca")
txtGioca.style.width = "92.5%"
txtGioca.style.height = "62.25%"
txtGioca.style.left = "3.75%"
txtGioca.style.bottom = "18.75%"
txtGioca.style.fontSize = (buttonWidth / 100 * 21.951) / 100 * 62.25 + "px"
let txtLevel0 = document.getElementById("txtLevel0")
txtLevel0.style.width = "92.5%"
txtLevel0.style.height = "31.25%"
txtLevel0.style.left = "3.75%"
txtLevel0.style.top = "9.375%"
txtLevel0.style.fontSize = (buttonWidth / 100 * 41.463) / 100 * 31.25 + "px"
let txtLevel1 = document.getElementById("txtLevel1")
txtLevel1.style.width = "92.5%"
txtLevel1.style.height = "31.25%"
txtLevel1.style.left = "3.75%"
txtLevel1.style.bottom = "9.375%"
txtLevel1.style.fontSize = (buttonWidth / 100 * 41.463) / 100 * 31.25 + "px"
let txtAudio0 = document.getElementById("txtAudio0")
txtAudio0.style.width = "92.5%"
txtAudio0.style.height = "31.25%"
txtAudio0.style.left = "3.75%"
txtAudio0.style.top = "9.375%"
txtAudio0.style.fontSize = (buttonWidth / 100 * 41.463) / 100 * 31.25 + "px"
let txtAudio1 = document.getElementById("txtAudio1")
txtAudio1.style.width = "92.5%"
txtAudio1.style.height = "31.25%"
txtAudio1.style.left = "3.75%"
txtAudio1.style.bottom = "9.375%"
txtAudio1.style.fontSize = (buttonWidth / 100 * 41.463) / 100 * 31.25 + "px"
let txtClassifica = document.getElementById("txtClassifica")
txtClassifica.style.width = "92.5%"
txtClassifica.style.height = "62.25%"
txtClassifica.style.left = "3.75%"
txtClassifica.style.bottom = "18.75%"
txtClassifica.style.fontSize = (buttonWidth / 100 * 21.951) / 100 * 62.25 + "px"

//valore per le righe e le colonne del level
let diffLevel = 5
let levelPlusDisabled = false
let levelMinusDisabled = true
levelPlus.addEventListener("click", () => {
    if (levelPlusDisabled == false) {
        //cambiamento statistiche
        diffLevel++
        levelMinusDisabled = false
        levelMinus.style.backgroundImage = "url(minusAvailable.png)"
        //effetto audio
        let sfx = new Audio("match.mp3")
        sfx.volume = audioLevel / 100
        sfx.play()
    }
    if (diffLevel == 7) {
        levelPlusDisabled = true
        levelPlus.style.backgroundImage = "url(plusUnavailable.png)"
    }
    txtLevel1.innerHTML = diffLevel + "x" + diffLevel
})
levelMinus.addEventListener("click", () => {
    if (levelMinusDisabled == false) {
        //cambiamento statistiche
        diffLevel--
        levelPlusDisabled = false
        levelPlus.style.backgroundImage = "url(plusAvailable.png)"
        //effetto audio
        let sfx = new Audio("match.mp3")
        sfx.volume = audioLevel / 100
        sfx.play()
    }
    if (diffLevel == 5) {
        levelMinusDisabled = true
        levelMinus.style.backgroundImage = "url(minusUnavailable.png)"
    }
    txtLevel1.innerHTML = diffLevel + "x" + diffLevel
})

//valore per l'audio del gioco
let audioLevel = 100
let audioPlusDisabled = true
let audioMinusDisabled = false
audioPlus.addEventListener("click", () => {
    if (audioPlusDisabled == false) {
        //cambiamento statistiche
        audioLevel += 25
        audioMinusDisabled = false
        audioMinus.style.backgroundImage = "url(minusAvailable.png)"
        //effetto audio
        let sfx = new Audio("match.mp3")
        sfx.volume = audioLevel / 100
        sfx.play()
    }
    if (audioLevel == 100) {
        audioPlusDisabled = true
        audioPlus.style.backgroundImage = "url(plusUnavailable.png)"
    }
    txtAudio1.innerHTML = audioLevel
})
audioMinus.addEventListener("click", () => {
    if (audioMinusDisabled == false) {
        //cambiamento statistiche
        audioLevel -= 25
        audioPlusDisabled = false
        audioPlus.style.backgroundImage = "url(plusAvailable.png)"
        //effetto audio
        let sfx = new Audio("match.mp3")
        sfx.volume = audioLevel / 100
        sfx.play()
    }
    if (audioLevel == 0) {
        audioMinusDisabled = true
        audioMinus.style.backgroundImage = "url(minusUnavailable.png)"
    }
    txtAudio1.innerHTML = audioLevel
})

gioca.addEventListener("click", () => {
    location.href = "level.html?level=" + diffLevel + "&audioLevel=" + audioLevel;
})

classifica.addEventListener("click", () => {
    location.href = "record.html"
})

//codice per il local storage
let nomeLocal = [];
let puntiLocal = [];
nomeLocal = JSON.parse(localStorage.getItem("nomeLocal")) || [];
puntiLocal = JSON.parse(localStorage.getItem("puntiLocal")) || [];
function sort() {
    for (let i = 0; i < puntiLocal.length; i++) {
        for (let j = 0; j < (puntiLocal.length - i - 1); j++) {
            if (puntiLocal[j] < puntiLocal[j + 1]) {
                let tempPunti = puntiLocal[j];
                puntiLocal[j] = puntiLocal[j + 1];
                puntiLocal[j + 1] = tempPunti;

                let tempNome = nomeLocal[j];
                nomeLocal[j] = nomeLocal[j + 1];
                nomeLocal[j + 1] = tempNome;
            }
        }
    }
    localStorage.setItem("puntiLocal", JSON.stringify(puntiLocal));
    localStorage.setItem("nomeLocal", JSON.stringify(nomeLocal));
    console.log(nomeLocal, puntiLocal)
}