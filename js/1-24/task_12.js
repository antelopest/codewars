// This is a simple string decoding algorithm. The idea is to take a string of characters and decode it into an array. Each character is a single element in the result unless a backslash followed by a positive number is encountered.
//
//   When a backslash followed by a positive number is found, the number indicates how many of the next characters are grouped together as one element.
//
//   Example:
//
// "abc\5defghi\2jkl" => [ "a", "b", "c", "defgh", "i", "jk", "l" ]
// If the number is larger than the count of remaining characters, treat it as reading the remaining characters.
//
//   If you are reading characters, and you find an escape inside a string, they should be tallied into the string:
//
//   "\5ab\3cde" => [ "ab\3c", "d", "e" ]

// function decode(str) {
//
//
//
//
//
//
//
//   let result = [];
//   let pass = 0;
//   console.log(str);
//   str.split('').forEach((element, index, array) => {
//     if (pass > 0) {
//       --pass;
//       return;
//     }
//
//     if (element === "\\") {
//       pass = array.slice(index).join('').match(/\d+/)[0];
//       result.push(array.slice(++index + pass.length, index + +pass).join(''));
//       +pass++;
//       return;
//     }
//
//     result.push(element);
//   });
//
//   return result;
// }

console.log(decode('')); // []
console.log(decode('abc')); // ['a','b','c']
console.log(decode('\\1abc')); // ['a','b','c']
console.log(decode('\\5abc\\1bca')); // ['3ab', 'c', '1', 'b', 'c']


function decode (string) {


  // return string.split('').reduce((result, element, index, array) => {
  //   if (result[0][0] > 0) {
  //     --result[0][0];
  //     return result;
  //   }
  //   if (element == '\\') {
  //     console.log('INDEX', index);
  //     let n = array.slice(index).join('').match(/\d+/)[0];
  //     result[0].push(+n);
  //     result[1].push(array.slice(index + 1 + n.length, index + 1 + +n).join(''));
  //     return result;
  //   }
  //
  //   result[1].push(element);
  //
  //   return result;
  // }, [[], []]);
}