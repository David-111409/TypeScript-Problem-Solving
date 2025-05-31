/**
Repeating Letters N Times
Create a function that repeats each character in a string n times.

Examples

repeat("mice", 5) ➞ "mmmmmiiiiiccccceeeee"

repeat("hello", 3) ➞ "hhheeellllllooo"

repeat("stop", 1) ➞ "stop"
 */


export function repeat(str:string, n:number):string{
    let newString = "";

    for (let char of str) newString += char.repeat(n);

    return newString;
}

console.log(repeat("mice", 5) === "mmmmmiiiiiccccceeeee")
console.log(repeat("hello", 3) === "hhheeellllllooo")
console.log(repeat("stop", 1) === "stop")
console.log(repeat("tomato", 2) === "ttoommaattoo")
