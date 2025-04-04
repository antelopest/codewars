/*
* addBinary
*
* Examples:
* 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
* 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*
* */

const addBinary = (a, b) => {
    return (a + b).toString(2);
}

console.log(addBinary(1, 1));
console.log(addBinary(5, 9));