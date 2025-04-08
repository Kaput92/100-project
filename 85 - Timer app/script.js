const INTERVAL_MS = 1000 / 60;

let timerID = null;
let lastTimerStartTime = 0;
let millisElapsedBeforeLastStart = 0;

const timer = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  if (timerID !== null) return;

  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;

  lastTimerStartTime = Date.now();
  timerID = setInterval(updateTimer, INTERVAL_MS);
}

function stopTimer() {
  if (timerID === null) return;

  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;

  millisElapsedBeforeLastStart += Date.now() - lastTimerStartTime;
  clearInterval(timerID);
  timerID = null;
}

function resetTimer() {
  resetButton.disabled = true;
  startButton.disabled = false;
  stopButton.disabled = true;

  millisElapsedBeforeLastStart = 0;

  if (timerID !== null) {
    clearInterval(timerID);
    timerID = null;
  }

  timer.textContent = "00:00:00";
}

function updateTimer() {
  const millisElapsed =
    millisElapsedBeforeLastStart + Date.now() - lastTimerStartTime;
  const secondsElapsed = Math.floor(millisElapsed / 1000);

  const millisText = formatNumber(millisElapsed % 1000, 3);
  const secondsText = formatNumber(Math.floor(secondsElapsed) % 60, 2);
  const minutesText = formatNumber(Math.floor(secondsElapsed / 60), 2);

  timer.textContent = `${minutesText}:${secondsText}:${millisText}`;
}

function formatNumber(number, desiredLength) {
  const stringNumber = String(number);

  if (stringNumber.length < desiredLength) {
    return stringNumber.slice(0, desiredLength);
  }

  return stringNumber.padStart(desiredLength, "0");
}
