/*Problem Description: 
Find the Average of the Letters 

Create a function that returns the average 
of a list composed of letters. First, 
find the number of the letter in the alphabet in order to find the average of the list.

A = 1
B = 2
C = 3
D = 4
E = 5
average = total sum of all numbers / number of item in the set
Return the result rounded to two decimal points.

Examples

averageIndex(["a", "b", "c", "i"]) ➞ 3.75

averageIndex(["e", "d", "a", "b", "i", "t"]) ➞ 6.83

averageIndex(["y", "o", "u", "a", "r", "e", "t", "h", "e", "b", "e", "s", "t"]) ➞ 12.62

Notes
Letters given will always be lowercase.
 */

export function averageIndex(ar:string[]){
  let sum :number = 0;

  for (let char of ar) 
    sum += (char.charCodeAt(0) - 96);

  let result :number= sum / ar.length;

  return Math.round(result * 100) / 100;
}

console.log(averageIndex(['a','b','c','i']), 3.75)
console.log(averageIndex(['e','d','a','b','i','t']), 6.83)
console.log(averageIndex(['o','m','g']),11.67)
console.log(averageIndex(['o','h','n','o']),13.0)
console.log(averageIndex(['t','w','e','n','t','y','t','w','e','n','t','y']),17.83)
console.log(averageIndex(['y','o','u','a','r','e','t','h','e','b','e','s','t']),12.62)
