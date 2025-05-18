/*Problem Description: The Forbidden Letter

Given a letter and an array of words,
return whether the letter does not appear in any of the words.

Examples

forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false

forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true

forbiddenLetter("m", []) ➞ true

Notes
All inputs given will be in lowercase.
You will always be given a forbidden letter, but there may be empty arrays.
 */


export function forbiddenLetter(char:string, words: string[]):boolean{
  return !words.some(word => word.includes(char));
}

console.log(forbiddenLetter('e', ['rinse', 'and', 'repeat']), false);
console.log(forbiddenLetter('d', ['python', 'javascript', 'ruby', 'fortran']), true);
console.log(forbiddenLetter('a', ['spoon', 'fork', 'knife']), true);
console.log(forbiddenLetter('b', ['test', 'dot', 'assert', 'equals']), true);
console.log(forbiddenLetter('i', ['rock', 'paper', 'scissors']), false);
console.log(forbiddenLetter('t', []), true);
