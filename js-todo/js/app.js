(function () {
  var counter = 1;
  var todos = [];
  var appEl = document.getElementById('app');

  init();

  function init() {
    render();
  }

  function render() {
    var formEl = createFormElement();
    var listEl = createListElement();

    appEl.appendChild(formEl);
    appEl.appendChild(listEl);
  }

  // re-render the todo list
  function update() {
    let listEl = document.getElementById('todoList');
    listEl.innerHTML = ''; // clear

    if (todos.length === 0) {
      return false;
    }

    for (let i = 0, len = todos.length; i < len; i += 1) {

      var todoToggle = document.createElement('input');
      todoToggle.type = 'checkbox';
      todoToggle.checked = todos[i].isDone;
      todoToggle.onchange = function () { return toggleTodo(todos[i].id); }

      var todoText = document.createElement('span');
      todoText.innerText = todos[i].text;

      var todoRemove = document.createElement('button');
      todoRemove.type = 'button';
      todoRemove.textContent = 'remove';
      todoRemove.onclick = function () { return removeTodo(todos[i].id); }

      var itemEl = document.createElement('li');
      itemEl.id = String(todos[i].id);
      itemEl.appendChild(todoToggle);
      itemEl.appendChild(todoText);
      itemEl.appendChild(todoRemove);

      listEl.appendChild(itemEl);
    }
  }

  function createFormElement() {
    var inputEl = document.createElement('input');
    inputEl.id = 'todoText';
    inputEl.type = 'text';
    inputEl.placeholder = 'add todo...';

    var buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.textContent = 'add';
    buttonEl.onclick = function () { addTodo(); };

    var formEl = document.createElement('div');
    formEl.appendChild(inputEl);
    formEl.appendChild(buttonEl);

    return formEl;
  }

  function createListElement() {
    var listEl = document.createElement('ul');
    listEl.id = 'todoList';

    return listEl;
  }

  function addTodo() {
    var input = document.getElementById('todoText');

    if (input.value === '' || input.value.length === 0) {
      return false;
    }

    var todoItem = {
      id: counter++,
      text: input.value,
      isDone: false
    };

    todos.push(todoItem);
    input.value = '';

    update();
  }

  function removeTodo(id) {
    var newArr = [];

    for (var i = 0, len = todos.length; i < len; i += 1) {
      if (todos[i].id !== id) {
        newArr.push(todos[i]);
      }
    }

    todos = null; // empty
    todos = newArr; // new values

    update();
  }

  function toggleTodo(id) {
    for (let i = 0, len = todos.length; i < len; i += 1) {
      if (todos[i].id === id) {
        todos[i].isDone = !todos[i].isDone;
      }
    }

    update();
  }
})();
