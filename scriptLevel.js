//level indica la quantita' di righe e colonne
let level = new URL(window.location.href).searchParams.get("level")
//volume indica il volume degli sfx
let volume = new URL(window.location.href).searchParams.get("audioLevel")
//countCelleEliminate indica quante celle ho eliminato per ogni categoria, posizione 0 = secco, 1 = carta, 2 = plastica, 3 = vetro
let countCelleEliminate = [0, 0, 0, 0]
//score indica quanti punti sono stati totalizzati
let score = 0
//errori indica quanti errori sono stati commessi
let errori = 0

//applico uno degli sfondi a caso
document.getElementById("body").style.backgroundImage = "url(BG" + Math.floor(Math.random() * 3.9) + ".png)"

//scalo il mainContainer, il div che contiene tutte le celle, con lo schermo
let trueContainerLato = window.innerHeight / 100 * 90
let mainContainerLato = (2500 / 2619) * trueContainerLato
document.getElementById("mainContainer").style.width = trueContainerLato + "px"
document.getElementById("mainContainer").style.height = trueContainerLato + "px"
document.getElementById("mainContainer").style.right = (window.innerWidth / 2 - trueContainerLato / 2) + "px"
document.getElementById("mainContainer").style.bottom = (window.innerHeight / 2 - trueContainerLato / 2) + "px"
//preparo la griglia del mainContainer
mainContainer.style.gridTemplateColumns = `repeat(${level}, 1fr)`;
mainContainer.style.gridTemplateRows = `repeat(${level}, 1fr)`;
mainContainer.style.gridGap = (mainContainerLato / level) / 100 * 4.76 + "px"

//scalo i contatori del punteggio con lo schermo
let scoreContainerLato = window.innerHeight / 100 * 5
let scoreContainerWidth = (window.innerWidth / 2) - scoreContainerLato * 2 - trueContainerLato / 2
//contatore del secco
document.getElementById("scoreSecco").style.top = scoreContainerLato + "px"
document.getElementById("scoreSecco").style.left = scoreContainerLato + "px"
document.getElementById("scoreSecco").style.height = scoreContainerWidth / 100 * 31.914 + "px"
document.getElementById("scoreSecco").style.width = scoreContainerWidth + "px"
//contatore della carta
document.getElementById("scoreCarta").style.top = scoreContainerLato * 2 + scoreContainerWidth / 100 * 31.914 + "px"
document.getElementById("scoreCarta").style.left = scoreContainerLato + "px"
document.getElementById("scoreCarta").style.height = scoreContainerWidth / 100 * 31.914 + "px"
document.getElementById("scoreCarta").style.width = scoreContainerWidth + "px"
//contatore della plastica
document.getElementById("scorePlastica").style.top = scoreContainerLato * 3 + (scoreContainerWidth / 100 * 31.914) * 2 + "px"
document.getElementById("scorePlastica").style.left = scoreContainerLato + "px"
document.getElementById("scorePlastica").style.height = scoreContainerWidth / 100 * 31.914 + "px"
document.getElementById("scorePlastica").style.width = scoreContainerWidth + "px"
//contatore del vetro
document.getElementById("scoreVetro").style.top = scoreContainerLato * 4 + (scoreContainerWidth / 100 * 31.914) * 3 + "px"
document.getElementById("scoreVetro").style.left = scoreContainerLato + "px"
document.getElementById("scoreVetro").style.height = scoreContainerWidth / 100 * 31.914 + "px"
document.getElementById("scoreVetro").style.width = scoreContainerWidth + "px"
//contatore del punteggio
document.getElementById("score").style.top = scoreContainerLato + "px"
document.getElementById("score").style.right = scoreContainerLato + "px"
document.getElementById("score").style.height = scoreContainerWidth / 100 * 31.914 + "px"
document.getElementById("score").style.width = scoreContainerWidth + "px"
document.getElementById("scoreCounter").style.fontSize = (scoreContainerWidth / 100 * 31.914) / 100 * 33.333 + "px"
//contatore degli errori
document.getElementById("errori").style.top = scoreContainerLato * 2 + scoreContainerWidth / 100 * 31.914 + "px"
document.getElementById("errori").style.right = scoreContainerLato + "px"
document.getElementById("errori").style.height = scoreContainerWidth / 100 * 31.914 + "px"
document.getElementById("errori").style.width = scoreContainerWidth + "px"

