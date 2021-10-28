'use strict';

/*
  Objective:
    PIG Game

 */

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;
const init = function(){
  // Starting Conditions
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  currentScore = 0;

  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  currentScore = 0;
  activePlayer = Number(0);

  for(let i = 0; i <= scores.length; i++){
    document.querySelector(`.player--${i}`).classList.remove('player--winner');
    scores[i] = 0;
  }

};
init();

const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');

}

//ROLL DICE BTN === Rolling dice functionality
btnRoll.addEventListener('click', function(){

  if(playing){


  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random()* 6) +1;
  // 2. Display dice
      diceEl.classList.remove('hidden');
      diceEl.src = `dice-${dice}.png`;

  // 3. Check if rolled dice === 1: if true, switch to new player
        if(dice !== 1 ){
          // Add dice to current score
          // currentScore = currentScore + dice;
          //note Shorthand
          currentScore += dice;
          // current0El.textContent = currentScore;
          document.getElementById(`current--${activePlayer}`).textContent = currentScore;
           // Change later
        } else {
          // Switch to next player
          switchPlayer();


        }
  }
})

//Hold Btn
btnHold.addEventListener('click', function(){
  // console.log('Hold button'); //DEBUGGING

  if(playing){
    // 1. Add current score to active player's score
    // scores[1] = scores[1] + currentScore;
    scores[activePlayer] += currentScore;
    // console.log(activePlayer); // Debuggind
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player's score is >= 100
    if(scores[activePlayer] >= 20){

      // Yes, Finish the game
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
      document.querySelector(`.dice`).classList.add('hidden');
      //REMOVE EVENT LISTENERS

    } else {
      // 3. No, Switch to the next player
      switchPlayer();
    }
  }
})
// NEW GAME BTN
btnNew.addEventListener('click', init)

