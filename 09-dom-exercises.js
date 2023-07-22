//function that takes the clicks as a parameter


// function eventHandler(event) {
//     if (event === 'heads') {
//         document.querySelector('.message').innerHTML = 'You picked heads';
//     } else if (event === 'tails') {
//         document.querySelector('.message').innerHTML = 'You picked tails';
//     }
// }


    function enterHandler(event) {
        if (event.key === 'Enter') {
            inputName();
        }
    }
    
    const nameElement = document.querySelector('.js-name')
    

    function inputName() {
        const name = nameElement.value;
        document.querySelector('.js-display-text').innerHTML = `Your name is: ${name}`;
    }

    function typingHandler (event) {
        const typeElement = document.querySelector('.typing');
        const output = typeElement.value;
        document.querySelector('.output').innerHTML = output; 
    }

    


