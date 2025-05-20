/*Problem Description: 

Product of All Odd Integers
Create a function that returns the product 
of all odd integers in an array.

Examples

oddProduct([3, 4, 1, 1, 5]) ➞ 15
oddProduct([5, 5, 8, 2, 4, 32]) ➞ 25
oddProduct([1, 2, 1, 2, 1, 2, 1, 2]) ➞ 1
 */

export function oddProduct(ar:number[]):number{
  return ar.reduce((acc, ele) => ele % 2 ? acc * ele : acc , 1 );
}
console.log(oddProduct([3, 4, 1, 1, 5]), 15)
console.log(oddProduct([5, 5, 8, 2, 4, 32]), 25)
console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2]), 1)
console.log(oddProduct([0, 0, 0, 1]), 1)
console.log(oddProduct([1, 2, 2, 5, 2, 0]), 5)
