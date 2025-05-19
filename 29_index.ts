/*Problem Description: Convert Kilometers to Miles
In this challenge, you have to implement a function 
that returns the given distance kilometers converted into miles. 
You have to round the result up to the fifth decimal digit.

Examples

kmtomiles(2) ➞ 1.24274

kmtomiles(6) ➞ 3.72823

kmtomiles(8) ➞ 4.97097

Notes
1 kilometer = 0.621371 miles.
 */

export function kmtomiles(km:number):number{
  
  let miles : number =  .621371 * km;

  return Math.round(miles * 100000) / 100000;
}

console.log(kmtomiles(2), 1.24274)
console.log(kmtomiles(6), 3.72823)
console.log(kmtomiles(8), 4.97097)
