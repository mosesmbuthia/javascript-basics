## Maps
A map data structure is similar to an object, in that it allows you to store key-value pairs.
However, unlike objects, keys in a map can be of any data type.
### Creating a map
You can create am map using the `new Map()` keyword
```js
const myMap = new Map()
```
### Map methods  
`set(key, value)`
This adds a key value pair to the map or updates if the key-value pair already exists.
```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");
console.log(myMap);

// Map(5) {
//   'firstName' => 'Dennis',
//   1 => 'number',
//   [ 1, 2, 3 ] => 'array',
//   true => 'boolean value',
//   { username: 'the_user' } => 'object'
// }
```
`get(key)`
This returns the value associated with the specific key in the map or undefined if it doesn't exist. 
```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");

console.log(myMap.get(1)); // number
console.log(myMap.get("firstName")); // Dennis
console.log(myMap.get("something")); // undefined
```
`has(key)`
This returns true if the map contains the specified key, false otherwise.
```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");

console.log(myMap.has("firstName")); // true
console.log(myMap.has("middlename")); // false
```
`delete(key)`
This removes a specified key-value pair from the map.
```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");

myMap.delete("firstName");
myMap.delete(1);
```
`clear()`
This removes all the key-value pairs from a map
```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");

myMap.clear();

console.log(myMap); // Map(0) {}

```
`size`
This returns the number of key-value pairs in a map.
```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");

console.log(myMap.size); // 5
```
