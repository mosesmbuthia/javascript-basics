## Variables
A `variable` in Javascript is like a lebaled container that holds a piece of information.

You can think of it like a box with a name where you can store it and retrieve it later when you need it.

A `value` is the actual piece o data that is stored inside a variable. It could be a number, text, a list, or a function.

A `constant` is a value that does not change. 

### Declaring Varibles in Javascript
There are three ways to declare variables in Javascript.

1. `var` : this is an old way, it is not recomended for modern code.

2. `let` :this is the recomended for the values that change.
3. `const` :this is preferred for the values that do not change.
###### Example

```js
let score = 79; //this is variable named "score" with the value 79
const name = 'Moses'; //this is a constant variable holding a "text" value 'Moses'
```
### Updating Variables
You can update variables value using the `let` and `var` 

```js
let score = 79; //this is variable named "score" with the value 79

score = 34; // now the value of score has changed to 34 from 79
```
The `const` cannot be changed once it is assigned a value. 

```js
const firstName = 'Moses'; //this is a constant variable holding a "text" value 'Moses'

firstName = 'Francis' //this will cause an error since the firstName is already assigned a different name
```
### Declaring vs Initializing Variables

#### Declaring Variables
Declaring a variable means that you are creating a variable without assigning a value to it.This tells Javasript that the variable exists but it does not have a value yet.

When you try reading a value of a variable that has not been initialized, you will get `undefined` as the output. 
###### Example

```js
let age; //this is declared but not initialized
console.log(age) //this will give undefined as the output
```
This means you can define the variable later

```js
let age; //this is declared but not initialized
age =25; //this has now been defined
console.log(age) //this will now give "25" as the output
```
#### Declaring a Variable
This is assigning a variable a value at the time of declaration.
###### Example
```js
let age = 27; //this is declared and initialized
console.log(age) //this will now give "25" as the output
```
Note: the `const` must be initialized imediately at the time of declaration.

#### Rules for naming Variables
It is vital to know that Variable nams can only start with a letter, underscore, or a dollar sign ($)
###### Example
```js
let firstName = "Moses";
let _score =90;
let $price = 20.37;
```
Variable names cannot be Javascript reserved keywords

Variable names can only contain letters, numbers, underscore, and the dollar sign. There shoul be no special characters or spaces,
###### Invalid Example
```js
let user-age = 27; // no hyphens should be used
let total ammount = 1300; //no spaces should be used
```

Variables are case-sensitive
Javascript usually differentiates between upercase and lowercase letters. 
###### Example
```js
let Age =28;
let age =26;
console.log(Age) //output will be 28
console.log (age) //output will be 26
```
Even though the names looks similar, they are treated as separate variables by Javascript.

It is good practice to use meaningfull and descriptive names.
###### Example (Good Practice)
```js
let userName = 'Moses'
Let lastName = 'Mbuthia'
let totalHours = '8'
```
###### Example (Bad Practice)
```js
let x ='Moses'
let th ='8'
```

If a variable name is made up of multiple words, use the camel case convention of naming the variables.
###### Example
```js
let userName = 'Moses'
Let lastName = 'Mbuthia'
```

