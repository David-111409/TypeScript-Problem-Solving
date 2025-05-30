/**
ES6: Destructuring Objects II
const obj =  { one : 1, two : 2 }

var { one, two } = obj
We can assign variables by the same name properties of objects, 
but what if I wanted to assign obj.one to a different name like anotherOne?

Use ES6 object destructuring to assign obj.one to the variable anotherOne. 
Variable two needs to remain assigned to obj.two
 */



let {one : anotherOne, two} = {one: 1, two:2};

console.log(anotherOne, two);
