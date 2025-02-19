## Arrays
An array is a collection of elements stored at contigous memory locations. 

An array is a special variable, which can hold more than one value. 

An array can hold many values under a single name, and you can access the values by reffering to an index number.
#### Creating an array
An array can be created in the following ways;
- An array literal
- The `new Array()` constructor.

**Using an array literal**
```
const arrayName = [item1, item2, item3, ...];
```
**Example**
```
const students = ["John", "Ken", "June", "Jack"];
```
You can also nest arrays within arrays(multidimensional arrays)
```
const arr = [1, 2, 3, [4, 5, 6, [90, 80]], [20, 30, 40]];
```
**Using the `ne Array()` constructor**
```
const arrayName = new Array(item1, item2, item3, ...)
```
**Example**
```
const students = new Array("John", "Ken", "June", "Jack");
```
`new Array()` constructor can also be nested:
```
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
```
const students = ["John", "Ken", "June", "Jack"];
console.log(students.length); // 4
```
`pop()`

The pop mehod removes the last item of an array
```
const students = ["John", "Ken", "June", "Jack"];
students.pop();
console.log(students); //[ 'John', 'Ken', 'June' ]
```
**Note:the pop method returns the element that was removed**

`push()`

The push methods adds a new element at the end of the array.
```
const students = ["John", "Ken", "June", "Jack"];
students.push("Nancy");
console.log(students); // ['John', 'Ken', 'June', 'Jack', 'Nancy']
```
You can also add multiple elements using the `push` method.
```
const students = ["John", "Ken", "June", "Jack"];
students.push("Nancy", "Miriam", "Simon");
```
The push method returns the new length of the array.

`shift()`

The shift method removes the first element of an array.
```
const students = ["John", "Ken", "June", "Jack"];
students.shift();
console.log(students); // ['Ken', 'June', 'Jack']
```
The shift method returns the elements that was removed.


`unshift()`

The unshift method adds an element to the start of an array.
```
const students = ["John", "Ken", "June", "Jack"];
students.unshift("Nancy");
console.log(students); // ['Nancy', 'John', 'Ken', 'June', 'Jack']
```
You can also add multiple elements using the `unshift` method:
```
const students = ["John", "Ken", "June", "Jack"];
students.unshift("Nancy", "Miriam", "Simon");
```
`at()`

The at method returns an element at the specified index.
```
const students = ["John", "Ken", "June", "Jack"];
console.log(students.at(2)); // June
console.log(students.at(0)); // John\
```