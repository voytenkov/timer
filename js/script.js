var start = document.querySelector(".start");
var pause = document.querySelector(".pause");
var reset = document.querySelector(".reset");
start.addEventListener("click", countDown);
pause.addEventListener("click", countDownReturn);
reset.addEventListener("click", countDownReset);

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
  } else {
    second--;
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
  timer = 0;
  minute = "25";
  second = "00";
  document.getElementById("timer").innerHTML = minute + ":" + second;
}