//genero le celle a inizio partita
window.onload = () => {
    //parto da in alto a sinistra e vado riga per riga, infatti i = riga e j = colonna
    for (i = 0; i < level; i++) {
        for (j = 0; j < level; j++) {
            //creo l'elemento della cella
            let cell = document.createElement("div")
            //stabilisco i vari parametri della cella, ogni cella contiene le proprie coordinate sia dentro l'id che dentro dei parametri extra, per rendere piu' facile localizzarle e modificarle
            cell.id = "cell" + i + j
            cell.row = i
            cell.column = j
            cell.style.width = mainContainerLato / level + "px";
            cell.style.height = mainContainerLato / level + "px";
            cell.style.backgroundSize = mainContainerLato / level + "px";
            cell.classList.add("cell")
            //decido il tipo di cella con la funzione giveCellType
            giveCellType(cell)
            //trasformo il 5% delle celle in rifiuti tossici
            if (Math.floor(Math.random() * 20) == 1) {
                cell.type = "tossico"
                cell.style.backgroundImage = "url(tossico.png)"
            }
            //se comboCheck, la funzione che rintraccia tutte le combinazioni corrispondenti a una cella dati id, coordinate e tipo, rintraccia combinazioni, cambio il tipo di cella fino a quando non ci saranno piu' combo
            while (comboCheck(cell.id, cell.row, cell.column, cell.type) != "noCombo") {
                giveCellType(cell)
            }
            //aggiungo la funzionalita' per il click della cella
            cell.addEventListener("click", () => clickCella(cell.id, cell.row, cell.column, cell.type))
            //aggiungo la cella alla griglia
            document.getElementById("mainContainer").appendChild(cell)
        }
    }
}

//giveCellType attribuisce randomicamente il tipo alla cella dato il suo id
function giveCellType(cell) {
    let random = Math.round(Math.random() * 4)
    if (random == 0 || random == 4) {
        cell.type = "secco"
        cell.style.backgroundImage = "url(secco.png)"
    } else if (random == 1) {
        cell.type = "carta"
        cell.style.backgroundImage = "url(carta.png)"
    } else if (random == 2) {
        cell.type = "plastica"
        cell.style.backgroundImage = "url(plastica.png)"
    } else if (random == 3) {
        cell.type = "vetro"
        cell.style.backgroundImage = "url(vetro.png)"
    }
}

//definisco le variabili per far funzionare clickCella
let counter = 0
let firstCellID
let firstCellRow
let firstCellColumn
let firstCellType
//canMove serve per impedire all'utente di cliccare le celle durante le animazioni
let canMove = true

