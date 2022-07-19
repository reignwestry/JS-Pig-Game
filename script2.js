"use strict"
//# Game Logic
/*      
    1) Roll Dice => show dice and roll
    2) ADD to player current score
    3) Check score
        A) if dice is a 1 
            1)lose all the current score 
            2) switch to other player
        B) Either roll again or click hold to save current score and switch players
        
    4) Switch to player 2
    5) if player reaches 100
        A) Alert current player wins!
        Else switch to other player

    6) If new game is clicked all scores return to 0 and player 1 background lightens to show the current player
*/

//# Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');   //dumb elments
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//# Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); //adds the hidden class to dice element

// score array
const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

///Rolling dice functionality
btnRoll.addEventListener('click', function () {
    //1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; 

    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
        // A) Add dice to current score
        currentScore += dice;
        // dynamic selection


        // B)
    } else {



        // Switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        
        // if activePlayer is 1 switch to 0, visa versa
        player0El.classList.toggle(`player--active`);
        player1El.classList.toggle(`player--active`);
        

        currentScore = 0;

    }
})

// listens to btnHold button click
btnHold.addEventListener('click', function () {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1]
    console.log(`Player ${activePlayer}'s current score: ${scores[activePlayer]}`);//

    document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer];
    
    //2. Check if player's score is >= 100
    
    // Finish the Game

    // Switch to the next player

})


