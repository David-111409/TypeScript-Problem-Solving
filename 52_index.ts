/*Problem Description: 

Remove Surrounding Duplicate Items
Create a function that takes a sequence of either strings or numbers, 
removes the surrounding duplicates and 
returns an array of items without any items with the same value next to each other 
and preserves the original order of items.

Examples

uniqueInOrder("AAAABBBCCDAABBB") ➞ ["A", "B", "C", "D", "A", "B"]

uniqueInOrder("ABBCcAD") ➞ ["A", "B", "C", "c", "A", "D"]

uniqueInOrder([1, 2, 2, 3, 3]) ➞ [1, 2, 3]

Notes
The initial sequence of items can be either a string or an array.
Tests are case sensitive.
 */

export function uniqueInOrder(sequence:string|any[]):(string|number)[]{
  let ar : any[] = [];

  for (let ele of sequence)
    if (ar[ar.length - 1] !== ele) ar.push(ele);
  
  return ar;
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"])
console.log(uniqueInOrder("ABBCcAD"), ["A", "B", "C", "c", "A", "D"])
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3])
console.log(uniqueInOrder("12333355555522211133"), ["1", "2", "3", "5", "2", "1", "3"])
console.log(uniqueInOrder("uuUfffFgGggYtt76%5$$$"), ["u", "U", "f", "F", "g", "G", "g", "Y", "t", "7", "6", "%", "5", "$"])
console.log(uniqueInOrder(["1", "2", "2", "3", "3"]), ["1", "2", "3"])
console.log(uniqueInOrder([3, 7, 3, 8, 4]), [3, 7, 3, 8, 4])
console.log(uniqueInOrder("ABC"), ["A", "B", "C"])
console.log(uniqueInOrder("$$$%%%$$$%%%"), ["$", "%", "$", "%"])
console.log(uniqueInOrder([1, 1, 1, "A", "B", "B"]), [1, "A", "B"])