//clickCella e' la funzione che viene chiamata quando una cella viene cliccata
function clickCella(id, row, column, type) {
    if (canMove == true) {
        let cell = document.getElementById(id)
        //nel caso la cella cliccata sia un riciclo
        if (cell.type == "riciclo") {
            //creo la lista di spazi che dovranno essere eliminati
            let temp = [id, "cell" + cell.row + (cell.column - 1), "cell" + (cell.row + 1) + cell.column, "cell" + cell.row + (cell.column + 1), "cell" + (cell.row - 1) + cell.column]
            //tolgo dalla lista i rifiuti tossici, perche' il riciclo non puo' distruggerli
            for (let i = 0; i < temp.length; i++) {
                if (document.getElementById(temp[i]) != null && document.getElementById(temp[i]).type == "tossico") {
                    temp[i] = null
                }
            }
            //resetto gli effetti visivi
            if (document.getElementById(firstCellID) != null) {
                document.getElementById(firstCellID).style.scale = "1"
                document.getElementById(firstCellID).style.filter = "brightness(1)"
            }
            //chiamo cellKill passandogli l'array contenente gli id delle celle da eliminare
            cellKill(temp)
            //resetto le variabili nel caso avessi cliccato una cella normale prima di questo riciclo
            counter = 0
            firstCellID = undefined
            firstCellRow = undefined
            firstCellColumn = undefined
            firstCellType = undefined
        } else if (cell.type == "amore") {
            //stessa cosa del riciclo, ma senza l'esclusione dei rifiuti tossici
            if (document.getElementById(firstCellID) != null) {
                document.getElementById(firstCellID).style.scale = "1"
                document.getElementById(firstCellID).style.filter = "brightness(1)"
            }
            cellKill([id, "cell" + cell.row + (cell.column - 1), "cell" + (cell.row + 1) + (cell.column - 1), "cell" + (cell.row + 1) + cell.column, "cell" + (cell.row + 1) + (cell.column + 1), "cell" + cell.row + (cell.column + 1), "cell" + (cell.row - 1) + (cell.column + 1), "cell" + (cell.row - 1) + cell.column, "cell" + (cell.row - 1) + (cell.column - 1)])
            counter = 0
            firstCellID = undefined
            firstCellRow = undefined
            firstCellColumn = undefined
            firstCellType = undefined
        } else {
            if (counter == 0) {
                //aumento counter per far si' che al prossimo click venga eseguita l'altra parte del codice
                counter++
                //salvo i parametri della cella cliccata
                firstCellID = id
                firstCellRow = row
                firstCellColumn = column
                firstCellType = type
                //effetti visivi e sonori
                cell.style.scale = "1.0714"
                cell.style.filter = "brightness(1.25)"
                let sfx = new Audio("match.mp3")
                sfx.volume = volume / 100
                sfx.play()
            } else if (counter == 1) {
                //resetto gli effetti visivi
                document.getElementById(firstCellID).style.scale = "1"
                document.getElementById(firstCellID).style.filter = "brightness(1)"
                //controllo se le celle sono affiancate e percio' scambiabili
                if (((row - firstCellRow == 1 || firstCellRow - row == 1) && (column - firstCellColumn == 0)) || ((column - firstCellColumn == 1 || firstCellColumn - column == 1) && (row - firstCellRow == 0))) {
                    //scambio il tipo e lo sfondo delle celle, sono gli unici due parametri che serve cambiare nel corso dei calcoli
                    document.getElementById(firstCellID).type = type
                    document.getElementById(firstCellID).style.backgroundImage = "url(" + type + ".png)"
                    cell.type = firstCellType
                    cell.style.backgroundImage = "url(" + firstCellType + ".png)"
                    //controllo se qualche combo viene generata da questo scambio utilizzando comboCheck
                    if (comboCheck(firstCellID, firstCellRow, firstCellColumn, type) == "noCombo" && comboCheck(id, row, column, firstCellType) == "noCombo") {
                        //caso in cui non viene generata alcuna combo, errore
                        //faccio partire l'effetto sonoro per gli errori
                        let sfx = new Audio("mistake.mp3")
                        sfx.volume = volume / 100
                        sfx.play()
                        //aggiorno il contatore degli errori
                        errori++
                        if (errori < 4) {
                            document.getElementById("errori").style.backgroundImage = "url(errori" + errori + ".png)"
                        }
                        document.getElementById("errori").style.filter = "brightness(2)"
                        setTimeout(() => { document.getElementById("errori").style.filter = "brightness(1)"}, 250)
                        document.getElementById("errori").style.transform = "scale(1.1) rotate(2.5deg)"
                        setTimeout(() => { document.getElementById("errori").style.transform = "scale(1) rotate(0deg)"}, 250)
                        //porto l'utente alla pagina html della sconfitta se sono stati commessi piu' di due errori
                        if (errori > 2) {
                            setTimeout(() => {
                                location.href = "sconfitta.html?level=" + level + "&audioLevel=" + volume
                            }, 500)
                        }
                        //scambio nuovamente le celle dopo aver commesso l'errore, tornando alla posizione iniziale
                        document.getElementById(firstCellID).type = firstCellType
                        document.getElementById(firstCellID).style.backgroundImage = "url(" + firstCellType + ".png)"
                        cell.type = type
                        cell.style.backgroundImage = "url(" + type + ".png)"
                        //faccio ruotare un pochettino le celle
                        cell.style.rotate = "5deg"
                        setTimeout(() => {
                            cell.style.rotate = "-5deg"
                            setTimeout(() => {
                                cell.style.rotate = "5deg"
                                setTimeout(() => {
                                    cell.style.rotate = "0deg"
                                }, 100)
                            }, 100)
                        }, 100)
                        let temp = document.getElementById(firstCellID)
                        temp.style.rotate = "5deg"
                        setTimeout(() => {
                            temp.style.rotate = "-5deg"
                            setTimeout(() => {
                                temp.style.rotate = "5deg"
                                setTimeout(() => {
                                    temp.style.rotate = "0deg"
                                }, 100)
                            }, 100)
                        }, 100)
                    } else {
                        //nessun errore
                        //elimino le celle utlizzando cellKill e passandogli id, coordinate e tipo, la funzione concat e' usata per unire gli array
                        cellKill([].concat(comboCheck(firstCellID, firstCellRow, firstCellColumn, type), comboCheck(id, row, column, firstCellType)))
                        //controllo se devo generare poteri utilizzando spawnPotere e passandogli gli stessi parametri
                        spawnPotere(comboCheck(firstCellID, firstCellRow, firstCellColumn, type))
                        spawnPotere(comboCheck(id, row, column, firstCellType))
                        //resetto gli errori
                        if (errori != 0) {
                            document.getElementById("errori").style.filter = "brightness(2)"
                            setTimeout(() => { document.getElementById("errori").style.filter = "brightness(1)"}, 250)
                            document.getElementById("errori").style.transform = "scale(1.1) rotate(2.5deg)"
                            setTimeout(() => { document.getElementById("errori").style.transform = "scale(1) rotate(0deg)"}, 250)
                            errori = 0
                            document.getElementById("errori").style.backgroundImage = "url(errori" + errori + ".png)"
                        }
                    }
                }
                //resetto le variabili per poter registrare di nuovo due click
                counter = 0
                firstCellID = undefined
                firstCellRow = undefined
                firstCellColumn = undefined
                firstCellType = undefined
            }
        }
    }
}

