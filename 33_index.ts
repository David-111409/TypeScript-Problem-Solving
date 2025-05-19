/*Problem Description: 
Doubleton Number

A natural number is a "Doubleton Number", 
if it contains exactly two distinct digits. 
For example, 23, 35, 100, 12121 are doubleton numbers, 
and 123 and 114455 are not.

Create a function which takes a number n and 
finds the next doubleton number.

Examples

doubleton(10) ➞ 12
// 12 has only two distinct numbers 1 and 2

doubleton(120) ➞ 121
// 121 has only two distinct numbers 1 and 2

doubleton(1234) ➞ 1311
// 1311 has only two distinct numbers 1 and 3
 */

export function doubleton(n:number):number{

  while (true){
    n ++;

    let dist : number = new Set(n.toString()).size;

    if (dist === 2) return n;
    
  }
}

console.log(doubleton(130), 131)
console.log(doubleton(1434), 1441)
console.log(doubleton(20), 21)
console.log(doubleton(5), 10)
console.log(doubleton(131), 133)
console.log(doubleton(1000000), 1000001)
//Mubashir
