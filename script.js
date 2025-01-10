let timeLeft = 1500; // 25 minutes in seconds
let timerId = null;

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.querySelector('.timer').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
    console.log('Display updated:', minutes, ':', seconds); // Debug log
}

function startTimer() {
    console.log('Start timer clicked'); // Debug log
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
    console.log('Pause timer clicked'); // Debug log
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
}

function resetTimer() {
    console.log('Reset timer clicked'); // Debug log
    clearInterval(timerId);
    timerId = null;
    timeLeft = 1500;
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    
    const hikeButton = document.querySelector('.hike-btn');
    const timeOutButton = document.querySelector('.timeout-btn');
    const nextGameButton = document.querySelector('.nextgame-btn');
    
    console.log('Buttons found:', hikeButton, timeOutButton, nextGameButton);

    hikeButton.addEventListener('click', startTimer);
    timeOutButton.addEventListener('click', pauseTimer);
    nextGameButton.addEventListener('click', resetTimer);
}); 