/*Problem Description: Upper or Lower Case

Return the smallest number of steps it takes to convert a string entirely into uppercase or entirely into lower case,
whichever takes the fewest number of steps. A step consists of changing one character from lower to upper case, or vice versa.

Examples

stepsToConvert("abC") ➞ 1
// "abC" converted to "abc" in 1 step

stepsToConvert("abCBA") ➞ 2
// "abCBA" converted to "ABCBA" in 2 steps

stepsToConvert("aba") ➞ 0

stepsToConvert("abaCCC") ➞ 3
Notes

-Return 0 if empty string.
-Return 0 if the string is already entirely in one case.
-Only alphabetic characters.
-Input has no spaces.
 */

export function stepsToConvert(str:string):number{
  let upper = 0, lower = 0;

  for (let letter of str){
    if (letter.toLowerCase() === letter) lower++;
    else upper++;
  }

  return lower < upper ? lower : upper;
}

console.log(stepsToConvert('abC'), 1);
console.log(stepsToConvert('abCBA'), 2);
console.log(stepsToConvert('aba'), 0);
console.log(stepsToConvert('ABA'), 0);
console.log(stepsToConvert('abaCCC'), 3);
console.log(stepsToConvert('abaaCCCDE'), 4);
console.log(stepsToConvert('CCaaCCaaCa'), 5);
console.log(stepsToConvert(''), 0, 'Return 0 if empty string.');
