/*Problem Description: 
Digits Sum Root

Create a function that takes a number and returns one digit 
that is the result of summing all the digits of the input number. 
When the sum of the digits consists of more than one digit, repeat summing until you get one digit.

Examples

rootDigit(123) ➞ 6
// 1 + 2 + 3 = 6

rootDigit(999888777) ➞ 9

rootDigit(1238763636555555555555) ➞ 6

Notes
Recursion is allowed.
 */


 
 
export function rootDigit(num:bigint | number):number{
   
   if (num < 10 ) return Number(num);

   return rootDigit(num.toString().split("").map(Number).reduce((a, b) => a + b));
}

console.log(rootDigit(999888777), 9)
console.log(rootDigit(1111177999888777999888777999888777n), 1)
console.log(rootDigit(1238763636555555555555n), 6)
console.log(rootDigit(1238222222222222222263612387636361238763636n), 7)
console.log(rootDigit(0), 0)
