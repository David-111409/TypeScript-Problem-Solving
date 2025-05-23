/*Problem Description: 

What Type of Triangle?
Create a function which returns the type of triangle, 
given the side lengths. Return the following values if they match the criteria.

No sides equal: "scalene"
Two sides equal: "isosceles"
All sides equal: "equilateral"
Less or more than 3 sides given: "not a triangle"

Examples

getTriangleType([2, 6, 5]) ➞ "scalene"

getTriangleType([4, 4, 7]) ➞ "isosceles"

getTriangleType([8, 8, 8]) ➞ "equilateral"

getTriangleType([3, 5, 5, 2]) ➞ "not a triangle"

Notes
You will be given an array of positive integers.
 */


export function getTriangleType(sides: number[]):string{
  if (sides.length === 3){
    let stSize = new Set(sides).size;
  
    if (stSize === 3) return "scalene";
    else if (stSize === 2) return "isosceles";
    else if (stSize === 1) return "equilateral";
  }

  return "not a triangle";
}
console.log(getTriangleType([2, 3, 4]), "scalene")
console.log(getTriangleType([4, 4, 7]), "isosceles")
console.log(getTriangleType([8, 8, 8]), "equilateral")
console.log(getTriangleType([3, 5, 5, 2]), "not a triangle")
console.log(getTriangleType([4, 4, 1]), "isosceles")
console.log(getTriangleType([4, 4, 2]), "isosceles")
console.log(getTriangleType([3, 1, 3]), "isosceles")
console.log(getTriangleType([1]), "not a triangle")
console.log(getTriangleType([4, 4, 3]), "isosceles")
console.log(getTriangleType([10]), "not a triangle")
console.log(getTriangleType([4, 1, 4]), "isosceles")
console.log(getTriangleType([3, 3, 3]), "equilateral")
console.log(getTriangleType([2, 3, 4]), "scalene")
console.log(getTriangleType([1, 5, 5]), "isosceles")
console.log(getTriangleType([5, 7, 4]), "scalene")
console.log(getTriangleType([3, 3, 2]), "isosceles")
console.log(getTriangleType([2, 1, 2]), "isosceles")
console.log(getTriangleType([9, 7, 9, 5, 3]), "not a triangle")
console.log(getTriangleType([4, 4, 1]), "isosceles")
console.log(getTriangleType([10, 8, 3, 2]), "not a triangle")
console.log(getTriangleType([4]), "not a triangle")
console.log(getTriangleType([4, 6, 9]), "scalene")
console.log(getTriangleType([4, 2, 5]), "scalene")
console.log(getTriangleType([6, 7]), "not a triangle")
console.log(getTriangleType([3, 2, 3]), "isosceles")
console.log(getTriangleType([2, 4, 4]), "isosceles")
console.log(getTriangleType([3, 3, 1]), "isosceles")
console.log(getTriangleType([12, 7, 6]), "scalene")
console.log(getTriangleType([6, 2, 6]), "isosceles")
console.log(getTriangleType([1, 2, 2]), "isosceles")
console.log(getTriangleType([1, 4, 4]), "isosceles")
console.log(getTriangleType([4, 4, 2]), "isosceles")
console.log(getTriangleType([3, 3, 2]), "isosceles")
console.log(getTriangleType([3, 3, 3]), "equilateral")
console.log(getTriangleType([9, 9, 3]), "isosceles")
console.log(getTriangleType([3, 3, 1]), "isosceles")
console.log(getTriangleType([4, 4, 4]), "equilateral")
console.log(getTriangleType([4, 3, 3]), "isosceles")
console.log(getTriangleType([3, 4, 4]), "isosceles")
console.log(getTriangleType([1, 4, 4]), "isosceles")
console.log(getTriangleType([4, 7, 9]), "scalene")
console.log(getTriangleType([1, 9, 9]), "isosceles")
console.log(getTriangleType([2, 2, 2]), "equilateral")
console.log(getTriangleType([100, 2, 100]), "isosceles")
