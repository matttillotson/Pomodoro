let timeLeft = 1500; // 25 minutes in seconds
let timerId = null;

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.querySelector('.timer').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    console.log('START function called');  // Debug log
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
    console.log('PAUSE function called');  // Debug log
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
}

function resetTimer() {
    console.log('RESET function called');  // Debug log
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

    console.log('Found buttons:', {  // Debug log
        hike: hikeButton,
        timeOut: timeOutButton,
        nextGame: nextGameButton
    });

    // Add event listeners with debug logs
    hikeButton.addEventListener('click', () => {
        console.log('HIKE button clicked');
        startTimer();
    });

    timeOutButton.addEventListener('click', () => {
        console.log('TIME OUT button clicked');
        pauseTimer();
    });

    nextGameButton.addEventListener('click', () => {
        console.log('NEXT GAME button clicked');
        resetTimer();
    });
}); 