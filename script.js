'use strict';

//ICONS
const rockIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
<path
  d="M408.864 79.052c-22.401-33.898-66.108-42.273-98.813-23.588-29.474-31.469-79.145-31.093-108.334-.022-47.16-27.02-108.71 5.055-110.671 60.806C44.846 105.407 0 140.001 0 187.429v56.953c0 32.741 14.28 63.954 39.18 85.634l97.71 85.081c4.252 3.702 3.11 5.573 3.11 32.903 0 17.673 14.327 32 32 32h252c17.673 0 32-14.327 32-32 0-23.513-1.015-30.745 3.982-42.37l42.835-99.656c6.094-14.177 9.183-29.172 9.183-44.568V146.963c0-52.839-54.314-88.662-103.136-67.911zM464 261.406a64.505 64.505 0 0 1-5.282 25.613l-42.835 99.655c-5.23 12.171-7.883 25.04-7.883 38.25V432H188v-10.286c0-16.37-7.14-31.977-19.59-42.817l-97.71-85.08C56.274 281.255 48 263.236 48 244.381v-56.953c0-33.208 52-33.537 52 .677v41.228a16 16 0 0 0 5.493 12.067l7 6.095A16 16 0 0 0 139 235.429V118.857c0-33.097 52-33.725 52 .677v26.751c0 8.836 7.164 16 16 16h7c8.836 0 16-7.164 16-16v-41.143c0-33.134 52-33.675 52 .677v40.466c0 8.836 7.163 16 16 16h7c8.837 0 16-7.164 16-16v-27.429c0-33.03 52-33.78 52 .677v26.751c0 8.836 7.163 16 16 16h7c8.837 0 16-7.164 16-16 0-33.146 52-33.613 52 .677v114.445z"
/>
</svg>`;
const paperIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
<path
  d="M408 80c-3.994 0-7.91 .3262-11.73 .9551c-9.586-28.51-36.57-49.11-68.27-49.11c-6.457 0-12.72 .8555-18.68 2.457C296.6 13.73 273.9 0 248 0C222.1 0 199.3 13.79 186.6 34.44C180.7 32.85 174.5 32 168.1 32C128.4 32 96.01 64.3 96.01 104v121.6C90.77 224.6 85.41 224 80.01 224c-.0026 0 .0026 0 0 0C36.43 224 0 259.2 0 304.1c0 20.29 7.558 39.52 21.46 54.45l81.25 87.24C141.9 487.9 197.4 512 254.9 512h33.08C393.9 512 480 425.9 480 320V152C480 112.3 447.7 80 408 80zM432 320c0 79.41-64.59 144-143.1 144H254.9c-44.41 0-86.83-18.46-117.1-50.96l-79.76-85.63c-6.202-6.659-9.406-15.4-9.406-23.1c0-22.16 18.53-31.4 31.35-31.4c8.56 0 17.1 3.416 23.42 10.18l26.72 28.69C131.8 312.7 133.9 313.4 135.9 313.4c4.106 0 8.064-3.172 8.064-8.016V104c0-13.25 10.75-24 23.1-24c13.25 0 23.1 10.75 23.1 24v152C192 264.8 199.2 272 208 272s15.1-7.163 15.1-15.1L224 72c0-13.25 10.75-24 23.1-24c13.25 0 23.1 10.75 23.1 24v184C272 264.8 279.2 272 288 272s15.99-7.164 15.99-15.1l.0077-152.2c0-13.25 10.75-24 23.1-24c13.25 0 23.1 10.75 23.1 24v152.2C352 264.8 359.2 272 368 272s15.1-7.163 15.1-15.1V152c0-13.25 10.75-24 23.1-24c13.25 0 23.1 10.75 23.1 24V320z"
/>
</svg>`;
const scissorsIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
<path
  d="M270.1 480h97.92C447.4 480 512 417.1 512 339.7V231.8c0-23.45-6.106-46.73-17.66-67.33l-31.35-55.85C447.5 81.1 417.1 64 385.9 64h-46.97c-26.63 0-51.56 11.63-68.4 31.93l-15.46 18.71L127.3 68.44C119 65.46 110.5 64.05 102.1 64.05c-30.02 0-58.37 18.06-69.41 47.09C15.06 156.8 46.19 194 76.75 204.9l2.146 .7637L68.79 206.4C30.21 209 0 241.2 0 279.3c0 39.7 33.27 72.09 73.92 72.09c1.745 0 3.501-.0605 5.268-.1833l88.79-6.135v8.141c0 22.11 10.55 43.11 28.05 56.74C197.4 448.8 230.2 480 270.1 480zM269.1 432c-14.34 0-26-11.03-26-24.62c0 0 .0403-14.31 .0403-14.71c0-6.894-4.102-14.2-10.67-16.39c-10.39-3.5-17.38-12.78-17.38-23.06v-13.53c0-16.98 13.7-16.4 13.7-29.89c0-9.083-7.392-15.96-15.96-15.96c-.3646 0-.7311 .0125-1.099 .0377c0 0-138.1 9.505-138.7 9.505c-14.32 0-25.93-11.04-25.93-24.49c0-13.28 10.7-23.74 24.1-24.64l163.2-11.28c2.674-.1882 14.92-2.907 14.92-16.18c0-6.675-4.284-12.58-10.65-14.85L92.84 159.7C85.39 156.1 75.97 149.4 75.97 136.7c0-11.14 9.249-24.66 25.97-24.66c3.043 0 6.141 .5115 9.166 1.59l234.1 85.03c1.801 .6581 3.644 .9701 5.456 .9701c8.96 0 16-7.376 16-15.1c0-6.514-4.068-12.69-10.59-15.04l-64.81-23.47l15.34-18.56C315.2 117.3 326.6 112 338.9 112h46.97c14.77 0 28.28 7.719 35.27 20.16L452.5 188c7.531 13.41 11.52 28.56 11.52 43.81v107.9c0 50.91-43.06 92.31-96 92.31H269.1z"
