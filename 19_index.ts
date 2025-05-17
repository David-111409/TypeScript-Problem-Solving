/*Problem Description: Add a Consecutive List of Numbers
Write a function that takes the last number of a consecutive list of numbers
and returns the total of all numbers up to and including it.

Examples

addUpTo(3) ➞ 6
// 1 + 2 + 3 = 6

addUpTo(10) ➞ 55
// 1 + 2 + 3 + ... + 10 = 55

addUpTo(7) ➞ 28
// 1 + 2 + 3 + ... + 7 = 28
Notes

You will only be given valid inputs.
There are various ways of doing this; try finding them!
Remember to return the result.
 */

export function addUpTo(n:number):number{
  return n * (n + 1) / 2;
}

console.log(addUpTo(3), 6, "Example #1")
console.log(addUpTo(10), 55, "Example #2")
console.log(addUpTo(0), 0)
console.log(addUpTo(2), 3)
console.log(addUpTo(20), 210)
console.log(addUpTo(1), 1)
