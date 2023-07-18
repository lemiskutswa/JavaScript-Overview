//function that takes the clicks as a parameter


// function eventHandler(event) {
//     if (event === 'heads') {
//         document.querySelector('.message').innerHTML = 'You picked heads';
//     } else if (event === 'tails') {
//         document.querySelector('.message').innerHTML = 'You picked tails';
//     }
// }



    const nameElement = document.querySelector('.js-name')
    

    function inputName() {
        const name = nameElement.value;
        document.querySelector('.js-display-text').innerHTML = `Your name is: ${name}`;
    }

    


