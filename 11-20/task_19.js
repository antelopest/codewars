// Task
// You are given two numbers a and b where 0 ≤ a ≤ b.
// Imagine you construct an array of all the integers from a to b inclusive.
// You need to count the number of 1s in the binary representations of all the numbers in the array.
//
// Example
// For a = 2 and b = 7, the output should be 11
//
// Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7].
// Converting the numbers to binary, we get [10, 11, 100, 101, 110, 111], which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.

// const rangeBitCount = (a, b) => {
//   let arr = [];
//   const pushArr = (a) => {
//     arr.push(a.toString(2));
//     return (a == b) ? (arr) : (pushArr(++a));
//   }
//
//   pushArr(a);
//   console.log(arr);
//   return arr.reduce((result, element) => {
//     return result += element.toString().split('').reduce((result, element) => {
//       console.log(result);
//       return result += +element;
//     }, 0);
//
//   }, 0)
// };

const rangeBitCount = (a, b, arr = []) => {
  arr.push(a.toString(2));

  return (a !== b) ? (rangeBitCount(++a, b, arr)) :
    (arr.reduce((result, element) => {
      console.log(arr);
      return result += element.toString().split('').reduce((result, element) => {
        return result += +element;
      }, 0);
    }, 0))
};


const assertEquals = (got, expected) => {
  (got == expected) ? (console.log(`TRUE got: ${got} expected: ${expected}`)) :
    (console.log(`FALSE got: ${got} expected: ${expected}`));
}

console.log(assertEquals(rangeBitCount(2, 7), '11'));
console.log(assertEquals(rangeBitCount(0, 1), '1'));
console.log(assertEquals(rangeBitCount(4, 4), '1'));
