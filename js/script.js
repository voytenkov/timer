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

var timer = document.getElementById("timer").innerHTML;

function setTimer(timer) {
  arg = timer.split(":");
  minute = arg[0];
  second = arg[1];
  timerID = null;
}

function countDown() {
  setTimer(timer);
  start.disabled = true;
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
  start.disabled = false;
}


function countDownReset() {
  clearTimeout(timerID);
  setPomodoro();
  start.disabled = false;
}

function setPomodoro() {
  clearTimeout(timerID);
  timer = document.getElementById("timer").innerHTML = "23:00";
}

function setShort() {
  clearTimeout(timerID);
  timer = document.getElementById("timer").innerHTML = "05:00";
}

function setLong() {
  clearTimeout(timerID);
  timer = document.getElementById("timer").innerHTML = "15:00";
}