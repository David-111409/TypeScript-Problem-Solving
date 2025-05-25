/*Problem Description: 
Shuffle the Name

Create a function that accepts a string (of a person's first and last name) 
and returns a string with the first and last name swapped.

Examples

nameShuffle("Donald Trump") ➞ "Trump Donald"

nameShuffle("Rosie O'Donnell") ➞ "O'Donnell Rosie"

nameShuffle("Seymour Butts") ➞ "Butts Seymour"
Notes

There will be exactly one space between the first and last name.
 */


export function nameShuffle(name: string): string{
  let [first, last] = name.split(" ");
  [first, last] = [last, first];

  return `${first} ${last}`;
}
console.log(nameShuffle("Donald Trump") === "Trump Donald");
console.log(nameShuffle("Rosie O'Donnel") ==="O'Donnel Rosie");
console.log(nameShuffle("Seymour Butts") ==="Butts Seymour");
console.log(nameShuffle("Ebony Greene") ==="Greene Ebony");
console.log(nameShuffle("Ken Kennedy") === "Kennedy Ken");
console.log(nameShuffle("Allison Gonzalez") === "Gonzalez Allison");
console.log(nameShuffle("Albert Frazier") ==="Frazier Albert");
console.log(nameShuffle("Eloise Hopkins") === "Hopkins Eloise");
console.log(nameShuffle("Donnie Welch"),"Welch Donnie");
console.log(nameShuffle("Vernon Thomas"),"Thomas Vernon");
