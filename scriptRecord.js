//applico uno degli sfondi a caso
document.getElementById("body").style.backgroundImage = "url(BG" + Math.floor(Math.random() * 3.9) + ".png)"

let recordsHeight = window.innerHeight / 100 * 75
let records = document.getElementById("records")
records.style.height = recordsHeight + "px"
records.style.width = recordsHeight / 100 * 129.11 + "px"
records.style.left = (window.innerWidth / 2 - (recordsHeight / 100 * 129.11) / 2) + "px"
records.style.top = "5%"
let buttonWidth = window.innerWidth / 10 * 2
let indietro = document.getElementById("indietro")
indietro.style.width = buttonWidth + "px"
indietro.style.height = buttonWidth / 100 * 21.951 + "px"
indietro.style.left = "40%"
indietro.style.top = recordsHeight + (window.innerHeight / 100 * 5) * 2 + "px"
let txtIndietro = document.getElementById("txtIndietro")
txtIndietro.style.width = "92.5%"
txtIndietro.style.height = "62.25%"
txtIndietro.style.left = "3.75%"
txtIndietro.style.bottom = "18.75%"
txtIndietro.style.lineHeight = "1"
txtIndietro.style.fontSize = (buttonWidth / 100 * 21.951) / 100 * 62.25 + "px"

