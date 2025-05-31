/**
String to Integer and Vice Versa
Write two functions:

toInt() : A function to convert a string to an integer.
toStr() : A function to convert an integer to a string.

Examples
toInt("77") ➞ 77

toInt("532") ➞ 532

toStr(77) ➞ "77"

toStr(532) ➞ "532"
 */


export function toInt(value: string): number{
    return Number(value);
}

export function toStr(value: number): string{
    return `${value}`;
}

console.log(toInt("37"), 37)
console.log(toInt("113"), 113)
console.log(toInt("5"), 5)
console.log(toInt("5231"), 5231)
console.log(toStr(37), "37")
console.log(toStr(113), "113")
console.log(toStr(5), "5")
console.log(toStr(5231), "5231")
