var tasks = document.getElementsByTagName("li");

for (let i = 0; i < tasks.length; i++) {
    var buttonElement = document.createElement("button");
    var textNode = document.createTextNode("Delete");
    buttonElement.appendChild(textNode);
    buttonElement.className = "close";
    tasks[i].appendChild(buttonElement);
}
