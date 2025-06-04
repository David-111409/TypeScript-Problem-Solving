/**
Is One Array a Subset of Another?
Create a function that returns true if the 
first array is a subset of the second. Return false otherwise.

Examples

isSubset([3, 2, 5], [5, 3, 7, 9, 2]) ➞ true

isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]) ➞ true

isSubset([1, 2], [3, 5, 9, 1]) ➞ false

Notes
Both arrays will contain only unique values.
 */


export function isSubset(ar1 :number[], ar2:number[]){
    let set = new Set (ar2);
  
    for (let num of ar1){
        if (!set.has(num)) return false;;
    }
   
    return true;
}


console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2]), true)
console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]), true)
console.log(isSubset([1, 2], [1, 2, 3]), true)
console.log(isSubset([1, 2], [3, 5, 9, 1]), false)
console.log(isSubset([1, 2, 3, 4], [4, 3, 2, 1]), true)
console.log(isSubset([7, 9, 8, 4, 2], [7, 9, 5, 8, 4]), false)
