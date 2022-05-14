const inputItem = document.getElementById("todo-item");
const todoAdd = document.getElementById("todo-add");
const listTodo = document.getElementById("todo-list");

document.addEventListener('DOMContentLoaded', getLocalTodos);

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-task");
    
    const listItem = document.createElement("li");
    listItem.innerText = inputItem.value;
    listItem.classList.add("list-todo");
    todoDiv.appendChild(listItem);

    // save to local storage 
    saveLocalTodos(inputItem.value);
    
    
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check" ></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash" ></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    listTodo.appendChild(todoDiv);

    // Check if input is empty 
    if (inputItem.value == "") {
        alert("Please add a to do item");
        
    };

    inputItem.value = "";

    completeButton.addEventListener("click", completedTask);
    deleteButton.addEventListener("click", deletedTask);

    function completedTask() {
        todoDiv.style.textDecoration = "line-through";
        todoDiv.classList.toggle("completed");
    };

    function deletedTask() {
        //todoDiv.style.display = "none";
        todoDiv.remove();
        //localStorage.removeItem('todo[0]');
        
    };
    
    
    
};

const filterTodo = document.getElementById("filter-todo");

filterTodo.addEventListener("click", filterTodos);

function filterTodos(e) {
    const todos = listTodo.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;

            case "completed":
                if(todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else { 
                    todo.style.display = "none";
                }
                break;

                case "uncompleted":
                    if(!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    };
        };
        
    });

};

// local storage 

function saveLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getLocalTodos() {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-task");
    
    const listItem = document.createElement("li");
    listItem.innerText = todo;
    listItem.classList.add("list-todo");
    todoDiv.appendChild(listItem);

    
    
    
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check" ></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash" ></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    listTodo.appendChild(todoDiv);

    })

    
    function deleteLocalTodos(todo) {
        let todos;
        if(localStorage.getItem('todos') === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        
    }
}




















