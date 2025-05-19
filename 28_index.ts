/*Problem Description: Find the Total Number of Digits 

the Given Number Has
Create a function that takes 
a number as an argument and 
returns the amount of digits it has.

Examples

findDigitAmount(123) ➞ 3

findDigitAmount(56) ➞ 2

findDigitAmount(7154) ➞ 4

findDigitAmount(61217311514) ➞ 11

findDigitAmount(0) ➞ 1
 */

export function findDigitAmount(num:number):number{
  let digits : number = 0;

  do {
      digits ++;
      num = Math.floor(num / 10);
  }
  while (num > 0);

  return digits;
}

console.log(findDigitAmount(1), 1, 'Should work with one digit')
console.log(findDigitAmount(67), 2, 'Should work with a two-digit number')
console.log(findDigitAmount(123), 3, 'Should work with a three-digit number')
console.log(findDigitAmount(55551), 5, 'Should work with a bit bigger number')
console.log(findDigitAmount(96456431), 8, 'Should work with bigger numbers')
console.log(findDigitAmount(0), 1, '0 should return 1, as it is a digit')
