// A binary gap within a positive number num is any sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of num.
// For example:
// 9 has binary representation 1001 and contains a binary gap of length 2.
// 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
// 20 has binary representation 10100 and contains one binary gap of length 1.
// 15 has binary representation 1111 and has 0 binary gaps.
// Write function gap(num) that, given a positive num, returns the length of its longest binary gap.
// The function should return 0 if num doesn't contain a binary gap.

// const gap = num => {
//   let parsed = Number(num).toString(2).split(1);

//   parsed.pop();

//   let length = parsed.map(element => element.length);
//   let counter = Math.max.apply(null, length);

//   return counter;
// }

// or 
// Shit code 
const gap = num => Math.max.apply(null, Number(num).toString(2).split(1).map(x => x.length).slice(0, -1));

console.log(gap('20'), (20).toString(2));
