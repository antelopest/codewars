// Given: an array containing hashes of names
//
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
//
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
//
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
//
// list([ {name: 'Bart'} ])
// // returns 'Bart'
//
// list([])
// // returns ''

let list1 = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ];
let list2 = [ {name: 'Bart'}, {name: 'Lisa'} ];
let list3 = [ {name: 'Bart'} ];
let list4 = [];

console.log(list(list1));
console.log(list(list2));
console.log(list(list3));
console.log(list(list4));

function list (names) {
  // let str = '';
  // names.forEach((element, index) => {
  //   if (index === 0) {
  //     str += element.name;
  //   } else if (index + 1 !== names.length) {
  //     str = str + ', ' + element.name;
  //   } else {
  //     str = str + ' & ' + element.name;
  //   }
  // });
  // return str;

  return names.reduce((str, element, index) => {
    return (index === 0) ? (element.name) :
      (++index !== names.length) ? (str + ', ' + element.name) :
        (str + ' & ' + element.name);
  }, '');
}