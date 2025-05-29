/**
Basic Statistics: Mean
The mean of a group of numbers is calculated by summing all numbers, 
and dividing this sum by the total count of numbers in the group. 
Given a sorted array of numbers, return the mean (rounded to one decimal place).

Examples

mean([1, 6, 6, 7, 8, 8, 9, 10, 10]) ➞ 7.2

mean([1, 3, 8, 9, 9, 10]) ➞ 6.7

mean([2, 3, 3, 6, 6, 8, 9, 10]) ➞ 5.9
 */

export function mean(ar: number[]): number{
    let sum : number = ar.reduce((a, b) => a + b, 0);
    let l : number = ar.length;
    let mean : number = sum / l;

    return Math.round(mean * 10 ) / 10;
}

console.log(mean([1, 1, 2, 2, 3, 5, 5, 5, 7]), 3.4)
console.log(mean([1, 2, 2, 3, 7, 9, 10]), 4.9)
console.log(mean([1, 2, 3, 4, 5, 6, 6, 10, 10]), 5.2)
console.log(mean([5, 5, 6, 7, 10, 10]), 7.2)
console.log(mean([1, 3, 3, 4, 5, 6, 7, 8]), 4.6)
console.log(mean([2, 4, 6, 6, 6, 8, 9]), 5.9)
console.log(mean([2, 4, 6, 6, 6, 7, 7, 8, 9]), 6.1)
console.log(mean([2, 3, 4, 7, 8, 8]), 5.3)
console.log(mean([1, 2, 2, 2, 3, 4, 4, 4, 6]), 3.1)
console.log(mean([2, 2, 8, 9, 9, 10, 10]), 7.1)
console.log(mean([1, 3, 3, 4, 5, 5, 7, 9]), 4.6)
console.log(mean([1, 1, 3, 4, 4, 4, 7, 9, 10]), 4.8)
console.log(mean([1, 2, 3, 6, 6, 9]), 4.5)
console.log(mean([3, 5, 7, 7, 9, 10, 10]), 7.3)
console.log(mean([1, 2, 4, 4, 6, 6]), 3.8)
console.log(mean([2, 4, 7, 7, 8, 8, 9, 9, 10]), 7.1)
console.log(mean([2, 4, 4, 4, 5, 5, 8, 9, 10]), 5.7)
console.log(mean([1, 6, 6, 8, 10, 10]), 6.8)
console.log(mean([2, 6, 6, 9, 10, 10]), 7.2)
console.log(mean([1, 4, 4, 4, 7, 8, 9]), 5.3)
