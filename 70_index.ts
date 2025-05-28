/**
 * 
Solve a Linear Equation
Create a function that returns the value of x 
(the "unknown" in the equation). Each equation will be formatted like this:

x + 6 = 12
Examples

solve("x + 43 = 50") ➞ 7

solve("x - 9 = 10") ➞ 19

solve("x + 300 = 100") ➞ -200

Notes
"x" will always be in the same place (you will not find an equation like 6 + x = 12).
Every equation will include either subtraction (-) or addition (+).
"x" may be negative.
 */



export function solve(equa: string):number{

    let  [_ , sign , first ,  , second] = equa.split(" ");
    let a = +first;
    let b = +second;

    if (sign === "+") return b - a;

    return b + a;
}


console.log(solve("x + 43 = 50"), 7)
console.log(solve("x - 9 = 10"), 19)
console.log(solve("x + 300 = 100"), -200)
console.log(solve("x - 0 = 0"), 0)
console.log(solve("x + 188 = 866"), 678)
console.log(solve("x + -500 = -200"), 300)
