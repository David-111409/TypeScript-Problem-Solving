/*Problem Description: 
Extract City Facts

Create a function that takes an object as an argument and 
returns a string with facts about the city. 
The city facts will need to be extracted from the object's three properties:
name
population
continent

The string should have the following format: 
X has a population of Y and is situated in Z (where X is the city name, 
Y is the population and Z is the continent the city is situated in).

Examples

cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
}) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
}) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"

Notes
Don't add a period at the end.
 */

type City = {name: string, population: string, continent: string};

export function cityFacts(obj: City): string{

  const {name, population, continent} = obj;

  return `${name} has a population of ${population} and is situated in ${continent}`;
}



console.log(cityFacts({name: 'Manila', population: '1,780,148', continent: 'Asia'}), 'Manila has a population of 1,780,148 and is situated in Asia')
console.log(cityFacts({name: 'Melbourne', population: '4,936,349', continent: 'Australia'}), 'Melbourne has a population of 4,936,349 and is situated in Australia')
console.log(cityFacts({name: 'Kampala', population: '1,507,080', continent: 'Africa'}) === 'Kampala has a population of 1,507,080 and is situated in Africa')
console.log(cityFacts({name: 'Buenos Aires', population: '2,891,082', continent: 'South America'}) === 'Buenos Aires has a population of 2,891,082 and is situated in South America')
console.log(cityFacts({name: 'Vancouver', population: '631,486', continent: 'North America'}) === 'Vancouver has a population of 631,486 and is situated in North America')
console.log(cityFacts({name: 'Berlin', population: '3,748,148', continent: 'Europe'})  === 'Berlin has a population of 3,748,148 and is situated in Europe')
