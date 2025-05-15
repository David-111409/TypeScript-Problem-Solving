/*Problem Description: Letters Only
Check if the given string consists of only letters and spaces 
and if every letter is in lower case.

Examples

lettersOnly("JAVACRIPT") ➞ false

lettersOnly("javascript") ➞ true

lettersOnly("12321313") ➞ false

lettersOnly("i have spaces") ➞ true

lettersOnly("i have numbers(1-10)") ➞ false

lettersOnly("") ➞ false

Notes >>
-Empty arguments will always return false.
-Input values will be mixed (symbols, letters, numbers).
 */

export function lettersOnly(str:string):boolean{
    return /^[a-z\s]+$/.test(str) && str.length > 0;
}

console.log(lettersOnly("javascript"), true)
console.log(lettersOnly("JAVACRIPT"), false)
console.log(lettersOnly("html css javascript"), true)
console.log(lettersOnly("12321313"), false)
console.log(lettersOnly("@-=001-302;4'23"), false)
console.log(lettersOnly("the quick brown fox"), true)
console.log(lettersOnly("hello 123 world"), false)
console.log(lettersOnly("i have spaces"), true)
console.log(lettersOnly(""), false)
console.log(lettersOnly("i have numbers 1 and 2)"), false)