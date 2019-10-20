// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. ' +
// 'You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

const removeChar = (str) => str.slice(1, -1);

const assertEquals = (got, expected) => {
  (got === expected) ? (console.log(`TRUE got: ${got} expected: ${expected}`)) :
    (console.log(`FALSE got: ${got} expected: ${expected}`));
}

console.log(assertEquals(removeChar('eloquent'), 'loquen'));
console.log(assertEquals(removeChar('country'), 'ountr'));
console.log(assertEquals(removeChar('person'), 'erso'));
console.log(assertEquals(removeChar('place'), 'lac'));
