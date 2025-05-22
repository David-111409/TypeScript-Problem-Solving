/*Problem Description: 
Age Difference Between Spouses

Create a function that determines the age difference 
between spouses in a household. The ages ages in years of 
the parents and their children are given in an array.

If there is no difference in age between the parents, 
return "No age difference between spouses.". Otherwise, 
return the difference in years. Check the examples for more clarification.

Examples

ageDifference([29, 1, 6, 8, 28]) ➞ "1 year"

ageDifference([43, 86, 49, 86]) ➞ "No age difference between spouses."

ageDifference([2, 4, 6, 32, 27]) ➞ "5 years"

Notes
Note the singular "year".
The younger spouse (if the spouses are not the same age) will be older than their oldest child by a minimum of 20 years.
The age difference between spouses will not be more than 18 years.
 */

export function ageDifference(ar:number[]){
  let [fAge, sAge, bigChild] = ar.sort((a, b) => b - a);
  let dif : number= fAge - sAge;

  if (sAge >= bigChild + 20 && dif <= 18){
    
    if (dif === 1 ) return `1 year`;
    
    else if (dif > 1) return `${dif} years`;
  }

  return `No age difference between spouses.`;
}

console.log(ageDifference([29, 1, 6, 8, 28]) === "1 year")
console.log(ageDifference([43, 86, 49, 86]) === "No age difference between spouses.")
console.log(ageDifference([2, 4, 6, 32, 27]) === "5 years")
console.log(ageDifference([55, 28, 25, 56, 20]) === "1 year")
console.log(ageDifference([21, 56, 69, 18]) === "13 years")
console.log(ageDifference([25, 70, 25, 26, 58]) === "12 years")
console.log(ageDifference([10, 12, 44, 9, 44]) === "No age difference between spouses.")
