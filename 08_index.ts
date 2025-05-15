/*Problem Description: 
Longest Daily Streak

Create a function that takes an array of booleans 
that represent whether or not a player has logged into a game that day.
Output the longest streak of consecutive logged in days.

Examples

dailyStreak([true, true, false, true]) ➞ 2

dailyStreak([false, false, false]) ➞ 0

dailyStreak([true, true, true, false, true, true]) ➞ 3

Notes
Return your output as an integer.
If a given array is all false, return 0 (see example #2).
 */

export function dailyStreak(days:boolean[]):number{
    let longest = 0, count = 0;

    for (let day of days){
        if (day){
            count ++;
            longest = Math.max(longest, count);
        }
        else count = 0;
    }

    return longest;
}

console.log(dailyStreak([true, true, false, true]), 2)
console.log(dailyStreak([false, false, false]), 0)
console.log(dailyStreak([true, true, true, false]), 3)
console.log(dailyStreak([true, true, true, false, true, true]), 3)
console.log(dailyStreak([true, false]), 1)
console.log(dailyStreak([true, false, true]), 1)
console.log(dailyStreak([true, false, true, true]), 2)
