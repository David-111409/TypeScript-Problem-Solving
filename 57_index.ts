/*Problem Description: 
Say Hello to Guests

Take a list of names.
Add "Hello" to every name.
Make one big string with all greetings.
The solution should be one string with a comma in between every "Hello (Name)".

Examples

greetPeople(["Joe"]) ➞ "Hello Joe"

greetPeople(["Angela", "Joe"]) ➞ "Hello Angela, Hello Joe"

greetPeople(["Frank", "Angela", "Joe"]) ➞ "Hello Frank, Hello Angela, Hello Joe"

Notes:
1- Each greeting has to be separated with a comma and a space.
2- If you're given an empty array [], return an empty string "".
 */



export function greetPeople(names: string[]): string{
  return names.map(name => `Hello ${name}`).join(", ");
}

console.log(greetPeople(["Joe"]));
console.log(greetPeople(["Angela", "Joe"]));
console.log(greetPeople(["Frank", "Angela", "Joe"]));
console.log(greetPeople(["Kyrill"]) ===  "Hello Kyrill")
console.log(greetPeople(["Kyrill", "Mom", "Dad", "Zuzu"]) === "Hello Kyrill, Hello Mom, Hello Dad, Hello Zuzu")
console.log(greetPeople([]) === "")
