/*Problem Description: How Many Rectangles?

Let there be a square matrix, where each square is a rectangle,
and a combination of more squares are also rectangles.
To find the number of rectangles, Pete sat down and started counting... 
but that's highly inefficient.

Create a function that takes the order of the matrix as input
and returns the number of rectangles in them.

Examples
-rectangles(1) ➞ 1
-rectangles(2) ➞ 9
-rectangles(3) ➞ 36

Notes
-The input will always be an integer.
-Number of rectangles are given by: ((n(n+1))/2)^2

 */

export function rectangles(n:number):number{
   return Math.pow(n * (n + 1) / 2, 2) ;
}

console.log(rectangles(64), 4326400)
console.log(rectangles(76), 8561476)
console.log(rectangles(10), 3025)
console.log(rectangles(79) === 9985600)
console.log(rectangles(84) === 12744900)
console.log(rectangles(0), 0)
console.log(rectangles(60), 3348900)
console.log(rectangles(29), 189225)
console.log(rectangles(18), 29241)
console.log(rectangles(74) === 7700625)
console.log(rectangles(16) === 18496)
console.log(rectangles(64) === 4326400)
