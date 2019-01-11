var start = document.querySelector("#start");
var pause = document.querySelector("#stop");
var reset = document.querySelector("#reset");
var pomodoro = document.querySelector("#pomodoro");
var short = document.querySelector("#short-break");
var pomodoroTime = document.querySelector("#pomodoro-time");
var shortTime = document.querySelector("#short-time");
var longTime = document.querySelector("#long-time");
var long = document.querySelector("#long-break");
var saveParameters = document.querySelector("#save");

var timerID = null;
var URL = "http://mnogosdelal.ru/donothingfor2minutes/";
start.addEventListener("click", countDown);
pause.addEventListener("click", countDownReturn);
reset.addEventListener("click", countDownReset);
pomodoro.addEventListener("click", setPomodoro);
short.addEventListener("click", setShort);
long.addEventListener("click", setLong);
saveParameters.addEventListener("click", setParameters);

var timer = localStorage.getItem("pomodoro");
document.getElementById("timer").innerHTML = timer;

window.onload = setDefaultParameters;

function setTimer(timer) {
//  timer = localStorage.getItem("pomodoro");
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
      window.open(URL , "_blank");
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
  timer = document.getElementById("timer").innerHTML = localStorage.getItem("pomodoro");
}

function setShort() {
  clearTimeout(timerID);
  timer = document.getElementById("timer").innerHTML = localStorage.getItem("shortbreak");
  URL = "https://maxdone.micromiles.co/personal#tasks/";
}

function setLong() {
  clearTimeout(timerID);
  timer = document.getElementById("timer").innerHTML = localStorage.getItem("longbreak");
}

function setDefaultParameters() {
  var pomodorotime = document.querySelector("#pomodoro-time").value + ":00";
  localStorage.setItem("pomodoro", "25:00");
  localStorage.setItem("shortbreak", "10:00");
  localStorage.setItem("longbreak", "15:00");
  timer = localStorage.getItem("pomodoro");
  document.getElementById("timer").innerHTML = timer;
}

function setParameters() {
  localStorage.setItem("shortbreak", shortTime.value);
  localStorage.setItem("longbreak", longTime.value);
  localStorage.setItem("pomodoro", pomodoroTime.value+ ":00");
}