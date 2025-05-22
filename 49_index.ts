/*Problem Description: 
Repeat the Same Item Multiple Times

Create a function that takes two arguments (item, times). 
The first argument (item) is the item that needs repeating 
while the second argument (times) is the number of times the item is to be repeated. 
Return the result in an array.

Examples

repeat("edabit", 3) ➞ ["edabit", "edabit", "edabit"]

repeat(13, 5) ➞ [13, 13, 13, 13, 13]

repeat("7", 2) ➞ ["7", "7"]

repeat(0, 0) ➞ []

Notes
item can be either a string or a number.
times will always be a number.
 */

export function repeat(item: string | number, n:number):(string|number)[]{
  let ar : (string|number)[]= [];

  for (let i = 0; i < n; i++) 
    ar[i] = item;
  
  return ar;
}

console.log(repeat("edabit", 3), ["edabit", "edabit", "edabit"]);
console.log(repeat(13, 5), [13, 13, 13, 13, 13]);
console.log(repeat("7", 2),  ["7", "7"]);
console.log(repeat("2 0 1 8", 1), ["2 0 1 8"]);
console.log(repeat("tom dick and harry", 6), ["tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry"]);
console.log(repeat(0, 1), [0]);
console.log(repeat(0, 0), []);
console.log(repeat("z", 0), []);
