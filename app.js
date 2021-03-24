// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { countsAsAYes } from './src/counts-as-a-yes/utils.js';

const button = document.getElementById('quizButton');
const result = document.getElementById('displayScore');

button.addEventListener('click', () => {
    alert('Welcome to the Quiz');

    const confirmQuiz = confirm('Do you REALLY want to take the quiz?');

    if (!confirmQuiz) {
        alert('A computer is like an air conditioner.  It works fine until you open windows.');
        return;
    }

    const name = prompt('What\'s your name?');

    const firstAnswer = prompt('Arch aims to be user friendly.');
    const secondAnswer = prompt('Arch is an operating system that\'s updated every minute.');
    const thirdAnswer = prompt('LOTS of people make software for Arch that\'s available in the Arch User respository.');

    let score = 1;

    if (countsAsAYes(secondAnswer)) {
        score++;
    }

    if (countsAsAYes(thirdAnswer)) {
        score++;
    }

    if (countsAsAYes(firstAnswer)) {
        score--;
    }

    const finalScore = score / 3 * 100;

    if (score === 3) {
        result.style.backgroundColor = 'hsla(206, 46%, 37%, 1)';
        result.textContent = `${name}....you scored ${+finalScore.toFixed(0)}%.  You're a wizard`;
    } else if (score === 2) {
        result.style.backgroundColor = 'hsla(21, 89%, 52%, 1)';
        result.textContent = `${name}....you scored ${+finalScore.toFixed(0)}%.  So close.`;
    } else {
        result.style.backgroundColor = 'red';
        result.textContent = `${name}....you scored ${+finalScore.toFixed(0)}%.  READ AGAIN.`;
    }

});