/**
Maximum Weight Allowed
Create a function that returns true if the combined weight of a car car 
and the weight of the passengers p in the car is less than the maximum weight maxWeight the car is allowed to carry. 
Otherwise, return false. The weight of the car and the weight of the passengers are given in pounds. The maximum weight is given in kilograms.

Examples

weightAllowed(3000, [150, 201, 75, 88, 195], 1700) ➞ true

weightAllowed(3200, [220, 101, 115, 228, 15], 1700) ➞ false

weightAllowed(2900, [225, 171, 300, 274, 191], 1850) ➞ true

Notes
1 pound = 0.453592 kilogram
 */




export function weightAllowed(car: number, weighs: number[], allowed:number): boolean{
    let sum : number = weighs.reduce((a, b) => a + b, 0);

    return (sum  + car) * .453592 <  allowed;
}

console.log(weightAllowed(3000, [150, 201, 75, 88, 195], 1700), true);
console.log(weightAllowed(3200, [220, 101, 115, 228, 15], 1700), false);
console.log(weightAllowed(2900, [225, 171, 300, 274, 191], 1850), true);
console.log(weightAllowed(3550, [180, 201, 140, 99, 204], 1980), false);
console.log(weightAllowed(4500, [157, 154, 75, 88, 190], 2400), true);
console.log(weightAllowed(4000, [150, 200, 79, 80, 159], 2000), false);
