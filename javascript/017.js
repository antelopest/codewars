/*
* Calculating with Functions

* seven(times(five())); // must return 35
* four(plus(nine())); // must return 13
* eight(minus(three())); // must return 5
* six(dividedBy(two())); // must return 3
* */

const check = (prevOperations, number) => typeof prevOperations === 'string' ?
    Math.floor(eval(`${number}${prevOperations}`)) :
    number;

const zero = (prevOperations, number = 0) => check(prevOperations, number);
const one = (prevOperations, number = 1) => check(prevOperations, number);
const two = (prevOperations, number = 2) => check(prevOperations, number);
const three = (prevOperations, number = 3) => check(prevOperations, number);
const four = (prevOperations, number = 4) => check(prevOperations, number);
const five = (prevOperations, number = 5) => check(prevOperations, number);
const six = (prevOperations, number = 6) => check(prevOperations, number);
const seven = (prevOperations, number = 7) => check(prevOperations, number);
const eight = (prevOperations, number = 8) => check(prevOperations, number);
const nine = (prevOperations, number = 9) => check(prevOperations, number);

const plus = (number, operator = '+') => `${operator}${number}`;
const minus = (number, operator = '-') => `${operator}${number}`;
const times = (number, operator = '*') => `${operator}${number}`;
const dividedBy = (number, operator = '/') => `${operator}${number}`;

console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3
console.log(one(dividedBy(six()))); // 0


