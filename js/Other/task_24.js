// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
//
// array = [[1,2,3],
// [4,5,6],
// [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:
//
// array = [[1,2,3],
//   [8,9,4],
//   [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:
//
//
// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
//
// NOTE 2: The 0x0 (empty matrix) is represented as [[]]



const snail = (array) => {
  if (array[0].length == 0) return [];

  let n = array.length;
  let count = Math.pow(n, 2);
  let arr = [];

  console.dir(array);
  for (let y = 0; y < n; y++) {
    arr.push(array[0][y]);
    count--;
  }
  for (let x = 1; x < n; x++) {
    arr.push(array[x][n - 1]);
    count--;
  }
  for (let y = n  - 2; y >= 0; y--) {
   arr.push(array[n - 1][y]);
   count--;
  }
  for (let x = n - 2; x > 0; x--) {
    arr.push(array[x][0]);
    count--;
  }

  let x = 1, y = 1;
  while(count !== 0) {
    while (array[x][y + 1] ) {
      arr.push(array[x][y]);
      y++;
    }

    count--;
  }



  if (n % 2 == 0) arr.push(array[Math.floor(n / 2)][Math.floor(n / 2)]);
  console.dir(arr);
  return arr;
}

const assertEquals = (got, expected) => {
  return (got == expected) ? (`TRUE got: ${got} expected: ${expected}`) :
    (`FALSE got: ${got} expected: ${expected}`);
}

console.log(snail([[]]));
console.log(snail([[1]]));
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]);

