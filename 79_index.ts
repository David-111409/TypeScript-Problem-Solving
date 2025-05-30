/**
Get Word Count
Create a function that takes a string and 
returns the word count. 
The string will be a sentence.

Examples:
countWords("Just an example here move along") ➞ 6
countWords("This is a test") ➞ 4
countWords("What an easy task, right") ➞ 5
 */

export function countWords(sent:string):number{
    return sent.split(" ").length;
}

console.log(countWords("Just an example here move along"));
console.log(countWords("This is a test"));
console.log(countWords("What an easy task, right"))
console.log(countWords("It's high noon"), 3)
console.log(countWords("Is this easy mode"), 4)
console.log(countWords("How are you today?"), 4)
