let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoDate = document.getElementById("todo-date");

  if (validateInput(todoInput.value, todoDate.value)) {
    let todo = {
      task: todoInput.value,
      date: todoDate.value,
      completed: false
    };
    todos.push(todo);
    saveTodos();
    renderTodo();
    todoInput.value = "";
    todoDate.value = "";
  }
}

function renderTodo() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
  
    let filter = document.getElementById("filter").value;
  
    let filteredTodos = todos.filter(todo => {
      if (filter === "completed") return todo.completed;
      if (filter === "pending") return !todo.completed;
      return true;
    });
  
    if (filteredTodos.length === 0) {
      todoList.innerHTML = `<p class="text-center text-purple-200">No todos found!</p>`;
      return;
    }
  
    filteredTodos.forEach((todo, index) => {
      todoList.innerHTML += `
        <li class="bg-purple-500 text-white border border-purple-400 rounded-lg p-3 flex justify-between items-center shadow-sm">
          <div class="flex items-center gap-2">
            <input type="checkbox" onchange="toggleComplete(${index})" ${todo.completed ? "checked" : ""} class="accent-purple-700">
            <div class="${todo.completed ? "line-through text-purple-200" : ""}">
              <p class="font-medium">${todo.task}</p>
              <p class="text-sm text-purple-200">${todo.date}</p>
            </div>
          </div>
          <div class="flex gap-2">
            <button onclick="editTodo(${index})" class="bg-yellow-400 hover:bg-yellow-500 text-white px-2 rounded">Edit</button>
            <button onclick="deleteTodo(${index})" class="bg-red-500 hover:bg-red-600 text-white px-2 rounded">Delete</button>
          </div>
        </li>
      `;
    });
  }
  