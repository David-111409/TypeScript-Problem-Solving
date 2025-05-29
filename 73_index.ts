/**
Testing K^K == N?

Write a function that returns true if k^k == n for input (n, k) 
and return false otherwise.

Examples

kToK(4, 2) ➞ true

kToK(387420489, 9) ➞ true
// 9^9 == 387420489

kToK(3124, 5) ➞ false

kToK(17, 3) ➞ false
 */




export function kToK(n : number, k : number): boolean{
    return k ** k === n;
}

console.log(kToK(4, 2))
console.log(kToK(4, 2), true)
console.log(kToK(387420489, 9), true)
console.log(kToK(302875106592253, 13), true)

console.log(kToK(3124, 5), false)
console.log(kToK(17, 3), false)
console.log(kToK(823544, 7), false)
