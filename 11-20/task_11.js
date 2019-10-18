// // In this kata you need to build a function to return either true/True or false/False if a string can be seen as the repetition of a simpler/shorter subpattern or not.
// // For example:
// // hasSubpattern("a") === false; //no repeated pattern
// // hasSubpattern("aaaa") === true; //created repeating "a"
// // hasSubpattern("abcd") === false; //no repeated pattern
// // hasSubpattern("abababab") === true; //created repeating "ab"
// // hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern
// //
console.log(hasSubpattern("a"));
console.log(hasSubpattern("aaaa"));
console.log(hasSubpattern("abcd"));
console.log(hasSubpattern("abababab"));
console.log(hasSubpattern("ababababa"));
console.log(hasSubpattern("123a123a123a"));
console.log(hasSubpattern("123A123a123a"));
console.log(hasSubpattern("abbaabbaabba"));
console.log(hasSubpattern("abbabbabba"));
console.log(hasSubpattern("abcdabcabcd"));
console.log(hasSubpattern("Lnir2X6oESWaprEZtUsZbAV4G48tY7Y6nS1XIILU0InrDeNvxljkYpbiB"));

//

// function hasSubpattern (string) {
//   let count = string.match(new RegExp(string[0],'g'));
//   if (count !== null) {
//     let pattern = string.slice(0, ++count.length);
//     console.log(pattern);
//     let arr = string.match(new RegExp(pattern, 'g'));
//     if (arr !== null) {
//       console.log(arr.join(''), ' ', string);
//       if (arr.join("") == string) {
//         return true;
//       } else return false;
//     }
//   }
// }

function hasSubpattern(string) {
  if (string.length === 1) return false;

  let result;

  function returnArr (string) {
    if (result !== undefined) return;
    console.log(string);
    let arr = string.split(string[0]).join('').slice(0).split('');

    if (arr.length === 0) result = true;
    if (arr[0] !== arr[1] && arr.length > 2) result = true;
    if (arr[0] !== arr[1] && arr.length === 2) result = false;

    console.log(arr.join());
    returnArr(arr.join(''));
  }

  returnArr(string);
  return result;
}


function hasSubpattern (string) {
  if (string.length === 1) return false;

  let result;
  let arr = [];
  console.log(string);
  function returnArr (string) {
    if (result !== undefined) return;

    let arr = [];

    if (string.lenght % 2 === 0) {
      arr = string.split(string.slice(0, 2)).join('').slice(1).split('');
    }
    if (string.lenght % 3 === 0) {
      arr = string.split(string.slice(0, 3)).join('').slice(2).split('');
    }
    console.log(arr.join(''))

    if (arr.length === 0) result = true;

    if (arr[0] !== arr[1] || arr.length >= 2) result = false;
    if (arr[0] == arr[1] || arr.length === 2) result = true;

    returnArr(arr.join(''));
  }

  returnArr(string);
  return result;
}