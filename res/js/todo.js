const toDoform = document.querySelector(".js-toDoForm"),
      toDoinput = toDoform.querySelector("input"),
      toDoList = document.querySelector(".js-todoList");

const TODO_ID = "todolist";
let toListArray = [];

function saveTodo(){
    localStorage.setItem(TODO_ID,JSON.stringify(toListArray));
}

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanTodo = toListArray.filter(function(Todo){
        //li.id는 클릭했을떄 li각 가지고있는 id 값
        //del클릭 버튼 누른 id값만 배열에 안나와야함
        return Todo.id !== parseInt(li.id);
    });
    toListArray = cleanTodo
    saveTodo(cleanTodo);

}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toListArray.length + 1;

    delBtn.innerHTML = "X";
    span.innerText = text;
    delBtn.addEventListener("click",deleteTodo);

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);    

    const toDoObj = {
        text: text,
        id : newId
    }
    toListArray.push(toDoObj);
    saveTodo();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoinput.value;
    paintToDo(currentValue);
    toDoinput.value = "";
}
function loadToDo(){
    const toDoLocal = localStorage.getItem(TODO_ID);
    if(toDoLocal !== null ) {
        const parseTodo = JSON.parse(toDoLocal);
        parseTodo.forEach(function(Todo){            
            paintToDo(Todo.text);
        });
    };
}      
function init(){
    loadToDo();
    toDoform.addEventListener("submit",handleSubmit);
}
init();