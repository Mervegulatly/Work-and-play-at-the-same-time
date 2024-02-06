const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

//LocalStorage'dan Bilgi Getirme:
const todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

//Form Gönderimini Dinleme
form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

//Todo Ekleme Fonksiyonu
function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener("click", () => {
      //tablo üzerine tıklandığında tamamlanmış durumuna getirir
      todoEl.classList.toggle("completed");
      updateLS();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      //contextmenu sağ tıklandığında kaldırma
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });

    todosUL.appendChild(todoEl);
    input.value = "";
    updateLS();
  }
}

//Todo Güncelleme Fonksiyonu
function updateLS() {
  todosEl = document.querySelectorAll("li");

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
