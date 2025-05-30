/**
Radian to Degree
Create a function that takes an angle in radians and 
converts it into degrees.

Examples
toDegree(Math.PI) ➞ 180
toDegree(Math.PI/2) ➞ 90
toDegree(Math.PI/4) ➞ 45
 */

export function toDegree(radian: number):number{
    return Math.round(radian * 180 / Math.PI);
}

console.log(toDegree(2 * Math.PI), 360)
console.log(toDegree(Math.PI), 180)
console.log(toDegree(Math.PI / 2), 90)
console.log(toDegree(Math.PI / 4), 45)
console.log(toDegree(Math.PI / 3), 60)
