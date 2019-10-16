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
//
// function hasSubpattern (string) {
//   return string.split('').reduce((result, element, index, array) => {
//     // Ecли длина массива 1
//     if (array.length === 1) return false;
//     // console.log('Длина массива больше 1, RESULT:', result);
//     // Если result boolean
//     if ('boolean' === typeof(result)) return result;
//
//     // Если длина массива = ++индексу
//     if (array.length === ++index) return false;
//
//
//     if (SubPattern(result + element)) return true;
//
//     return result += element;
//   }, '');
//
//   function SubPattern(str) {
//     let lastStr = string.lastIndexOf(srt);
//     console.log()
//     //
//     // console.log(str);
//     // if (string.lastIndexOf(str)) {
//     //   let Sub = string.match(new RegExp(str, 'g'));
//     //   if (Sub === null) return false;
//     //   if (string === Sub.join('')) return true;
//     //
//     //   return false;
//     // }
//
//   }
// }
//
// // let a = '123412341234';
// //
// // console.log(a.match(/123/g).join(""));
// //
// // let a = '123';
// // let sub = new RegExp(a, 'g');
// // console.log('123123123'.match(sub));
//
// // console.log('123123123'.match(new RegExp('2', 'g')).join(''));
//

function hasSubpattern (string) {
  let count = string.match(new RegExp(string[0],'g'));
  if (count !== null) {
    let pattern = string.slice(0, ++count.length);
    console.log(pattern);
    let arr = string.match(new RegExp(pattern, 'g'));
    if (arr !== null) {
      console.log(arr.join(''), ' ', string);
      if (arr.join("") == string) {
        return true;
      } else return false;
    }
  }

}

