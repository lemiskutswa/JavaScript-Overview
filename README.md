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