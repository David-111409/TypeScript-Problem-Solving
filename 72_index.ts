/**
Nth Even Number:

Create a function that takes a number n and 
returns the nth even number beginning with 0 as the first.

Examples
nthEven(1) ➞ 0
// 0 is first even number
nthEven(2) ➞ 2
// 2 is second even number
nthEven(100) ➞ 198
 */




export function nthEven(n: number) : number{
    return ( 2 * n ) - 2;
}

console.log(nthEven(100));
console.log(nthEven(1), 0)
console.log(nthEven(2), 2)
console.log(nthEven(3), 4)
console.log(nthEven(100), 198)
console.log(nthEven(1298734), 2597466)
