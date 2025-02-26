`internal javascript`

``console.log`` printing something in javascript
```bash```{
    <script><script>
}

``can be added at the bottom of the body``

`external javascript`
create a file and the extension will be .js
linking js to html file
<script defer src="index.js"></script>

add `defer` to allow smooth loading, ie. html loads first

``using nodejs``

variables in javascript
`this is like a box where you can store something and retrieve it later`
declaring variables
`var`
ie `var name ='john doe`
name is the variable 
john doe is the value

`let`
preffered for variables that change
ie. `let age =28`

comments in javascript 
`//single line comment`
`/*multi line comment*/`
<!-- 
let firstname=john
let lastname=doe
let age=55
let career=software developer
 -->

 if you want a value to never change, use the `const` instead of `let`

 declaring a variable and initializing a variable
 `let age;`
 `var player;`
 `let score;`
 you will get `undefined`

 initializing a variable
 `score = 55;`
 `player name = christiano ronaldo`

this is giving the variable a value

```rules for naming variables```
variavles can only start with , letter, underscore or a $
make sure you dont use javascript keywords to name variables

you cannot have a space in your variables
in  the middle of the name, you can use an underscore, $ or number

`variable are case sensitive`
ie `let AGE =23`
    `let age =23`

its good practice to use meaningfull variables
if the variable is made up of more than one word, use the snake case convenction, `separate with underscore`

camel case convection, `capitalize the words following the first word`

pascal case convection, `capitalize the first letter of the words`

`````data types in javascript`````
string
number
boolean
null
undefined
bigint
symbol


``strings``
surounded by `double quotes` `single quotes` `backticks`

``numbers``
only integers and decimals
NaN `not a number`

``boolean``
can either be true or false
often used in decicion making
ie. `let isMale =true;`
`let isFemali =false;`
if it is inside a quote, then it is a string

``undefined``
this is a declared variable but not defined

``null``
empty on purpose, intentional absense of a value
initialized but has no value

````operators````
symbols that perform operations in javascript

arithmetic
assignment
comparison
logical
bitwise operators
tenary operators
type operators

`arithmetic operators`
perform mathematical operations
ie. `addition`+
`multiplication`*
`substraction`-
`division`/
`modular/remainder`%
`exponentiation`**
comparison operators
loose equality operators
`console.log(5 == 5)`true
`console.log(4 == 5)`false
it usually ignores the datatype so as to compare

strict equality operator
`does not do datatype conversion`

not equal to -loose operator

not equal to -strict operator

greater than operator


less than operator

greater than or equal to

less than or equal to

```logical operators```
and operator` &&`
only if all the operants on both sides are true
true and true `true`
true and false `false  `
false and true `false`
false and false `false`

or operator `||` returns true only if there is one true value
true or true `true`
true or false `true`
false or true `true`
false or false `false`

 logical NOT operator `!` negates the operator {`if its true, it gets false`}

string concatenation `this is joining strings together`
`using the + operator`
to add a space, concatinate an empty space
ie. 

```using template literals```
ie backticks
