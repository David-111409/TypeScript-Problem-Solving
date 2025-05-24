/*Problem Description: 
Geometry 1: Length of Line Segment

Write a function that takes coordinates of two points 
on a two-dimensional plane and 
returns the length of the line segment 
connecting those two points.

Examples

lineLength([15, 7], [22, 11]) ➞ 8.06

lineLength([0, 0], [0, 0]) ➞ 0

lineLength([0, 0], [1, 1]) ➞ 1.41

Notes:
1- The order of the given numbers is X, Y.
2- This challenge is easier than it looks.
3- Round your result to two decimal places.
 */


export function lineLength(point1:[number, number], point2:[number,  number]): number{
  const [x1, y1] = point1;
  const [x2, y2] = point2;
  const line : number = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));

  return parseFloat(line.toFixed(2));
}

console.log(lineLength([15, 7], [22, 11]), 8.06)
console.log(lineLength([0, 0], [0, 0]), 0)
console.log(lineLength([0, 0], [1, 1]), 1.41)
console.log(lineLength([30, 10], [13, -5]), 22.67)
