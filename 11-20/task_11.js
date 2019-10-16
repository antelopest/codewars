// In this kata you need to build a function to return either true/True or false/False if a string can be seen as the repetition of a simpler/shorter subpattern or not.
// For example:
// hasSubpattern("a") === false; //no repeated pattern
// hasSubpattern("aaaa") === true; //created repeating "a"
// hasSubpattern("abcd") === false; //no repeated pattern
// hasSubpattern("abababab") === true; //created repeating "ab"
// hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern

console.log(hasSubpattern("a"));
console.log(hasSubpattern("aaaa"));
// console.log(hasSubpattern("abcd"));
// console.log(hasSubpattern("abababab"));
// console.log(hasSubpattern("ababababa"));
// console.log(hasSubpattern("123a123a123a"));
// console.log(hasSubpattern("123A123a123a"));
// console.log(hasSubpattern("abbaabbaabba"));
// console.log(hasSubpattern("abbabbabba"));
// console.log(hasSubpattern("abcdabcabcd"));

function hasSubpattern (string) {
  // let arr = string.split('');
  // let subpattern = '';
  //
  // if (arr.length === 1) return false;
  //
  // for (let i = 0; i < arr.length; i++) {
  //
  //   subpattern += arr[i];
  //   if (string === string.match(new RegExp(subpattern, 'g')).join("")) return true;
  //
  // }
  //
  // return false;
  // return string
  //     .split("")
  //     .reduce((result, element) => {
  //       if (string == string.match(new RegExp(`${element}/g`))) return true;
  //       return false;
  //     });
}

// let a = '123412341234';
//
// console.log(a.match(/123/g).join(""));
//
// let a = '123';
// let sub = new RegExp(a, 'g');
// console.log('123123123'.match(sub));