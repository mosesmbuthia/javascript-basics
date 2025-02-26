## String Concatenation
String concatenation is the process of joining two or more string variables together. Javascript provides ways to concatenate strings.
1. Using the `+` Operator
Here you can use the `+` operator to join strings together.
```js
let firstName = "Moses";
let lastName = "Mbuthia";
let fullName = firstName+lastName;
console.log("My name is" +  fullName)
```
2. Using the `+=` operator to append to an existing string.
The `+=` operator allows adding a string to an existing string.
```js
let message = "Hello";
message += "Moses";
console.log(message);
```
### Using Template Literals
Template literals (introduced in ES6) use backticks(`) and (${}) placeholders for variables.
```js
let firstName = "Moses";
let lastName = "Mbuthia";
console.log(`My name is ${firstName} ${lastName}`);
```
