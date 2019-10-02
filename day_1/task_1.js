// Code Wars day 1
// Fundamentals, Mathematics, Algorithms
//
// Некоторые числа имеют забавные свойства. Например:

// 89 -> 8¹ + 9² = 89 * 1

// 695 -> 6² + 9³ + 5⁴ = 1390 = 695 * 2

// 46288 -> 4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Дано положительное целое число n, записанное как abcd ... (a, b, c, d ... цифры) и положительное целое число p

// мы хотим найти положительное целое число k, если оно существует, такое как сумма цифр n, взятых для последовательных степеней p, равна k * n.
// Другими словами:

// Существует ли целое число k, например: (a ^ p + b ^ (p + 1) + c ^ (p + 2) + d ^ (p + 3) + ...) = n * k

// Если это так, мы вернем k, если не вернем -1.

// Примечание : n и p всегда будут заданы как строго положительные целые числа.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

function digPow(n, p) {
  let prod = 0;

  n
    .toString()
    .split("")
    .forEach((element) => {
      prod += Math.pow(element, p);
      p++;
    });

  if ((prod % n) === 0) return prod / n;
  else return -1;
}

console.log(digPow(89, 1));
console.log(digPow(695, 2));
console.log(digPow(46288, 3));

console.log(digPow(92, 1));
console.log(digPow(695, 3));

