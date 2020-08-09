// Given a positive integer N, return the largest integer k such that 3^k < N.

const largestPower = (n, k = 1) => {
  return (n === 1) ? (-1) : (n < Math.pow(3, k) || n === Math.pow(3, k)) ? (--k) : (largestPower(n, ++k));
}

const assertEquals = (got, expected) => {
  (got === expected) ? (console.log(`TRUE got: ${got} expected: ${expected}`)) :
    (console.log(`FALSE got: ${got} expected: ${expected}`));
}

assertEquals(largestPower(3), 1);
assertEquals(largestPower(5), 1);
assertEquals(largestPower(7), 1);
assertEquals(largestPower(81), 3);
assertEquals(largestPower(82), 4);

