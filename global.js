let todos = [
    {
        description: "Go to school"
    },
    {
        description: "Go to work"
    }
]

btn = document.querySelector("#btn")
field = document.querySelector('#input')
ul = document.querySelector("#list")

renderTodos()

function renderTodos() {
    todos.forEach(todo =>{
        li = document.createElement("li")
        li.innerText = todo.description
        ul.appendChild(li)
    })
}

btn.addEventListener('click', addTodo)

function addTodo() {
    field = document.querySelector('#input')
    li = document.createElement('li')
    newTodo = {description: field.value}
    todos.push(newTodo)
}