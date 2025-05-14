/**
The problem Details:

How Many Solutions Does This Quadratic Have?
A quadratic equation a x² + b x + c = 0 has either 
0, 1, or 2 distinct solutions for real values of x. 
Given a, b and c, you should return the number of
solutions to the equation.

Examples

solutions(1, 0, -1) ➞ 2
// x² - 1 = 0 has two solutions (x = 1 and x = -1).

solutions(1, 0, 0) ➞ 1
// x² = 0 has one solution (x = 0).

solutions(1, 0, 1) ➞ 0
// x² + 1 = 0 has no real solutions.

Notes

You do not have to calculate the solutions, just return how many there are.
a will always be non-zero.
 */

type val = 0 | 1 | 2;

function solutions(a:number, b:number, c:number):val{

    let det = Math.pow(b, 2) - 4 * a * c;

    if (det > 0) return 2;

    else if (det === 0) return 1;

    else return 0;
}
console.log(solutions(1, 0, -1), 2)
console.log(solutions(1, 0, 0), 1)
console.log(solutions(1, 0, 1), 0)
console.log(solutions(200, 420, 800), 0)
console.log(solutions(200, 420, -800), 2)
console.log(solutions(1000, 1000, 0), 2)
console.log(solutions(10000, 400, 4), 1)


