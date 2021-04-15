const todoForm = document.querySelector(".form-control-todo");
const todoInput = todoForm.querySelector(".input-todo");
const todoList = document.querySelector(".todo-list");

const todoItem = "todoItem"
let todoArray = [];


function saveTodo(){
    localStorage.setItem(todoItem,JSON.stringify(todoArray));    
}

function deleteTodo(event){
    var btn = event.target;
    var li = btn.parentNode;
    todoList.removeChild(li);

    var cleanTodo = todoArray.filter(function(list){
        return list.id !== parseInt(li.id);
    })

    todoArray = cleanTodo;
    saveTodo();
}

function createTodo(text){
    var li = document.createElement("li");
    var div = document.createElement("div");
    var btn = document.createElement("button");

    var todoId = todoArray.length +1;

    li.id = todoId;
    btn.addEventListener("click",deleteTodo);
    btn.innerText = "X";
    div.innerText = text;    

    li.appendChild(div);
    li.appendChild(btn);    
    todoList.appendChild(li);
    
    var todoObj ={
        id : todoId,
        text : text
    }
    todoArray.push(todoObj);    
    todoInput.value = "";

    saveTodo();
}

function handleTodoSubmit(event){
    event.preventDefault();    
    var inputVal = todoInput.value;
    createTodo(inputVal);    
}

function loadTodoList(){
    var todoList = localStorage.getItem(todoItem);

    if(todoList !== null){
        var parseTodo = JSON.parse(todoList);
        parseTodo.forEach(function(list){
            createTodo(list.text);
        })
    }
}
function init(){
    loadTodoList();
    todoForm.addEventListener("submit",handleTodoSubmit);    
}
init();