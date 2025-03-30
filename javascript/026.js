/*
* cakes
* // must return 2
* cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
* // must return 0
* cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
* */

const cakes = (recipe, available) => {
    recipe = Object.entries(recipe);

    let count = null;

    for (let i = 0; i < recipe.length; i++) {
        let [key, value] = recipe[i];

        let number = available[key];

        if (number === undefined) {
            count = 0;
            break;
        }

        let currentCount = Math.floor(number / value);

        if (count === null) {
            count = currentCount;
            continue;
        }

        if (count >= currentCount) {
            count = currentCount;
        }
    }

    return count;
}

console.log(cakes(
    {flour: 500, sugar: 200, eggs: 1},
    {flour: 1200, sugar: 1200, eggs: 5, milk: 200}
));