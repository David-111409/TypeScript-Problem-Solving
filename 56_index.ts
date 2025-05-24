/*Problem Description: 
Distance Between Two Points

In this challenge, you have to find the distance between two points 
placed on a Cartesian plane. Knowing the coordinates of both the points, 
you have to apply the Pythagorean theorem to find the distance between them.

Two points on a Cartesian plane

Given two object literals a and b being the two points coordinates (x and y), 
implement a function that returns the distance between the points, 
rounded to the nearest thousandth.

Examples

getDistance({x: -2, y: 1}, {x: 4, y: 3}) ➞ 6.325

getDistance({x: 0, y: 0}, {x: 1, y: 1}) ➞ 1.414

getDistance({x: 10, y: -5}, {x: 8, y: 16}) ➞ 21.095
 */


type obj = {
  x : number,
  y : number
}
export function getDistance(obj1:obj, obj2: obj) : number{
  const {x : x1, y : y1} = obj1;
  const {x : x2, y : y2} = obj2;
  const dis : number = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

  return parseFloat(dis.toFixed(3));
}

console.log(getDistance({x: -2, y: 1}, {x: 4, y: 3}), 6.325, "Example #1")
console.log(getDistance({x: 0, y: 0}, {x: 1, y: 1}), 1.414, "Example #2")
console.log(getDistance({x: 10, y: -5}, {x: 8, y: 16}), 21.095, "Example #3")
console.log(getDistance({x: 4, y: 3}, {x: 3, y: -2}), 5.099)
console.log(getDistance({x: -1, y: -1}, {x: 10, y: 10}), 15.556)
console.log(getDistance({x: 100, y: 100}, {x: 100, y: 100}), 0)
console.log(getDistance({x: 14239, y: -11222}, {x: -12301, y: 12888}) === 35856.153)
