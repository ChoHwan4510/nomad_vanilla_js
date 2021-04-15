const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greeting");

const USER_NAME = "currentUser";

function setName(text){
    localStorage.setItem(USER_NAME, text);
}

function handleSubmit(event){
    event.preventDefault(); //버블이벤트 막기
    const currentValue = input.value;
    setName(currentValue);  
    showName(currentValue);
}

function wirteName(){
    form.classList.add("showing");
    form.addEventListener("submit",handleSubmit);
}

function showName(text){
    form.classList.remove("showing");
    greeting.classList.add("showing");
    greeting.innerText = `Hello ${text}`;
}
function localName(){    
    const currentUser = localStorage.getItem(USER_NAME);

    if(currentUser === null){
        wirteName();
    }else{
        showName(currentUser);
    }
}
function init(){
    localName();
}
init();