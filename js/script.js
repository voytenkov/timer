var start = document.querySelector(".start");
var pause = document.querySelector(".pause");
start.addEventListener("click", countDown);
pause.addEventListener("click", countDownReturn);

function countDown() {
  var timer = document.getElementById("timer");
  var time = timer.innerHTML;
  var arg = time.split(":");
  var minute = arg[0];
  var second = arg[1];
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
  document.getElementById("timer").innerHTML = minute + ":" + second;
  document.title = document.getElementById("timer").innerHTML = minute + ":" + second;
  setTimeout(countDown, 1000);
}

function countDownReturn() {
  return;
}