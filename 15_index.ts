/*Problem Description: Flip the Boolean

Create a function that reverses a boolean value
and returns the string "boolean expected" 
if another variable type is given.

Examples
-reverse(true) ➞ false
-reverse(false) ➞ true
-reverse(0) ➞ "boolean expected"
-reverse(null) ➞ "boolean expected"
 */

export function reverse( val : any ) : boolean|"boolean expected"{
  if (typeof val !== "boolean" ) return "boolean expected";
  return !val;
}

console.log(reverse(false), true)
console.log(reverse(true), false)
console.log(reverse(0), "boolean expected")
console.log(reverse(null), "boolean expected")
console.log(reverse(undefined), "boolean expected")
console.log(reverse({}), "boolean expected")

