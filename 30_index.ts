/*Problem Description: 

Create a function that takes a number n and 
return its decimal part.

Examples

decimalPart(1.2) ➞ 0.2

decimalPart(-3.73) ➞ 0.73

decimalPart(10) ➞ 0
 */

export function decimalPart(num:number):number{
  
  let ar : string[] = num.toString().split(".");

  if (ar.length === 1) return 0;

  return parseFloat(ar[1])/ (10 ** ar[1].length);
}

console.log(decimalPart(-10.2324)); // .2324
console.log(decimalPart(10.2324));  // .2324
