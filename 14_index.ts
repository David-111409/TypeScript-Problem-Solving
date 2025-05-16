/*Problem Description: Even and Last
Given an array of integers arr, 
return the sum of all the integers that have an even index,
multiplied by the integer at the last index.

If the sequence is empty, you should return 0.

Examples

evenLast([2, 3, 4, 5]) ➞ 30
// numbers at even index = 2, 4
// number at last index = 5
// 2*5 + 4*5 = 10 + 20 = 30

evenLast([1, 3, 3, 1, 10]) ➞ 140

evenLast([]) ➞ 0
 */

export function evenLast(ar:number[]):number{
  if (ar.length === 0) return 0;

  const last : number = ar[ar.length -1];

  const sum :number = ar.reduce((res, val, indx) => {
    return (indx % 2 === 0 ) ? res + val : res;
  }, 0) ;

  return sum * last;
}

console.log(evenLast([2, 3, 4, 5]), 30)
console.log(evenLast([]), 0)
console.log(evenLast([2, 2, 2, 2]), 8)
console.log(evenLast([1, 3, 3, 1, 10]), 140)
console.log(evenLast([-11, 3, 3, 1, 10]), 20)