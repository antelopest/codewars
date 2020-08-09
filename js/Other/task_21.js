// Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine;
// there are no Other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles!
// The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.
//
// For example, Penny drinks the third can of cola and the queue will look like this:
//
// Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
// Write a program that will return the name of the person who will drink the n-th cola.
//
// Input
// The input data consist of an array which contains at least 1 name,
// and single integer n which may go as high as the biggest number your language of choice supports (if there's such limit, of course).
//
// Output / Examples
// Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.

const whoIsNext = (names, n) => {
  let arr = [];

  names.forEach(element => arr.push([element, 0]));
  console.log(arr);

  let i = 0;
  let name;

  while (i <= n) {
    console.log(i);
    if (i == 0) {
      arr.forEach(element => {
        element[1] += 1;
        ++i;
      });
      console.log(i);
      return;
    }
    if (i >= 5) {
      arr.forEach(element => {
        element[1] += 2;
        ++i;
      });
      console.log(i);
      return;
    }
  }
  console.log(arr);
  // names = names.concat([names[0], names[0]]);
  // names = names.slice(1);
  // console.log(names);
  // console.log(names.length);
  //
  // return (--n === 0) ? (names[names.length-1]) : (whoIsNext(names, n));
}

console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 2700));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1));


// ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"
//   ["Leonard", "Penny", "Rajesh", "Howard", Sheldon, Sheldon]
//
//
// ["Sheldon"] 1 7 17 27 29
//   ["Leonard"] 2 9 19 21
// ["Penny"] 3 11 21 23 25
// ["Rajesh"] 4 13 23 25 27
// ["Howard"] 5  15 25 27 29
//
//
