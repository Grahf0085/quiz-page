// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { countsAsAYes } from './utils.js';

const button=document.getElementById('quizButton');
const result=document.getElementById('displayScore');

button.addEventListener('click', () => {
    alert('Welcome to the Quiz');

    const confirmQuiz = confirm('Do you REALLY want to take the quiz?')

    if (!confirmQuiz) {
        alert('A computer is like an air conditioner.  It works fine until you open windows.');
        return;
    }

    const name = prompt('What\'s your name?');

    const firstAnswer = prompt('Arch aims to be user friendly.');
    const secondAnswer = prompt('Arch is an operating system that\'s updated every minute.');
    const thirdAnswer = prompt('LOTS of people make software for Arch that\'s available in the Arch User respository.');

    let score = 0;

    if (countsAsAYes(firstAnswer)) {
        score--;
    }

    if (countsAsAYes(secondAnswer)) {
        score++;
    }

    if (countsAsAYes(thirdAnswer)) {
        score++;
    }

    result.textContent = `${name}....you scored ${score}`;


})