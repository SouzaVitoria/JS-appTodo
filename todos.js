var listElement = document.querySelector("table");
var inputElement = document.querySelector("body input");
var buttonElement = document.querySelector("body button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos() {
  listElement.innerHTML = "";
  for (todo of todos) {
    var todoStructure = document.createElement("tr");
    var todoElement = document.createElement("td");
    var deleteElement = document.createElement("td");
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    var position = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo(" + position + ")");

    var linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    deleteElement.appendChild(linkElement);
    todoStructure.appendChild(todoElement);
    todoStructure.appendChild(deleteElement);
    listElement.appendChild(todoStructure);
  }
}
renderTodos();

function addTodo() {
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}
buttonElement.onclick = addTodo;

function deleteTodo(position) {
  todos.splice(position, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}
