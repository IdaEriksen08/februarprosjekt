let spiller = "X"
let brett = ["", "", "", "", "", "", "", "", ""]
function klikk(i) {
    brett[i] = spiller
    if (noenVant()) {
        alert(spiller + " vinner!");
        return;
    }
    let rutter = document.querySelectorAll("button")
    rutter[i].innerHTML = spiller

    if (spiller == "X") {
        spiller = "0"
    } else {
        spiller = "X"
    }
}

let melding = document.getElementById("melding")
melding.innerHTML = "Spiller" + spiller + "sin tur"
function nullstill() {
    spiller = "X"
    brett = ["", "", "", "", "", "", "", "", ""]
    melding.innerHTML = "Spiller X sin tur"
}
function noenvant() {
    let win = [
        [0, 1, 2], // rad 1
        [3, 4, 5], // rad 2
        [6, 7, 8], // rad 3
        [0, 3, 6], // kolonne 1
        [1, 4, 7], // kolonne 2
        [2, 5, 8], // kolonne 3
        [0, 4, 8],
        [2, 4, 6]
    ]
}