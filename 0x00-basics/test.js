console.log("Hello, word from external file");
console.log("External js is very fun")
let score = 79; //this is variable named "score" with the value 79

score = 34; // now the value of score has changed to 34 from 79


firstName = 'Francis' //this will cause an error since the firstName is already assigned a different name

let age = 27; //this is declared and initialized
console.log(age) //this will now give "25" as the output

let firstName = "Moses"; //double quotes
let lastName = 'Mbuthia;' //single quotes
let userName = `Moses-Mbuthia` //backticks
let _score =90;
let $price = 20.37;

let user-age = 27; // no hyphens should be used
let total ammount = 1300; //no spaces should be used

let Age =28;
let age =26;
console.log(Age) //output will be 28
console.log (age) //output will be 26

let userName = 'Moses'
Let lastName = 'Mbuthia'
console.log(firstName+lastName); //it will give the output (mosesmbuthia)


let totalHours = '8'

let x ='Moses'
let th ='8'

let age = 27; //integer
let price = 199.99; //decimal
let notANumber = NaN; //Not a Number(invalid math operation)

let isMale = true;
let isFemale = false;

let country;

console.log(country); // output is undefined

let bigNumber = 123456789012345678901234567890;
console.log(typeof bigNumber) //this is returns bigint

const age =27;
const  fullName = "Moses Mbuthia"
console.log(typeof age) //number
console.log(typeof fullName) //string


console.log(a**b); // will be 9
let a = 10;
console.log(++a); //11 (increments first, then returns)
console.log(a); //11

let y = 15;
y /= 3; //X = x/3 ~ 5

let a =  20;
let b = 10;
console.log(a<=b); //returns false
console.log(b<=a) //returns true
console.log(10<=10) //returns true 

console.log(true || true); //returns true
console.log(true || false); //returns true
console.log(false || false); //returns false

console.log(!true) //returns false
console.log(false) //returns true


let firstName = "Moses";
let lastName = "Mbuthia";
console.log(`My name is ${firstName} ${lastName}`);


let fullName = firstName+lastName;
console.log("My name is" +  fullName)

let message = "Hello";
message += "Moses";
console.log(message);

console.log(5+"4"); //55 (number coerced into a string)
console.log("5"-3); //2 (string coerced into a number)
console.log(true+1); //2 (true coerced into 1)
console.log(false+"10"); //false10 (false coerced into string)

console.log(String(400));
console.log((400).toString);

console.log(Number(400));
console.log(parseInt("400"));
console.log(parseFloat("400"));
console.log(parseInt("40px"));

console.log(Boolean(0));  //false
console.log(Boolean("Hello")); //true
console.log(Boolean(null)); //false
