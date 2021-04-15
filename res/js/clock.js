const clock = document.querySelector(".clock");

function get_time(){
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    
    clock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:
    ${minute < 10 ? `0${minute}` : minute}:
    ${second < 10 ? `0${second}` : second}`;
}

function init(){
    get_time();
    setInterval(get_time,1000);
}
init();