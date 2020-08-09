/*
* In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo".
-- However, there is a space after the first three characters, hence "edo cruo"

solve("your code rocks") = "skco redo cruoy"
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.
* */

// const solve = str => {
//   return str.split(' ').reverse().map(s => s.split('').reverse().join('')).join(' ')
// }


const solve = s => {
  let spaces = s.split('').map((e, i) => e === ' ' ? i + 1: '').filter(e => e !== '');
  let rev = s.split(' ').reverse().map(s => s.split('').reverse().join('')).join('');
  console.log(s);
  console.log(spaces);
  console.log(rev);
  let addSpaces = rev.split('').map((e, i) => {
    if (spaces.indexOf(i) !== -1) {
      return e + ' ';
    }
    return e;
  });
  return addSpaces;
}

console.log(
    solve("i love codewars")
)

console.log(
    solve("codewars")
)

console.log(
    solve("code wars")
)
