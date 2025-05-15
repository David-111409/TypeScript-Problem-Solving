/*Problem Description: Same ASCII?

Return true if the sum of ASCII values of the first string is 
same as the sum of ASCII values of the second string,
otherwise return false.

Examples

sameAscii("a", "a") ➞ true
sameAscii("AA", "B@") ➞ true
sameAscii("EdAbIt", "EDABIT") ➞ false
 */

export function sameAscii(first:string, second:string):boolean{
    let sum1 :number = 0, sum2 :number = 0;

    for (let i = 0; i < first.length; i++)
        sum1 += first.charCodeAt(i);
    
    for (let j = 0; j < second.length ; j++)
        sum2 += second.charCodeAt(j);

    return sum1 === sum2;
}

console.log(sameAscii("a", "a"), true)
console.log(sameAscii("A", "a"), false)
console.log(sameAscii("!", "g"), false)
console.log(sameAscii("aAAAaaAA", "~~~aa,"), true)
console.log(sameAscii("aUGSIGHIhiSJGijs", "~~~~~~~~~FF,"), false)
console.log(sameAscii("~~Tga2", "{}[]()I"), true)