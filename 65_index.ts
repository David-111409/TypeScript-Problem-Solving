/*Problem Description: 
Positive Integer Into Base 2, 8 and 16

Create a function that takes a positive integer number 
(one of base2, base8, or base16) and converts the integer into the given base and 
returns a string using recursion.

Examples

integerToString(10 , 2) ➞ "1010"
// Base = 2

integerToString(1642 , 8) ➞ "3152"
// Base = 8

integerToString(212 , 16) ➞ "d4"
// Base = 16

Notes
Input is a positive integer and base = 2, 8, or 16.
Please use recursion to solve this.
 */

export const hexMap: Map<number, string> = new Map([
   [0, '0'],
   [1, '1'],
   [2, '2'],
   [3, '3'],
   [4, '4'],
   [5, '5'],
   [6, '6'],
   [7, '7'],
   [8, '8'],
   [9, '9'],
   [10, 'a'],
   [11, 'b'],
   [12, 'c'],
   [13, 'd'],
   [14, 'e'],
   [15, 'f']
 ]);
 
 
export function integerToString(n:number, base: 2 | 8 | 16):string{
   if (n === 0) return `0`;

   function convert(n: number): string{
      if (n === 0) return ``;

      return convert(Math.floor(n / base)) + hexMap.get(n % base);
   }
   return convert(n);
}

console.log(integerToString(10, 2), "1010")
console.log(integerToString(1642, 8), "3152")
console.log(integerToString(102, 2), "1100110")
console.log(integerToString(212, 16), "d4")
console.log(integerToString(18, 2), "10010")
console.log(integerToString(3162, 16), "c5a")
console.log(integerToString(10, 8), "12")
console.log(integerToString(162, 8), "242")
console.log(integerToString(27, 2), "11011")
console.log(integerToString(4321, 16), "10e1")
console.log(integerToString(1622, 16), "656")
