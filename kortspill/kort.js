const start = document.querySelector("#buttons button:nth-child(1)")
const biger = document.querySelector("#buttons button:nth-child(2)")
const lower = document.querySelector("#buttons button:nth-child(3)")
const text = document.querySelector("h1")
const container = document.querySelector("#kortContainer")
let siste = 0
start.addEventListener("click", function () {
    container.innerHTML = ""
    this.style.display = "none"
    biger.style.display = "inline-block"
    lower.style.display = "inline-block"
    const tilfTall = Math.floor(Math.random() * 13) + 1
    const suits = ["spades", "hearts", "clubs", "diamonds"]
    const i = Math.floor(Math.random() * suits.length);
    const suit = suits[i]
    const bilde = document.createElement("img")
    bilde.src = "kortstokk/" + tilfTall + "_of_" + suit + ".png"
    container.appendChild(bilde)
    siste = tilfTall
    text.innerHTML = "Velg om neste kort er storre eller mindre"
})
biger.addEventListener("click", function () {
    const tilfTall = Math.floor(Math.random() * 13) + 1
    if (tilfTall > siste) {
        console.log("Talle er storre")
        text.innerHTML = "Riktig"
    } else if (tilfTall < siste) {
        console.log("Talle er mindre")
        text.innerHTML = "Feil, start på nytt"
        biger.style.display = "none"
        lower.style.display = "none"
        start.style.display = "inline-block"
    }
    const suits = ["spades", "hearts", "clubs", "diamonds"]
    const i = Math.floor(Math.random() * suits.length);
    const suit = suits[i]
    const bilde = document.createElement("img")
    bilde.src = "kortstokk/" + tilfTall + "_of_" + suit + ".png"
    container.appendChild(bilde)
    siste = tilfTall
})
lower.addEventListener("click", function () {
    const tilfTall = Math.floor(Math.random() * 13) + 1
    if (tilfTall > siste) {
        console.log("Talle er storre")
        text.innerHTML = "Feil, start på nytt"
        biger.style.display = "none"
        lower.style.display = "none"
        start.style.display = "inline-block"
    } else if (tilfTall < siste) {
        console.log("Talle er mindre")
        text.innerHTML = "Riktig"
    }
    const suits = ["spades", "hearts", "clubs", "diamonds"]
    const i = Math.floor(Math.random() * suits.length);
    const suit = suits[i]
    const bilde = document.createElement("img")
    bilde.src = "kortstokk/" + tilfTall + "_of_" + suit + ".png"
    container.appendChild(bilde)
    siste = tilfTall
})


 const Hjemmeside = document.querySelector("#Hjemmeside")
    Hjemmeside.addEventListener("click", function(){
       window.location.href = "http://127.0.0.1:5501/main%20mappe/index.html"
    })