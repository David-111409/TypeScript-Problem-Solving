/**
Both Zero, Negative or Positive
Write a function that 
returns true if both numbers are:

Smaller than 0, OR ...
Greater than 0, OR ...
Exactly 0
Otherwise, return false.

Examples
:::::::::
both(6, 2) ➞ true
both(0, 0) ➞ true
both(-1, 2) ➞ false
both(0, 2) ➞ false

Notes:
Inputs will always be two numbers.
 */

export function both(a:number, b:number):boolean{
    return a > 0 === b > 0;
}
console.log(both(0, 2));
[
	[6, 2, true],
	[-6, -9, true],
	[6, -2, false],
	[0, 0, true],
	[100, 1, true],
	[-0, 0, true],
	[-80, -5000, true],
	[6.28, -999, false],
	[-1, 2, false],
	[0, 2, false]
].forEach(x => console.log(both(x[0] as number, x[1] as number), x[2] as boolean))