//comboCheck e' la funzione che rintraccia ogni possibile combo, che sia tris, quaterna, cinquina o piu'
function comboCheck(id, row, column, type) {
    //preparo gli array che usero' per contenere gli ID delle celle rintracciate
    let xArrayID = [id]
    let yArrayID = [id]
    //annullo il processo se mi viene passato l'id un riciclo, un amore o un tossico, per evitare che questi tipi di celle facciano combo tra di loro
    if (document.getElementById(id) != null && (document.getElementById(id).type == "riciclo" || document.getElementById(id).type == "amore" || document.getElementById(id).type == "tossico")) {
        return("noCombo")
    }
    //andando verso sinistra nella griglia, aggiungo all'array X le celle dello stesso tipo di quella principale trovate
    for (x = column - 1; x >= 0; x--) {
        if (document.getElementById("cell" + row + x) != null && document.getElementById("cell" + row + x).type == type) {
            xArrayID.push("cell" + row + x)
        } else { x = -1 }
    }
    //andando verso destra nella griglia, aggiungo all'array X le celle dello stesso tipo di quella principale trovate
    for (x = column + 1; x < level; x++) {
        if (document.getElementById("cell" + row + x) != null && document.getElementById("cell" + row + x).type == type) {
            xArrayID.push("cell" + row + x)
        } else { x = level }
    }
    //andando verso l'alto nella griglia, aggiungo all'array Y le celle dello stesso tipo di quella principale trovate
    for (x = row - 1; x >= 0; x--) {
        if (document.getElementById("cell" + x + column) != null && document.getElementById("cell" + x + column).type == type) {
            yArrayID.push("cell" + x + column)
        } else { x = -1 }
    }
    //andando verso il basso nella griglia, aggiungo all'array Y le celle dello stesso tipo di quella principale trovate
    for (x = row + 1; x < level; x++) {
        if (document.getElementById("cell" + x + column) != null && document.getElementById("cell" + x + column).type == type) {
            yArrayID.push("cell" + x + column)
        } else { x = level }
    }
    //in base ai risultati dei controlli stabilisco se ci sono combinazioni e quali celle queste includono
    if (xArrayID.length < 3 && yArrayID.length < 3) {
        //caso in cui sia verticalmente che orizzontalmente non ci sono almeno 3 celle dello stesso tipo di fila
        return("noCombo")
    } else if (xArrayID.length > 2 && yArrayID.length > 2) {
        //caso in cui sia verticalmente che orizzontalmente ci sono 3 o piu' celle dello stesso tipo di fila
        return([].concat(xArrayID, yArrayID))
    } else if (xArrayID.length > yArrayID.length) {
        //caso in cui solo orizzontalmente ci sono 3 o piu' celle dello stesso tipo di fila
        return(xArrayID)
    } else if (yArrayID.length > xArrayID.length) {
        //caso in cui solo verticalmente ci sono 3 o piu' celle dello stesso tipo di fila
        return(yArrayID)
    }
}

