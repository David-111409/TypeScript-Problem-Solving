/*Problem Description: Array Index

Given a 2D-list of letters arr and a list of indexes idx,
find the letters on given indexes and return as a string.

arr = [
  ["m", "u", "b"],
  ["a", "s", "h"],
  ["i", "r", "1"]
]

idx = [1, 3, 5, 8]
You have to find the characters in these indexes of the given list
if you think of the indexes as:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
arrIndex(lst, idx) ➞ "mbsr"

Notes
Remember that the indexes start from one and not zero.
 */

export function arrIndex(ar2D:string[][], indx:number[]):string{
    let flatAr = ar2D.flat();
    return indx.map(el => flatAr[el - 1]).join("");
}


let results1 = arrIndex([['m', 'u', 'b'], ['a', 's', 'h'], ['i', 'r', '1']],  [1, 3, 5, 8])
console.log(results1, 'mbsr')
results1 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(results1, 'myexample')
let results2 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 5, 6])
console.log(results2, 'mam')
let results3 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 3, 7, 8])
console.log(results3, 'mepl')