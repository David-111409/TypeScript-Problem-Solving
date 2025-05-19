/*Problem Description: 

Convert Yen to USD
Create a function that 
can turn JPY (Japanese yen) to USD 
(American dollar).

Examples

yenToUsd(1) ➞ 0.01

yenToUsd(500) ➞ 4.65

yenToUsd(649) ➞ 6.04

Notes
Each JPY to USD conversion is JPY / 107.5
Round the result to two decimal places.
 */

export function yenToUsd(jap:number):number{
  
  let dollar: number = jap / 107.5;

  return Math.round(dollar * 100) / 100;
}

console.log(yenToUsd(1), 0.01)
console.log(yenToUsd(500), 4.65)
console.log(yenToUsd(649), 6.04)
console.log(yenToUsd(1000), 9.3)
