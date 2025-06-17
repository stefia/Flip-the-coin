const button = document.getElementById('flipButton');
const resultDisplay = document.getElementById('result');
const coinImage = document.getElementById('coinImage');

button.addEventListener('click', function() {
    resultDisplay.textContent = 'Waiting...';
    coinImage.classList.add('spin');
    setTimeout(() => {
        const isHeads = Math.random() < 0.5;
        const result = isHeads ? 'Heads' : 'Tails';

        resultDisplay.textContent = result;

        const imagePath = isHeads ? 'resources/heads.svg' : 'resources/tails.svg';
        coinImage.src = imagePath;
        coinImage.classList.remove('spin');
    }, 1000);
    
});
