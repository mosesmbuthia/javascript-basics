## Type Coersion and Type Conversion
In Javascript, both **type coersion** and **type conversion** involve changing a value from one data type to another, but they differ in how they happen.
### Type Coersion (Implicit Conversion)
This happen automatically when javascript tries to perform operations between different data types. 

They are common in comparisons (==), string concatenation (+), and arithmetic operations.

Type coercion sometimes leads to unexpected results.
##### Examples
```js
console.log(5+"4"); //55 (number coerced into a string)
console.log("5"-3); //2 (string coerced into a number)
console.log(true+1); //2 (true coerced into 1)
console.log(false+"10"); //false10 (false coerced into string)
```
### Type Conversion (Explicit Conversion)
This happen when you manually convert the data types of a value.

**Methods of Explicit Conversion**
Convert to string using `string()` or `toString()`
```js
console.log(String(400));
console.log((400).toString);
```
Convert to number using `Number()`, `parseInt()` or `parseFloat()`

```js
console.log(Number(400));
console.log(parseInt("400"));
console.log(parseFloat("400"));
console.log(parseInt("40px"));
```
Convert to boolean using `Boolean()`
- **Falsy values** `0`, `""`, `null`, `undefined`, `NaN`, `false`
- **Truthy values** everything else.
```js
console.log(Boolean(0));  //false
console.log(Boolean("Hello")); //true
console.log(Boolean(null)); //false
```