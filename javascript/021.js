/*
* Free pizza
*
* minOrders 5
* dollars 20
* */

const customers = {
    'John Doe': [22, 30, 11, 17, 15, 52, 27, 12],
    'Jane Doe': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
}

const pizzaRewards = (
    customers,
    minOrders = 5,
    minPrice = 20
) => {
    return Object.entries(customers).reduce(
        (
            names,
            [name, orders]
        ) => {
            if (orders.filter(order => order >= minPrice).length >= minOrders) {
                names.push(name);
            }

            return names;
        },
        []
    )
}

console.log(pizzaRewards(customers));