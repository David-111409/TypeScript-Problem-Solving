/*Problem Description: 

Return the First and Last Elements in an Array
Create a function that takes an array of values 
and returns the first and last values in a new array.

Examples

firstLast([5, 10, 15, 20, 25]) ➞ [5, 25]

firstLast(["edabit", 13, null, false, true]) ➞ ["edabit", true]

firstLast([undefined, 4, "6", "hello", null]) ➞ [undefined, null]

Notes
Test input will always contain a minimum of two elements within the array.
 */

export function firstLast(ar:any[]):[any, any]{
  let [first] = ar;

  let last = ar[ar.length - 1];

  return [first, last];
}

console.log(firstLast([5, 10, 15, 20, 25]), [5, 25])
console.log(firstLast(["edabit", 13, null, false, true]), ["edabit", true])
console.log(firstLast([undefined, 4, "6", "hello", null]), [undefined, null])
console.log(firstLast(["hello", "edabit", "dot", "com"]), ["hello", "com"])
console.log(firstLast([3, 2, 1]), [3, 1])
console.log(firstLast(["one", "two"]), ["one", "two"])
console.log(firstLast([false, false, true, false, false, true, false]), [false, false])
