/**
The 3 Programmers Problem (very easy one)
You hired three programmers and you (hopefully) pay them. 
Create a function that takes three numbers (the hourly wages of each programmer) 
and returns the difference between the highest-paid programmer and the lowest-paid.

Examples
programmers(147, 33, 526) ➞ 493
programmers(33, 72, 74) ➞ 41
programmers(1, 5, 9) ➞ 8
 */
export function programmers(...programmers:[number, number,number]): number{
    return Math.max(...programmers) - Math.min(...programmers);
}

console.log(programmers(1,   5,   9),   8)
console.log(programmers(43,  33,  43),  10)
console.log(programmers(88,  14,  23),  74)
console.log(programmers(33,  72,  74),  41)
console.log(programmers(147, 33,  526), 493)
console.log(programmers(234, 345, 457), 223)
