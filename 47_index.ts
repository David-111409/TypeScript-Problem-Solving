/*Problem Description: 
Trailing Zeros

Mubashir needs your help to find out trailing zeros 
after calculating factorial of a given number.

Create a function which takes a number n and 
calculates the number of trailing zeros in factorial 
of the given number.

n! = 1 * 2 * 3 * ... * n
Examples

trailingZeros(0) ➞ 0
// 0! = 1
// No trailing zero.

trailingZeros(6) ➞ 1
// 6! = 720
// 1 trailing zero.

trailingZeros(1000) ➞ 249
// 1000! has 249 trailing zeros.

Notes
Hint: No need to calculate the factorial (because it won't help). 
Find another way to find the number of zeros.
 */

export function trailingZeros(n : number) : number{
  if (n === 0) return 0;

  return Math.floor(n / 5) + trailingZeros(Math.floor(n / 5))
}

console.log(trailingZeros(0), 0, "Testing with n = 0")
console.log(trailingZeros(6), 1, "Testing with n = 6")
console.log(trailingZeros(30), 7, "Testing with n = 30")
console.log(trailingZeros(100), 24, "Testing with n = 100")
console.log(trailingZeros(1000) === 249, "Testing with n = 1000")
console.log(trailingZeros(100000) === 24999, "Testing with n = 100000")
console.log(trailingZeros(1000000000) === 249999998, "Testing with n = 1000000000")
// Mubashir