//cellKill e' la funzione che ricevuto un array contenente gli id di alcune delle, le "elimina"
function cellKill(arr) {
    //tolgo l'abilita' di muovere le celle finche' ci sono animazioni
    canMove = false
    //foundPower serve per capire quale dei due sfx produrre
    let foundPower = false
    //blacklist mi serve per evitare che due poteri affiancati vadano in un loop eterno
    let blackList = []
    //preparo l'array contenente le celle da eliminare, aggiungendo celle per certi casi specifici
    for (let i = 0; i < arr.length; i++) {
        //controllo che la cella attuale non sia "noCombo", che succede quando dopo uno scambio solo una delle celle forma una combo, e che non sia null, che succede quando un potere viene attivato a bordo griglia
        if (arr[i] != "noCombo" && document.getElementById(arr[i]) != null) {
            let cell = document.getElementById(arr[i])
            //includere i poteri in cellKill mi permette non solo di utilizzare la funzione per quando li attivo, ma anche per far si' che due o piu' poteri affiancati facciano effetto a catena
            //ciclo la blackList per verificare che la cella osservata in questo momento non sia un potere gia' utilizzato, nel caso lo sia lo trasformo direttamente in una empty cell
            for (let j = 0; j < blackList.length; j++) {
                if (cell == blackList[j]) {
                    cell.type = "empty"
                }
            }
            if (cell.type == "riciclo") {
                //caso in cui la cella attuale e' un riciclo, faccio la stessa cosa che faccio in clickCella
                let temp = ["cell" + cell.row + (cell.column - 1), "cell" + (cell.row + 1) + cell.column, "cell" + cell.row + (cell.column + 1), "cell" + (cell.row - 1) + cell.column]
                for (let i = 0; i < temp.length; i++) {
                    if (document.getElementById(temp[i]) != null && document.getElementById(temp[i]).type == "tossico") {
                        temp[i] = null
                    }
                }
                //l'unica differenza e' che invece di chiamare un altro cellKill, che farebbe casini con il flow delle funzioni, aggiungo le celle da eliminare alla lista di questo cellKill
                arr = arr.concat(temp)
                //e' stato attivato un potere percio' faccio partire l'effetto sonoro dei poteri
                foundPower = true
                //aggiungo alla blackList questa cella
                blackList.push(cell)
            } else if (cell.type == "amore") {
                //stessa cosa ma con l'amore
                arr.push("cell" + cell.row + (cell.column - 1), "cell" + (cell.row + 1) + (cell.column - 1), "cell" + (cell.row + 1) + cell.column, "cell" + (cell.row + 1) + (cell.column + 1), "cell" + cell.row + (cell.column + 1), "cell" + (cell.row - 1) + (cell.column + 1), "cell" + (cell.row - 1) + cell.column, "cell" + (cell.row - 1) + (cell.column - 1))
                foundPower = true
                blackList.push(cell)
            }
            //applico l'effetto visivo alle celle interessate
            cell.style.filter = "brightness(1.5)"
            setTimeout(() => {
                cell.style.filter = "brightness(1)";
                cell.style.opacity = "0"
                setTimeout(() => { cell.style.opacity = "100" }, 250)
            }, 250)
        }
    }
    //faccio partire l'sfx giusto se ho attivato un potere o no
    if (foundPower == false) {
        let sfx = new Audio("tap.mp3")
        sfx.volume = volume / 100
        sfx.play()
    } else {
        let sfx = new Audio("match+.mp3")
        sfx.volume = volume / 100
        sfx.play()
    }
    //ora che ho preparato per bene l'array con le celle da eliminare, posso far partire il timeout
    setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != "noCombo" && document.getElementById(arr[i]) != null) {
                let cell = document.getElementById(arr[i])
                //aggiungo i progressi in base al tipo di cella eliminato
                if (cell.type == "secco") {
                    countCelleEliminate[0]++
                    //non aumento la barra di progresso se ha gia' raggiunto il massimo, il punteggio stesso puo' anche aumentare tanto e' ininfluente
                    if (countCelleEliminate[0] <= 50) {
                        document.getElementById("progressSecco").style.width = countCelleEliminate[0] * 2 + "%"
                    }
                    //applico anche l'effetto visivo
                    document.getElementById("scoreSecco").style.filter = "brightness(2)"
                    setTimeout(() => { document.getElementById("scoreSecco").style.filter = "brightness(1)"}, 250)
                    document.getElementById("scoreSecco").style.transform = "scale(1.1) rotate(2.5deg)"
                    setTimeout(() => { document.getElementById("scoreSecco").style.transform = "scale(1) rotate(0deg)"}, 250)
                    //infine aumento il punteggio effettivo, in questo caso di 1 perche' la cella in questione e' del secco
                    score++
                } else if (cell.type == "carta") {
                    //stessa cosa per la carta
                    countCelleEliminate[1]++
                    if (countCelleEliminate[1] <= 50) {
                        document.getElementById("progressCarta").style.width = countCelleEliminate[1] * 2 + "%"   
                    }
                    document.getElementById("scoreCarta").style.filter = "brightness(2)"
                    setTimeout(() => { document.getElementById("scoreCarta").style.filter = "brightness(1)"}, 250)
                    document.getElementById("scoreCarta").style.transform = "scale(1.1) rotate(2.5deg)"
                    setTimeout(() => { document.getElementById("scoreCarta").style.transform = "scale(1) rotate(0deg)"}, 250)
                    score += 2
                } else if (cell.type == "plastica") {
                    //stessa cosa per la plastica
                    countCelleEliminate[2]++
                    if (countCelleEliminate[2] <= 50) {
                        document.getElementById("progressPlastica").style.width = countCelleEliminate[2] * 2 + "%"
                    }
                    document.getElementById("scorePlastica").style.filter = "brightness(2)"
                    setTimeout(() => { document.getElementById("scorePlastica").style.filter = "brightness(1)"}, 250)
                    document.getElementById("scorePlastica").style.transform = "scale(1.1) rotate(2.5deg)"
                    setTimeout(() => { document.getElementById("scorePlastica").style.transform = "scale(1) rotate(0deg)"}, 250)
                    score += 3
                } else if (cell.type == "vetro") {
                    //stessa cosa per il vetro
                    countCelleEliminate[3]++
                    if (countCelleEliminate[3] <= 50) {
                        document.getElementById("progressVetro").style.width = countCelleEliminate[3] * 2 + "%"
                    }
                    document.getElementById("scoreVetro").style.filter = "brightness(2)"
                    setTimeout(() => { document.getElementById("scoreVetro").style.filter = "brightness(1)"}, 250)
                    document.getElementById("scoreVetro").style.transform = "scale(1.1) rotate(2.5deg)"
                    setTimeout(() => { document.getElementById("scoreVetro").style.transform = "scale(1) rotate(0deg)"}, 250)
                    score += 5
                }
                //mando l'utente alla pagina della vittoria se tutti i contatori sono >= a 50, l'unico valore che mi serve passare e' il punteggio, il nome lo chiedo nella pagina della vittoria
                if (countCelleEliminate[0] >= 50 && countCelleEliminate[1] >= 50 && countCelleEliminate[2] >= 50 && countCelleEliminate[3] >= 50) {
                    puntiLocal.push(score);
                    console.log(puntiLocal)
                    localStorage.setItem("puntiLocal", JSON.stringify(puntiLocal));
                    location.href = "vittoria.html?punti=" + score
                    return
                }
                //aggiorno la UI del punteggio, posso farlo fuori dai casi singoli perche' il punteggio e' uniforme per tutto
                document.getElementById("scoreCounter").innerHTML = score
                document.getElementById("score").style.filter = "brightness(2)"
                setTimeout(() => { document.getElementById("score").style.filter = "brightness(1)"}, 250)
                document.getElementById("score").style.transform = "scale(1.1) rotate(2.5deg)"
                setTimeout(() => { document.getElementById("score").style.transform = "scale(1) rotate(0deg)"}, 250)
                //"elimino" le celle trovate dal comboCheck, in realta' l'unica cosa che faccio e' dar loro un tipo diverso e togliere lo sfondo
                cell.type = "empty"
                cell.style.backgroundImage = "none"
            }
        }
        //richiamo la funzione per far cadere le celle che si trovano sopra delle celle vuote
        setTimeout(cellFall, 500)
    }, 400)
}

