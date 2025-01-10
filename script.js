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

// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', () => {
    const hikeButton = document.querySelector('button:nth-child(1)');
    const nextGameButton = document.querySelector('button:nth-child(2)');
    const timeOutButton = document.querySelector('button:nth-child(3)');

    hikeButton.addEventListener('click', startTimer);
    nextGameButton.addEventListener('click', resetTimer);
    timeOutButton.addEventListener('click', pauseTimer);
}); 