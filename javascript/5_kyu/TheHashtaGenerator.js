// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
//
// Here's the deal:
//
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
//
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

const generateHashtag = str => {
  let s = str.split(/\s+/g).filter(x => x !== '').map(x => x[0].toUpperCase() + x.slice(1)).join('');
  return (s.length < 140 && s !== '') ? ('#' + s) : false;
};

console.log(generateHashtag(''));
console.log(generateHashtag('Hello there thanks for trying my Kata'));
console.log(generateHashtag('                               '));
