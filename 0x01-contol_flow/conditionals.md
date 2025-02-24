## Control Flow
This refers to the order in which statements and instructions are executed in a program.

By default, Javascript code runs line by line from top to bottom,but control flow structures allows is to alter this execution. 

Control flow in Javascript is achieved with:

- Conditionals
- Loops
### Conditionals
Conditionals allows you to execute different blocks of code based on specific conditions:

Conditional statements in Javascript are;
- if statement
- if else statement
- if else ladder
- switch statement
#### if statement
The `if` statement allows you to executea block of code if a specified condition is true.

The syntax goes as follows:
```js
if (condition); (block of code to be executed)

let age = 27
if (age > 18) {
    console.log("You are an adult")
}
```
#### if else statement
This executes the code in the `if` block when the condition is true, if the condition is false, the code inside the else block gets executed.

The synatx is as follows:
```js
if (condition) {
//block of code to be executed if the condition is true
} else {
//block of code to be executed if the condition is false
}
```
Code example;
```js
let age = 27;
if age (> 18) {
    console.log("You are an adult")
} else {
    console.log("You are a child")
}
```
#### if else ladder
This is used when multiple conditions need to be checked sequentially.

The syntax is as follows:
```js
if (condition) {
//block of code to be executed if condition1 is true
} else if {
//block of code to be executed if condition1 is false and condition2 is true
} else {
    //block of code to be executed if condition1 and condition2 is false
}
```
### Switch Statement
This is used when a variable has multiple possible values. it's cleaner than having multiple `if..else` if conditions.

Its synatx is as follows:
```js
switch (expression) {
    case value1:
        //block of code to be executed if expression === value1
        break;
        case value2
        //block of code to be executed if expression === value2
        break;
        default:
            //block of code to be executed if expression doesn't match any case.
}
```
Example in the code:
```js
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week.");
        break;
        case "Friday";
        console.log("Weekend is near");
        break;
        case "Sunday":
            console.log("It's a rest day");
            break;
            default:
                console.log("It's a regular day")
}
```
### Ternary Operator
The tenary operator provides a concise way to write if-else stateements in a single line.

The synatx goes as follows:
```js
condition ? expression if condition is true : expression if condition is false
```
Example in the code:
```js
let age = 27;
age > 18 ? console.log("You are an adult") : console.log("You are a child");

```