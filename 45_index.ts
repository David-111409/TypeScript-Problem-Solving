/*Problem Description: 

Remove Repeated Letters

Create a function that replaces all 
consecutively repeated letters in a word with single letters.

Examples

removeRepeats("aaabbbccc") ➞ "abc"

removeRepeats("bookkeeper") ➞ "bokeper"

removeRepeats("nananana") ➞ "nananana"
 */

export function removeRepeats(str:string):string{
  if (str.length === 0) return "";
  
  let result = str[0];

  for (let i = 1; i < str.length ; i++)
    if (str[i] !== str[i-1]) result += str[i];
  

  return result;
}

console.log(removeRepeats("aaabbbccc")=== "abc")
console.log(removeRepeats("bookkeeper")=== "bokeper")
console.log(removeRepeats("nananana")=== "nananana")
console.log(removeRepeats("accddbccabadcabccdababaacbdaadcccbcaabaaddbabbaadd")=== "acdbcabadcabcdababacbdadcbcabadbabad")
console.log(removeRepeats("aabbcabdcddddacdccacbbcabadccbbaadcccbddacbdbabbbd")=== "abcabdcdacdcacbcabadcbadcbdacbdbabd")
console.log(removeRepeats("dacbaabacbabacabcabaabdccccbdbbcaadddacdbdbdacbada")=== "dacbabacbabacabcababdcbdbcadacdbdbdacbada")
console.log(removeRepeats("cbdbcbcccbdbbcaaaacacbcabddcdcddcccbdaabdacbdcabbd")=== "cbdbcbcbdbcacacbcabdcdcdcbdabdacbdcabd")
console.log(removeRepeats("cdbdcdccccbcbbcdabbbbcababccadccabdcacabbcaccdaccd")=== "cdbdcdcbcbcdabcababcadcabdcacabcacdacd")
console.log(removeRepeats("bacbdbdadbbbdacbddbdcbadddabbaadcbbdabdaabcdddbacd")=== "bacbdbdadbdacbdbdcbadabadcbdabdabcdbacd")
console.log(removeRepeats("daadadccbcacacbacdbbaabaadbaabadacdacadbacdcababbb")=== "dadadcbcacacbacdbabadbabadacdacadbacdcabab")
console.log(removeRepeats("bbaccaccbbabbaacbacadadaddbadddbaacbadbcbdaabbbaaa")=== "bacacbabacbacadadadbadbacbadbcbdaba")
console.log(removeRepeats("dbdabdccbcdccccbcdbbbcaccdacdacdcacadaddaddbcbdddb")=== "dbdabdcbcdcbcdbcacdacdacdcacadadadbcbdb")
console.log(removeRepeats("cdaaaabbccaccacbdabdbbccbbddddddcadcbbccbccdbaddac")=== "cdabcacacbdabdbcbdcadcbcbcdbadac")
console.log(removeRepeats("dcccccaacdacbbdaccbabaacddcdddabcadbaaccaabdcabdad")=== "dcacdacbdacbabacdcdabcadbacabdcabdad")
console.log(removeRepeats("bcccabddbbacbacacddbbddbbccbdddbcbcabdabdcbccdaddd")=== "bcabdbacbacacdbdbcbdbcbcabdabdcbcdad")
console.log(removeRepeats("bcacaabaadcbbdadcddcdaaaddcccdabdbbaddddbabdccabda")=== "bcacabadcbdadcdcdadcdabdbadbabdcabda")
console.log(removeRepeats("adacddabacdcbdbadcaacacdcdcdbcdcdabdabbadcbdacbdcd")=== "adacdabacdcbdbadcacacdcdcdbcdcdabdabadcbdacbdcd")
console.log(removeRepeats("dbbbbbcddacdbdaacdaaaccbccdccbcbcdabdbddacbcaaadaa")=== "dbcdacdbdacdacbcdcbcbcdabdbdacbcada")
console.log(removeRepeats("bdbdbacabcbbacbcaadbcbcbbdaddacbaacabdccadaaddadca")=== "bdbdbacabcbacbcadbcbcbdadacbacabdcadadadca")
console.log(removeRepeats("bbabccadacbbbaabddbbcadacddacdcccbacbdcbacbabcabaa")=== "babcadacbabdbcadacdacdcbacbdcbacbabcaba")
console.log(removeRepeats("cadaadcbccbcbbdcadbcdcbaacacbcbabbbadaddadcdcacaab")=== "cadadcbcbcbdcadbcdcbacacbcbabadadadcdcacab")
console.log(removeRepeats("adbccadacaabbbcdcaabbdbcbdbbcccbcbadcdddcccbbdcdab")=== "adbcadacabcdcabdbcbdbcbcbadcdcbdcdab")
console.log(removeRepeats("dbbdddaaadccabbddbbcccbddacccccaabbcdbdbdcdacdbada")=== "dbdadcabdbcbdacabcdbdbdcdacdbada")
console.log(removeRepeats("acccdbbbcbdbbbcbaaabcaacacbbcccadddacbbbabbacbccca")=== "acdbcbdbcbabcacacbcadacbabacbca")
console.log(removeRepeats("cccbadadcbccacdababbaabdbdcacadabdddcaaaabbaadacca")=== "cbadadcbcacdabababdbdcacadabdcabadaca")
console.log(removeRepeats("cdcbdbcadadbbdacbdddaaaddbddcaacdaabcbdccacddacbdd") === "cdcbdbcadadbdacbdadbdcacdabcbdcacdacbd")
console.log(removeRepeats("bdccbadcddabaaccabbdbcdbabdaaddadcbdbaccbacbccdccc") === "bdcbadcdabacabdbcdbabdadadcbdbacbacbcdc")
console.log(removeRepeats("ddacbcadcccaaddbccdbbcdaccabccdaabdbbcddcbbdaccdcd")=== "dacbcadcadbcdbcdacabcdabdbcdcbdacdcd")
console.log(removeRepeats("dccbccdbccdcbdcdbadcbbcabbbadbddaaaabdbacaacbdcadd") === "dcbcdbcdcbdcdbadcbcabadbdabdbacacbdcad")
console.log(removeRepeats("accbccdbdaabbbacdcbadcccaccbcbdacaabdddaadbcbaabda") === "acbcdbdabacdcbadcacbcbdacabdadbcbabda")
console.log(removeRepeats("aabcddbcadaacdccbdbcccadcaadcdcbaacdbbaababdbcbabb") === "abcdbcadacdcbdbcadcadcdcbacdbababdbcbab")
console.log(removeRepeats("dccccccccbcacbbabccccbadadbdbdbaaabbccaccdddacbdab") === "dcbcacbabcbadadbdbdbabcacdacbdab")
console.log(removeRepeats("abbddddcdcbcccadbccdcaadddacbddadcccbaacdcdbddccab") === "abdcdcbcadbcdcadacbdadcbacdcdbdcab")
console.log(removeRepeats("dcdacdcbaabcbcbcbacdddabddcabddaaaaadcddcbbabaacbc") === "dcdacdcbabcbcbcbacdabdcabdadcdcbabacbc")
console.log(removeRepeats("cbabcbbbbbdcadcdcadaddadbbbdadbcdabbdddacbbdbcadab") === "cbabcbdcadcdcadadadbdadbcdabdacbdbcadab")
console.log(removeRepeats("aababacdcdcddacadcaddbbccbcbadccdadbbbaddbdaccbcba") === "ababacdcdcdacadcadbcbcbadcdadbadbdacbcba")
console.log(removeRepeats("ddcccbcadbcbbdcdcbbddddcbcdcabcaabdabcbdaddcabcdbd") === "dcbcadbcbdcdcbdcbcdcabcabdabcbdadcabcdbd")
console.log(removeRepeats("dbdadabbccacaaccdaccdbbdbdcacbacadcaabadbccbcbbabc") === "dbdadabcacacdacdbdbdcacbacadcabadbcbcbabc")
console.log(removeRepeats("bbabbddbbadacaadddbddabcabbccddaacbbdbdbccdcdbbdad") === "babdbadacadbdabcabcdacbdbdbcdcdbdad")
console.log(removeRepeats("cbdccccbccbacbcddbabdbabdabcadadbdbcbaddbcddcbdcdc") === "cbdcbcbacbcdbabdbabdabcadadbdbcbadbcdcbdcdc")
console.log(removeRepeats("bdbcacdcddbcadbaadcbcbdbdbdacacdccabbcaadbabbadaac") === "bdbcacdcdbcadbadcbcbdbdbdacacdcabcadbabadac")
console.log(removeRepeats("acaccbcccccaccddbdcbbacacbdccabddacabbdbdcacadddad") === "acacbcacdbdcbacacbdcabdacabdbdcacadad")
console.log(removeRepeats("dcdddddcbccdaaaaadbbbabaabbddbadaadcdcabaabdccaaca") === "dcdcbcdadbababdbadadcdcababdcaca")
console.log(removeRepeats("ddcdbcdcaddcaccbcdcaacbcddacadabacdddcbabdcddabaac") === "dcdbcdcadcacbcdcacbcdacadabacdcbabdcdabac")
console.log(removeRepeats("bccbbaadbcbccddbdbaddaadbbbbbdcdaaddcbcccbbababadc")===  "bcbadbcbcdbdbadadbdcdadcbcbababadc")
console.log(removeRepeats("dcdabcdcbbdcbdddbccbcdacbccbbcdbdabbacdbbacacdadca") === "dcdabcdcbdcbdbcbcdacbcbcdbdabacdbacacdadca")
console.log(removeRepeats("dbdbaaacdadbbcbdbcdccdaccaabbccdabbcadbaccbaadbdbb") === "dbdbacdadbcbdbcdcdacabcdabcadbacbadbdb")
console.log(removeRepeats("ccdccbdcabdacdcdcdcbdbaccdcbbbdbaaddbcabbcccbbcaba") ==="cdcbdcabdacdcdcdcbdbacdcbdbadbcabcbcaba")
console.log(removeRepeats("bbbccabdcaddcbcadaddaabddaadabcaddcdacbadcadbcadaa") === "bcabdcadcbcadadabdadabcadcdacbadcadbcada")
console.log(removeRepeats("dcadbbccadcbdaaacabacaaadbbdabdabccbcdbccabcbddabb") === "dcadbcadcbdacabacadbdabdabcbcdbcabcbdab")
console.log(removeRepeats("cccdaadabdcabcdababacaddadbddbbcbbcdaaddcdccabbbda") === "cdadabdcabcdababacadadbdbcbcdadcdcabda")
console.log(removeRepeats("aabcabbcdadcccbbdbcbcabdcbacacaabbabcbacbadddccddd") === "abcabcdadcbdbcbcabdcbacacababcbacbadcd")
console.log(removeRepeats("cdbcdacdabdadbddbcbaabadcdccbcccbbacbadccdbccadaba") === "cdbcdacdabdadbdbcbabadcdcbcbacbadcdbcadaba")
