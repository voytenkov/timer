var start = document.querySelector("#start");
var pause = document.querySelector("#stop");
var reset = document.querySelector("#reset");
var pomodoro = document.querySelector("#pomodoro");
var short = document.querySelector("#short-break");
var long = document.querySelector("#long-break");
start.addEventListener("click", countDown);
pause.addEventListener("click", countDownReturn);
reset.addEventListener("click", countDownReset);
pomodoro.addEventListener("click", setPomodoro);
short.addEventListener("click", setShort);
long.addEventListener("click", setLong);

var timer = document.getElementById("timer");
var time = timer.innerHTML;
var arg = time.split(":");
var minute = arg[0];
var second = arg[1];
var timerID = null;

function countDown() {
  if (second == 0) {
    if (minute == 0) {
      alert("Время для перерыва!");
      return;
    };
    minute--;
    second = 59;
    if (minute < 10) minute = "0" + minute;
  } else {
    second--;
    if (second < 10) second = "0" + second;
  }
  timer = minute + ":" + second;
  document.getElementById("timer").innerHTML = minute + ":" + second;
  document.title = minute + ":" + second;
  timerID = setTimeout(countDown, 1000);
}

function countDownReturn() {
  clearTimeout(timerID);
}


function countDownReset() {
  clearTimeout(timerID);
  /*timer = 0; */
  minute = "25";
  second = "00";
  document.getElementById("timer").innerHTML = minute + ":" + second;
}

function setPomodoro() {
  clearTimeout(timerID);
  minute = "23";
  second = "00";
  document.getElementById("timer").innerHTML = minute + ":" + second;
}

function setShort() {
  clearTimeout(timerID);
  minute = "05";
  second = "00";
  document.getElementById("timer").innerHTML = minute + ":" + second;
}

function setLong() {
  clearTimeout(timerID);
  minute = "15";
  second = "00";
  document.getElementById("timer").innerHTML = minute + ":" + second;
}