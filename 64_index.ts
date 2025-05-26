/*Problem Description: 
Lowercase, Uppercase or Mixed?

Create a function which returns "upper" if all the letters in a word are uppercase, 
"lower" if lowercase and "mixed" for any mix of the two.

Examples

getCase("whisper...") ➞ "lower"

getCase("SHOUT!") ➞ "upper"

getCase("Indoor Voice") ➞ "mixed"

Notes
Ignore punctuation, spaces and numbers.
 */

type typ = "lower" | "upper" | "mixed";

export function getCase(str:string): typ{
  
   const lettersOnly : string = str.replace(/[^a-zA-Z]/g, "");

   if (lettersOnly.toUpperCase() === lettersOnly) return "upper";

   else if (lettersOnly.toLowerCase() === lettersOnly) return "lower";

   return "mixed";
}

console.log(getCase("whisper..."), "lower")
console.log(getCase("SHOUT!"), "upper")
console.log(getCase("Indoor Voice"), "mixed")
console.log(getCase("324324Indoor66453546Voice434"), "mixed")
console.log(getCase("!!!!SHOUT!!!!"), "upper")
console.log(getCase("......313whisper2131232..."), "lower")
