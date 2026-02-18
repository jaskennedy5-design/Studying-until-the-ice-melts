document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const stopBtn = document.getElementById("stop-btn");
    const timerDisplay = document.querySelector(".timer");
    const iceBlock = document.querySelector(".ice-block");

   let totalTime = 60 * 60; // 60 minutes × 60 seconds = 3600 seconds
let timeLeft = totalTime;
    let interval = null;

    startBtn.addEventListener("click", () => {
        if (interval) return;

       interval = setInterval(() => {
    timeLeft--;

    let hours = Math.floor(timeLeft / 3600);
    let mins = Math.floor((timeLeft % 3600) / 60);
    let secs = timeLeft % 60;

    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    timerDisplay.textContent = `${hours}:${mins}:${secs}`;

    const percentage = timeLeft / totalTime;
    iceBlock.style.height = percentage * 80 + "%";

    if (timeLeft <= 0) {
        clearInterval(interval);
        interval = null;
        timerDisplay.textContent = "Done! 🥤";
    }
}, 1000);
    });

    stopBtn.addEventListener("click", () => {
        clearInterval(interval);
        interval = null;
    });
});
