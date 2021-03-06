const clockContainer = document.querySelector(".clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const second = date.getSeconds();
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:
    ${minutes < 10 ? `0${minutes}` : minutes}:
    ${second < 10 ? `0${second}` : second}`;
}
function init(){
    getTime();
    setInterval(getTime,1000);
}
init();