let spiller = "X"
let brett = ["", "", "", "", "", "", "", "", ""]
let melding = document.getElementById("melding")
melding.innerHTML = "Spiller X sin tur"

function klikk(i) {
    // Hindre klikk på allerede brukt rute
    if (brett[i] != "") return;

    brett[i] = spiller

    let rutter = document.querySelectorAll(".brett button")
    rutter[i].innerHTML = spiller
    rutter[i].classList.add(spiller.toLowerCase())

    if (noenVant()) {
        melding.innerHTML = "Spiller " + spiller + " vinner! "
        // Deaktiver alle knapper
        rutter.forEach(knapp => knapp.disabled = true)
        return;
    }

    // Sjekk uavgjort
    if (!brett.includes("")) {
        melding.innerHTML = "Uavgjort!"
        return;
    }

    if (spiller == "X") {
        spiller = "O"
    } else {
        spiller = "X"
    }

    melding.innerHTML = "Spiller " + spiller + " sin tur"
}

function nullstill() {
    spiller = "X"
    brett = ["", "", "", "", "", "", "", "", ""]
    melding.innerHTML = "Spiller X sin tur"

    let rutter = document.querySelectorAll(".brett button")
    rutter.forEach(knapp => {
        knapp.innerHTML = ""
        knapp.disabled = false
        knapp.classList.remove("x", "o")
    })
}

function noenVant() {
    let vinnKombo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let kombo of vinnKombo) {
        let [a, b, c] = kombo
        if (brett[a] != "" && brett[a] == brett[b] && brett[b] == brett[c]) {
            return true
        }
    }
    return false
}

  const Hjemmeside = document.querySelector("#Hjemmeside")
    Hjemmeside.addEventListener("click", function(){
       window.location.href = "http://127.0.0.1:5501/main%20mappe/index.html"
    })