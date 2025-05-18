/*Problem Description: 

Write a function that returns 
true if all integers in an array are factors of a number, 
and false otherwise.

Examples:

checkFactors([2, 3, 4], 12) ➞ true
// Since 2, 3, and 4 are all factors of 12.
checkFactors([1, 2, 3, 8], 12) ➞ false
// 8 is not a factor of 12.
checkFactors([1, 2, 50], 100) ➞ true
checkFactors([3, 6], 9) ➞ false
 */


export function checkFactors(factors:number[], num:number):boolean{
  return factors.every(factor => num % factor === 0);
}

console.log(checkFactors([2, 3, 4], 12), true)
console.log(checkFactors([1, 2, 3, 8], 12), false, '8 is not a factor of 12')
console.log(checkFactors([1, 2, 50], 100), true)
console.log(checkFactors([1, 9, 81], 81), true)
console.log(checkFactors([5, 10, 50], 500), true)
console.log(checkFactors([5, 10, 499], 500), false, '499 is not a factor of 500')
console.log(checkFactors([3, 6], 9), false, '6 is not a factor of 9')
