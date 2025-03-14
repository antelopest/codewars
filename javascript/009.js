/*
* sumStr
*
* "4",  "5" --> "9"
* "34", "5" --> "39"
* "", "" --> "0"
* "2", "" --> "2"
* "-5", "3" --> "-2"
* */

const sumStr = (a, b) => {
    return Number(a) + Number(b);
}

console.log(sumStr("5", " "));