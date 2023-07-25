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