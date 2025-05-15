/*
Concatenating First and Last Character of a String
Create a function that takes a string and returns the concatenated first and last character.

Examples

firstLast("ganesh") ➞ "gh"

firstLast("kali") ➞ "ki"

firstLast("shiva") ➞ "sa"

firstLast("vishnu") ➞ "vu"

firstLast("durga") ➞ "da"

Notes:

There is no empty string.
*/

function firstLast(str:string):string{
    let first = str[0], last = str[str.length-1];
    return `${first}${last}`
}

console.log(firstLast("ganesh"), "gh")
console.log(firstLast("kali"), "ki")
console.log(firstLast("shiva"), "sa")
console.log(firstLast("vishnu"), "vu")
console.log(firstLast("durga"), "da")
console.log(firstLast("brahma"), "ba")





