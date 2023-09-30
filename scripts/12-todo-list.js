const todoList = [
    {
        name: 'wash dishes', 
        dueDate: '06-22-2023'
    },
    {
        name: 'cook dinner',
        dueDate: '07-22-2023'
    }
];

renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        //const todoObject = todoList[i]; - No longer needed because the todoObject has already been declared as the parameter above
    
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div> 
        <div>${dueDate} </div>
        <button 
        class = "delete-todo-button js-delete-todo-button" 
        >Delete</button>
        </div>`;
        //At this point, this is just a string, so if we want to add an event listener, we need to do it after

        todoListHTML += html; 

    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index)=> {
            deleteButton.addEventListener('click', ()=> {
                todoList.splice(index, 1);
                renderTodoList();
            })
        });
}

document.querySelector('.js-add-todo')
.addEventListener('click', () => {
    addTodo();
});

function addTodo () {
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');

    const dueDate = dateInputElement.value; 

    const name = inputElement.value;

    todoList.push(
        {
            name, 
            dueDate
        }
    );

    inputElement.value = '';

    renderTodoList();
}
