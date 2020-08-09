// Write a function that returns the total surface area and volume of a box as an array:
// [area, volume]

const getSize = (a, b, c, arr = []) => {
  arr.push(2 * (a * b + b * c + a * c));
  arr.push(a * b * c);
  return arr;
};

const assertEquals = (got, expected) => {
  (got == expected) ? (console.log(`TRUE got: ${got} expected: ${expected}`)) :
    (console.log(`FALSE got: ${got} expected: ${expected}`));
}

console.log(assertEquals(getSize(4, 2, 6)[1], 48));
console.log(assertEquals(getSize(10, 10, 10), [600, 1000]));
console.log(assertEquals(getSize(4, 2, 6)[0], 88));
console.log(assertEquals(getSize(4, 2, 6)[1], 48));