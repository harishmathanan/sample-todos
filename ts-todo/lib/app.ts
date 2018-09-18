interface ITodoItem {
  id: number;
  text: string;
  isDone: boolean;
};

class App {
  private counter: number = 1;
  private todos: ITodoItem[] = [];
  private appEl = document.getElementById('app');

  public init() {
    this.render();
  }

  private render() {
    let formEl = this.createFormElement();
    let listEl = this.createListElement();

    this.appEl.appendChild(formEl);
    this.appEl.appendChild(listEl);

    this.update();
  }

  private update() {
    let listEl = document.getElementById('todoList');
    listEl.innerHTML = '';

    if (this.todos.length === 0) {
      return false;
    }

    for (let i = 0, len = this.todos.length; i < len; i += 1) {
      let todoItem: ITodoItem = this.todos[i];

      let todoToggle = document.createElement('input');
      todoToggle.type = 'checkbox';
      todoToggle.checked = todoItem.isDone;
      todoToggle.onchange = () => this.toggleTodo(todoItem.id);

      let todoText = document.createElement('span');
      todoText.innerText = todoItem.text;

      let todoRemove = document.createElement('button');
      todoRemove.type = 'button';
      todoRemove.textContent = 'remove';
      todoRemove.onclick = () => this.removeTodo(todoItem.id);

      let itemEl = document.createElement('li');
      itemEl.id = String(todoItem.id);
      itemEl.appendChild(todoToggle);
      itemEl.appendChild(todoText);
      itemEl.appendChild(todoRemove);

      listEl.appendChild(itemEl);
    }
  }

  private createFormElement(): HTMLElement {
    let inputEl = document.createElement('input');
    inputEl.id = 'todoText';
    inputEl.type = 'text';
    inputEl.placeholder = 'add todo...';

    let buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.textContent = 'add';
    buttonEl.onclick = () => this.addTodo();

    let formEl = document.createElement('div');
    formEl.appendChild(inputEl);
    formEl.appendChild(buttonEl);

    return formEl;
  }

  private createListElement(): HTMLElement {
    let listEl = document.createElement('ul');
    listEl.id = 'todoList';
    return listEl;
  }

  private addTodo() {
    let input: HTMLInputElement = (document.getElementById('todoText') as HTMLInputElement);

    if (input.value === '' || input.value.length === 0) {
      return false;
    }

    const todoItem: ITodoItem = {
      id: this.counter++,
      text: input.value,
      isDone: false
    };

    this.todos.push(todoItem);
    input.value = '';

    this.update();
  }

  private removeTodo(id: number) {
    let newArr: ITodoItem[] = [];

    for (let i = 0, len = this.todos.length; i < len; i += 1) {
      if (this.todos[i].id !== id) {
        newArr.push(this.todos[i]);
      }
    }

    this.todos = null;
    this.todos = newArr;

    this.update();
  }

  private toggleTodo(id: number) {
    for (let i = 0, len = this.todos.length; i < len; i += 1) {
      if (this.todos[i].id === id) {
        this.todos[i].isDone = !this.todos[i].isDone;
      }
    }

    this.update();
  }
};

// initialise app
const app = new App();
app.init();
