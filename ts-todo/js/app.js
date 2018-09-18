;
var App = /** @class */ (function () {
    function App() {
        this.counter = 1;
        this.todos = [];
        this.appEl = document.getElementById('app');
    }
    App.prototype.init = function () {
        this.render();
    };
    App.prototype.render = function () {
        var formEl = this.createFormElement();
        var listEl = this.createListElement();
        this.appEl.appendChild(formEl);
        this.appEl.appendChild(listEl);
        this.update();
    };
    App.prototype.update = function () {
        var _this = this;
        var listEl = document.getElementById('todoList');
        listEl.innerHTML = '';
        if (this.todos.length === 0) {
            return false;
        }
        var _loop_1 = function (i, len) {
            var todoItem = this_1.todos[i];
            var todoToggle = document.createElement('input');
            todoToggle.type = 'checkbox';
            todoToggle.checked = todoItem.isDone;
            todoToggle.onchange = function () { return _this.toggleTodo(todoItem.id); };
            var todoText = document.createElement('span');
            todoText.innerText = todoItem.text;
            var todoRemove = document.createElement('button');
            todoRemove.type = 'button';
            todoRemove.textContent = 'remove';
            todoRemove.onclick = function () { return _this.removeTodo(todoItem.id); };
            var itemEl = document.createElement('li');
            itemEl.id = String(todoItem.id);
            itemEl.appendChild(todoToggle);
            itemEl.appendChild(todoText);
            itemEl.appendChild(todoRemove);
            listEl.appendChild(itemEl);
        };
        var this_1 = this;
        for (var i = 0, len = this.todos.length; i < len; i += 1) {
            _loop_1(i, len);
        }
    };
    App.prototype.createFormElement = function () {
        var _this = this;
        var inputEl = document.createElement('input');
        inputEl.id = 'todoText';
        inputEl.type = 'text';
        inputEl.placeholder = 'add todo...';
        var buttonEl = document.createElement('button');
        buttonEl.type = 'button';
        buttonEl.textContent = 'add';
        buttonEl.onclick = function () { return _this.addTodo(); };
        var formEl = document.createElement('div');
        formEl.appendChild(inputEl);
        formEl.appendChild(buttonEl);
        return formEl;
    };
    App.prototype.createListElement = function () {
        var listEl = document.createElement('ul');
        listEl.id = 'todoList';
        return listEl;
    };
    App.prototype.addTodo = function () {
        var input = document.getElementById('todoText');
        if (input.value === '' || input.value.length === 0) {
            return false;
        }
        var todoItem = {
            id: this.counter++,
            text: input.value,
            isDone: false
        };
        this.todos.push(todoItem);
        input.value = '';
        this.update();
    };
    App.prototype.removeTodo = function (id) {
        var newArr = [];
        for (var i = 0, len = this.todos.length; i < len; i += 1) {
            if (this.todos[i].id !== id) {
                newArr.push(this.todos[i]);
            }
        }
        this.todos = null;
        this.todos = newArr;
        this.update();
    };
    App.prototype.toggleTodo = function (id) {
        for (var i = 0, len = this.todos.length; i < len; i += 1) {
            if (this.todos[i].id === id) {
                this.todos[i].isDone = !this.todos[i].isDone;
            }
        }
        this.update();
    };
    return App;
}());
;
// initialise app
var app = new App();
app.init();
