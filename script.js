function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="complete-btn" onclick="toggleComplete(this)">✓</button>
    <button class="delete-btn" onclick="deleteTask(this)">✗</button>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function toggleComplete(btn) {
  const text = btn.parentElement.querySelector(".task-text");
  text.classList.toggle("completed");
}

function deleteTask(btn) {
  btn.parentElement.remove();
}
