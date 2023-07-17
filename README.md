# Some Useful Reminders

> When you add a string with a number, JS automatically converts the number into a string. This is called type coercion. 
- For calculations involving money, always do it in cents and then convert it to dollars by dividing by 100

- Escape character(\') -  used when you have a single quote before the end of the string for example: 
'i\'m learning JS' 

- Comparison operators have a lower precedence than math operators. 

# Rock Paper Sciscors algorithm 

- Computer selects a random value on click
- Compares the values
- Display the outupt 

You can't declare a const and not define it. For example, const variable1; (error!)

An advantage that the ternary operator has over an if statement is that you can store it in a variable/constant

# Guard Operator
You can use && to block the code on the right when the code on the left is falsy

false && console.log('hello'); -> the code on the right will not even be checked. 

|| is the default operator - it checks if at least one side is truthy

Return statement returns a value out a function. You can use it to return the computerMove value in a rock paper scissors game

It is a best practice to keep things in scope and for this reason a return statement is better instead of using a global variable. 

You can set a default value for a parameter this way: 

function calculate cost(cost, taxPercent = 0.1) {
    some code
}

call the function// here you can pass the cost as an argument without bothering with the taxPercent

Importance of objects:
- Make code more organized, reduce the number of variables you need to create
- Use multipe values together. 

When accessing objects, bracket notation helps us to access properties that don't use the dot notation. 

You can save any type of value in objects, and even other objects within an object (nested object). - helps to make the code organized. Use dot notation multiple times to access the values. 

You can also put a function inside an object - and when we do this, this is called a method

# JSON
JavaScript object notation is similar to a JS object syntax but all the properties have double quotes and it doesn't support functions. JSON syntax is almost universal and can be understood by a variety of programming languages (Java, PHP, C#, C++, etc)

So we use JSON when sending data between 2 computers that might use different programming languages

# locaStorage
To store values more permanently. All variables are deleted when you refresh the page {try with Rock Paper Scissors project}. Local storage doesn't get deleted when we refresh the page. But since localStorage only works with strings, you have to stringify the variable for it to be stored in localStorage. 

> Difference between null and undefined

We use null when we want something to be intentionally empty

Just as objects have properties and methods, other values too have properties and methods

Autoboxing doesn't work with null and undefined

<h3>Copy By Reference</h3>
Let's say you create an object like this:

            const object1 = {
                message: 'hello'
            };
The message hello is stored somewhere in the computer's memory. So object1 is simply an object of reference (pointer), that points where in memory the message hello is stored. Suppose you create another object like this:

            const object2 = object1;
No new copies of the message are made, it copies the reference of object1 which points where the message is stored in the computer's memory. 

So objects aren't really containers (like variables/constants) which store a value they are assigned to. That is why, you can change its value even if its created using const. 

Destructuring is a concept of getting a property outside an object and then storing it in a variable
Syntax 

                const object4 = {
                    message: 'hello world'
                };

                const {message1} = object4

Destructuring is an easier way to take properties out of objects 

# The DOM
document.querySelector() - works with strings between the brackets - used to select and retrieve the first element that matches the specified CSS selector

- Each HTML element has an innerHTML property that lets us control the element from JS. 
- When you include extra spaces, it will show up in innerHTML. To solve this, use innerText, which will get the text inside the button without the extra spaces

- for input element, you can't use innerHTML because they don't have HTML inside. At the same time, you can't use innerText (used for buttons) because they don't have inner text. 

            Here only use value (for instance 
            const inputElement = document.querySelector();
            inputElement.value
            
            )

- ParseInt will only convert to whole numbers while Number() will convert a value into an interger or floating point number. There's also a String() function that will convert values into strings

- onkeydown can be used instead of onclick. 
- clicks and keydowns are known as events: onclick and onkeydow are event listeners. Every event listner gets an event object