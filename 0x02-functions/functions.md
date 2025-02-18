## Functions
A function is a block of code that performs a specific task.

Functions help in writing modular, maintainable and reusable code.

**In Javascript, functions are first-class citizens; this means that they can ce assigned to variables, passed as arguments, retrned from other functions, stored in data structures and even created dynamically.**

The basic sytax for declaring  a function in Javascript is as follows:
```
function functionName() {
  // function body
}
```
```
function printHello() {
  console.log("Hello, moses");
}
```
To use a function, you must **call/invoke** the function as shown:
```
function printHello() {
  console.log("Hello, world");
}

// calling/invoking a function
printHello();
```
### Parameters vs Arguments
A parameter is a variable declared in a function definition and acts as a placeholder for the value that will be passed to the function when the function is being called.

An argument is the actual value passed to a function when it is called, it provides the data that the funcition or the method will operate on.
```
function greet(name) { // name is a parameter
  console.log(`Hello ${name}`);
}

greet("John Doe"); // John Doe is an argument
```
### Function Return Values
A function can return a value using the return keyword.
```
function add(number1, number2) {
  return number1 + number2;
}

let sum = add(35, 23);
console.log(sum);
```
### Categories and Functions
In programming, functions can be categorized as follows:
- Functions that don't take parameter(s) and dont return a value
- Functions that don't take parameter(s) but return a value.
- Functions that take parameter(s) but don't return a value
- Functions that take parameter(s) and return a value.