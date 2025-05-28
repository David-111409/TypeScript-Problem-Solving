/**
 * Make a Vessel of Height
A company asks a small-scale manufacturer to produce packaging 
in which they can ship their cooking oil. The company also gives 
the design for how the vessel should look (the shaded portion filled in the image below). 
Depending upon the volume of oil to be packaged, the company requires vessels of varying height.

Create a function to determine what the height of the vessel should be,
depending on the given volume of oil. 
Return height of the vessel in centimeters, with up to two decimals of precision.

Cone in Cylinder

Examples

heightNeeded(0.5) ➞ 19.1

heightNeeded(5) ➞ 190.99

heightNeeded(10) ➞ 381.97

Notes
Assume the radius (5cm) will stay constant for all different volume vessels.
volume will be given in the unit of litre.
 */

export function heightNeeded(v: number) : number{

    let height : number = 120 * v / Math.PI;

    return Math.round(100 * height) / 100;
}

console.log(heightNeeded(.5));
console.log(heightNeeded(1), 38.2)
console.log(heightNeeded(3), 114.59)
console.log(heightNeeded(0.5), 19.1)
console.log(heightNeeded(10), 381.97)
console.log(heightNeeded(5), 190.99)
