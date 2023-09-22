let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0, 
    ties: 0
};


updateScoreElement();

let isAutoPlaying = false;
let intervalId;

//Code for the autoplay button

function autoPlay() {
        if (!isAutoPlaying) {
            intervalId = setInterval(() => {
                const playerMove = pickComputerMove();
                playGame(playerMove); 
            }, 1000);
            isAutoPlaying = true;
        }  else {
            clearInterval(intervalId); 
            isAutoPlaying = false; 
        }

    }

    //Playing the game using JS events

   
    document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('Rock');
    })

    document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('Paper');
    })

    document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('Scissors');
    })

    //To play the game with 'R', 'p', 's' buttons


 function playGame (playerMove) {
    let computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
    result = 'You lost';
    } else if (computerMove === 'Paper') {
    result = 'You won!'
    } else if (computerMove = 'Scissors') {
    result = 'Tied';
    }

    } else if (playerMove ==='Paper') {
    if (computerMove === 'Rock') {
    result = 'You won!';
    } else if (computerMove === 'Paper') {
    result = 'Tied'
    } else if (computerMove = 'Scissors') {
    result = 'You lost';
    }

    } else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
    result = 'Tied';
    } else if (computerMove === 'Paper') {
    result = 'You lost'
    } else if (computerMove = 'Scissors') {
    result = 'You won!';
    }
    }

    if (result === 'You won!') {
    score.wins += 1;
    } else if (result === 'You lost') {
    score.loses +=1;
    } else if (result === 'Tied') {
    score.ties +=1;
    }

    localStorage.setItem('score', JSON.stringify(score));


    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').
    innerHTML = ` You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`

}

function updateScoreElement() {
    document.querySelector('.js-score').
        innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
    }


function pickComputerMove() {

let computerMove = '';

const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'Rock'
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'Paper'
    } else if(randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'Scissors'
    }

    return computerMove;
}