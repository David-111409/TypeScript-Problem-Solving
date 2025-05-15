/*Problem Description: Automorphic Number
A number is called Automorphic number 
if its square ends in the original number.
Create a function that takes a number n 
and returns true if it is an Automorphic number, 
otherwise false.

Examples

automorphic(1) ➞ true
automorphic(3) ➞ false
// 3^2 = 9

automorphic(6) ➞ true
// 6^2 = 36 (ends with 6)

automorphic(95) ➞ false
// 95^2 = 9025 (does not end with 95)
 */

export function automorphic(n:number):boolean{
    let square:string = (n ** 2).toString() ;

    return square.endsWith(`${n}`);
}

console.log(automorphic(1), true)
console.log(automorphic(3), false)
console.log(automorphic(6), true)
console.log(automorphic(9), false)
console.log(automorphic(10), false)
console.log(automorphic(25), true)
console.log(automorphic(53), false)
console.log(automorphic(76), true)
console.log(automorphic(95), false)
console.log(automorphic(100), false)
console.log(automorphic(625), true)
console.log(automorphic(225), false)
