let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const laps = document.getElementById("laps");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.textContent = `${h}:${m}:${s}`;
}

function startTimer() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  laps.innerHTML = "";
}

function recordLap() {
  if (running) {
    let li = document.createElement("li");
    li.textContent = display.textContent;
    laps.appendChild(li);
  }
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", recordLap);

updateDisplay();
