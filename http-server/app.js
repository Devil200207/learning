const todoform = document.getElementById('todoform');
const todoInput = document.getElementById('todoinput');
const todolist = document.getElementById('todolist');

todoform.addEventListener('submit',async(event) =>{
    event.preventDefault();
    const todo = todoInput.value;
    console.log(todo);
    if(todo){
        const response = await fetch('/todos',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text:todo})
        });
        if(response.ok){
            todoInput.value = '';
            displayTodo(todo);
        }
    }
});

async function fetchTodos() {
    const response = await fetch('/todos');
    const todos = await response.json();
    todos.forEach(displayTodo);
  }

async function displayTodo(todo)
{
    const todoItem = document.createElement('li');
    todoItem.textContent = todo;
    todolist.appendChild(todoItem);
}

fetchTodos();