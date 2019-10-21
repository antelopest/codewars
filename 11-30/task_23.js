// Do you know how to make a spiral? Let's test it!
// Classic definition: A spiral is a curve which emanates from a central point, getting progressively farther away as it revolves around the point.
// Your objective is to complete a function createSpiral(N) that receives an integer N and returns an NxN two-dimensional array with numbers 1 through NxN represented as a clockwise spiral.
// Return an empty array if N < 1 or N is not int / number
// Examples:
// N = 2
// 1 2
// 4 3
// N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]
// 1    2    3
// 8    9    4
// 7    6    5
// N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
// 1   2   3   4
// 12  13  14  5
// 11  16  15  6
// 10  9   8   7
// N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]
// 1   2   3   4   5
// 16  17  18  19  6
// 15  24  25  20  7
// 14  23  22  21  8
// 13  12  11  10  9

const createSpiral = (n) => {
  if (typeof(n) !== 'number') return [];
  if (n < 1) return [];

  // Создать массив
  let arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(n);
  }

  // Задать значения элементам массива по периметру
  let count = 1;
  for (let y = 0; y < n; y++) {
    arr[0][y] = count++;
  }
  for (let x = 1; x < n; x++) {
    arr[x][n - 1] = count++;
  }
  for (let y = n  - 2; y >= 0; y--) {
    arr[n - 1][y] = count++;
  }
  for (let x = n - 2; x > 0; x--) {
    arr[x][0] = count++;
  }

  // Задаем координаты
  let x = 1, y = 1;
  while (count < n * n) {
    // Движение вправо
    while (arr[x][y + 1] == undefined) {
      arr[x][y] = count++;
      y++;
    }
    // Движение вниз
    while (arr[x + 1][y] == undefined) {
      arr[x][y] = count++;
      x++;
    }
    // Движение влево
    while (arr[x][y - 1] == undefined) {
      arr[x][y] = count++;
      y--;
    }
    // Движение вверх
    while (arr[x - 1][y] == undefined) {
      arr[x][y] = count++;
      x--;
    }
  }

  // Заполняем центр массива
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (arr[x][y] == undefined) arr[x][y] = count;
    }
  }

  return arr;
}

console.log(createSpiral(1));