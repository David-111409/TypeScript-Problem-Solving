/** Problem Description:
 
 * Solving Linear Equations (Part 1)
Consider the equation ax+1=b+x where a and b are constants.

Create a function that takes numbers a and b as arguments,
 and returns the solution of the equation. 
 If the equation does not have a solution, return "No solution". 
 If any number satisfies the equation, return "Any number".

Examples

solve(4, 7) ➞ 2.0
solve(9, 5) ➞ 0.5
solve(12, -4) ➞ -0.455

Notes
Round your answer to three decimal places.
 */
type sol = "No solution" | "Any number" | number;

export function solve(a:number, b:number) : sol{
    if (a === 1 && b === 1) return "Any number";

    else if ( a === 1 ) return "No solution";

    else {
        let solution = (b - 1) / (a - 1);
        return Math.round(solution * 1000) / 1000;
    }
}

console.log(solve(4, 7), 2.0)
console.log(solve(9, 5), 0.5)
console.log(solve(12, -4), -0.455)
console.log(solve(1, 1), "Any number")
console.log(solve(1, 2), "No solution")
console.log(solve(100, 7), 0.061)
console.log(solve(-2, -11), 4.0)
