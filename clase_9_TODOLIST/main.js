const app = document.querySelector('#app');

app.innerHTML = `
    <div class="todos">
        <div class="todos-header">
            <h3 class="todos-title">TODO NUC</h3>
            <div>
                <p>Tienes <span class="todos-count"></span> Items por hacer!! </p>
                <button type="button" class="todos-clear" style="display:none;" >Borra Completados</button>
            </div>
        </div>
        <form class="todos-form" name="todos">
            <input type="text" placeholder="Que vas hacer KING????" name="todo">
            <small>Escribi algo KING!!!!</small>
        </form>
        <ul class="todos-list">
        </ul>
    </div>
`;

//SELECTORES
const root = document.querySelector('.todos');
const list = root.querySelector('.todos-list');
const count = root.querySelector('.todos-count');
const clear = root.querySelector('.todos-clear');
const form = document.forms.todos;
const input = form.elements.todo;

//STATE
let state = [];

//RENDER FUNCTION
const renderTodos = (todos) => {
  let todosListHTML = todos
    .map(
      (todo, index) => `
        <li data-id="${index}">
            <input type="checkbox">
            <span>${todo.label}</span>
            <button type="buttom"></button>
        </li>
    `
    )
    .join('');
  list.innerHTML = todosListHTML;
};

//HANDLERS
const addTodo = (e) => {
  e.preventDefault();
  const label = input.value.trim();
  const complete = false;

  if (label.length === 0) {
    form.classList.add('error');
    return;
  }
  form.classList.remove('error');
  state = [...state, { label, complete }];
  renderTodos(state);
  console.log(state);
  input.value = '';
};

//INIT FUNCTION -> Inicia nuestra app

function init() {
  form.addEventListener('submit', addTodo);
}

init();
