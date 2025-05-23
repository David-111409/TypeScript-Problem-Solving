/*Problem Description: 

Circle Constructor
Create a Circle() constructor that takes the radius as a single argument 
and has the following properties and methods:

.radius
.diameter
.getC() (get circumference)
.getA() (get area)
Instantiate this constructor with two circles:

c1 has radius 3
c2 has radius 5
For example, if I used the Circle constructor 
to instantiate a new instance called c0 with a radius of 1, 
I would have:

Examples

c0.radius ➞ 1

c0.diameter ➞ 2

c0.getC() ➞ 6.28

c0.getA() ➞ 3.14
Notes

Circumference: 2πr. Area: πr^2.
Use Math.PI for calculating circumference and area.
Round the perimeter and area results to the nearest hundredths place.
 */

class Circle{
  radius: number;
  
  constructor(radius:number){
    this.radius = radius;
  }
  
  get diameter(){
    return this.radius * 2;
  }

  getA() : number{
    let area : number = this.radius * this.radius * Math.PI;
    return Math.round(area * 100) / 100;
  }

  getC() : number {
    let cir : number = 2 * Math.PI * this.radius;
    return Math.round(cir * 100) / 100;
  }
}

let c0 = new Circle(1);
let c1 = new Circle(3);
let c2 = new Circle(5);

console.log(c0.radius, 1)
console.log(c0.diameter, 2)
console.log(c0.getC(), 6.28)
console.log(c0.getA(), 3.14)
console.log(c1.radius, 3)
console.log(c1.diameter, 6)
console.log(c1.getC(), 18.85)
console.log(c1.getA(), 28.27)
console.log(c2.radius, 5)
console.log(c2.diameter, 10)
console.log(c2.getC(), 31.42)
console.log(c2.getA(), 78.54)
