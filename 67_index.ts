/*Problem Description: 
Recursion: Halve and Halve Again

Given two integers a and b, 
return how many times a can be halved while still being greater than b.

Examples

halveCount(4666, 544) ➞ 3
// (4666 -> 2333 -> 1166.5 -> 583.25)

halveCount(466, 54) ➞ 3
// (466 -> 233 -> 116.5 -> 58.25)

halveCount(1324, 98) ➞ 3
// (1324 -> 662 -> 331 -> 165.5)

halveCount(624, 8) ➞ 6
// (624 -> 312 -> 156 -> 78 -> 39 -> 19.5 -> 9.75)

halveCount(1000, 3) ➞ 8
// (1000 -> 500 -> 250 -> 125 -> 62.5 -> 31.25 -> 15.625 -> 7.8125 -> 3.90625)
 */


 
 
export function halveCount(a:number, b:number):number{
   if (a <= b) return -1;

   return 1 + halveCount(a / 2, b);
} 


let [actualParam, expectedParam] = [
  [
    [4666, 544], [466, 54], [8, 2], [1891, 4], [1756, 14], [7764, 2], [1118, 47], [161, 79], [8573, 35], [4123, 1],
    [1348, 60], [7549, 31], [4469, 5], [1123, 98], [8197, 85], [1199, 56], [8845, 4], [606, 67], [3375, 6], [7085, 10],
    [299, 5], [1208, 82], [3635, 73], [2382, 3], [320, 80]
  ],
  [3, 3, 1, 8, 6, 11, 4, 1, 7, 12, 4, 7, 9, 3, 6, 4, 11, 3, 9, 9, 5, 3, 5, 9, 1]
];

for (let i in actualParam) console.log(halveCount(actualParam[i][0], actualParam[i][1]), expectedParam[i])
