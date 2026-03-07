let intervall = null;
let tid = 0; // millisekunder

function oppdater() {
    tid += 10
    const min = String(Math.floor(tid / 60000)).padStart(2, "0")
    const sek = String(Math.floor((tid % 60000) / 1000)).padStart(2, "0")
    const ms = String(Math.floor((tid % 1000) / 10)).padStart(2, "0")
    // document.getElementById("display").textContent = `${min}:${sek}:${ms}`
    document.getElementById("display").textContent = min + ":" + sek + ":" + ms
}

function start() {
    if (intervall == null) {
        intervall = setInterval(oppdater, 10)
    }
}

function stopp() {
    clearInterval(intervall)
    intervall = null
}

function reset() {
    stopp()
    tid = 0
    document.getElementById("display").textContent = "00:00:00"
}

 const Hjemmeside = document.querySelector("#Hjemmeside")
    Hjemmeside.addEventListener("click", function(){
       window.location.href = "http://127.0.0.1:5501/main%20mappe/index.html"
    })
