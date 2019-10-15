// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths.
// Can you help him to find out, how many cakes he could bake considering his recipes?
//
// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer).
// For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
//
// Examples:

// must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

let recipe1 = {flour: 500, sugar: 200, eggs: 1};
let available1 = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

let recipe2 = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
let available2 = { sugar: 500, flour: 2000, milk: 2000};

let recipe3 = {"apples":37,"oil":10,"flour":79};
let available3 = {"oil":2100,"flour":4200,"crumbles":2200,"cream":1500,"eggs":4200,"apples":6900,"chocolate":1100,"butter":9700,"pears":800,"milk":6500,"cocoa":8900,"nuts":7600,"sugar":9000};

let recipe4 = {"oil":85,"apples":84,"butter":97};
let available4 = {"pears":9000,"milk":5500,"eggs":600,"crumbles":8300,"butter":6500,"flour":4200,"cream":4100,"sugar":6500,"cocoa":9100,"nuts":600,"apples":6500,"chocolate":7700,"oil":9800};

console.log(cakes(recipe1, available1));
console.log(cakes(recipe2, available2));
console.log(cakes(recipe3, available3));
console.log(cakes(recipe4, available4));

function cakes(recipe, available) {
  let arr = [];

  for (let item in recipe) {
    if (available[item] === undefined || available[item] == 0) return 0;

    if (recipe[item] !== 0)
      arr.push(Math.floor(available[item] / recipe[item]));
  }

  arr.sort((a, b) => a - b);
  return arr[0];
}