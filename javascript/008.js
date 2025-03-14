/*
* drawStairs
*
* input 1
* output: I
* */

const drawStairs = n => new Array(n)
    .fill("")
    .map((e, i) => ' '.repeat(i) + 'I')
    .join('\n');

console.log(drawStairs(3));
