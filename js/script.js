var start = document.querySelector("#start");
var pause = document.querySelector("#stop");
var reset = document.querySelector("#reset");
var pomodoro = document.querySelector("#pomodoro");
var short = document.querySelector("#short-break");
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
  timer = document.getElementById("timer").innerHTML = "00:15";
  URL = "https://maxdone.micromiles.co/personal#tasks/";
}

function setLong() {
  clearTimeout(timerID);
  timer = document.getElementById("timer").innerHTML = "15:00";
}

function setParameters() {
  var pomodorotime = document.querySelector("#pomodoro-time").value + ":00";
  localStorage.setItem("pomodoro", pomodorotime);
  localStorage.setItem("shortbreak", "10:00");
  localStorage.setItem("longbreak", "15:00");
  timer = localStorage.getItem("pomodoro");
  document.getElementById("timer").innerHTML = timer;
}