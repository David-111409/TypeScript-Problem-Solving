/*Problem Description: 

Compare by ASCII Codes
Create a function that compares two words 
based on the sum of their ASCII codes and 
returns the word with the smaller ASCII sum.

Examples

asciiSort(["hey", "man"]) ➞ "man"
// ["h", "e", "y"] ➞ sum([104, 101, 121]) ➞ 326
// ["m", "a", "n"] ➞ sum([109, 97, 110]) ➞ 316

asciiSort(["majorly", "then"]) ➞ "then"

asciiSort(["victory", "careless"]) ➞ "victory"

Notes
Both words will have strictly different ASCII sums.
 */

export function asciiSort(ar:[string, string]):string{
  let [first, second ] = ar;
  let sum1:number = 0, sum2:number = 0; 

  first.split("").forEach(chr => sum1 += chr.charCodeAt(0));
  second.split("").forEach(chr => sum2 += chr.charCodeAt(0));

  if (sum1 < sum2) 
    return first;
  else 
    return second;
}

console.log(asciiSort(["hey", "man"]), "man")
console.log(asciiSort(["majorly", "then"]), "then")
console.log(asciiSort(["magic", "kingdom"]), "magic")
console.log(asciiSort(["bored", "shampoo"]), "bored")
console.log(asciiSort(["victory", "careless"]), "victory")
