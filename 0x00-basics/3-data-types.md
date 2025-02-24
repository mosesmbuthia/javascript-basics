## Data Types
There are seven data types in Javascript which are also the Primitive data types(to be discussed later)
The data types are:
1. String
2. Number
3. Boolean
4. null
5. undefined
6. Bigint and Symbol

### String
This refers to a sequence of characters enclosed with single quote('), double quotes(")
or backticks(`)
###### Example

```js
let firstName = "Moses"; //double quotes
let lastName = 'Mbuthia;' //single quotes
let userName = `Moses-Mbuthia` //backticks
```
### Number
Javascript has ony one type of numbers: it can store both integers and decimals
###### Example

```js
let age = 27; //integer
let price = 199.99; //decimal
let notANumber = NaN; //Not a Number(invalid math operation)
```
### Boolean
This represents true or false values, ofte used for decision-making.
A boolean can be either `true` or `false`
###### Example

```js
let isMale = true;
let isFemale = false;
```
### `undefined`
This refers to a variable that has been declared but not initialized

```js
let country;
console.log(country); // output is undefined
```
### `null`
`null` is an intentianal absence of a value. Unlike `undefined`, which means 'not assigned', null means "empty on purpose"

### BigInt
This is used for numbers beyond Javascript's `Number.MAX_SAFE_INTEGER`(9,007,,199,254,740,991)

```js
let bigNumber = 123456789012345678901234567890;
console.log(bigNumber)
```
### Checking the type of a variable using the `typeof` operator
You can always check the type of the variable using the `typeof` operator in Javascript.

```js
let bigNumber = 123456789012345678901234567890;
console.log(typeof bigNumber) //this is returns bigint

const age =27;
const  fullName = "Moses Mbuthia"
console.log(typeof age) //number
console.log(typeof fullName) //string
```
End