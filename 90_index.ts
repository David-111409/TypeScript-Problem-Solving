/**
 * 
Create a function that determines if the temp of the water is considered boiling or not.
 temp will be measured in Fahrenheit and Celsius.

Examples

isBoiling("212F") ➞ true

isBoiling("100C") ➞ true

isBoiling("0F") ➞ false

Notes
The boiling point of water is 212F in Fahrenheit and 100C in Celsius.
 */

export function isBoiling(temp: string): boolean {

    let Num  = parseFloat(temp);
    let typ = temp[temp.length - 1];

    if ( typ === "F")
        return Num >= 212;

    else if (typ === "C") return Num >= 100;

    return false;

}


console.log(isBoiling("212F"), true)
console.log(isBoiling("100C"), true)
console.log(isBoiling("0F"), false)
console.log(isBoiling("-1F"), false)
console.log(isBoiling("213F"), true)
console.log(isBoiling("104C"), true)
console.log(isBoiling("-10F"), false)
console.log(isBoiling("120F"), false)
