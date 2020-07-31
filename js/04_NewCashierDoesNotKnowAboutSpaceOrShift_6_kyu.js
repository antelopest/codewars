/*
Some new cashiers started to work at your restaurant.

They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.

The menu items are fairly simple, there is no overlap in the names of the items:
*/

const products = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke'];

const order = [];

const pushProductInOrder = product => product[0].toUpperCase() + product.slice(1);
const deleteProductInInput = (input, substr) => input.replace(substr, '');

const getOrder = input => {
  const findProduct = product => {
    let match = input.match(product);
    if (match) {
      order.push(pushProductInOrder(match[0]));
      input = deleteProductInInput(input, match[0]);
      findProduct(product);
    }
    return;
  }

  for (let product of products) {
    findProduct(product);
  }

  return order.join(' ');
}

console.log(
  getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza')
)

