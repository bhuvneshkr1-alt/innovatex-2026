var festDate = new Date("2026-11-15T09:00:00");
var daysBox = document.getElementById("days");
var hoursBox = document.getElementById("hours");
var minutesBox = document.getElementById("minutes");
var secondsBox = document.getElementById("seconds");
function addZero(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}
function updateCountdown() {
  var now = new Date();                  
  var timeLeft = festDate - now;           
  if (timeLeft <= 0) {
    daysBox.textContent = "00";
    hoursBox.textContent = "00";
    minutesBox.textContent = "00";
    secondsBox.textContent = "00";
    return;
  }
  var seconds = Math.floor(timeLeft / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;
  daysBox.textContent = addZero(days);
  hoursBox.textContent = addZero(hours);
  minutesBox.textContent = addZero(minutes);
  secondsBox.textContent = addZero(seconds);
}
updateCountdown();
setInterval(updateCountdown, 1000);