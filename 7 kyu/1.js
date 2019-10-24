// Your task is to add up letters to one letter.
//
// The function will be given a variable amount of arguments, each one being a letter to add.
//
// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

const addLetters = (...letters) => {
  if (letters.length == 0) return 'z';
  let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let count = 0;
  letters.forEach(element => count += arr_en.indexOf(element) + 1);
  return (count-- > 26) ? (arr_en[count % 26]) : (arr_en[count]);
}



console.log(addLetters([]));
console.log(addLetters('a', 'b', 'c'));