//cellFall fa cadere le celle che si trovano al di sopra di spazi vuoti, non serve passargli valori, controlla tutta la griglia di gioco per questioni di convenienza
function cellFall() {
    //listOfChanges contiene una lista degli id delle celle che sono state spostate in basso, mi serve dopo per controllare che la caduta non abbia creato nuove combo
    let listOfChanges = []
    //cellFall invece di andare in ordine parte dal fondo di ogni colonna e procede verso l'alto, quando trova una cella vuota ne salva i parametri, poi continua fino alla prima cella non vuota e le scambia
    for(i = 0; i < level; i++) {
        for(j = level - 1; j >= 0; j--) {
            if(document.getElementById("cell" + j + i).type == "empty") {
                //salvo l'id della prima cella vuota trovata
                let emptyCell = "cell" + j + i
                //faccio partire un altro for per controllare il resto della colonna senza veramente andare avanti, cosi' se devo fare piu' di uno scambio posso
                for (let k = j - 1; k >= 0; k--) {
                    if (document.getElementById("cell" + k + i).type != "empty") {
                        //scambio la prima cella vuota trovata con la prima cella non vuota trovata
                        document.getElementById(emptyCell).type = document.getElementById("cell" + k + i).type
                        document.getElementById(emptyCell).style.backgroundImage = document.getElementById("cell" + k + i).style.backgroundImage
                        document.getElementById("cell" + k + i).type = "empty"
                        document.getElementById("cell" + k + i).style.backgroundImage = "none"
                        //aggiungo a listOfChanges l'id della cella non vuota spostata
                        listOfChanges.push("cell" + j + i)
                        //termino il ciclo for perche' ho trovato la coppia da scambiare
                        k = -1
                    }
                }
            }
        }
    }
    //comboFound mi serve per capire se posso riempire le celle vuote o no, perche' nel caso la caduta abbia formato altre combo voglio far partire un altro cellKill e di conseguenza un altro cellFall
    let comboFound = false
    //killList e' la lista di celle da passare al cellKill nel caso trovi delle combo, faccio cosi' invece di chiamarlo appena posso per non averne piu' di uno attivo alla volta
    let killList = []
    for (let i = 0; i < listOfChanges.length; i++) {
        let cell = document.getElementById(listOfChanges[i])
        //uso comboCheck su ogni cella spostata con la caduta, poi mi assicuro che comboCheck mi abbia trovato una combo e che la cella considerata non sia vuota, cosa che puo' succedere se una delle celle cadute fa parte della combo in questione
        if (comboCheck(cell.id, cell.row, cell.column, cell.type) != "noCombo" && cell.type != "empty") {
            //aggiungo quindi alla killList le celle da eliminare, e uso spawnPotere nel caso dei poteri debbano essere generati
            killList = killList.concat(comboCheck(cell.id, cell.row, cell.column, cell.type))
            spawnPotere(comboCheck(cell.id, cell.row, cell.column, cell.type))
            comboFound = true
        }
    }
    //qui decido se continuare l'eliminazione e la caduta di celle oppure se posso procedere con il riempimento della griglia
    if (comboFound == true) {
        cellKill(killList)
    } else {
        setTimeout(cellFill, 500)
    }
}

