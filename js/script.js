var start = document.querySelector("#start");
var pause = document.querySelector("#stop");
var reset = document.querySelector("#reset");

var pomodoro = document.querySelector("#pomodoro");
var short = document.querySelector("#short-break");
var long = document.querySelector("#long-break");

var pomodoroTime = document.querySelector("#pomodoro-time");
var shortTime = document.querySelector("#short-time");
var longTime = document.querySelector("#long-time");

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



window.onload = setDefaultParameters;

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
      window.open(URL, "_blank");
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
  timer = document.getElementById("timer").innerHTML = localStorage.getItem("pomodorobreak") + ":00";
}

function setShort() {
  clearTimeout(timerID);
  timer = document.getElementById("timer").innerHTML = localStorage.getItem("shortbreak") + ":00";
  URL = "https://maxdone.micromiles.co/personal#tasks/";
}

function setLong() {
  clearTimeout(timerID);
  timer = document.getElementById("timer").innerHTML = localStorage.getItem("longbreak") + ":00";
}

function setDefaultParameters() {
  
  localStorage.setItem("pomodorobreak", "25");
  localStorage.setItem("shortbreak", "10");
  localStorage.setItem("longbreak", "15");
  
  
  timer = localStorage.getItem("pomodorobreak") + ":00";
  document.getElementById("timer").innerHTML = timer;
  
  document.getElementById("pomodoro-time").value = localStorage.getItem("pomodorobreak"); 
  document.getElementById("short-time").value = localStorage.getItem("shortbreak");
  document.getElementById("long-time").value = localStorage.getItem("longbreak");
  
  document.getElementById("pomodoro").value = localStorage.getItem("pomodorobreak"); 
  document.getElementById("short-break").value = localStorage.getItem("shortbreak");
  document.getElementById("long-break").value = localStorage.getItem("longbreak");
}

function setParameters() {
  if (shortTime.value < 10) {
    localStorage.setItem("shortbreak", "0" + shortTime.value);
  } else {
    localStorage.setItem("shortbreak", shortTime.value);
  }
  if (longTime.value < 10) {
    localStorage.setItem("longbreak", "0" + longTime.value);  
  } else {
    localStorage.setItem("longbreak", longTime.value);
  }
  if (pomodoroTime.value < 10) {
    localStorage.setItem("pomodorobreak", "0" + pomodoroTime.value);  
  } else {
    localStorage.setItem("pomodorobreak", pomodoroTime.value);
  }
  
  timer = localStorage.getItem("pomodorobreak") + ":00";
  document.getElementById("timer").innerHTML = timer;
}
