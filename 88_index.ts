/**Find the First Non-Repeated Character
Create a function that accepts a string as an argument and 
returns the first non-repeated character.

Examples

firstNonRepeatedCharacter("g") ➞ "g"

firstNonRepeatedCharacter("it was then the frothy word met the round night") ➞ "a"

firstNonRepeatedCharacter("the quick brown fox jumps then quickly blows air") ➞ "f"

firstNonRepeatedCharacter("hheelloo") ➞ false

firstNonRepeatedCharacter("") ➞ false
Notes

An empty string should return false.
If every character repeats, return false.
Don't worry about case sensitivity or non-alphanumeric characters.
 */
export function firstNonRepeatedCharacter(str:string): string | false{
    let map = new Map <string, number>();
    
    for (let char of str) {
       map.set(char, (map.get(char) || 0 )+ 1);
    }
  
    for (let [value, count] of map){
        if (count == 1) return value;
    }
  
    return false;
}

console.log(firstNonRepeatedCharacter("the quick brown fox jumps then quickly blows air"), "f")
console.log(firstNonRepeatedCharacter("the misty examination pleases into the drab county"), "x")
console.log(firstNonRepeatedCharacter("hheelloo"), false, "Return false when every character repeats.")
console.log(firstNonRepeatedCharacter("it was then the darling top met the whispering wing"), "d")
console.log(firstNonRepeatedCharacter(""), false, "An empty string should return false.")
console.log(firstNonRepeatedCharacter("it was then the frothy word met the round night"), "a")
console.log(firstNonRepeatedCharacter("is the remind zone better than the section"), "m")
console.log(firstNonRepeatedCharacter("b"), "b")
console.log(firstNonRepeatedCharacter("what if the brainy boss ate the afternoon"), "w")
console.log(firstNonRepeatedCharacter("the sympathetic mixture rejects into the leafy objective"), "p")
