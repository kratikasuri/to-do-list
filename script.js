function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    var taskText = document.createElement("span");
    taskText.textContent = taskInput.value;

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function() {
        if (this.checked) {
            taskText.style.textDecoration = "line-through";
        } else {
            taskText.style.textDecoration = "none";
        }
    };

    li.appendChild(checkbox);
    li.appendChild(taskText);
    taskList.appendChild(li);

    taskInput.value = "";
}