//scalo tutti i txt di records
let txtRecords00 = document.getElementById("txtRecords00")
txtRecords00.style.width = "69.607%"
txtRecords00.style.height = "6.329%"
txtRecords00.style.left = "9.313%"
txtRecords00.style.top = "12.025%"
txtRecords00.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords01 = document.getElementById("txtRecords01")
txtRecords01.style.width = "16.666%"
txtRecords01.style.height = "6.329%"
txtRecords01.style.right = "1.47%"
txtRecords01.style.top = "12.025%"
txtRecords01.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords10 = document.getElementById("txtRecords10")
txtRecords10.style.width = "69.607%"
txtRecords10.style.height = "6.329%"
txtRecords10.style.left = "9.313%"
txtRecords10.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) + (recordsHeight / 100 * 2.531) + "px"
txtRecords10.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords11 = document.getElementById("txtRecords11")
txtRecords11.style.width = "16.666%"
txtRecords11.style.height = "6.329%"
txtRecords11.style.right = "1.47%"
txtRecords11.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) + (recordsHeight / 100 * 2.531) + "px"
txtRecords11.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords20 = document.getElementById("txtRecords20")
txtRecords20.style.width = "69.607%"
txtRecords20.style.height = "6.329%"
txtRecords20.style.left = "9.313%"
txtRecords20.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) * 2 + (recordsHeight / 100 * 2.531) * 2 + "px"
txtRecords20.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords21 = document.getElementById("txtRecords21")
txtRecords21.style.width = "16.666%"
txtRecords21.style.height = "6.329%"
txtRecords21.style.right = "1.47%"
txtRecords21.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) * 2 + (recordsHeight / 100 * 2.531) * 2 + "px"
txtRecords21.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords30 = document.getElementById("txtRecords30")
txtRecords30.style.width = "69.607%"
txtRecords30.style.height = "6.329%"
txtRecords30.style.left = "9.313%"
txtRecords30.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) * 3 + (recordsHeight / 100 * 2.531) * 3 + "px"
txtRecords30.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords31 = document.getElementById("txtRecords31")
txtRecords31.style.width = "16.666%"
txtRecords31.style.height = "6.329%"
txtRecords31.style.right = "1.47%"
txtRecords31.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) * 3 + (recordsHeight / 100 * 2.531) * 3 + "px"
txtRecords31.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords40 = document.getElementById("txtRecords40")
txtRecords40.style.width = "69.607%"
txtRecords40.style.height = "6.329%"
txtRecords40.style.left = "9.313%"
txtRecords40.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) * 4 + (recordsHeight / 100 * 2.531) * 4 + "px"
txtRecords40.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords41 = document.getElementById("txtRecords41")
txtRecords41.style.width = "16.666%"
txtRecords41.style.height = "6.329%"
txtRecords41.style.right = "1.47%"
txtRecords41.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) * 4 + (recordsHeight / 100 * 2.531) * 4 + "px"
txtRecords41.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords50 = document.getElementById("txtRecords50")
txtRecords50.style.width = "69.607%"
txtRecords50.style.height = "6.329%"
txtRecords50.style.left = "9.313%"
txtRecords50.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) * 5 + (recordsHeight / 100 * 2.531) * 5 + "px"
txtRecords50.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords51 = document.getElementById("txtRecords51")
txtRecords51.style.width = "16.666%"
txtRecords51.style.height = "6.329%"
txtRecords51.style.right = "1.47%"
txtRecords51.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) * 5 + (recordsHeight / 100 * 2.531) * 5 + "px"
txtRecords51.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords60 = document.getElementById("txtRecords60")
txtRecords60.style.width = "69.607%"
txtRecords60.style.height = "6.329%"
txtRecords60.style.left = "9.313%"
txtRecords60.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) * 6 + (recordsHeight / 100 * 2.531) * 6 + "px"
txtRecords60.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords61 = document.getElementById("txtRecords61")
txtRecords61.style.width = "16.666%"
txtRecords61.style.height = "6.329%"
txtRecords61.style.right = "1.47%"
txtRecords61.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) * 6 + (recordsHeight / 100 * 2.531) * 6 + "px"
txtRecords61.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords70 = document.getElementById("txtRecords70")
txtRecords70.style.width = "69.607%"
txtRecords70.style.height = "6.329%"
txtRecords70.style.left = "9.313%"
txtRecords70.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) * 7 + (recordsHeight / 100 * 2.531) * 7 + "px"
txtRecords70.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords71 = document.getElementById("txtRecords71")
txtRecords71.style.width = "16.666%"
txtRecords71.style.height = "6.329%"
txtRecords71.style.right = "1.47%"
txtRecords71.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) * 7 + (recordsHeight / 100 * 2.531) * 7 + "px"
txtRecords71.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords80 = document.getElementById("txtRecords80")
txtRecords80.style.width = "69.607%"
txtRecords80.style.height = "6.329%"
txtRecords80.style.left = "9.313%"
txtRecords80.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) * 8 + (recordsHeight / 100 * 2.531) * 8 + "px"
txtRecords80.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords81 = document.getElementById("txtRecords81")
txtRecords81.style.width = "16.666%"
txtRecords81.style.height = "6.329%"
txtRecords81.style.right = "1.47%"
txtRecords81.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) * 8 + (recordsHeight / 100 * 2.531) * 8 + "px"
txtRecords81.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords90 = document.getElementById("txtRecords90")
txtRecords90.style.width = "69.607%"
txtRecords90.style.height = "6.329%"
txtRecords90.style.left = "9.313%"
txtRecords90.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) * 9 + (recordsHeight / 100 * 2.531) * 9 + "px"
txtRecords90.style.fontSize = recordsHeight / 100 * 6.329 + "px"
let txtRecords91 = document.getElementById("txtRecords91")
txtRecords91.style.width = "16.666%"
txtRecords91.style.height = "6.329%"
txtRecords91.style.right = "1.47%"
txtRecords91.style.top = recordsHeight / 100 * 12.025 + (recordsHeight / 100 * 6.329) * 9 + (recordsHeight / 100 * 2.531) * 9 + "px"
txtRecords91.style.fontSize = recordsHeight / 100 * 6.329 + "px"

indietro.addEventListener("click", () => {
    location.href = "mainMenu.html"
})
let nomeLocal = JSON.parse(localStorage.getItem("nomeLocal"))
let puntiLocal = JSON.parse(localStorage.getItem("puntiLocal"))

console.log(nomeLocal, puntiLocal)

for (let j = 0; j < puntiLocal.length; j++) {
    for (let i = 0; i < 2; i++) {
        console.log(j, i)
        if (i == 0) {
            document.getElementById("txtRecords" + j.toString() + i.toString()).innerHTML = nomeLocal[j]
        }
        else {
            document.getElementById("txtRecords" + j.toString() + i.toString()).innerHTML = puntiLocal[j]
        }
    }
}