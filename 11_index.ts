/*Problem Description: Default Mood

Create a function that takes in a current mood and return a sentence in the following format:
"Today, I am feeling {mood}". 
However, if no argument is passed, return "Today, I am feeling neutral".

Examples

moodToday("happy") ➞ "Today, I am feeling happy"
moodToday("sad") ➞ "Today, I am feeling sad"
moodToday() ➞ "Today, I am feeling neutral"
 */

export function moodToday(mood:string = "neutral"):string{
    return `Today, I am feeling ${mood}`;
}

console.log(moodToday("happy") === "Today, I am feeling happy")
console.log(moodToday("sad") === "Today, I am feeling sad")
console.log(moodToday("very happy") === "Today, I am feeling very happy")
console.log(moodToday("rather empty inside") === "Today, I am feeling rather empty inside")
console.log(moodToday("confused") === "Today, I am feeling confused")
console.log(moodToday() === "Today, I am feeling neutral")