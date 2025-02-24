## Arrays
An array is a collection of elements stored at contigous memory locations. 

An array is a special variable, which can hold more than one value. 

An array can hold many values under a single name, and you can access the values by reffering to an index number.
#### Creating an array
An array can be created in the following ways;
- An array literal
- The `new Array()` constructor.

**Using an array literal**
```js
const arrayName = [item1, item2, item3, ...];
```
**Example**
```js
const students = ["John", "Ken", "June", "Jack"];
```
You can also nest arrays within arrays(multidimensional arrays)
```js
const arr = [1, 2, 3, [4, 5, 6, [90, 80]], [20, 30, 40]];
```
**Using the `ne Array()` constructor**
```js
const arrayName = new Array(item1, item2, item3, ...)
```
**Example**
```js
const students = new Array("John", "Ken", "June", "Jack");
```
`new Array()` constructor can also be nested:
```js
const arr = new Array(1, 2, new Array(5, 6, new Array(30, 40)));
```
Note... always use array literal to create an array.

#### Accessing array elements

You can access array elements by reffering to the **index number**
The first element has index 0, the second element index 1 etc.
#### Basic Array methods
**Length of an array**
The `length` property returns the length(size) of an array'

The length of an array refers to the number of items in the array. 
```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students.length); // 4
```
`pop()`

The pop mehod removes the last item of an array
```js
const students = ["John", "Ken", "June", "Jack"];
students.pop();
console.log(students); //[ 'John', 'Ken', 'June' ]
```
**Note:the pop method returns the element that was removed**

`push()`

The push methods adds a new element at the end of the array.
```js
const students = ["John", "Ken", "June", "Jack"];
students.push("Nancy");
console.log(students); // ['John', 'Ken', 'June', 'Jack', 'Nancy']
```
You can also add multiple elements using the `push` method.
```js
const students = ["John", "Ken", "June", "Jack"];
students.push("Nancy", "Miriam", "Simon");
```
The push method returns the new length of the array.

`shift()`

The shift method removes the first element of an array.
```js
const students = ["John", "Ken", "June", "Jack"];
students.shift();
console.log(students); // ['Ken', 'June', 'Jack']
```
The shift method returns the elements that was removed.


`unshift()`

The unshift method adds an element to the start of an array.
```js
const students = ["John", "Ken", "June", "Jack"];
students.unshift("Nancy");
console.log(students); // ['Nancy', 'John', 'Ken', 'June', 'Jack']
```
You can also add multiple elements using the `unshift` method:
```js
const students = ["John", "Ken", "June", "Jack"];
students.unshift("Nancy", "Miriam", "Simon");
```
`at()`

The at method returns an element at the specified index.
```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students.at(2)); // June
console.log(students.at(0)); // John\
```
`join` 
The join() method also joins all array lements into a string. 
It behaves just like string(), but in addition, you can specify the separator:
```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students.join("++")); // John++Ken++June++Jack
```
`concat()`
The concat() method creates a new array by merging(concatenating) existing arrays.
```js
const arr1 = ["jack", "franklin", "june"];
const arr2 = ["andrew", "alex", "ken"];
console.log(arr1.concat(arr2));
// [ 'jack', 'franklin', 'june', 'andrew', 'alex', 'ken' ]
```
`flat()` 
The flat method converts multidemensional array to a one dimention array.
```js
const students = [
  ["jack", "franklin"],
  ["june", "andrew"],
  ["alex", "ken"],
];
console.log(students.flat());
// ['jack', 'franklin', 'june', 'andrew', 'alex', 'ken']

```
`indeOf()`
The `indexOf()` method is used to find the index of an element.

It returns -1 if the element is not  found.
```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students.indexOf("June")); // 2
```
`includes()`
This checks if an element exists in an array. 
It returns true if it exists and false if it doesn't.
```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students.includes("Ken")); // true
console.log(students.includes("Elvis")); // false
```

`reverse()`
This reverses the elements of an array.
```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students.reverse());
```