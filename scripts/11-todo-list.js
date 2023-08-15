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

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate; 

        const { name, dueDate } = todoObject;
        const html = `
        <p>
        ${name} ${dueDate}
        <button onclick = "
        todoList.splice(${i}, 1);
        renderTodoList();
        ">Delete</button>
        </p>`;

        todoListHTML += html; 
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}



console.log(todoListHTML);

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

    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}
