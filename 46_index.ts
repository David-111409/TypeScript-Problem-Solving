/*Problem Description: 

Stretched Words
Write a function that takes a string, 
and returns a new string with 
any duplicate consecutive letters 
removed.

Examples

unstretch("ppoeemm") ➞ "poem"

unstretch("wiiiinnnnd") ➞ "wind"

unstretch("ttiiitllleeee") ➞ "title"

unstretch("cccccaaarrrbbonnnnn") ➞ "carbon"

Notes
Final strings won't include words with double letters 
(e.g. "passing", "lottery").
 */

export function unstretch(str:string) :string{
  if (str.length === 0) return "";

  let result = str[0];

  for (let i = 1 ; i < str.length; i++)
    if (str[i] !== str[i-1]) result += str[i];
  
  return result;
}

console.log(unstretch(""));
console.log(unstretch("wiiiiiiinnnnddd"));
console.log(unstretch('llossttttt'), 'lost')
console.log(unstretch('cccccaaaaannnnne'), 'cane')
console.log(unstretch('hhoooneestttt'), 'honest')
console.log(unstretch('ppppooowwddddeeerrrr'), 'powder')
console.log(unstretch('eexxpppppeeccctt'), 'expect')
console.log(unstretch('rrrrepooooorrttt'), 'report')
console.log(unstretch('pppaaaaattteeeennnntt'), 'patent')
console.log(unstretch('mmmeeemoooryy'), 'memory')
console.log(unstretch('vvvvviiiiisssuuaaalll'), 'visual')
console.log(unstretch('eeeennnnsuuurrre'), 'ensure')
console.log(unstretch('iiinncclludddddeee'), 'include')
console.log(unstretch('ttteestiffffyyy'), 'testify')
console.log(unstretch('ggrrrrraaaaavvvvviiitttyyyy'), 'gravity')
console.log(unstretch('cccuuuultttttuuuuurreee'), 'culture')
console.log(unstretch('qquaalliiifffyy'), 'qualify')
console.log(unstretch('iiinnccoooonnnnnggggrrrrruuuuooouuuuusss'), 'incongruous')
console.log(unstretch('eeeennnnttiiiitlllleeeeemmeennnttttt'), 'entitlement')
console.log(unstretch('aaaaassstttttooniiiiissshhiiinnnnnggg'), 'astonishing')
console.log(unstretch('cccccoiinnnncccciidddenncee'), 'coincidence')
console.log(unstretch('prrrrreeeppppaaaarrrrraaattiionn'), 'preparation')
