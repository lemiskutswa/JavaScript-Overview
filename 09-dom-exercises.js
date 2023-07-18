//function that takes the clicks as a parameter

function headsHandler() {
    document.querySelector('.message').innerHTML = 'You picked heads';
}

function tailsHandler() {
    document.querySelector('.message').innerHTML = 'You picked tails';
}

function eventHandler(event) {
    if (event === 'heads') {
        document.querySelector('.message').innerHTML = 'You picked heads';
    } else if (event === 'tails') {
        document.querySelector('.message').innerHTML = 'You picked tails';
    }
}

