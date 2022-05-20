/* This is an event listener, which listens for the browser's DOMContentLoaded event, which signifies that the HTML body is completely loaded and parsed. The JavaScript inside this block will not run until after that event is fired, therfore the error is avoided  */
document.addEventListener('DOMContentLoaded', () => {

    /* Function: creates a new paragraph and appends it to the bottom of the HTML body */
    function createParagraph() {
        const para = document.createElement('p');
        const inputText = prompt('Écris le texte que tu veux imprimer à l\'écran.');
        para.textContent = `${inputText}`;
        document.body.appendChild(para);
    }

    /* 
        1. Get references to all the buttons on the page in an array format.
        2. Loop through all the buttons and add a  click event listener to each one.
        
        When any button is pressed, the createParagraph() function will be run.
    */
    const buttons = document.querySelectorAll('button');
    for (const button of buttons) {
        button.addEventListener('click', createParagraph);
    }
});

const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
    const name = prompt('Enter a new name');
    para.textContent = `Player 1: ${name}`;
}

