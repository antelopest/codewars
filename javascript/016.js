/*
* Roman Numerals Decoder
* "MM"      -> 2000
* "MDCLXVI" -> 1666
* "M"       -> 1000
* "CD"      ->  400
* "XC"      ->   90
* "XL"      ->   40
* "I"       ->    1
*
* help:
*
* I = 1
* V = 5
* X = 10
* L = 50
* C = 100
* D = 500
* M = 1,000
* */

const solution = (roman) => {
    const dictRomanNumbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    roman = roman.toUpperCase().split('');
    let number = 0;

    for (let i = 0; i < roman.length; i++) {
        if (roman.length === i + 1) {
            number += dictRomanNumbers[roman[i]];
            continue;
        }

        if (dictRomanNumbers[roman[i]] < dictRomanNumbers[roman[i+1]]) {
            number -= dictRomanNumbers[roman[i]];
            continue;
        }

        number += dictRomanNumbers[roman[i]];
    }

    return number;
}

console.log(solution('MDCLXVI')); // 1666
console.log(solution('XXI')); // 21
console.log(solution('IV')); // 4