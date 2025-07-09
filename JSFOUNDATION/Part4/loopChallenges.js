/*1. Write a 'while loop that calculates the sum of all numbers from 1 to 5 and stores
the result in a variable named 'sum`
*/

//1+2+3+4+5 === 15

let sum = 0;
let i = 1;

while (i <= 5) {
  sum = sum + 1; //
  sum += 1;
  i++;
}

console.log(sum);
