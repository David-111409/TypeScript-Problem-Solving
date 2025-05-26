/*Problem Description: 

Front 3 - Slice Check Repeat Concatenate
Create a function that takes a string; 
we'll say that the front is the first three characters of the string. 
If the string length is less than three characters, the front is whatever is there. 
Return a new string, which is three copies of the front.

Examples

frontThree("Python") ➞ "PytPytPyt"

frontThree("Cucumber") ➞ "CucCucCuc"

frontThree("bioshock") ➞ "biobiobio"
 */


export function frontThree(str:string): string{
  return str.slice(0, 3).repeat(3);
}

console.log(frontThree('Python'), 'PytPytPyt', 'Simple string#1')	
console.log(frontThree('Chocolate'), 'ChoChoCho', 'Simple strin#2')	
console.log(frontThree('duh'), 'duhduhduh', '3 characters string')	
console.log(frontThree('Sportsmanship') === 'SpoSpoSpo', 'Generic string')	
console.log(frontThree('ab') === 'ababab', '2 characters string')
console.log(frontThree('a') === 'aaa', '1 characters string')	
console.log(frontThree('') === '', 'Empty string')
