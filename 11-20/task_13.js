// The Challenge
// Write a function that takes a number and returns the number of significant figures in the given number. You can read about significant figures below.
//
//   Helpful information
// the type of the given number will be string
// you must return the number of significant figures as type int
// no blank strings will be given
// Significant Figures
// What are they?
//   Significant Figures are the meaningful digits in a measured or computed value.
//
//   Counting significant figures
// All non-zero digits are significant
// 4.357 has 4 significant figures
// 152.63 has 5 significant figures
// Zeroes at the beginning of a number are not significant
// 0215 has 3 significant figures
// 0.6 has 1 significant figure
// Trailing zeroes in a number with a decimal point are significant
// 78.200 has 5 significant figures
// 20.0 has 3 significant figures
// Trailing zeroes in a number without a decimal point are not significant
// 1200 has 2 significant figures
// 345000 has 3 significant figures
// All zeroes between significant figures are significant
// 90.09 has 4 significant figures
// 5050 has 3 significant figures

// Поиск значимых чисел
//


// function numberOfSigfigs(n) {
  // console.log(n.split('').reverse().join('').toString());
  // return n
  //   .split('')
  //   .reduceRight((result, element, index, array) => {
  //     console.log(element, array.slice(index - 1, -result.length));
  //     console.log(array);
  //     if (+element === 0) {
  //       // if ()
  //       if (result !== []) {
  //         result.push(element);
  //         return result;
  //       }
  //       return result;
  //     }
  //     if (element === ',') {
  //       return result;
  //     }
  //
  //     result.push(element);
  //     return result;
  //   }, [])
  //   .join('')
  //   // .length
// }


function numberOfSigfigs(n) {
  if (+n === 0) return 0;

  let arr = n.split(new RegExp(/[,.]/, 'g'));

  if (arr.length === 1) {
    return (+(+arr[0].split('').join('')).toString().split('').reverse().join('')).toString().length;
  }

  if (+arr[0] === 0) return (arr[1]).toString().length;
  if (+arr[1] === 0) return (+arr[0] + arr[1]).length;

  return (+arr.join('')).toString().length;
}


console.log(numberOfSigfigs('404')); // 404 // 3
console.log(numberOfSigfigs('10')); // 10 // 1
console.log(numberOfSigfigs('37000')); // 37 // 2
console.log(numberOfSigfigs('370')); // 37 // 2
console.log(numberOfSigfigs('0.00700')); // 700 // 3
console.log(numberOfSigfigs('0.052')); // 52 // 2
console.log(numberOfSigfigs('10.0')); // 10,0 // 3
console.log(numberOfSigfigs('705.001')); // 705,001 // 6
console.log(numberOfSigfigs('002'));
console.log(numberOfSigfigs('0'));
console.log(numberOfSigfigs('012020.010'));
console.log(numberOfSigfigs('8843820.0000'));
console.log(numberOfSigfigs('00689554000.0'));
console.log(numberOfSigfigs('0.0150910'));
console.log(numberOfSigfigs('1.0'));
console.log(numberOfSigfigs('00689554000.0'));
console.log(numberOfSigfigs('000.3146670000'));
console.log(numberOfSigfigs('0041.49050000'));
console.log(numberOfSigfigs('0000.06453900'));
console.log(numberOfSigfigs('000029034.500'));
console.log(numberOfSigfigs('000568.100000'));
console.log(numberOfSigfigs('000.006801650'));



