/*
* Find the unique number
* Input: [ 1, 8, 4, 4, 6, 1, 8 ]
* Output: 6
* */

const findUnique = (numbers) => {
    return numbers.reduce((a, b) => a ^ b);
}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8]));