//cellFill riempie gli spazi vuoti della griglia 
function cellFill() {
    //eseguo lo stesso processo con cui genero le celle a inizio partita, semplicemente solo sugli spazi vuoti
    for (i = 0; i < level; i++) {
        for (j = 0; j < level; j++) {
            let cell = document.getElementById("cell" + i + j)
            if (cell.type == "empty") {
                giveCellType(cell)
                if (Math.floor(Math.random() * 20) == 1) {
                    cell.type = "tossico"
                    cell.style.backgroundImage = "url(tossico.png)"
                }
                while (comboCheck(cell.id, cell.row, cell.column, cell.type) != "noCombo") {
                    giveCellType(cell)
                }
            }
        }
    }
    //l'animazione e' finita, posso di nuovo interagire col gioco
    canMove = true
}

//spawnPotere riceve come valore un array contenente gli ID delle celle interessate da una combo, percio' dev'essere chiamato per ogni combo trovata, e non posso semplicemente passargli la lista delle celle da eliminare
function spawnPotere(arr) {
    //questo setTimeout ha un tempo strano perche' spawnPotere deve partire subito dopo un cellKill, cosicche' il potere non venga eliminato appena spawnato e che il potere non spawni troppo tempo dopo l'attivazione del cellKill. Potrebbe essere fatto meglio, ma questo funziona
    setTimeout(() => {
        //controllo che la combo passata sia effettivamente una combo e che sia da piu' di 3
        if (arr.length > 3 && arr != "noCombo") {
            //mi salvo i valori massimi delle colonne e le righe trovati
            let maxRow = document.getElementById(arr[0]).row
            let maxColumn = document.getElementById(arr[0]).column
            for (let i = 1; i < arr.length; i++) {
                //se la cella considerata e' piu' in basso / a destra di cio' che ho trovato fin'ora, aggiorno le coordinate per il potere
                if (document.getElementById(arr[i]).row >= maxRow && document.getElementById(arr[i]).column >= maxColumn) {
                    maxRow = document.getElementById(arr[i]).row
                    maxColumn = document.getElementById(arr[i]).column
                }
            }
            //decido se spawnare l'amore o il riciclo in base alla lunghezza dell'array
            if (arr.length < 5) {
                document.getElementById("cell" + maxRow + maxColumn).type = "riciclo"
                document.getElementById("cell" + maxRow + maxColumn).style.backgroundImage = "url(riciclo.png)"
            } else {
                document.getElementById("cell" + maxRow + maxColumn).type = "amore"
                document.getElementById("cell" + maxRow + maxColumn).style.backgroundImage = "url(amore.png)"
            }
        }
    }, 501)
} 
let puntiLocal = [];
puntiLocal = JSON.parse(localStorage.getItem("puntiLocal")) || [];
console.log(puntiLocal)