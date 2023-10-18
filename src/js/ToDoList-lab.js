function createDeleteButton() {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = "Delete";
    buttonElement.className = "close";
    buttonElement.addEventListener("click", () => buttonElement.parentElement.style.display = "none");
    return buttonElement;
}

function addDeleteButtonToTasks() {
    const tasks = document.querySelectorAll("li");
    for (const task of tasks) {
        task.appendChild(createDeleteButton());
    }
}

function toggleTaskCompletion(event) {
    if (event.target.tagName !== "LI") {
        return;
    }
    event.target.classList.toggle("checked");
}

function newTask() {
    const inputText = document.getElementById("myInput").value.trim();

    if (!inputText) {
        alert("Please enter something useful here!");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = inputText;
    listItem.appendChild(createDeleteButton());
    document.getElementById("myUL").appendChild(listItem);
    document.getElementById("myInput").value = "";
}

addDeleteButtonToTasks();
document.querySelector("ul").addEventListener("click", toggleTaskCompletion, false);

function searchTasks() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const tasks = document.querySelectorAll("li");

    for (const task of tasks) {
        const taskText = task.textContent.toLowerCase().replace('Delete', '').trim(); // removing 'Delete' as it's part of the button text

        if (taskText.includes(searchInput)) {
            task.style.display = "";
        } else {
            task.style.display = "none";
        }
    }
}


document.getElementById("searchInput").addEventListener("keyup", searchTasks);

