/**
 Calculate Determinant of a 2x2 Matrix
Create a function to calculate the determinant of a 2 * 2 matrix. 
The determinant of the following matrix is: ad - bc:

[[a, b], [c, d]]
Examples

calcDeterminant([
  [1, 2],
  [3, 4]
]) ➞ -2

calcDeterminant([
  [5, 3],
  [3, 1]
]) ➞ -4

calcDeterminant([
  [1, 1],
  [1, 1]
]) ➞ 0
 
Notes
Matrix will be in 2 * 2 form only.
 */


export function calcDeterminant([[a, b], [c, d]]:[[number, number], [number, number]]):number{
    return a * d - b * c;
}


console.log(calcDeterminant([
	[1, 2],
	[3, 4]
]), -2)

console.log(calcDeterminant([
	[5, 3],
	[3, 1]
]), -4)

console.log(calcDeterminant([
	[1, 1],
	[1, 1]
]), 0)

console.log(calcDeterminant([
	[1, 1],
	[1, 0]
]), -1)
