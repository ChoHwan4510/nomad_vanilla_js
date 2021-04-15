const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const hassClass = title.classList.contains(CLICKED_CLASS);
    if(hassClass){
        title.classList.remove(CLICKED_CLASS);
    }else{
        title.classList.add(CLICKED_CLASS);
    }
}
function init(){
    title.addEventListener("click",handleClick);    
}
init();