/**Disarium Number
A number is said to be Disarium if the sum of its digits 
raised to their respective positions is the number itself.

Create a function that determines whether a number is a Disarium or not.

Examples

isDisarium(75) ➞ false
// 7^1 + 5^2 = 7 + 25 = 32

isDisarium(135) ➞ true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

isDisarium(544) ➞ false

isDisarium(518) ➞ true

isDisarium(8) ➞ true

isDisarium(466) ➞ false
 */

export function isDisarium(n: number): boolean{
    let ar : number[] = n.toString().split("").map(Number);

    function convert(ar: number[], start = 1): number{
        if (start > ar.length) return 0;
        
        return (ar[start-1] ** start)  +   convert(ar, start + 1);
    }
    
    return convert(ar) === n;
}


console.log(isDisarium(466));
let [numVector, resVector] = [
    [6, 75, 135, 466, 372, 175, 1, 696, 876, 89, 518, 598],
    [true, false, true, false, false, true, true, false, false, true, true, true]
  ]
  for (let i in numVector) console.log(isDisarium(numVector[i]), resVector[i])
