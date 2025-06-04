/**
Find the Most Frequent Element in an Array

Create a function that takes an array and 
returns the most frequently occurring element contained within it.

Examples

findFrequent([3, 7, 3]) ➞ 3

findFrequent([null, "hello", true, null]) ➞ null

findFrequent([false, "up", "down", "left", "right", true, false]) ➞ false
 */

export function findFrequent(ar:any[]){
    let map  = new Map <any, number>();
    let mostFrequent = 0 ;
    let value;

    for (let ele of ar){
        map.set(ele, (map.get(ele) || 0) + 1);
    }
    
    for (let [ele, count] of map){
        if (count > mostFrequent){
            mostFrequent = count;
            value = ele;
        }
    }

    return value;
}

console.log(findFrequent([3, 7, 3]), 3);
console.log(findFrequent([null, "hello", true, null]), null);
console.log(findFrequent([false, "up", "down", "left", "right", true, false]), false);
console.log(findFrequent([undefined]), undefined);
console.log(findFrequent([1, 2, -3, true, false, undefined, "yes", "yeah", "yup", 2]), 2);
console.log(findFrequent(["Batman", "Superman", "Batman"]), "Batman");
