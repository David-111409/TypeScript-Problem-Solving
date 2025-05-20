/*Problem Description: 

Array from Comma-Delimited String
Write a function that turns 
a comma-delimited list into 
an array of strings.

Examples

toArray("watermelon, raspberry, orange")
➞ ["watermelon", "raspberry", "orange"]

toArray("x1, x2, x3, x4, x5")
➞ ["x1", "x2", "x3", "x4", "x5"]

toArray("a, b, c, d")
➞ ["a", "b", "c", "d"]

toArray("")
➞ []

Notes
Return an empty array for an empty string.
 */

export function toArray( str : string ) : string[]{
  if (str.length === 0) return [];
  return str.split(", ");
}

console.log(toArray("watermelon, raspberry, orange"), ["watermelon", "raspberry", "orange"])
console.log(toArray("x1, x2, x3, x4, x5"), ["x1", "x2", "x3", "x4", "x5"])
console.log(toArray("a, b, c, d"), ["a", "b", "c", "d"])
console.log(toArray(""), [])