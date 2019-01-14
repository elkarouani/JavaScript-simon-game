let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

strictButton.addEventListener('change', (event) => {
    strict = (strictButton.checked == true)? true : false;
});

onButton.addEventListener('click', (event) => {
    on = (onButton.checked == true) ? true : false;
    turnCounter.innerHTML = (onButton.checked == true) ? "-" : "";
    
    if (on == false) {
        clearColor();
        clearInterval(intervalId);
    }
});

startButton.addEventListener('click', (event) => {
    if(on || win) {play();}
});