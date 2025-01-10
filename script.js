let timeLeft = 1500; // 25 minutes in seconds
let timerId = null;

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.querySelector('.timer').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerId === null) {
        timerId = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft === 0) {
                clearInterval(timerId);
                timerId = null;
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
}

function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    timeLeft = 1500;
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
    // Get buttons by their specific classes
    const hikeButton = document.querySelector('.hike-btn');
    const timeOutButton = document.querySelector('.timeout-btn');
    const nextGameButton = document.querySelector('.nextgame-btn');

    // Add correct event listeners
    hikeButton.addEventListener('click', startTimer);
    timeOutButton.addEventListener('click', pauseTimer);  // Middle button pauses
    nextGameButton.addEventListener('click', resetTimer); // Right button resets
}); 