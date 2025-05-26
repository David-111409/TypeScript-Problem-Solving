/*Problem Description: 
Case Insensitive Comparison

Write a function that validates whether two strings are identical. 
Make it case insensitive.

Examples

match("hello", "hELLo") ➞ true

match("motive", "emotive") ➞ false

match("venom", "VENOM") ➞ true

match("mask", "mAskinG") ➞ false
 */


export function match(str1: string, str2:string): boolean{
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(match("hello", "hELLo"));
console.log(match("hello", "hELLo"), true)
console.log(match("hey", "hey"), true)
console.log(match("venom", "VENOM"), true)
console.log(match("maGIciAN", "magician"), true)
console.log(match("stupIFy", "stupifY"), true)
console.log(match("bald", "blad"), false)
console.log(match("motive", "emotive"), false)
console.log(match("mask", "mAskinG"), false)
console.log(match("skim", "skimp"), false)
console.log(match("EXCEl", "exceLs"), false)
