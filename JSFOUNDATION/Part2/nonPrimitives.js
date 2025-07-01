//object

// const userName = {
//   firstName: "Sourav",
//   isLoggedIn: true,
// };
// userName.firstName = "Mr . S";
// userName.lastName = "Dey";

// console.log(userName.firstName); //{}
// console.log(userName.lastName);
// console.log(userName);

// console.log(typeof userName); //object

// otherway

/*

const userName = {
 " first Name": "Sourav",
  isLoggedIn: true,
};

console.log(userName[" first Name"]); //Sourav

*/

// let today = new Date();
// console.log(today); //2025-07-01T16:44:01.878Z

// let today = new Date();
// console.log(today.getDate()); //1

//Array

let rappers = ["Eminem", "Tupac", "Raftaar", true];

// console.log(rappers[0]);

//Type Conversion

// console.log(1 + "1"); //11
// console.log("1" + 1); //11

// let isValue = true; //true -- 1 , false --0
// console.log(isValue + 1); //2

// let isValue = "2";
// console.log(Number(isValue)); //2

let isValue = "2abc";
console.log(Number(isValue)); //NaN
console.log(typeof NaN); //number
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN
