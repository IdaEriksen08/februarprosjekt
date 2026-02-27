const start = document.querySelector("button")
const biger = document.querySelectorAll("button")[1];
const lower = document.querySelectorAll("button")[2];
const container = document.querySelector("#kortContainer")
let siste = 0
start.addEventListener("click", function () {
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
})
biger.addEventListener("click", function () {
    const tilfTall = Math.floor(Math.random() * 13) + 1
    if (tilfTall > siste) {
        console.log("Talle er storre")
    } else if (tilfTall < siste) {
        console.log("Talle er mindre")
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
    } else if (tilfTall < siste) {
        console.log("Talle er mindre")
    }
    const suits = ["spades", "hearts", "clubs", "diamonds"]
    const i = Math.floor(Math.random() * suits.length);
    const suit = suits[i]
    const bilde = document.createElement("img")
    bilde.src = "kortstokk/" + tilfTall + "_of_" + suit + ".png"
    container.appendChild(bilde)
    siste = tilfTall
})