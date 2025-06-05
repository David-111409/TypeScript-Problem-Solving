/**
Return Duplicate Numbers
Given an array nums where each integer is between 1 and 100, 
return a sorted array containing only duplicate numbers from the given nums array.

Examples

duplicateNums([1, 2, 3, 4, 3, 5, 6]) ➞ [3]

duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]) ➞ [72, 81, 99]

duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ null

Notes
The given array won't contain the same number three times.
 */

export function duplicateNums(ar: number[]){
    let map = new Map <number, number>();
    let duplicates : number[] = [];

    for (let num of ar){
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    for (let [value, count] of map){
        if (count === 2)
            duplicates.push(value);
    }

    return duplicates.length > 0 ? duplicates.sort((a, b) => a - b) : null;
}


console.log(duplicateNums([1, 2, 3, 4, 3, 5, 6]), [3])
console.log(duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), null)
console.log(duplicateNums([20, 30, 40, 30, 20, 40]), [20, 30, 40])
console.log(duplicateNums([100, 59, 12, 13, 54, 76, 100, 14, 12]), [12, 100])
console.log(duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]),[72, 81, 99])
console.log(duplicateNums([11, 22, 33, 44, 55, 44, 33, 22, 11]), [11, 22, 33, 44])
