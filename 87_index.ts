/**
Count the Number of Duplicate Characters
Create a function that takes a string and 
returns the number of alphanumeric characters that occur more than once.

Examples

duplicateCount("abcde") ➞ 0

duplicateCount("aabbcde") ➞ 2

duplicateCount("Indivisibilities") ➞ 2

duplicateCount("Aa") ➞ 0
// Case sensitive

Notes:::
Duplicate characters are case sensitive.
The input string will contain only alphanumeric characters.
 */
 
export function duplicateCount(str:string) {
    let count = 0;
    let mapping = new Map <string, number>() ;

    for (let char of str){
        if (mapping.has(char))
            mapping.set(char, (mapping.get(char) || 0) + 1);
        
        else mapping.set(char, 1);
    }

   for (let [_, valueCount] of mapping) {
    if (valueCount > 1)  
        count ++;
   }
    
   return count;

    
}

console.log(duplicateCount("abcde"), 0)
console.log(duplicateCount("Aa"), 0, "Duplicate characters are case sensitive.")
console.log(duplicateCount("aabbcde"), 2)
console.log(duplicateCount("aabbcdeB"), 2)
console.log(duplicateCount("indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2)
console.log(duplicateCount("aa1112"), 2)
console.log(duplicateCount("bb2c"), 1)
