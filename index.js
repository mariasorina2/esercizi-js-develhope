function addProduct() {
    const ul = document.getElementById("to-do-list")
    const li = document.createElement("li")
    const input = document.getElementById("to-do-list-input")
    li.innerHTML = input.value
    const div = document.createElement("div")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    div.appendChild(li)
    div.appendChild(checkbox)
    ul.appendChild(div)
}



