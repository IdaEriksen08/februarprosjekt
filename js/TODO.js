const inputElement = document.querySelector("input")
const todolistDiv = document.querySelector(".todolist")

function lagTodo() {
    const todoElement = document.createElement("li")

    todoElement.innerHTML = inputElement.value
    todoElement.onclick = function () {
        todoElement.style.color = "red"
        todoElement.classList.add("done")
    }
   
    inputElement.value = ""
    todoElement.style.color = "pink"

    todolistDiv.appendChild(todoElement)


}