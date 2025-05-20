/*Problem Description: 

Generate a Countdown of Numbers in an Array
Create a function that takes a number as an argument 
and returns an array of numbers counting down from this number to zero.

Examples

countdown(5) ➞ [5, 4, 3, 2, 1, 0]

countdown(1) ➞ [1, 0]

countdown(0) ➞ [0]

Notes
The argument will always be greater than or equal to zero.
 */

export function countdown(n:number):number[]{
  let ar:number[] = [];

  for (let i = n ; i >= 0; i--)
    ar.push(i);
  
  return ar;
}
console.log(countdown(3), [3, 2, 1, 0])
console.log(countdown(20), [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
console.log(countdown(1), [1, 0])
console.log(countdown(0), [0])
