// scripts.js
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = taskInput.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✖';
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
