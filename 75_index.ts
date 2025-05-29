/**
Coding Website Score Calculator

Imagine you run a website that presents users with different 
coding challenges in levels Easy, Medium, and Hard, where users get points for completing challenges. 
An Easy challenge is worth 5 points, a Medium challenge is worth 10 points, and a Hard challenge is worth 20 points.

Create a function that takes the amount of challenges a user has completed for each challenge level,
and calculates the user's total number of points. 
Keep in mind that a user cannot complete negative challenges, 
so the function should return the string "invalid" if any of the passed parameters are negative.

Examples
scoreCalculator(1, 2, 3) ➞ 85

scoreCalculator(1, 0, 10) ➞ 205

scoreCalculator(5, 2, -6) ➞ "invalid"
 */




export function scoreCalculator(easy: number, medium:number, hard:number): number | "invalid"{
    if ([easy, medium, hard].some(score => score < 0)) 
        return "invalid";

    return easy * 5 + medium * 10 + hard * 20;
}

console.log(scoreCalculator(4, 2, 7), 180, "Test 1")
console.log(scoreCalculator(3, 12, 0), 135, "Test 2")
console.log(scoreCalculator(5, -5, 2), "invalid", "Test 3")
console.log(scoreCalculator(20, 7, 3), 230)
console.log(scoreCalculator(0, 0, 0), 0)
console.log(scoreCalculator(1, 2, 3), 85)
