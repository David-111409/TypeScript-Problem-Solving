/*Problem Description: 

String Pairs
Create a function that takes a string str and 
returns an array of two-paired characters. 
If the string has an odd number of characters, 
add an asterisk * in the final pair.

See the below examples for a better understanding:

Examples

-stringPairs("mubashir") ➞ ["mu", "ba", "sh", "ir"]
-stringPairs("edabit") ➞ ["ed", "ab", "it"]
-stringPairs("airforces") ➞ ["ai", "rf", "or", "ce", "s*"]

Notes:
Return [] if the given string is empty.
 */

export function stringPairs(str:string):string[]
{
  
  let ar : string[]= [];

  if (str.length % 2 !== 0) str += "*";

  for (let i = 2 ; i <= str.length ; i+= 2)
    ar.push(str.slice(i-2, i));
  

  return ar;
}

console.log(stringPairs("abcdef"), ["ab", "cd", "ef"])
console.log(stringPairs("abcdefg"), ["ab", "cd", "ef", "g*"])
console.log(stringPairs(""), [])
console.log(stringPairs("pak"), ["pa", "k*"])
console.log(stringPairs("mubashir"), ["mu", "ba", "sh", "ir"])
console.log(stringPairs("edabit"), ["ed", "ab", "it"])
console.log(stringPairs("airforces"), ["ai", "rf", "or", "ce", "s*"])
