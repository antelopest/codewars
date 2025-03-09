/*
* findOutlier
*
* [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
* [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
* */

const findOutlier = (integers) => {
    let evenNumbers = [];
    let oddNumbers = [];

    const evenNumber = integer => integer % 2 === 0;

    integers.forEach(integer => {
        if (evenNumber(integer)) {
            evenNumbers.push(integer);
        } else {
            oddNumbers.push(integer);
        }
    });

    const outlier = evenNumbers.length === 1 ? evenNumbers[0] : oddNumbers[0];

    return outlier;
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));