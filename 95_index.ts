/**
Convert Year to Century
Write a function that takes a year and returns its corresponding century.

Examples

centuryFromYear(2005) ➞ 21

centuryFromYear(1950) ➞ 20

centuryFromYear(1900) ➞ 19

Notes:::
For guidance on the year boundaries for each century:
The 19th century are the years from 1801 to 1900.
The 20th century are the years from 1901 to 2000.
*/

export function centuryFromYear(year:number):number{
    if (year % 100 === 0) return year / 100;
    
    return Math.ceil(year / 100);
}

console.log(centuryFromYear(2020), 21)
console.log(centuryFromYear(200), 2)
console.log(centuryFromYear(2005), 21)
console.log(centuryFromYear(1700), 17)
console.log(centuryFromYear(1705), 18)
