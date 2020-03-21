// Write the function squareArea ( or square_area ) that finds the area of the red square
// when you have the length of the circular arc A.
// Use π = Math.PI ( M_PI in PHP )
// Round to two decimals

const squareArea = (a) => {
  if (a === 0) return 0;
  let square = Math.pow((a * 4) / (2 * Math.PI), 2);
  return Number.isInteger(square) ? (square) : (+square.toFixed(2));
}
console.log(squareArea(2));