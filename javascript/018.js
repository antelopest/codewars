/*
* Arith
* var k = new Arith("three");
* k.add("seven"); //this should return "ten"
 */
'use strict';

const dictNumber = Object.entries({
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    "eleven": 11,
    "twelve": 12,
    "thirteen": 13,
    "fourteen": 14,
    "fifteen": 15,
    "sixteen": 16,
    "seventeen": 17,
    "eighteen": 18,
    "nineteen": 19,
    "twenty": 20,
});

class Arith {
    constructor(string) {
        this.number = this.findNumber(string);
    }

    add(string) {
        return this.findWord(this.number + this.findNumber(string));
    }

    findWord(number) {
        return dictNumber.find(([key, value]) => value === number)[0];
    }

    findNumber(string) {
        return dictNumber.find(([key, value]) => key === string)[1];
    }
}

const a = new Arith('six');
console.log(a.add('ten'));

const b = new Arith('three');
console.log(b.add('eight'));
console.log(b.add('ten'));

