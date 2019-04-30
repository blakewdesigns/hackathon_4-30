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
ul = document.querySelector("#ulEl")

renderTodos()

function renderTodos() {
    ul.innerHTML = ""
    todos.forEach(todo =>{
        li = document.createElement("li")
        li.innerText = todo.description
        ul.appendChild(li)
    })
}

btn.addEventListener('click', addTodo)

function addTodo() {
    console.log(field.value)
    newTodo = {description: field.value}
    todos.push(newTodo)
    console.log(todos)
    renderTodos()
    field.value = ""
}
