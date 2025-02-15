## Operators
Operators in javascript are symbols that perform operations on values (`operands`)
They are used for calculations, comparisons, and logical operations.
Operators in Javascript are classified it the categories below. 

- Arithmetic operators: these perform the basic mathematical operations.
- Assignment operators: these assign values to variables
- Comparison operators: they compare values.
- Logical operators: these are used for boolean logic.
- Bitwise operators: they perform operations at the binary level.
- Ternary operators
- Type operators

Here, we will go through aritmetic operators, assignment operators, and logical operators. Later on the course, we will go through bitwise, tenanry and type operators.

### Arithmetic Operators
These are operators used to perform basic mathematical operations.They include:

#### +(addition)
This is used to add two numbers.

```
let a =  30;
let b = 20;
console.log(a+b); // will be 50
```
It can also be used to perform string data type concatenation (combination)

```
let userName = 'Moses'
Let lastName = 'Mbuthia'
console.log(firstName+lastName); //it will give the output (mosesmbuthia)
```

#### -(subtraction)
This subtracts the rigt operand from the left

```
let a =  30;
let b = 20;
console.log(a-b); // will be 10
```
#### *(multimlication)
This calculates the product of two numbers:
```
let a =  30;
let b = 20;
console.log(a*b); // will be 600
```
#### /(division)
```
let a =  30;
let b = 20;
console.log(a/b); // will be 1.5
```
#### %(modulus/remainder)
This returns the remainder of the division between the left and the right operand.
```
let a =  30;
let b = 20;
console.log(a%b); // will be 10
```
#### **(exponential)
```
let a =  3;
let b = 2;
console.log(a**b); // will be 9
```
#### Increment Operator
This increases the value by 1. This can be used in two ways.
- Post-increment(a++):returns the origina value and then increments it.
- Pre-increment(++a):increments first then returns the updated value.
```
let a = 10;
console.log(a++); //10 (returns the original value first then increments it)
console.log(a); //11
```
```
let a = 10;
console.log(++a); //11 (increments first, then returns)
```
#### Decrement Operator
This  decreases the variables by 1.
They can be used in two ways:
1. Post-decremet(a--):returns the original value, then decrements
2. Pre-decrement(--a):does the decrement first the returns the updated value.
### Assignment Operators
This is used to assign values to variables.
#### =(Simple assignment operator)
Assigns value to a variable
```
let a =  3;
let b = 2;
```
#### +=(addition assignment operator)
This adds value to a variable
```
let y = 5;
y += 3; //X = x+3 ~ 8
```
#### -+=(subtraction assignment operator)
This subtracts a value from a variable
```
let y = 5;
y -= 3; //X = x-3 ~ 2
```
#### *=(Multiplication assignment operator)
This multilies a variable
```
let y = 5;
y *= 3; //X = x*3 ~ 15
```
#### /=(division assignment operator)
This divides a variable
```
let y = 15;
y /= 3; //X = x/3 ~ 5
```
### Comparison Operators
These are used to compare values and they return `true` or `false`

#### ==(Equality Operator)
This returns `true` if the operand on the left is equal to the operand on the right and returns `false` if otherwise.

```
let a =  20;
let b = 10;
console.log(a==b); //returns false
console.log(a==20) //returns true
```
Note: the equality converter ignores the data type of the operands, it only compares the values
```
console.log(10=="10") //returns true ignoring the string datatype and focusing on the values only
```

#### ===(Strict Equality Operator)
This returns `true` if the operand on the left is equal to the operand on the right and `false` otherwise
```
let a =  20;
let b = 10;
console.log(a===b); //returns false
console.log(a===20) //returns true
```
Note: The strict equality operator checks the data tpe as well, note just the values.
```
console.log(10==="10") //returns false checking the string datatype the values data types
```
#### !=(Not equal/Inequality operator)
This returns `true` if the value on the left is not equal to the value on the right and `false` if otherwise. It does not consider the data types of the operands.
```
let a =  20;
let b = 10;
console.log(a!=b); //returns true
console.log(a!=0) //returns false
console.log(10!="10") //returns false 
```
#### !==(Strict not equal to/Strict inequality operator)
This returs `true` if the value on the left is not equal to the value on the right and returns `false` if otherwise. This operator checks the data types of the operands.

```
let a =  20;
let b = 10;
console.log(a!==b); //returns true
console.log(a!==0) //returns false
console.log(10!=="10") //returns true after checking the data type of the operand. 
```
#### >(Greater than)
This returns `true` if the value on the left is greater than the value on the right and returns `false` if otherwise.
```
let a =  20;
let b = 10;
console.log(a>b); //returns true
console.log(b>a) //returns false
```
#### <(Less than)
This returns `true` if the value on the left is less than the value on the rigght and returns `false` if otherwise.
```
let a =  20;
let b = 10;
console.log(a<b); //returns false
console.log(b<a) //returns true
```
#### >=(Greater than or equal to)
This returns `true` if the operand on the left is greater than or equal to the operand on the right and returns `false` if the otherwise.
```
let a =  20;
let b = 10;
console.log(a>=b); //returns true
console.log(b>=a) //returns false
console.log(10>=10) //returns true 
```
#### <=(Less than or equal to)
This returns `true` if the operand on the left is less than or equal to the operand on the right and returns `false` if the otherwise.
```
let a =  20;
let b = 10;
console.log(a<=b); //returns false
console.log(b<=a) //returns true
console.log(10<=10) //returns true 
```
### Logical Operators
These are used for Boolean logic.

**Logical** `AND` **Operator** `(&&)`
The `AND` operator returns `true` only if both operands are true; otherwise, it returns `false`
```
console.log(true && true); //returns true
console.log(true && false); //returns false
```
**Truth table for the AND operator**

```
|Expresion 1  | Expresion| Result|
---
|true|  true|  true|

|true  | true| false|

|false  |true | false|

|false |false |false|
```
**Logical `OR` Operator (||)**
The `OR` operator returns true if at least one of the operands is true; otherwise it returns false.
```
console.log(true || true); //returns true
console.log(true || false); //returns true
console.log(false || false); //returns false
```
**Truth table for the OR operator**
```
|Expresion 1  | Expresion| Result|
---
|true|  true|  true|

|true  | false| true|

|false  |true | true|

|false |false |false|
```
**Logical `NOT` operator (!)**
This is used to negate boolean value of an expression, it returns `true` if the expression is `false` and returns `false` if the expression is `true`.
```
console.log(!true) //returns false
console.log(false) //returns true
```

