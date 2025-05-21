/*Problem Description: 
Longest Sequence of Consecutive Zeroes

Write a function that returns the longest sequence of 
consecutive zeroes in a binary string.

Examples

longestZero("01100001011000") ➞ "0000"
longestZero("100100100") ➞ "00"
longestZero("11111") ➞ ""

Notes
If no zeroes exist in the input, return an empty string.
 */

export function longestZero(st:string): string{
    let count : number = 0, longest : number = 0;

    for (let ele of st){
      if (ele === "0") {
        count++;
        longest = Math.max(count, longest);
      }

      else{
        count = 0;
      }
    }

    return "0".repeat(longest);

}

console.log(longestZero("01100001011000") === "0000")
console.log(longestZero("100100100") === "00")
console.log(longestZero("111101") === "0")
console.log(longestZero("1000000000011101") === "0000000000")
console.log(longestZero("100001110000100000") === "00000")
console.log(longestZero("101001101"), "00")
console.log(longestZero("101010101"), "0")
console.log(longestZero("1001001"), "00")
console.log(longestZero("111111"), "")
