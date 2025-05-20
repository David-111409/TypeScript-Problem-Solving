/*Problem Description: 

Eliminate Odd Numbers within an Array
Create a function that takes an 
array of numbers and 
returns only the even values.

Examples

noOdds([1, 2, 3, 4, 5, 6, 7, 8]) ➞ [2, 4, 6, 8]

noOdds([43, 65, 23, 89, 53, 9, 6]) ➞ [6]

noOdds([718, 991, 449, 644, 380, 440]) ➞ [718, 644, 380, 440]

Notes:
Return all even numbers in the order they were given.
All test cases contain valid numbers ranging from 1 to 3000.
 */

export function noOdds( ar : number[] ) : number[]{
  return ar.filter(n => n % 2 === 0);
}

console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8]), [2, 4, 6, 8])
console.log(noOdds([43, 65, 23, 89, 53, 9, 6]), [6])
console.log(noOdds([718, 991, 449, 644, 380, 440]), [718, 644, 380, 440])
console.log(noOdds([148, 6, 16, 85]), [148, 6, 16])
console.log(noOdds([9, 49, 23]), [])
console.log(noOdds([34, 43, 32, 49, 40]), [34, 32, 40])
console.log(noOdds([1232, 1990, 1284, 1391, 1958]), [1232, 1990, 1284, 1958])
console.log(noOdds([2766, 2651, 2373, 2916, 2397, 2539]), [2766, 2916])
console.log(noOdds([53, 65, 52, 62, 59]), [52, 62])
console.log(noOdds([393, 156, 14, 166, 129, 246]), [156, 14, 166, 246])
