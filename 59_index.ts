/*Problem Description: 
Pricey Products

You will be given an object with various consumer products and their respective prices. 
Return a list of the products with a minimum price of 500 in descending order.

Examples

products({"Computer" : 600, "TV" : 800, "Radio" : 50}) ➞ ["TV","Computer"]

products({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501}) ➞ ["Bike1", "Bike3"]) 

products({"Loafers" : 50, "Vans" : 10, "Crocs" : 20}) ➞ []
 */


export function products(objs: {[key : string] : number}):string[]  {
  let res = Object.entries(objs).filter(tup => tup[1] >= 500);

  return res.sort((tup1, tup2) => tup2[1] - tup1[1]).map(tup => tup[0]);
}


console.log(products({"Computer" : 600, "TV" : 800, "Radio" : 100}), ["TV","Computer"])
console.log(products({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501}), ["Bike1", "Bike3"])
console.log(products({"Calvin Klein" : 500, "Armani" : 5000, "Dolce & Gabbana" : 2000}), ["Armani", "Dolce & Gabbana", "Calvin Klein"])
console.log(products({"Loafers" : 50, "Vans" : 10, "Crocs" : 20}), [])
console.log(products({"Dell" : 400, "HP" : 300, "Apple" : 1200}), ['Apple'])
