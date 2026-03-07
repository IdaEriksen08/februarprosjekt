const inputElement = document.querySelector("input")
const todolistDiv = document.getElementById("oppgaveliste")


inputElement.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        leggTil();
    }
})


function leggTil() {
    if (inputElement.value == "") {
        // Avslutt funksjonen, om det ikke er noe innhold i input boksen:
        return
    }

    const todoElement = document.createElement("li")
    todolistDiv.appendChild(todoElement)


    todoElement.innerHTML = inputElement.value

    // Lag en slett knapp, og legg den til på todoElementet vårt:
    let slett = document.createElement("button");
    todoElement.appendChild(slett);

    // Definerer teksten og css klassen til knappen:
    slett.textContent = "Slett";
    slett.className = "slett";
    // Definerer hva som skjer når vi trykker på knappen:
    slett.onclick = function () {
        todoElement.remove();
    };


    inputElement.value = ""

}

  const Hjemmeside = document.querySelector("#Hjemmeside")
    Hjemmeside.addEventListener("click", function(){
       window.location.href = "http://127.0.0.1:5501/main%20mappe/index.html"
    })
