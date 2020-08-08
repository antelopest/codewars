/*

In this Kata, you will be given a multi-dimensional array containing 2 or more sub-arrays of integers. Your task is to find the maximum product that can be formed by taking any one element from each sub-array.

*/

const solve = arr => {
  const findMaxElement = arr => Math.max(...arr);
  const returnArrayWithMaxElement = arr => arr.map(arr => findMaxElement(arr));
  const multiplyElements = (arr, multiply = 1) => {
    arr.forEach(e => multiply *= e)
    return multiply;
  }

  const newArr = returnArrayWithMaxElement(arr);
  return multiplyElements(newArr);
}

console.log(
  solve([[1, 2], [1, 5], [4, 10]])
);
