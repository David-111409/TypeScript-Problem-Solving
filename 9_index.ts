/*Problem Description: 
Find First Character That Repeats
Create a function that takes a string and returns the first character that repeats.
If there is no repeat of a character, return "-1".

Examples

firstRepeat("legolas") ➞ "l"

firstRepeat("Gandalf") ➞ "a"

firstRepeat("Balrog") ➞ "-1"

firstRepeat("Isildur") ➞ "-1"
// Case sensitive "I" not equal to "i"

Notes
Tests are case sensitive.
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
