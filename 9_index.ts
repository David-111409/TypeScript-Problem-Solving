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

// This is a slower solution
export function firstRepeat2(str:string):string{
    for (let i = 0 ; i < str.length - 1; i++){
        for (let j = i+1; j < str.length; j++)
            if ( str[i] === str[j]) return str[i];
        
    }
    return "-1";
}

// This is a faster solution
function firstRepeat(str:string):string{
    let seen = new Set<string>();

    for (let letter of str){
        if (seen.has(letter)) return letter;
        seen.add(letter);
    }
    return "-1";
}
console.log(firstRepeat("legolas"), "l")
console.log(firstRepeat("Balrog"), "-1")
console.log(firstRepeat("Isildur"), "-1")
console.log(firstRepeat("Gollum"), "l")
console.log(firstRepeat("Galadriel"), "a")
console.log(firstRepeat("pippin"), "p")
console.log(firstRepeat("Saruman"), "a")