// Consider the following equation of a surface S: z*z*z = x*x * y*y.
// Take a cross section of S by a plane P: z = k where k is a positive integer (k > 0).
// Call this cross section C(k).
//
// Task
// Find the number of points of C(k) whose coordinates are positive integers.
//
// Examples
// If we call c(k) the function which returns this number we have

// c(1) -> 1
// c(4) -> 4
// c(4096576) -> 160
// c(2019) -> 0 which means that no point of C(2019) has integer coordinates.

// Рассмотрим уравнение поверхности S : z + z + z = x * x * y * y
// Возьмем сечение S с плоскостью P: z = k, k - положительнное число k > 0
// Назовите это сечение С (k)
// z = k
// z + z + z = x^2  y^2
//
//

function c(k) {

  return Math.sqrt(3 * k);
}

console.log(c(1)); // (3*z) = x^2 * y^2
console.log(c(4));
console.log(c(4096576));
console.log(c(2019));
