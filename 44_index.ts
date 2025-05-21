/*Problem Description: 
Capital Split
Create a function which adds spaces 
before every capital in a word. 
Uncapitalize the whole string afterwards.

Examples
-----------
capSpace("helloWorld") ➞ "hello world"
capSpace("iLoveMyTeapot") ➞ "i love my teapot"
capSpace("stayIndoors") ➞ "stay indoors"

Notes
The first letter will stay uncapitalized.
 */

export function capSpace(str:string):string{
  let newString = "";

  for (let letter of str){
    if (letter.toUpperCase() === letter)
      newString += ` ${letter.toLowerCase()}`;
    else {
      newString += letter;
    }
  }
  
  return newString;
}

console.log(capSpace("helloWorld"));
console.log(capSpace("iLoveMyTeapot"));
console.log(capSpace("stayIndoors"));
