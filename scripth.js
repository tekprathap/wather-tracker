// Set goal in ml
const goal = 2000;

// Get DOM elements
const progress = document.getElementById('progress');
const percentage = document.getElementById('percentage');
const consumedText = document.getElementById('consumed');
const waterInput = document.getElementById('waterInput');
const addWaterBtn = document.getElementById('addWater');
const resetBtn = document.getElementById('reset');
const goalText = document.getElementById('goal');

goalText.textContent = goal;

let consumed = 0;

// Update the progress bar
function updateProgress() {
    const percent = Math.min((consumed / goal) * 100, 100);
    progress.style.width = percent + '%';
    percentage.textContent = Math.round(percent) + '%';
    consumedText.textContent = consumed;
}

// Add water
addWaterBtn.addEventListener('click', () => {
    const value = parseInt(waterInput.value);
    if (!isNaN(value) && value > 0) {
        consumed += value;
        updateProgress();
        waterInput.value = '';
    } else {
        alert('Please enter a valid number!');
    }
});

// Reset
resetBtn.addEventListener('click', () => {
    consumed = 0;
    updateProgress();
});





