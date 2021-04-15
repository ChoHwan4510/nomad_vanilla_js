const form = document.querySelector(".form-control");
const title = document.querySelector(".main-title");
const input = form.querySelector("#inputName");
const user_text = document.querySelector(".user_name_text");
const clockWrap = document.querySelector(".clock");
const todoText = document.querySelector(".todo-list-text");
const todoFormWrap = document.querySelector(".form-control-todo");

const user_storage_key = "user_name";

function handleSubmit(event){
    event.preventDefault(); //버블링방지
    var input_value = input.value;
    localStorage.setItem(user_storage_key,input_value);
    showName(input_value);
}

function writeName(){    
    form.addEventListener("submit",handleSubmit);
}
function showName(text){
    form.classList.remove("showing");
    title.classList.remove("showing");

    user_text.classList.add("showing");
    clockWrap.classList.add("showing");
    todoText.classList.add("showing");
    todoFormWrap.classList.add("showing");

    user_text.innerText = (`Hello ${text}`);
}
function localName(){
    var setLocalName = localStorage.getItem("user_name");

    if(setLocalName){
        showName(setLocalName);
    }else{
        writeName();
    }    
}

function init(){
    localName();
}
init();