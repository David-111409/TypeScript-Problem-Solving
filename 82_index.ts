/**
Check if Number is within a Given Range

Given a number and an object with min and max properties, 
return true if the number lies within the given range (inclusive).

Examples

isInRange(4, { min: 0, max: 5 }) ➞ true

isInRange(4, { min: 4, max: 5 }) ➞ true

isInRange(4, { min: 6, max: 10 }) ➞ false

isInRange(5, { min: 5, max: 5 }) ➞ true

Notes
Numbers can be positive or negative, and they may not be integers.
You can assume min <= max is always true.
 */

export function isInRange(n:number, range:{min:number, max: number}):boolean{
    return n >= range.min && n <= range.max;
}

console.log(isInRange(4, { min: 0, max: 5 }), true)
console.log(isInRange(4, { min: 4, max: 5 }), true)
console.log(isInRange(4, { min: 0, max: 4 }), true)
console.log(isInRange(4, { min: 6, max: 10 }), false)
console.log(isInRange(11, { min: 6, max: 10 }), false)
console.log(isInRange(5, { min: 5, max: 5 }), true)
console.log(isInRange(1.5, { min: 1.25, max: 1.75 }), true)
console.log(isInRange(1.1, { min: 1.25, max: 1.75 }), false)
console.log(isInRange(1.8, { min: 1.25, max: 1.75 }), false)
console.log(isInRange(-1, { min: -1, max: 1 }), true)
