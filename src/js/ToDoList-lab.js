const tasks = document.getElementsByTagName("li");

for (let i = 0; i < tasks.length; i++) {
    let buttonElement = document.createElement("button");
    let textNode = document.createTextNode("Delete");
    buttonElement.appendChild(textNode);
    buttonElement.className = "close";
    buttonElement.addEventListener("click", function () {
        // this.parentElement.style.display = "none";
        tasks[i].style.display = "none";
    })
    tasks[i].appendChild(buttonElement);
}

var list = document.querySelector("ul");

list.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked")
    }
}, false)