/>
</svg>`;
const arrIcons = [rockIcon, paperIcon, scissorsIcon];

//ELEMENTS
const roundElement = document.querySelector('.round');
const btns = document.querySelector('.rps');
const playerChoiceEl = document.querySelector('.choice--player');
const compChoiceEl = document.querySelector('.choice--comp');
const playerScoreEl = document.querySelector('.player-score');
const compScoreEl = document.querySelector('.comp-score');
const choices = document.querySelector('.choice');

//STATE
const rpsArray = ['rock', 'paper', 'scissors'];
let round = 1;
let playerChoice;
let compChoice;
let playerScore = 0;
let compScore = 0;

if (playerScore < 5 || compScore < 5) {
  btns.addEventListener('click', function (event) {
    const target = event.target.closest('button');
    if (!target) return;
    const result = document.querySelector('.result');
    if (result) result.innerHTML = '';
    clearChoiceColor();

    if (target.classList.contains('rock')) {
      playerChoiceEl.innerHTML = rockIcon;
      playerChoice = 'rock';
    }
    if (target.classList.contains('paper')) {
      playerChoiceEl.innerHTML = paperIcon;
      playerChoice = 'paper';
    }
    if (target.classList.contains('scissors')) {
      playerChoiceEl.innerHTML = scissorsIcon;
      playerChoice = 'scissors';
    }

    const chosen = computerChoice();
    compChoice = rpsArray[chosen];
    compChoiceEl.innerHTML = arrIcons[chosen];
    round++;

    roundElement.textContent = `Round: ${round}!`;

    if (playerChoice === compChoice)
      choices.insertAdjacentHTML('afterend', '<p class="result draw">draw</p>');
    if (playerChoice === 'rock' && compChoice === 'scissors') {
      playerScore++;
      playerScoreEl.textContent = `Your Score: ${playerScore}`;
      playerChoiceEl.classList.add('round-winner');
    }
    if (compChoice === 'paper' && playerChoice === 'rock') {
      compScore++;
      compScoreEl.textContent = `Computer Score: ${compScore}`;
      compChoiceEl.classList.add('round-winner');
    }
    if (playerChoice === 'paper' && compChoice === 'rock') {
      playerScore++;
      playerChoiceEl.classList.add('round-winner');
      playerScoreEl.textContent = `Your Score: ${playerScore}`;
    }
    if (compChoice === 'rock' && playerChoice === 'scissors') {
      compScore++;
      compChoiceEl.classList.add('round-winner');
      compScoreEl.textContent = `Computer Score: ${compScore}`;
    }
    if (playerChoice === 'scissors' && compChoice === 'paper') {
      playerScore++;
      playerChoiceEl.classList.add('round-winner');
      playerScoreEl.textContent = `Your Score: ${playerScore}`;
    }
    if (compChoice === 'scissors' && playerChoice === 'paper') {
      compScore++;
      compChoiceEl.classList.add('round-winner');
      compScoreEl.textContent = `Computer Score: ${compScore}`;
    }

    if (playerScore >= 5 || compScore >= 5) {
      choices.insertAdjacentHTML(
        'afterend',
        playerScore > compScore
          ? '<p class="result win">WIN!!!1</p>'
          : '<p class="result lose">Try again :(</p>'
      );
      round = 0;
      playerScore = 0;
      compScore = 0;
      compScoreEl.textContent = `Computer Score: ${compScore}`;
      playerScoreEl.textContent = `Your Score: ${playerScore}`;
    }
    // if(compChoice===playerChoice)
  });
}

console.log(btns);

//GAME

const computerChoice = () => Math.trunc(Math.random() * 3);

const clearChoiceColor = () => {
  playerChoiceEl.classList.remove('round-winner');
  playerChoiceEl.classList.remove('round-loser');
  compChoiceEl.classList.remove('round-winner');
  compChoiceEl.classList.remove('round-loser');
};
