/**
Pluralize!
Given a list of words in the singular form, 
return a set of those words in the plural form if they appear more than once in the list.

Examples

pluralize(["cow", "pig", "cow", "cow"]) ➞ ["cows", "pig"]

pluralize(["table", "table", "table"]) ➞ ["tables"]

pluralize(["chair", "pencil", "arm"]) ➞ ["chair", "pencil", "arm"]
Notes

This is an oversimplification of the English language so no edge cases will appear.
Only focus on whether or not to add an s to the ends of words.
All tests will be valid.
 */

export function pluralize(words: string[]): string[]{
    let map  = new Map<string , number>();
    let ar = [];

    for (let word of words){
        map.set(word, (map.get(word) || 0) + 1);
    }

    for (let [word, count] of map){
        if (count > 1) ar.push(`${word}s`);
        else ar.push(word);
    }

    return ar;
}


let [expected, actual] = [
  [["cows", "pig"], ["tables"],  ["chair", "pencil", "arm"], ["list"], ["sets", "tuples", "strings", "integer"]],
  [["cow", "pig", "cow", "cow"], ["table", "table", "table"], ["chair", "pencil", "arm"], ["list"],
  ["set", "set", "tuple", "tuple", "string", "string", "string", "string", "integer"]]
]
for (let i in expected) console.log(pluralize(actual[i]), expected[i])
