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