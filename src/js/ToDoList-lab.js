const tasks = document.getElementsByTagName("li");

function createButton() {
    let buttonElement = document.createElement("button");
    let textNode = document.createTextNode("Delete");
    buttonElement.appendChild(textNode);
    buttonElement.className = "close";
    buttonElement.addEventListener("click", function () {
        this.parentElement.style.display = "none";
    })
    return buttonElement;
}

for (let i = 0; i < tasks.length; i++) {
    let buttonElement = createButton();
    tasks[i].appendChild(buttonElement);
}

const list = document.querySelector("ul");

list.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked")
    }
}, false)

function newTask() {
    let input = document.getElementById("myInput").value.trim();
    if (!input) {
        alert("Please enter something useful here!")
        return;
    }
    let buttonElement = createButton();
    let listItem = document.createElement("li");
    let text = document.createTextNode(input);
    listItem.appendChild(text)
    listItem.appendChild(buttonElement)
    document.getElementById("myUL").appendChild(listItem);

    document.getElementById("myInput").value = "";
}

