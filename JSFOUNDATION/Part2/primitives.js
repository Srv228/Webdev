// Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance); //120
// console.log(anotherBalance); //[Number: 120]

// console.log(typeof balance); //number
// console.log(typeof anotherBalance); //object

//boolean

let isActive = true;
let isReallyActive = new Boolean(true); //not recommended way

// null & undefined

let firstName;

// console.log(firstName); //undefined --- > it might comes in future

let secondName = null;

// console.log(secondName); //null --> empty

// String

let myString = "hello";
let myStingOne = "Javascript";
let UserName = "Sourav";

let oldGreet = myString + " " + "Hitesh";
// console.log(oldGreet); //helloHitesh , hello Hitesh

let greetMessage = `Hello  ${UserName}`;

let demo1 = `Value is ${2 * 2}`;

console.log(greetMessage); //Hello  Sourav
console.log(demo1); //4

//Symbol

// let sm1 = Symbol();
// let sm2 = Symbol();

// console.log(sm1 == sm2); //false

// console.log(sm1) //Symbol()

let sm1 = Symbol("sourav");
let sm2 = Symbol("sourav");
console.log(sm1 == sm2); //false
