
let timerCounter = 0;

function timer() {
    timerCounter = document.getElementById("time").value;
    const myOtherTimer = setInterval(timerHandler, 1000);
}

function timerHandler() {
    document.querySelector("#timer").innerHTML =
    timerCounter--;
    if (timerCounter < 0){
        clearInterval(myOtherTimer);
        alert("Tiden är slut")
    }
}