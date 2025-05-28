interface typ{
    name:string;
    sprinkle:number;
}

export const flavorSweetness: Map<string, number> = new Map([
    ["Plain", 0],
    ["Vanilla", 5],
    ["ChocolateChip", 5],
    ["Strawberry", 10],
    ["Chocolate", 10],
  ]);
  
export class IceCream implements typ{
    name: string;
    sprinkle: number;
    constructor(name:string, sprinkle: number){
        this.name = name;
        this.sprinkle = sprinkle;
    }
}


export function sweetestIcecream(ar: typ[]) : number{
    return Math.max(...ar.map(ice => {
        let {name, sprinkle} = ice;
        let sweetness = flavorSweetness.get(name);
        return (sweetness as number) + sprinkle;
    }));
};

let ice1 = new IceCream("Chocolate", 13)        
let ice2 = new IceCream("Vanilla", 0)         
let ice3 = new IceCream("Strawberry", 7)        
let ice4 = new IceCream("Plain", 18)             
let ice5 = new IceCream("ChocolateChip", 3)      
let ice6 = new IceCream("Chocolate", 23)
let ice7 = new IceCream("Strawberry", 0)
let ice8 = new IceCream("Plain", 34)
let ice9 = new IceCream("Plain", 81)
let ice10 = new IceCream("Vanilla", 12)

console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]), 23)
console.log(sweetestIcecream([ice7, ice10, ice1, ice6, ice8, ice10, ice2, ice2]), 34)
console.log(sweetestIcecream([ice10, ice10, ice6, ice8, ice4]), 34)
console.log(sweetestIcecream([ice2, ice10, ice6, ice9, ice7]), 81)
console.log(sweetestIcecream([ice10, ice6, ice4, ice1, ice7, ice8, ice6]), 34)
console.log(sweetestIcecream([ice3, ice1]), 23)
console.log(sweetestIcecream([ice6, ice7, ice5, ice4, ice3]), 33)
console.log(sweetestIcecream([ice4, ice8, ice9]), 81)
console.log(sweetestIcecream([ice5, ice7]), 10)
console.log(sweetestIcecream([ice5, ice3, ice6, ice2, ice7, ice2, ice7, ice2]), 33)
console.log(sweetestIcecream([ice1, ice9, ice10, ice9, ice7, ice1, ice9]), 81)
console.log(sweetestIcecream([ice1, ice4]), 23)
console.log(sweetestIcecream([ice7, ice4]), 18)
console.log(sweetestIcecream([ice1, ice8, ice6, ice7, ice3, ice2, ice3, ice7]), 34)
console.log(sweetestIcecream([ice7, ice8, ice4, ice4, ice5, ice1]), 34)
console.log(sweetestIcecream([ice10, ice10, ice9, ice4, ice7, ice9]), 81)
console.log(sweetestIcecream([ice3, ice10, ice1]), 23)
console.log(sweetestIcecream([ice3, ice4, ice7, ice3, ice7, ice10, ice2]), 18)
console.log(sweetestIcecream([ice5, ice9, ice9, ice9, ice7, ice5, ice9, ice7]), 81)
console.log(sweetestIcecream([ice4, ice9, ice2]), 81)
console.log(sweetestIcecream([ice8, ice2, ice2, ice2, ice4, ice8]), 34)
console.log(sweetestIcecream([ice4, ice9, ice4, ice3, ice3, ice2, ice5, ice2]), 81)
console.log(sweetestIcecream([ice8, ice10, ice5]), 34)
console.log(sweetestIcecream([ice10, ice3, ice2, ice1, ice9]), 81)
console.log(sweetestIcecream([ice8, ice3, ice4, ice5]), 34)
console.log(sweetestIcecream([ice10, ice8, ice6, ice7, ice9, ice4]), 81)
console.log(sweetestIcecream([ice5, ice4, ice6, ice6, ice1]), 33)
console.log(sweetestIcecream([ice6, ice8, ice2, ice10, ice7, ice10]), 34)
console.log(sweetestIcecream([ice1, ice9, ice7, ice3]), 81)
console.log(sweetestIcecream([ice7, ice1, ice9, ice6, ice7, ice10, ice2, ice3]), 81)
console.log(sweetestIcecream([ice5, ice1, ice7, ice6, ice8, ice1, ice8]), 34)
console.log(sweetestIcecream([ice10, ice9, ice2, ice4, ice10]), 81)
console.log(sweetestIcecream([ice3, ice7, ice10]), 17)
console.log(sweetestIcecream([ice10, ice5, ice4]), 18)
console.log(sweetestIcecream([ice9, ice2, ice4, ice8, ice3, ice3]), 81)
console.log(sweetestIcecream([ice6, ice3, ice9, ice8, ice2, ice6]), 81)
console.log(sweetestIcecream([ice10, ice3]), 17)
console.log(sweetestIcecream([ice10, ice7, ice5, ice2, ice9]), 81)
console.log(sweetestIcecream([ice10, ice10, ice4, ice1, ice9]), 81)
console.log(sweetestIcecream([ice9, ice2, ice6, ice4, ice10, ice3]), 81)
console.log(sweetestIcecream([ice8, ice10, ice1, ice7, ice8, ice9, ice1]), 81)
console.log(sweetestIcecream([ice7, ice5, ice3, ice8, ice1, ice9]), 81)
console.log(sweetestIcecream([ice2, ice6, ice3]), 33)
console.log(sweetestIcecream([ice6, ice6]), 33)
console.log(sweetestIcecream([ice9, ice6, ice8, ice3, ice2, ice2]), 81)
console.log(sweetestIcecream([ice1, ice3, ice3, ice6]), 33)
console.log(sweetestIcecream([ice8, ice6]), 34)
console.log(sweetestIcecream([ice1, ice1]), 23)
console.log(sweetestIcecream([ice4, ice2, ice3, ice9, ice5, ice10, ice6]), 81)
console.log(sweetestIcecream([ice10, ice8, ice4, ice3, ice9, ice8, ice1, ice10]), 81)
console.log(sweetestIcecream([ice5, ice8, ice5]), 34)

