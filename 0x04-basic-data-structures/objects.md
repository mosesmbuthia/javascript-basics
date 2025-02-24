## Objects
In JavaScript, an object is s collection of key value pairs.
It is a data structure that stores  values as a collection of key value pairs. 

The key must always be a string, and the value can be of any type. Keys are also reffered to as `properties`.
Objects are one of the most fundmental data structures in JavaScript.

A function inside an object is called a `method`

### Creating Objects
JavaScript provides the following ways to create objects:
- Object literal
- Using `new Object()`
- Using a constructor fuction
**Using Object Literal**
The simplest way to create an object is to use curly braces, this is reffered to as **ibject literal**
```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};
```
**Using `new Object()`**
The `new Object()` Keyword creates an empty object. It's functionally equivalent to object literal but rarely used in modern JavaScript.
```js
const student = new Object();
student.firstName = "John";
student.lastName = "Doe";
student.age = 25;
student.isStillStudying = true;
student.greet = function () {
  console.log("Hello, World!");
};
```

**Using a Contractor Function**
A constructor function in JavaScript is a regular function used witt the `new` keyword to create multiple objects with shared properties and methods..
```js
function Student(firstName, lastName, age, isStillStudying) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isStillStudying = isStillStudying;
  this.greet = function () {
    console.log("Hello, World!");
  };
}

const student = new Student("John", "Doe", 25, true);
```
For most of the time, always opt for the object literal as a mean of creating objects.

### Accessing Object Properties
There are two ways of accessing object properties:
- Dot notation
- Bracket notation
**Dot notation**
This allows access to an object's properties using a dot `(.)` followed by the property name.
```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

console.log(student.firstName); // John
console.log(student.lastName); // Doe
```
**Bracket notation**
This accesses an object's properties using square barckets`([])` with the property name as a string.

It's useful for dynamic keys or properties with special characters.
```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

console.log(student["firstName"]); // John
console.log(student["lastName"]); // Doe
console.log(student["age"]); // 25
console.log(student["isStillStudying"]); // true
```
### Modifying objects
**Adding new properties**
Here, you can use the dot or bracket notation to add new properties to an object.
```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

student.major = "Computer Science";
student["graduationYear"] = 2026;
```
**Updating a Property**
You can also use dot or bracket notation to update an object's properties.
```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

student.age = 37;
student["isStillStudying"] = false;
```
**Deleting a property**
You can use the `delete` keyword to delete a property.
```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

delete student.age;
delete student.isStillStudying;

```
### Checking properties in an object
To check if a certain property is availble in an object, you use:
- The `in` keyword
- The `hasOwnProperty()` method

**The `in` keyword**
```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

console.log("firstName" in student); // true
console.log("middleName" in student); // false
```
**The `hasOwnProperty()` method
```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

console.log(student.hasOwnProperty("firstName")); // true
console.log(student.hasOwnProperty("middleName")); // false
```
### Object Method
`Object.keys(objectName)`
It returns an array containing all the keys of an object.
```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

console.log(Object.keys(student));
// [ 'firstName', 'lastName', 'age', 'isStillStudying', 'greet' ]
```
`Object.values(objectName)`
This returns an array containing all the values of an object.
```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

console.log(Object.values(student));
// [ 'John', 'Doe', 25, true, [Function: greet] ]
```
`Object.entries(objectName)`
`Object.entries()` returns an array of key value pairs from an object, making it useful for iteration.
```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

console.log(Object.entries(student));
// [
//     [ 'firstName', 'John' ],
//     [ 'lastName', 'Doe' ],
//     [ 'age', 25 ],
//     [ 'isStillStudying', true ],
//     [ 'greet', [Function: greet] ]
// ]
```
`Object.freeze(objectName)`
This freezes an object, preventing new properties from being added to it and existing ones from being removed, it also prevents an object from modification.
```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

Object.freeze(student);
student.middleName = "Smith"; // won't work
```
#### Iterating over an bject using the `for..in` loop
You can use the `for..in` loop to iterate over an object as shown in the code below:
```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

for (let key in student) {
  console.log(key)
}
```
