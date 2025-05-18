/*Problem Description: 
Give Me the Even Numbers
Create a function that takes two parameters (start, stop),
and returns the sum of all even numbers in the range.

Examples

sumEvenNumsInRange(10, 20) ➞ 90
// 10, 12, 14, 16, 18, 20
sumEvenNumsInRange(51, 150) ➞ 5050
sumEvenNumsInRange(63, 97) ➞ 1360

Notes
Remember that the start and stop values are inclusive
 */


export function sumEvenNumsInRange(start:number, end:number):number
{

let firstEven:number = start % 2 === 0 ? start : start + 1;
let lastEven:number = end % 2 === 0 ? end : end - 1;
let n:number = ((lastEven - firstEven) / 2) + 1;

return n * (firstEven + lastEven) / 2;

}

console.log(sumEvenNumsInRange(51, 150), 5050)
console.log(sumEvenNumsInRange(70, 100), 1360)
console.log(sumEvenNumsInRange(99, 110), 630)
console.log(sumEvenNumsInRange(63, 97), 1360)
console.log(sumEvenNumsInRange(10, 20), 90)
