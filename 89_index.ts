
/**Modifying the Last Character
Create a function which makes the last character of a string repeat n number of times.

Examples

modifyLast("Hello", 3) ➞ "Hellooo"

modifyLast("hey", 6) ➞ "heyyyyyy"

modifyLast("excuse me what?", 5) ➞ "excuse me what?????"
Notes

Tests will include numbers and punctuation.
Make sure your code is not case sensitive. */


export function modifyLast(str: string, n:number):string{
    if (str.length === 0 ) return "";
    let last : string = str[str.length - 1].repeat(n);

    return str.slice(0, -1) + last;
}

console.log(modifyLast("Hello", 3) === "Hellooo")
console.log(modifyLast("hey", 6) === "heyyyyyy")
console.log(modifyLast("plsssss!1!", 5) === "plsssss!1!!!!!")
console.log(modifyLast("gr", 2) === "grr")
console.log(modifyLast("excuse me what?", 5) === "excuse me what?????")
console.log(modifyLast("123", 5) === "1233333")
console.log(modifyLast("a", 3) === "aaa")
console.log(modifyLast("", 3));
console.log(modifyLast("STOP", 3) === "STOPPP")
