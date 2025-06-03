/**Two Distinct Elements
In each input array, every number repeats at least once,
 except for two. Write a function that returns the two unique numbers.

Examples

returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]

returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]

returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]

Notes
Keep the same ordering in the output. 
*/

export function returnUnique(ar:number[]){
    let map : Map <number, number> = new Map ();
    let result : number[]= [];

    for (let num of ar){
        map.set(num , (map.get(num) || 0) + 1);
    }

    for (let [value, count] of map){
        if (count === 1){
            result.push(value);
        }
    }

    return result;
}

console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6]), [9, 7])
console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]), [2, 1])
console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]), [5, 6])
console.log(returnUnique([4, 3, 9, 9, 1, 1, 6, 1, 6, 2, 4]), [3, 2])
console.log(returnUnique([44, 44, 44, 2, 55, 55, 55, 0, 66, 66, 66]), [2, 0])
console.log(returnUnique([-9, -9, -9, 7, -9, -9, 1]), [7, 1])
console.log(returnUnique([2, 2, -19, 2, 7, 7, 4, 9, 9, 0, 0, 3, 3, 3]), [-19, 4])
