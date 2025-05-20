/*Problem Description: 

Difference of Max and Min Numbers in Array
Create a function that takes an array and 
returns the difference between 
the biggest and smallest numbers.

Examples

diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

diffMaxMin([44, 32, 86, 19]) ➞ 67
// Smallest number is 19, biggest is 86.
 */

export function diffMaxMin(ar:number[]):number{

  let biggest: number = Math.max(...ar);
  let smallest: number = Math.min(...ar);

  return biggest-smallest;
}

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]))
console.log(diffMaxMin([10, 4, 1, 2, 8, 91]), 90)
console.log(diffMaxMin([-70, 43, 34, 54, 22]), 124)
