/*Problem Description: 
Char-to-ASCII

Create a function that returns the ASCII value of the passed in character.

Examples

ctoa("A") ➞ 65

ctoa("m") ➞ 109

ctoa("[") ➞ 91

ctoa("\") ➞ 92
 */


export function ctoa(str:string):number{
  return str.charCodeAt(0);
}

console.log(ctoa("m"));
console.log(ctoa("["));
console.log(ctoa("\\"));
console.log(ctoa(' '), 32)
console.log(ctoa('A'), 65)
console.log(ctoa(']'), 93)
console.log(ctoa('^'), 94)
console.log(ctoa('c'), 99)
