// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:
//
// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be composed using those digits, return -1:
//
// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

const nextBigger = n => {
  let arr = n.toString().split('');
  let res = [];

  const swap = (arr, i, j) => {
    let s = arr[i];
    arr[i] = arr[j];
    arr[j] = s;
  };

  return res;
};

console.log(nextBigger(12));
console.log(nextBigger(513));
// console.log(nextBigger(2017));
// console.log(nextBigger(414));
// console.log(nextBigger(144));

// Факториал числа n равен числу возможных перестановок
const factorial = (n, res = 1) => {
  while (n--) {
    res *= n + 1;
  }
  return res;
};

// console.log(factorial(5));
