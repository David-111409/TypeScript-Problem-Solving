/**
Make My Way Home
You will be given a list, showing how far James travels away from his home for each day.
 He may choose to travel towards or away from his house, so negative values are to be expected.

Create a function that calculates 
what distance James must walk to get back home.

Examples

distanceHome([2, 4, 2, 5]) ➞ 13

distanceHome([-1, -4, -3, -2]) ➞ 10

distanceHome([3, 4, -5, -2]) ➞ 0

Notes
Assume that James only travels in a straight line.
Distance is always a positive number.
 */




export function distanceHome(ar: number[]): number{
    return Math.abs(ar.reduce((a, b) => a + b, 0));
}

console.log(distanceHome([2, 4, 2, 5]), 13)
console.log(distanceHome([-1, -4, -3, -2]), 10)
console.log(distanceHome([3, 4, -5, -2]), 0)
console.log(distanceHome([12, 12]), 24)
console.log(distanceHome([10, 8, -4, -10, -15, 14, -13]), 10)
console.log(distanceHome([-3, -6, -15, -14, -11, 3, 0, -15, 0]), 61)
console.log(distanceHome([-11, -4, -14, 4, -2, 7, 0, -1, 10, -1]), 12)
console.log(distanceHome([-7, 1, 0, -9, 0, 0]), 15)
console.log(distanceHome([-15, -7, 4, -3, -8]), 29)
console.log(distanceHome([-11, 10, -6, 8, 0, 12, -11]), 2)
console.log(distanceHome([-4, -5, -14, -13]), 36)
console.log(distanceHome([5, 8]), 13)
console.log(distanceHome([10, -15, -3, 2, 4, -15, 11, 1]), 5)
console.log(distanceHome([9, 13, -11, -11, -10, -12, 15, -3]), 10)
console.log(distanceHome([13, -1, -12, -4, 0, 10, 8, 10]), 24)
console.log(distanceHome([-9, 1, -10, 10, -9, -10, 0, 11, -2, -3]), 21)
console.log(distanceHome([13, 2, 12, 12, -15, 11, 9, 0, 13]), 57)
console.log(distanceHome([0, 5, 8, -3]), 10)
console.log(distanceHome([-10, 2, -1, -12]), 21)
console.log(distanceHome([-9, -11, 11, -15, -8]), 32)
