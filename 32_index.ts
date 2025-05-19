/*Problem Description: 
Sum of Cubes
Create a function that takes a positive integer n, 
and returns the sum of all the cubed values from 1 to n.

For example, if n is 3:

sumCubes(3) ➞ 36
1 ** 3 + 2 ** 3 + 3 ** 3 = 36
Examples

sumCubes(7) ➞ 784

sumCubes(8) ➞ 1296

sumCubes(9) ➞ 2025

Notes
Input n will be a positive integer.
 */

export function sumCubes(n:number):number{
  return Math.pow((n * (n + 1) / 2), 2);
}

console.log(sumCubes(1), 1)
console.log(sumCubes(2), 9)
console.log(sumCubes(3), 36)
console.log(sumCubes(4), 100)
console.log(sumCubes(5), 225)
console.log(sumCubes(6), 441)
console.log(sumCubes(7), 784)
console.log(sumCubes(8), 1296)
console.log(sumCubes(9), 2025)
console.log(sumCubes(10), 3025)
console.log(sumCubes(123) === 58155876)
console.log(sumCubes(125) === 62015625)
console.log(sumCubes(133) === 79405921)
console.log(sumCubes(167) === 196784784)
console.log(sumCubes(188) === 315630756)
console.log(sumCubes(199) === 396010000)
console.log(sumCubes(200) === 404010000)
console.log(sumCubes(300) === 2038522500)
console.log(sumCubes(400) === 6432040000)
console.log(sumCubes(500) === 15687562500)
console.log(sumCubes(12345) === 5807306426319225)
