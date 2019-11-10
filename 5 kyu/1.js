// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
//
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
//
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

const maxSequence = (arr) => {
  if (Math.max.apply(Math, arr) < 0) {
    return 0;
  }

  if (Math.min.apply(Math, arr) > 0)
    return arr.reduce((sum, element) => {
      return sum += element;
    }, 0);

  let maxSum = 0;
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = i; j < arr.length; j++) {
      console.log(arr.slice(i, j));
      let sum = arr.slice(i, j).reduce((sum, element) => {
        return sum += element;
      }, 0);

      if (maxSum < sum) {
        maxSum = sum;
        console.log(arr.slice(i, j), sum);
      }

    }
  }
  console.log(maxSum);
  return maxSum;
  // let max = Math.max.apply(Math, arr);
  // let min = Math.min.apply(Math, arr);
  //
  // console.log(max, min);
  //
  // let interval = [arr.indexOf(max), arr.indexOf(min)];
  //
  // let result = arr.slice(interval[0], interval[1]);
  //
  // return result.reduce((sum, element) => {
  //   return sum += element;
  // }, 0);
}
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
maxSequence([-11, 11, 12]);