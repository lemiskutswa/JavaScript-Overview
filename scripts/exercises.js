const buttonElement = document.querySelector('.js-button');

 let result = buttonElement.classList.contains('js-button');

 console.log(result);

const gamingButton = document.querySelector('.gaming-btn');

function toggleButton() {
    const checker = gamingButton.classList.contains('is-toggled');
    if (!checker) {
        gamingButton.classList.add('is-toggled');
    } else {
        gamingButton.classList.remove('is-toggled');
    }
    
}

const threeButtons = document.querySelector('.on-off-btns');
function techButtons() {
    const checkup = threeButtons.classList.contains('is-on');
    if(!checkup) {
        threeButtons.classList.add('is-on');
    } else {
        threeButtons.classList.remove('is-on');
    }
}