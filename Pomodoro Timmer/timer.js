const timer = document.querySelector(".timer");
const work = document.querySelector(".work");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const restart = document.querySelector(".restart");

let timeInterval = null;
let totalSecond = 25 * 60;
let isWorkSession = true;

function UpdateTimer() {
  let minutes = Math.floor(totalSecond / 60);
  let second = totalSecond % 60;

  // if (minutes.toString().length < 2 && second.toString().length < 2) {
  //   timer.innerHTML = `0${minutes}:0${second}`;
  // } else {
  //   timer.innerHTML = `${minutes}:${second}`;
  // }
  timer.innerHTML = `${String(minutes).padStart("2", "0")}:${String(
    second
  ).padStart("2", "0")}`;
}

function startTimer() {
  clearInterval(timeInterval);

  if (isWorkSession) {
    timeInterval = setInterval(function () {
      if (totalSecond > 0) {
        totalSecond--;
        UpdateTimer();
      } else {
        isWorkSession = false;
        clearInterval(timeInterval);
        timer.innerHTML = `05:00`;
        work.textContent = "Rest Time";
        work.style.backgroundColor = "blue";
        totalSecond = 5 * 60;
      }
    }, 10);
  } else {
    timeInterval = setInterval(function () {
      if (totalSecond > 0) {
        totalSecond--;
        UpdateTimer();
      } else {
        isWorkSession = true;
        clearInterval(timeInterval);
        timer.innerHTML = `25:00`;
        work.textContent = "Work Session";
        work.style.backgroundColor = "green";
        totalSecond = 25 * 60;
      }
    }, 10);
  }
}

function stoptimer() {
  clearInterval(timeInterval);
}

start.addEventListener("click", startTimer);

pause.addEventListener("click", stoptimer);

restart.addEventListener("click", () => {
  isWorkSession = true;
  totalSecond = 25 * 60;
  timer.innerHTML = `25:00`;
  work.textContent = "Work Session";
  work.style.backgroundColor = "green";
  clearInterval(timeInterval);
});
