## Sets
A set data structure in Javascript is a data structure the represents collection of unique values. 

Unlike arrays which allow duplicate elements,sets only contain uniques values.

### Properties oof a set
- **Unique elements:** sets cannot contain duplicate eelemts.
- **No indexing:** elements in a set are not accessed by their positions. 
- **No order:** unlike arrays, elements in a set dont maintain their order.

### Creating a set
To create a set, use the `new Set()` keyword
```js
const mySet = new Set([1, 2, "a", "John"]);
console.log(mySet);
```
### Set Methods
`add(value)`
Adds a new element with the specified value to the set.
```js
const mySet = new Set();
mySet.add("John");
mySet.add(44);
mySet.add(44);
mySet.add("Doe");
mySet.add(true);
mySet.add(true);
mySet.add(false);
console.log(mySet); // Set(5) { 'John', 44, 'Doe', true, false }

```
`delete(value)`
This removes a specified element from the set
```js
const mySet = new Set(["John", 44, "Doe", true, false]);
mySet.delete("John");
mySet.delete(true);
mySet.delete(44);
console.log(mySet); // Set(2) { 'Doe', false }
```
`has(value)`
This returns true if a specified value exists in a set, and returns false if otherwise.
```js
const mySet = new Set(["John", 44, "Doe", true, false]);
console.log(mySet.has("John")); // true
console.log(mySet.has("June")); // false
```
`size`
This returns the number of elements in a set.
```js
const mySet = new Set(["John", 44, "Doe", true, false]);
console.log(mySet.size); // 5
```