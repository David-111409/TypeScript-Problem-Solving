/**
* Problem Description:
*Max Adjacent Product
Given an array of integers,
find the pair of adjacent elements that have the largest product and return that product.

Examples

adjacentProduct([3, 6, -2, -5, 7, 3] ) ➞ 21
adjacentProduct([5, 6, -4, 2, 3, 2, -23]) ➞ 30
adjacentProduct([0, -1, 1, 24, 1, -4, 8, 10]) ➞ 80

Notes
Each array has at least two elements.
 */

function adjacentProduct(ar:number[]):number{
    
    let maxProduct = ar[0] * ar[1];
    
    for (let i = 1; i < ar.length - 1; i++){
        let product = ar[i] * ar[i+1];

        if (maxProduct < product)
            maxProduct = product;
    }

    return maxProduct;
    
}

console.log(adjacentProduct([3, 6, -2, -5, 7, 3]), 21)
console.log(adjacentProduct([5, 6, -4, 2, 3, 2, -23]) , 30)
console.log(adjacentProduct([0, -1, 1, 24, 1, -4, 8, 10]), 80)
console.log(adjacentProduct([1, 0, 1, 0, 1000]), 0)
console.log(adjacentProduct([-23, 4, -3, 8, -12]), -12)
console.log(adjacentProduct([-1, -2]), 2)
